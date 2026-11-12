"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { isHeroAssemblyComplete, serverHeroAssemblyComplete, subscribeToHeroAssembly } from "@/lib/hero-assembly";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, isToolUIPart, type UIMessage } from "ai";
import { Bot, ExternalLink, MessageCircle, Rocket, Send, Sparkles, X } from "lucide-react";
import { projectsData } from "@/constants";
import type { PortfolioProject } from "@/lib/portfolio";
import styles from "./badge.module.css";

const suggestions = [
  "What technologies do you use?",
  "Show me your React projects",
  "What is your strongest project?",
  "Tell me about your experience",
  "Do you have AI-related projects?",
];

const transport = new DefaultChatTransport({ api: "/api/chat" });

function ProjectResults({ projects }: { projects: PortfolioProject[] }) {
  if (projects.length === 0) return <p className="text-xs text-secondary">No matching projects are listed.</p>;
  return (
    <div className="mt-2 grid gap-2">
      {projects.map((project) => {
        const source = projectsData.find((item) => item.id === project.id);
        return (
          <a key={project.id} href={project.link} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10 bg-black/50 p-3 transition hover:border-[#D4AF37]/60 hover:bg-black/70">
            <div className="flex items-start justify-between gap-3">
              <div><p className="text-sm font-semibold text-white">{project.name}</p><p className="mt-1 text-xs leading-5 text-secondary">{project.description}</p></div>
              <ExternalLink className="h-4 w-4 shrink-0 text-[#D4AF37] transition group-hover:-translate-y-0.5" />
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {(source?.tags ?? project.technologies.map((name) => ({ name }))).map((tag) => <span key={tag.name} className="text-[11px] text-cyan-300">#{tag.name}</span>)}
            </div>
          </a>
        );
      })}
    </div>
  );
}

function ToolResult({ part }: { part: UIMessage["parts"][number] }) {
  if (!isToolUIPart(part) || part.state !== "output-available") return null;
  if ((part.type === "tool-getProjects" || part.type === "tool-getProjectsByTechnology") && Array.isArray(part.output)) {
    return <ProjectResults projects={part.output as PortfolioProject[]} />;
  }
  return null;
}

export default function PortfolioAssistant() {
  const ready = useSyncExternalStore(
    subscribeToHeroAssembly,
    isHeroAssemblyComplete,
    serverHeroAssemblyComplete,
  );
  const [open, setOpen] = useState(false);
  const [landed, setLanded] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status, error, clearError, stop } = useChat({ transport });
  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const submit = (text: string) => {
    const message = text.trim();
    if (!message || busy) return;
    clearError();
    void sendMessage({ text: message });
    setInput("");
  };

  if (!ready) return null;

  return (
    <div className="fixed bottom-[84px] right-4 z-50 sm:bottom-6 sm:right-6">
      {open ? (
        <section aria-label="Portfolio assistant" className="flex h-[min(680px,calc(100dvh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#08090f]/95 shadow-[0_20px_80px_rgba(0,0,0,.65)] backdrop-blur-xl sm:h-[min(680px,calc(100dvh-2rem))]">
          <header className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-[#D4AF37]/10 to-cyan-500/10 px-4 py-3">
            <div className="rounded-full border border-[#D4AF37]/40 bg-black/50 p-2"><Bot className="h-5 w-5 text-[#D4AF37]" /></div>
            <div className="min-w-0 flex-1"><h2 className="text-sm font-semibold text-white">Ask Arsen&apos;s portfolio</h2><p className="text-xs text-secondary">Projects, skills, and experience</p></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="rounded-lg p-2 text-secondary hover:bg-white/10 hover:text-white"><X className="h-5 w-5" /></button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4" aria-live="polite">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col justify-center">
                <Sparkles className="mb-3 h-7 w-7 text-[#D4AF37]" />
                <p className="text-sm leading-6 text-white">Hi! I can answer questions using the information in this portfolio.</p>
                <div className="mt-4 flex flex-wrap gap-2">{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => submit(suggestion)} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-secondary transition hover:border-[#D4AF37]/50 hover:text-white">{suggestion}</button>)}</div>
              </div>
            ) : messages.map((message) => (
              <div key={message.id} className={message.role === "user" ? "ml-8" : "mr-5"}>
                <div className={message.role === "user" ? "rounded-2xl rounded-br-sm bg-[#D4AF37] px-3 py-2 text-sm text-black" : "rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-3 py-2 text-sm leading-6 text-white"}>
                  {message.parts.map((part, index) => part.type === "text" ? <span key={index} className="whitespace-pre-wrap">{part.text}</span> : <ToolResult key={index} part={part} />)}
                </div>
              </div>
            ))}
            {busy ? <div className="flex items-center gap-2 text-xs text-secondary"><span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />Thinking…</div> : null}
            {error ? <div role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-xs text-red-200">{error.message || "Something went wrong. Please try again."}</div> : null}
          </div>

          <form onSubmit={(event) => { event.preventDefault(); submit(input); }} className="border-t border-white/10 p-3">
            <div className="flex items-end gap-2 rounded-xl border border-white/15 bg-black/40 p-2 focus-within:border-[#D4AF37]/60">
              <textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); submit(input); } }} placeholder="Ask about Arsen's work…" rows={1} maxLength={500} disabled={busy} className="max-h-28 min-h-9 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-secondary disabled:opacity-60" />
              {busy ? <button type="button" onClick={stop} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-secondary hover:text-white">Stop</button> : <button type="submit" disabled={!input.trim()} aria-label="Send message" className="rounded-lg bg-[#D4AF37] p-2.5 text-black transition hover:bg-[#e3c45c] disabled:cursor-not-allowed disabled:opacity-40"><Send className="h-4 w-4" /></button>}
            </div>
          </form>
        </section>
      ) : (
        <div
          className={styles.lander}
          data-landed={landed}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) setLanded(true);
          }}
        >
          <span aria-hidden="true" className={styles.exhaust} />
          <span aria-hidden="true" className={styles.touchdown} />
          <button type="button" onClick={() => { setLanded(true); setOpen(true); }} aria-label="Open portfolio assistant" className="group relative flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#08090f]/95 px-4 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(0,0,0,.5)] backdrop-blur transition hover:-translate-y-1 hover:border-[#D4AF37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]">
            <span aria-hidden="true" className="relative h-5 w-5 text-[#D4AF37]">
              <Rocket className={`absolute inset-0 h-5 w-5 ${styles.rocket}`} />
              <MessageCircle className={`absolute inset-0 h-5 w-5 ${styles.chat}`} />
            </span>
            <span className="max-xsm:hidden">Ask AI</span>
          </button>
        </div>
      )}
    </div>
  );
}
