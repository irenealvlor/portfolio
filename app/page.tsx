"use client";
import { useEffect, useMemo, useRef, type ReactNode } from "react";
import {
  SunIcon,
  CheckBadgeIcon,
  UserIcon,
  CursorArrowRaysIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

type CardKind = "project" | "profile" | "articles";

type CarouselItem = {
  id: string;
  kind: CardKind;
  title: string;
  subtitle?: ReactNode;
  imageSrc?: string;
  projectType?: "UX/UI" | "CX";
};

function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <div
        className="
          w-full max-w-[1440px] mx-auto
          h-full flex flex-col justify-between
          px-[var(--space-page-x)]
          pt-[var(--space-page-y)] pb-[var(--space-page-y)]
        "
      >
        {children}
      </div>
    </div>
  );
}

function CardBase() {
  return (
    <article
      className="
        shrink-0
        w-[clamp(300px,22vw,324px)]
        aspect-[324/553]
        h-auto
        rounded-[var(--radius-xl)]
        relative overflow-hidden
        border border-white/40
        bg-white/18
        backdrop-blur-lg
        shadow-[0_8px_18px_rgba(0,0,0,0.10)]
        ring-1 ring-white/20
        before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_20%,rgba(255,255,255,0)_60%)] before:opacity-70 before:pointer-events-none before:z-0
        after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(120%_120%_at_100%_100%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0)_60%)] after:opacity-60 after:pointer-events-none after:z-0
      "
    >
      <div className="absolute inset-0 bg-[color:var(--color-bg-card)] opacity-[0.10] pointer-events-none" />
      <div className="relative z-10 h-full w-full" />
    </article>
  );
}

