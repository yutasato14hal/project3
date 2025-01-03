"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BriefcaseIcon, Users, Clock, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import businessManImage from "@/public/images/FV.png";
import badgeImage from "@/public/images/badge.png";
export default function CareerLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: string;
    message: string;
  } | null>(null);

  // 正規表現パターン
  const namePattern = /^[ぁ-んァ-ヶ一-龥a-zA-Z\s]{2,30}$/;
  const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  // 電話番号に国際形式（+81など）を追加
  const telPattern =
    /^(?:\+?\d{1,4}[-\s]?)?(?:\(?\d{1,4}\)?[-\s]?)?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4}$/;

  // フォームデータの変更処理
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // 入力検証
    if (!namePattern.test(formData.name)) {
      setFormStatus({
        type: "error",
        message:
          "名前は2〜30文字以内で、日本語、英字、スペースのみ使用可能です。",
      });
      setIsSubmitting(false);
      return; // 名前が無効な場合、ここで早期リターン
    }

    if (!emailPattern.test(formData.email)) {
      setFormStatus({
        type: "error",
        message: "無効なメールアドレスです。",
      });
      setIsSubmitting(false);
      return; // メールアドレスが無効な場合、ここで早期リターン
    }

    if (!telPattern.test(formData.tel)) {
      setFormStatus({
        type: "error",
        message:
          "電話番号は日本の形式、または国際形式（+81 90 1234 5678など）で入力してください。",
      });
      setIsSubmitting(false);
      return; // 電話番号が無効な場合、ここで早期リターン
    }

    // API送信処理
    try {
      const response = await fetch(
        "https://carrer-api.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "お問い合わせありがとうございました。",
        });
        setFormData({ name: "", email: "", tel: "" }); // 送信後にフォームリセット
      } else {
        const data = await response.json();
        setFormStatus({
          type: "error",
          message: data.message || "送信に失敗しました。",
        });
      }
    } catch (e) {
      setFormStatus({
        type: "error",
        message: "予期しないエラーが発生しました。",
      });
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-100/80 via-teal-100/80 to-cyan-100/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-blue-900">
                転職前に知っておくべき
                <span className="text-teal-600">&quot;3つの準備&quot;</span>
                とは？
              </h1>
              <p className="text-xl text-blue-700 mb-8">
                プロのキャリアアドバイザーが無料でアドバイス
              </p>
              <p className="text-lg text-blue-600">
                オンライン・オフライン両対応 あなたの都合に合わせて徹底サポート
              </p>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={businessManImage}
                  alt="転職から天職へ向かうビジネスマン"
                  width={600}
                  height={400}
                  priority
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-100/80 via-blue-100/80 to-teal-100/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            転職の失敗例
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    "準備不足で希望の条件が引き出せない",
    "面接で自己PRができない",
    "市場価値がわからず年収ダウン",
    "入社後のギャップで早期退職",
  ].map((problem, index) => (
    <Card
      key={index}
      className="flex items-center justify-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm border-blue-200"
    >
      <p className="font-semibold text-blue-800 text-center">{problem}</p>
    </Card>
  ))}
</div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-teal-100/80 via-blue-100/80 to-cyan-100/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            サービスの特徴
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm border-blue-200">
              <BriefcaseIcon className="w-12 h-12 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                マンツーマンサポート
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li>専任アドバイザーによる個別カウンセリング</li>
                <li>履歴書・職務経歴書の添削</li>
                <li>面接対策</li>
              </ul>
              <p className="mt-4 text-teal-600 font-bold">
                ＜これが全部無料！！＞
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm border-blue-200">
              <Users className="w-12 h-12 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                充実のサポート内容
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li>市場価値診断</li>
                <li>スキル棚卸し</li>
                <li>転職市場動向の共有</li>
                <li>企業研究サポート</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm border-blue-200">
              <Clock className="w-12 h-12 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                フレキシブルな対応
              </h3>
              <ul className="space-y-3 text-blue-700">
                <li>オンライン・オフライン選択可</li>
                <li>休日・夜間相談可能</li>
                <li>地方在住者も対応可</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100/80 via-teal-100/80 to-cyan-100/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            実績紹介
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-6 bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm border-blue-200">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={badgeImage}
                  alt="Gold Badge"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-4xl font-bold mb-2 text-blue-800">
                1000名以上
              </p>
              <p className="text-lg text-blue-700">年間サポート実績</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm border-blue-200">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={badgeImage}
                  alt="Gold Badge"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-4xl font-bold mb-2 text-blue-800">90%以上</p>
              <p className="text-lg text-blue-700">転職成功率</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm border-blue-200">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={badgeImage}
                  alt="Gold Badge"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-4xl font-bold mb-2 text-blue-800">平均20%増</p>
              <p className="text-lg text-blue-700">年収アップ率</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-teal-100/80 via-blue-100/80 to-cyan-100/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            利用者の声
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "30代 男性", role: "IT業界からWeb業界へ転職" },
              { label: "40代 女性", role: "営業職から人事へキャリアチェンジ" },
              { label: "20代 男性", role: "未経験からエンジニアへ転身" },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm border-blue-200"
              >
                <div className="flex items-center mb-4">
                  <User
                    className="w-12 h-12 text-teal-600"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-blue-800">
                      {testimonial.label}
                    </p>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-blue-700">
                  専任のアドバイザーさんが親身になって相談に乗ってくださり、
                  希望通りの条件で転職することができました。
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="py-20 bg-gradient-to-br from-cyan-100/80 via-blue-100/80 to-teal-100/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            お問い合わせ
          </h2>
          <form
            className="space-y-6 bg-gradient-to-br from-blue-50/90 to-teal-50/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-blue-200"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-blue-800">
                氏名
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-blue-300 focus:border-teal-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-800">
                メールアドレス
              </Label>
              <Input
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-blue-300 focus:border-teal-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tel" className="text-blue-800">
                電話番号
              </Label>
              <Input
                name="tel"
                id="tel"
                value={formData.tel}
                onChange={handleChange}
                required
                className="border-blue-300 focus:border-teal-500"
              />
            </div>
            {formStatus && (
              <div
                className={`text-center ${
                  formStatus.type === "error"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {formStatus.message}
              </div>
            )}
            <Button
              size="lg"
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-2 px-4 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
