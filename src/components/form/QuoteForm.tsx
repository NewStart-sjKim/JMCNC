"use client";

import { useRef, useState, type FormEvent, type RefObject } from "react";
import { FileDropzone } from "./FileDropzone";
import { PRODUCTS } from "@/lib/products";

// TODO: React Hook Form + Zod 검증, 제출 시 /api/inquiries로 multipart/form-data 전송
// (클라이언트가 Firestore/Storage에 직접 쓰지 않는 이유는 PROJECT.md 아키텍처 원칙 3, 5 참고)
export function QuoteForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const phoneDigits = phone.replace(/[^0-9]/g, "");
  const isPhoneValid = phoneDigits.length >= 10 && phoneDigits.length <= 11;

  const nameError =
    showErrors && name.trim() === "" ? "필수 입력 항목입니다." : undefined;
  const companyError =
    showErrors && company.trim() === "" ? "필수 입력 항목입니다." : undefined;
  const phoneError =
    showErrors && phone.trim() === ""
      ? "필수 입력 항목입니다."
      : phone.trim() !== "" && !isPhoneValid
        ? "숫자만 10~11자리로 입력해주세요."
        : undefined;

  const isValid =
    name.trim() !== "" &&
    company.trim() !== "" &&
    phone.trim() !== "" &&
    isPhoneValid;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isValid) {
      setShowErrors(true);
      // 버튼을 완전히 disabled 시키면 클릭/제출 이벤트 자체가 안 일어나서
      // 아래 스크롤·포커스 이동이 실행될 기회가 없음 — 그래서 버튼은 항상
      // 클릭 가능하게 두고(시각적으로만 흐리게), 여기서 첫 번째로 비어있거나
      // 잘못된 필드로 이동시킴
      const firstInvalidRef: RefObject<HTMLInputElement | null> = !name.trim()
        ? nameRef
        : !company.trim()
          ? companyRef
          : phoneRef;
      firstInvalidRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      firstInvalidRef.current?.focus();
      return;
    }

    // TODO: /api/inquiries 연동
  }

  return (
    <form
      className="border border-outline-variant p-8 md:p-12 shadow-sm bg-surface"
      onSubmit={handleSubmit}
    >
      <section>
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary">
            corporate_fare
          </span>
          <h3 className="font-headline-lg text-headline-lg">회사 정보</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field
            label="담당자"
            name="name"
            placeholder="담당자 성함"
            value={name}
            onChange={setName}
            required
            error={nameError}
            inputRef={nameRef}
          />
          <Field
            label="회사명"
            name="company"
            placeholder="JM정공"
            value={company}
            onChange={setCompany}
            required
            error={companyError}
            inputRef={companyRef}
          />
          <Field
            label="이메일"
            name="email"
            type="email"
            placeholder="john@company.com"
          />
          <Field
            label="연락처"
            name="phone"
            type="tel"
            placeholder="'-' 없이 작성해주세요."
            value={phone}
            onChange={setPhone}
            required
            error={phoneError}
            inputRef={phoneRef}
          />
        </div>

        <div className="mt-12 pt-12 border-t border-outline-variant/30">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary">
              precision_manufacturing
            </span>
            <h3 className="font-headline-lg text-headline-lg">제품 상세</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                희망 가공 종류
              </label>
              <select
                name="material"
                defaultValue=""
                className="border border-outline-variant px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none appearance-none cursor-pointer bg-surface-container-highest"
              >
                <option value="" disabled>
                  가공 종류 선택
                </option>
                {PRODUCTS.map((p) => (
                  <option key={p.title}>{p.title}</option>
                ))}
              </select>
            </div>
            <Field label="Quantity" name="quantity" type="number" placeholder="100" />
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                희망 납기일
              </label>
              <input
                type="date"
                name="deadline"
                className="border border-outline-variant px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none bg-surface-container-highest"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                요청 사항
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="공차, 표면 마감 또는 기타 특별 요구 사항을 간략히 작성해주세요..."
                className="border border-outline-variant px-4 py-3 focus:border-primary focus:ring-0 transition-all outline-none resize-none bg-surface-container-highest"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-outline-variant/30">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary">
              upload_file
            </span>
            <h3 className="font-headline-lg text-headline-lg">
              첨부파일
            </h3>
          </div>
          <FileDropzone />
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="submit"
            className={`w-full md:w-auto text-white font-headline-md text-[18px] px-10 py-4 rounded-sm transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)] active:scale-95 ${
              isValid
                ? "bg-safety-orange hover:brightness-110"
                : "bg-safety-orange/40 hover:brightness-100"
            }`}
          >
            제출
          </button>
        </div>
      </section>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  error,
  inputRef,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string;
  inputRef?: RefObject<HTMLInputElement | null>;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
        {label}
        {required && <span className="text-error"> *</span>}
      </label>
      <input
        ref={inputRef}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={`scroll-mt-24 border px-4 py-3 focus:ring-0 transition-all outline-none bg-surface-container-highest ${
          error
            ? "border-error focus:border-error"
            : "border-outline-variant focus:border-primary"
        }`}
      />
      {error && (
        <span className="font-technical-data text-technical-data text-error">
          {error}
        </span>
      )}
    </div>
  );
}