function ProjectCard({
  id,
  imageSrc,
  text,
  projectType,
}: {
  id: string;
  imageSrc: string;
  text: ReactNode;
  projectType?: "UX/UI" | "CX";
}) {
  return (
    <article
      className="
        shrink-0
        w-[clamp(300px,22vw,324px)]
        aspect-[324/553]
        h-auto
        rounded-[var(--radius-xl)]
        relative
        border border-white/40
        bg-white/18
        backdrop-blur-lg
        shadow-[0_8px_18px_rgba(0,0,0,0.10)]
        ring-1 ring-white/20
        before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_20%,rgba(255,255,255,0)_60%)] before:opacity-70 before:pointer-events-none before:z-0
        after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(120%_120%_at_100%_100%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0)_60%)] after:opacity-60 after:pointer-events-none after:z-0
        overflow-hidden
        transition hover:border-white/60 hover:ring-white/40 hover:shadow-[0_12px_26px_rgba(0,0,0,0.14)]
      "
    >
      <div className="absolute inset-0 bg-[color:var(--color-bg-card)] opacity-[0.10] pointer-events-none" />
      {/* Inner padding = S (16px). */}
      <div className="relative z-10 p-4 h-full flex flex-col items-start">
        {/* Image (near-square) */}
        <div className="relative w-full aspect-[292/293] rounded-[var(--radius-m)] overflow-hidden">
          <img
            src={imageSrc}
            alt=""
            className="block w-full h-full object-cover object-top"
            draggable={false}
          />

          {projectType && (
            <div className="absolute top-2 right-2">
              <span
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-[12px] text-[14px] font-[400] text-[color:var(--color-text-secondary)] bg-white/25 border border-white/40 backdrop-blur-lg shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-white/20 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.15)_35%,rgba(255,255,255,0)_60%)] before:opacity-70 before:pointer-events-none before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_55%)] after:opacity-60 after:pointer-events-none after:z-0"
              >
                <span className="relative z-10">{projectType}</span>
              </span>
            </div>
          )}
        </div>

        {/* Spacing L (24px) */}
        <div className="mt-6 w-full">
          <p className="text-[18px] leading-[23px] font-[400] text-[color:var(--color-text-primary)] line-clamp-4">
            {text}
          </p>
        </div>

        {/* Spacing L (24px) between text and buttons */}
        <div className="mt-6 w-full flex flex-col gap-2">
          { id === "p1" ? (
            <a
              href="https://coordinated-soybean-1e7.notion.site/Making-Custom-Printing-Click-Bringing-Lume-into-the-Spotlight-277ed4f308d5802ab4d3f18578faecf8?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 leading-none bg-[color:var(--color-bg-card-secondary)] opacity-100 border border-white/25 hover:border-[color:var(--color-bg-card-secondary)] text-[color:var(--color-text-secondary)] hover:brightness-95 transition"
            >
              <img
                src="/icons/Notion_icon.svg"
                alt=""
                className="relative z-10 w-5 h-5 shrink-0"
                draggable={false}
              />
              <span className="relative z-10">Read Full Story</span>
            </a>
          ) : id === "p2" ? (
            <a
              href="https://coordinated-soybean-1e7.notion.site/Come-Mr-DJ-Song-Pon-de-Replay-Remixing-Spotify-s-DJ-with-a-Voice-that-Answers-Back-277ed4f308d58086a960cc2e83a7cea3?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 leading-none bg-[color:var(--color-bg-card-secondary)] opacity-100 border border-white/25 hover:border-[color:var(--color-bg-card-secondary)] text-[color:var(--color-text-secondary)] hover:brightness-95 transition"
            >
              <img
                src="/icons/Notion_icon.svg"
                alt=""
                className="relative z-10 w-5 h-5 shrink-0"
                draggable={false}
              />
              <span className="relative z-10">Read Full Story</span>
            </a>
          ) : id === "p3" ? (
            <a
              href="https://coordinated-soybean-1e7.notion.site/No-more-lost-shoppers-Reloading-Carrefour-s-shopping-experience-277ed4f308d5805ebd43d6a4772c1b5d?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 leading-none bg-[color:var(--color-bg-card-secondary)] opacity-100 border border-white/25 hover:border-[color:var(--color-bg-card-secondary)] text-[color:var(--color-text-secondary)] hover:brightness-95 transition"
            >
              <img
                src="/icons/Notion_icon.svg"
                alt=""
                className="relative z-10 w-5 h-5 shrink-0"
                draggable={false}
              />
              <span className="relative z-10">Read Full Story</span>
            </a>
          ) : (
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 leading-none bg-[color:var(--color-bg-card-secondary)] opacity-100 border border-white/25 hover:border-[color:var(--color-bg-card-secondary)] text-[color:var(--color-text-secondary)] hover:brightness-95 transition"
            >
              <img
                src="/icons/Notion_icon.svg"
                alt=""
                className="relative z-10 w-5 h-5 shrink-0"
                draggable={false}
              />
              <span className="relative z-10">Read Full Story</span>
            </button>
          )}
          { id === "p1" || id === "p2" || id === "p3" ? (
            <a
              href={
                id === "p1"
                  ? "https://www.figma.com/design/9ye7ya8qm7cyn6NgwA6WDn/%F0%9F%94%A5-Lume?node-id=0-1&t=O6f8cq7sCrhdbfUi-1"
                  : id === "p2"
                    ? "https://v0-spotify-ai-screen-design.vercel.app/"
                    : "https://www.figma.com/design/ZvLkJeJzNaOeaH9zidLO5G/%F0%9F%9B%92-Carrefour_%F0%9F%87%AC%F0%9F%87%A7?node-id=0-1&t=O6f8cq7sCrhdbfUi-1"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 leading-none bg-[color:var(--color-bg-card-secondary)] opacity-100 border border-white/25 hover:border-[color:var(--color-bg-card-secondary)] text-[color:var(--color-text-secondary)] hover:brightness-95 transition"
            >
              {id === "p2" ? (
                <img
                  src="/icons/v0_icon.svg"
                  alt=""
                  className="relative z-10 w-5 h-5 shrink-0"
                  draggable={false}
                />
              ) : (
                <img
                  src="/icons/Figma_icon.svg"
                  alt=""
                  className="relative z-10 w-5 h-5 shrink-0"
                  draggable={false}
                />
              )}
              <span className="relative z-10">Explore project</span>
            </a>
          ) : (
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 leading-none bg-[color:var(--color-bg-card-secondary)] opacity-100 border border-white/25 hover:border-[color:var(--color-bg-card-secondary)] text-[color:var(--color-text-secondary)] hover:brightness-95 transition"
            >
              {id === "p2" ? (
                <img
                  src="/icons/v0_icon.svg"
                  alt=""
                  className="relative z-10 w-5 h-5 shrink-0"
                  draggable={false}
                />
              ) : (
                <img
                  src="/icons/Figma_icon.svg"
                  alt=""
                  className="relative z-10 w-5 h-5 shrink-0"
                  draggable={false}
                />
              )}
              <span className="relative z-10">Explore project</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function ArticlesCard() {
  return (
    // Same footprint as other cards, but NO outer card styling
    <article
      className="
        shrink-0
        w-[clamp(300px,22vw,324px)]
        h-[553px]
      "
    >
      <div className="h-full w-full flex flex-col gap-4">
        {/* 3 floating mini-cards (custom structure) */}
        <a
          href="https://medium.com/@irenealvlor/i-want-to-be-an-artist-79559c394c85"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 h-[147.33px] w-full rounded-[var(--radius-l)] relative overflow-hidden border border-white/40 bg-white/18 backdrop-blur-lg shadow-[0_8px_18px_rgba(0,0,0,0.10)] ring-1 ring-white/20 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_20%,rgba(255,255,255,0)_60%)] before:opacity-70 before:pointer-events-none before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(120%_120%_at_100%_100%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0)_60%)] after:opacity-60 after:pointer-events-none after:z-0 p-4 flex flex-row-reverse gap-4 text-[16px] leading-[20.8px] transition hover:brightness-105 hover:bg-[color:var(--color-bg-card)]/80 hover:border-white/60 hover:ring-white/30 hover:shadow-[0_12px_26px_rgba(0,0,0,0.14)]"
        >
          <div className="absolute inset-0 bg-[color:var(--color-bg-card)] opacity-[0.10] pointer-events-none" />
          <div
            className="relative z-10 w-[138px] shrink-0 rounded-[var(--radius-m)] overflow-hidden bg-[color:var(--color-bg-card-secondary,var(--color-bg-card))]"
            style={{ height: "113.34px" }}
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*erv3O-NqtN8_v1UdXUYfcg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="relative z-10 flex flex-col items-start justify-start w-full h-full text-[16px] leading-[20.8px]">
            <span
              aria-hidden="true"
              className="w-6 h-6 shrink-0 mt-[2px] bg-[color:var(--color-text-primary)] [mask-image:url(/icons/Medium_icon.svg)] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center] [-webkit-mask-image:url(/icons/Medium_icon.svg)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] [-webkit-mask-position:center]"
            />
            <div className="flex-1 w-full flex items-center">
              <span
                style={{ fontSize: "16px", lineHeight: "20.8px" }}
                className="font-[400] text-[color:var(--color-text-primary)] line-clamp-3"
              >
                I Want to Be an Artist
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://medium.com/@irenealvlor/i-asked-gpt-to-read-between-my-lines-and-this-is-what-it-found-f6085b0f1fd2"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 h-[147.33px] w-full rounded-[var(--radius-l)] relative overflow-hidden border border-white/40 bg-white/18 backdrop-blur-lg shadow-[0_8px_18px_rgba(0,0,0,0.10)] ring-1 ring-white/20 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_20%,rgba(255,255,255,0)_60%)] before:opacity-70 before:pointer-events-none before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(120%_120%_at_100%_100%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0)_60%)] after:opacity-60 after:pointer-events-none after:z-0 p-4 flex flex-row-reverse gap-4 text-[16px] leading-[20.8px] transition hover:brightness-105 hover:bg-[color:var(--color-bg-card)]/80 hover:border-white/60 hover:ring-white/30 hover:shadow-[0_12px_26px_rgba(0,0,0,0.14)]"
        >
          <div className="absolute inset-0 bg-[color:var(--color-bg-card)] opacity-[0.10] pointer-events-none" />
          <div
            className="relative z-10 w-[138px] shrink-0 rounded-[var(--radius-m)] overflow-hidden bg-[color:var(--color-bg-card-secondary,var(--color-bg-card))]"
            style={{ height: "113.34px" }}
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bjKUdx_OGMf1AlXHnQLh_w.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="relative z-10 flex flex-col items-start justify-start w-full h-full text-[16px] leading-[20.8px]">
            <span
              aria-hidden="true"
              className="w-6 h-6 shrink-0 mt-[2px] bg-[color:var(--color-text-primary)] [mask-image:url(/icons/Medium_icon.svg)] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center] [-webkit-mask-image:url(/icons/Medium_icon.svg)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] [-webkit-mask-position:center]"
            />
            <div className="flex-1 w-full flex items-center">
              <span
                style={{ fontSize: "16px", lineHeight: "20.8px" }}
                className="font-[400] text-[color:var(--color-text-primary)] line-clamp-3"
              >
                I Asked GPT to Read Between My Lines And This Is What It Found
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://medium.com/@irenealvlor/an-article-worth-reading-slowly-de0a91270a51"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 h-[147.33px] w-full rounded-[var(--radius-l)] relative overflow-hidden border border-white/40 bg-white/18 backdrop-blur-lg shadow-[0_8px_18px_rgba(0,0,0,0.10)] ring-1 ring-white/20 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_20%,rgba(255,255,255,0)_60%)] before:opacity-70 before:pointer-events-none before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(120%_120%_at_100%_100%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0)_60%)] after:opacity-60 after:pointer-events-none after:z-0 p-4 flex flex-row-reverse gap-4 text-[16px] leading-[20.8px] transition hover:brightness-105 hover:bg-[color:var(--color-bg-card)]/80 hover:border-white/60 hover:ring-white/30 hover:shadow-[0_12px_26px_rgba(0,0,0,0.14)]"
        >
          <div className="absolute inset-0 bg-[color:var(--color-bg-card)] opacity-[0.10] pointer-events-none" />
          <div
            className="relative z-10 w-[138px] shrink-0 rounded-[var(--radius-m)] overflow-hidden bg-[color:var(--color-bg-card-secondary,var(--color-bg-card))]"
            style={{ height: "113.34px" }}
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*t4ChQrmj3iFkke1uIFffXw.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="relative z-10 flex flex-col items-start justify-start w-full h-full text-[16px] leading-[20.8px]">
            <span
              aria-hidden="true"
              className="w-6 h-6 shrink-0 mt-[2px] bg-[color:var(--color-text-primary)] [mask-image:url(/icons/Medium_icon.svg)] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center] [-webkit-mask-image:url(/icons/Medium_icon.svg)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] [-webkit-mask-position:center]"
            />
            <div className="flex-1 w-full flex items-center">
              <span
                style={{ fontSize: "16px", lineHeight: "20.8px" }}
                className="font-[400] text-[color:var(--color-text-primary)] line-clamp-3"
              >
                An Article Worth Reading Slowly
              </span>
            </div>
          </div>
        </a>

        {/* Floating button (base only). Padding: 16px x / 12px y */}
        <a
          href="https://medium.com/@irenealvlor"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-4 py-2 leading-none text-[color:var(--color-text-secondary)] border border-white/40 bg-[color:var(--color-bg-card)]/65 backdrop-blur-lg shadow-[0_8px_18px_rgba(0,0,0,0.10)] ring-1 ring-white/20 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.15)_35%,rgba(255,255,255,0)_60%)] before:opacity-70 before:pointer-events-none before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_55%)] after:opacity-60 after:pointer-events-none after:z-0 hover:bg-[color:var(--color-bg-card)]/85 hover:shadow-[0_12px_26px_rgba(0,0,0,0.14)] active:shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:brightness-105 hover:border-white/60 hover:ring-white/30 transition group"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-[2px] rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[spin_1.25s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.95)_18%,rgba(255,255,255,0)_36%,rgba(255,255,255,0)_64%,rgba(255,255,255,0.95)_82%,rgba(255,255,255,0)_100%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[1px] rounded-full bg-white/18"
          />
          <div className="absolute inset-0 bg-[color:var(--color-bg-card)] opacity-[0.10] pointer-events-none" />
          <BookOpenIcon className="relative z-10 w-5 h-5 shrink-0" />
          <span className="relative z-10">Read more</span>
        </a>
      </div>
    </article>
  );
}

