import type { Metadata } from "next";
import { QuoteForm } from "@/components/form/QuoteForm";

export const metadata: Metadata = {
  title: "Quotation Inquiry | JM정공",
};

export default function QuotePage() {
  return (
    <div className="industrial-grid">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Sidebar: Progress & Instructions */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
                견적 문의
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mb-12">
                CAD 도면과 프로젝트 상세 내용을 보내주시면, 확인 후 담당자가
                연락드립니다.
                <br/>
                도면이 없으신 경우, 첨부 없이 제출가능합니다.
              </p>

              {/* <div className="flex flex-col gap-0 border-l border-outline-variant ml-2">
                <Step number="01" label="Company Profile" active />
                <Step number="02" label="Project Details" />
                <Step number="03" label="CAD & Specifications" last />
              </div> */}

              {/* <div className="mt-20 pt-10 border-t border-outline-variant/30 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-technical-data text-technical-data text-on-surface-variant">
                    24H
                  </span>
                  <span className="font-label-sm text-[10px] text-outline uppercase font-bold">
                    Quote Response
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-technical-data text-technical-data text-on-surface-variant">
                    0.005mm
                  </span>
                  <span className="font-label-sm text-[10px] text-outline uppercase font-bold">
                    Max Tolerance
                  </span>
                </div>
              </div> */}
            </div>
          </aside>

          {/* Right: The Form */}
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({
  number,
  label,
  active,
  last,
}: {
  number: string;
  label: string;
  active?: boolean;
  last?: boolean;
}) {
  return (
    <div className={`relative pl-6 ${last ? "" : "pb-10"} ${active ? "" : "opacity-50"}`}>
      <div
        className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full ring-4 ring-surface ${
          active ? "bg-primary" : "bg-outline-variant"
        }`}
      />
      <span
        className={`block font-label-sm text-label-sm uppercase mb-1 tracking-widest ${
          active ? "text-primary" : "text-outline-variant"
        }`}
      >
        Step {number}
      </span>
      <span
        className={`font-headline-md text-headline-md ${
          active ? "text-primary" : "text-on-surface-variant"
        }`}
      >
        {label}
      </span>
    </div>
  );
}