function ProfileCard() {
  return (
    <article
      className="
        shrink-0
        w-[clamp(300px,22vw,324px)]
        aspect-[324/553]
        h-auto
        rounded-[var(--radius-xl)]
        border border-white/40
        bg-white/18
        backdrop-blur-lg
        shadow-[0_8px_18px_rgba(0,0,0,0.10)]
        ring-1 ring-white/20
        overflow-hidden
        relative
        transition hover:border-white/60 hover:ring-white/40 hover:shadow-[0_12px_26px_rgba(0,0,0,0.14)]
      "
    >
      {/* Layer 2: image */}
      <div
        className="absolute inset-0 bg-[url(/images/Profile_card_image.png)] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* Layer 3: gradient overlay (matches Figma stops) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(252,252,253,0)_0%,rgba(252,252,253,0.35)_45%,rgba(252,252,253,0.80)_60%,rgba(252,252,253,0.95)_70%,rgba(252,252,253,0.99)_100%)]"
        aria-hidden="true"
      />

      {/* Content layer */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full p-4 flex flex-col items-start">
          {/* Name + badge */}
          <div className="flex flex-col items-start w-full">
          <div className="flex items-center gap-[2px]">
            <h2 className="text-[24px] leading-[1.2] font-[var(--font-weight-semibold)] text-[color:var(--color-text-primary)]">
              Irene Álvarez Lorenzo
            </h2>
            <CheckBadgeIcon className="w-5 h-5 text-[color:var(--color-text-primary)]" />
          </div>

            {/* Tagline (8px below name) */}
            <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">
              Bridging <span className="font-semibold">user</span> and <span className="font-semibold">business</span> needs through technology.
            </p>
          </div>

          {/* 16px gap to the icons row */}
          <div className="mt-4 w-full grid grid-cols-3">
            <div className="flex flex-col items-center justify-start gap-1">
              <UserIcon className="w-5 h-5 text-[color:var(--color-text-primary)]" />
              <div className="text-xs leading-tight text-center text-[color:var(--color-text-secondary)]">
                User
                <br />
                Experience
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-1 border-l-2 border-r-2 border-[color:var(--color-border-subtle)]">
              <CursorArrowRaysIcon className="w-5 h-5 text-[color:var(--color-text-primary)]" />
              <div className="text-xs leading-tight text-center text-[color:var(--color-text-secondary)]">
                User
                <br />
                Interface
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-1">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-[color:var(--color-text-primary)]" />
              <div className="text-xs leading-tight text-center text-[color:var(--color-text-secondary)]">
                Conversational
                <br />
                Experience
              </div>
            </div>
          </div>

          {/* Button (full width, 16px x padding, 8px y padding) */}
          <a
            href="mailto:irenealvarezlorenzo@icloud.com"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 leading-none bg-[color:var(--color-text-secondary)] border border-white/30 ring-1 ring-white/25 text-white/95 transition hover:bg-[color:var(--color-text-secondary)]/85 hover:border-white/20 hover:ring-white/15"
          >
            <EnvelopeIcon className="relative z-10 w-5 h-5 shrink-0 -translate-y-px" />
            <span className="relative z-10">Get in touch</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const baseItems = useMemo<CarouselItem[]>(
    () => [
      {
        id: "p1",
        kind: "project",
        title: "Lume",
        subtitle: (
          <>
            Custom printing holds endless possibilities. <span className="font-semibold">Lume</span> lacked a digital home, so I <span className="font-semibold">turned curiosity into</span> <span className="font-semibold">creation</span>.
          </>
        ),
        // Lume (1st card from the left)
        imageSrc: "/images/Lume_card_image.png",
        projectType: "UX/UI",
      },
      { id: "me", kind: "profile", title: "Profile card", subtitle: "Placeholder" },
      {
        id: "p2",
        kind: "project",
        title: "Hey Mrs DJ",
        subtitle: (
          <>
            <span className="font-semibold">Spotify’s</span> DJ could cue tracks, but not <span className="font-semibold">dialogue</span>. I reimagined it to adapt to <span className="font-semibold">moments</span> and create <span className="font-semibold">emotional memory</span>.
          </>
        ),
        // Spotify (3rd card from the left)
        imageSrc: "/images/Spotify_card_image.png",
        projectType: "CX",
      },
      {
        id: "p3",
        kind: "project",
        title: "Carrefour",
        subtitle: (
          <>
            Grocery shopping can be a hassle. So I reimagined <span className="font-semibold">Carrefour’s</span> flow to make it <span className="font-semibold">simpler</span>, <span className="font-semibold">faster</span>, and <span className="font-semibold">intuitive</span>.
          </>
        ),
        // Carrefour (4th card from the left)
        imageSrc: "/images/Carrefour_card_image.png",
        projectType: "UX/UI",
      },
      { id: "art", kind: "articles", title: "Articles", subtitle: "3 Notion cards + button" },
    ] satisfies CarouselItem[],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // Initial “peek” so both edges feel cut.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft = 186;
  }, []);

  return (
    <main className="relative z-10 h-screen overflow-x-hidden overflow-y-visible">
      <PageShell>
        <section className="grid grid-cols-12 gap-[var(--space-gutter)] items-start">
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-[var(--space-gutter)]">
            <h1>
              <span className="block">Design should be built</span>
              <span className="block">for changing skies.</span>
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:flex lg:justify-end">
            <div className="mt-4 lg:mt-2 relative inline-flex items-center gap-2 rounded-full px-4 py-3 overflow-hidden bg-white/25 border border-white/40 backdrop-blur-lg shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-white/20 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.15)_35%,rgba(255,255,255,0)_60%)] before:opacity-70 before:pointer-events-none before:z-0 after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_55%)] after:opacity-60 after:pointer-events-none after:z-0">
              <span className="relative z-10 flex items-center gap-2 text-sm text-[color:var(--color-text-primary)]">
                <SunIcon className="w-4 h-4" />
                Vigo, Spain
              </span>
            </div>
          </div>
        </section>



        <section>
          <div
            ref={scrollerRef}
            className="
              -mx-[var(--space-page-x)]
              px-6
              overflow-x-auto overflow-y-visible
              pb-10 -mb-10
              flex gap-[var(--space-gutter)]
              snap-x snap-proximity scroll-pl-6 scroll-pr-6
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
            aria-label="Projects carousel"
          >
            {baseItems.map((item) => (
              <div key={item.id} className="shrink-0 snap-start">
                {item.kind === "profile" ? (
                  <ProfileCard />
                ) : item.kind === "project" && item.imageSrc ? (
                  <ProjectCard
                    id={item.id}
                    imageSrc={item.imageSrc}
                    text={item.subtitle ?? ""}
                    projectType={item.projectType}
                  />
                ) : item.kind === "articles" ? (
                  <ArticlesCard />
                ) : (
                  <CardBase />
                )}
              </div>
            ))}
          </div>
        </section>
      </PageShell>
    </main>
  );
}