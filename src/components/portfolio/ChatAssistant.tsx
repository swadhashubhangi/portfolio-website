import { useState, useRef, useEffect } from "react";
import { askGemini } from "../../lib/gemini";
import { MessageCircle } from "lucide-react";
import { Resizable } from "re-resizable";
import { motion, useDragControls } from "framer-motion";

export default function ChatAssistant() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsMounted(true), 4600);
        return () => clearTimeout(t);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState<
        { role: "user" | "ai"; text: string }[]
    >([]);
    const [loading, setLoading] = useState(false);
    const loadingMessages = [
        "Reviewing portfolio...",
        "Looking through projects...",
        "Preparing response...",
        "Almost ready..."
    ];

    const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);

    const dragControls = useDragControls();
    const constraintsRef = useRef(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const wasDragged = useRef(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    useEffect(() => {
        if (!loading) return;

        setLoadingMessage(loadingMessages[0]);

        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % loadingMessages.length;
            setLoadingMessage(loadingMessages[index]);
        }, 1800);

        return () => clearInterval(interval);
    }, [loading]);

    if (!isMounted) return null;

    function askSuggestion(text: string) {
        if (loading) return;

        setQuestion(text);

        setTimeout(() => {
            handleAsk(text);
        }, 0);
    }

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    async function handleAsk(prefilledQuestion?: string) {
        const currentQuestion = prefilledQuestion ?? question;

        if (!currentQuestion.trim() || loading) return;
        const updatedMessages = [
            ...messages,
            {
                role: "user" as const,
                text: currentQuestion,
            },
        ];

        // Add user message immediately
        setMessages(updatedMessages);

        setQuestion("");
        setLoading(true);

        try {
            const response = await askGemini(currentQuestion, updatedMessages);

            // Add AI response
            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: response,
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: "I'm unable to respond at the moment. This may be due to a temporary connection issue or API usage limit. Please wait a few moments and try again.",
                },
            ]);
        }

        setLoading(false);
    }

    function renderMessage(text: string, role: "user" | "ai") {
        const sectionLinks: Record<string, string> = {
            "home section": "home",
            "about section": "about",
            "skills section": "skills",
            "projects section": "projects",
            "education section": "education",
            "experience section": "experience",
            "contact section": "contact",
        };

        const resumeUrl =
            "https://drive.google.com/file/d/1FLDsaUcCFWu65jI3lMRliJyPBKvhpXFW/view?usp=sharing";

        const regex = new RegExp(
            `\\b(${Object.keys(sectionLinks)
                .sort((a, b) => b.length - a.length)
                .join("|")}|view swadha's resume)\\b`,
            "gi"
        );

        const parts = text.split(regex);

        return parts.map((part, index) => {
            const normalized = part.toLowerCase();
            const target = sectionLinks[normalized];

            if (normalized === "view swadha's resume") {
                return (
                    <a
                        key={index}
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#f472b6",
                            cursor: "pointer",
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                    >
                        {part}
                    </a>
                );
            }

            if (target) {
                return (
                    <span
                        key={index}
                        onClick={() => scrollToSection(target)}
                        style={{
                            color: role === "user" ? "#FFFFFF" : "#f472b6",
                            cursor: "pointer",
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                    >
                        {part}
                    </span>
                );
            }

            return <span key={index}>{part}</span>;
        });
    }

    return (
        <>
            {/* The drag constraints area covering the whole screen */}
            <div
                ref={constraintsRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: "none",
                    zIndex: 9998,
                }}
            />
            <motion.div
                drag
                onDragStart={() => {
                    wasDragged.current = true;
                }}
                dragConstraints={constraintsRef}
                dragElastic={0}
                dragControls={dragControls}
                dragListener={false}
                dragMomentum={false}
                style={{
                    position: "fixed",
                    bottom: "80px",
                    right: "40px",
                    zIndex: 9999,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                }}
            >
                {/* Floating AI Button */}
                {!isOpen && (
                    <button
                        onPointerDown={(e) => dragControls.start(e)}
                        onClick={() => {
                            if (wasDragged.current) {
                                wasDragged.current = false;
                                return;
                            }

                            setIsOpen(true);
                        }}
                        style={{
                            width: "66px",
                            height: "66px",
                            borderRadius: "50%",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            background: "linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #ec4899 100%)",
                            color: "white",
                            cursor: "grab",
                            boxShadow: "0 4px 25px rgba(236, 72, 153, 0.45), 0 0 15px rgba(168, 85, 247, 0.35)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            touchAction: "none",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MessageCircle size={32} />
                            <span
                                style={{
                                    position: "absolute",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                AI
                            </span>
                        </div>
                    </button>
                )}

                {/* Chat Window */}
                {isOpen && (
                    <Resizable
                        defaultSize={{
                            width: 380,
                            height: 520,
                        }}
                        minWidth={320}
                        minHeight={400}
                        maxWidth={700}
                        maxHeight={770}
                        enable={{
                            top: true,
                            right: true,
                            bottom: true,
                            left: true,
                            topRight: true,
                            bottomRight: true,
                            bottomLeft: true,
                            topLeft: true,
                        }}


                        style={{
                            background: "#0f0d22",
                            border: "1px solid rgba(168, 85, 247, 0.25)",
                            borderRadius: "20px",
                            padding: "20px",
                            color: "white",
                            boxShadow: "0 15px 40px -10px rgba(0,0,0,0.8), 0 0 30px rgba(236,72,153,0.15)",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                        }}
                    >
                        {/* Header */}
                        <div
                            onPointerDown={(e) => dragControls.start(e)}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "15px",
                                cursor: "grab",
                                touchAction: "none",
                            }}
                        >
                            <h3 style={{ margin: 0, fontWeight: 700, fontSize: "16px", color: "white" }}>
                                AI Portfolio Assistant
                            </h3>

                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "#94a3b8",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div
                            style={{
                                flex: 1,
                                overflow: "auto",
                                background: "#080714",
                                border: "1px solid rgba(255, 255, 255, 0.06)",
                                borderRadius: "15px",
                                padding: "15px",
                                lineHeight: "1.8",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {messages.length === 0 ? (
                                <div
                                    style={{
                                        color: "#94A3B8",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                    }}
                                >
                                    <p style={{ margin: 0 }}>
                                        👋 Welcome! I'm Swadha's AI Portfolio Assistant. I can answer questions about her background, skills, projects, internship, and career goals. You can also start with one of the suggestions below:
                                    </p>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "10px",
                                        }}
                                    >
                                        {[
                                            "Who is Swadha?",
                                            "Tell me about her Projects",
                                            "What technologies does she know?",
                                            "Tell me about her Internship",
                                            "What are her strengths?",
                                        ].map((text) => (
                                            <button
                                                key={text}
                                                onClick={() => askSuggestion(text)}
                                                style={{
                                                    background: "#16132f",
                                                    color: "#f472b6",
                                                    border: "1px solid rgba(236, 72, 153, 0.25)",
                                                    borderRadius: "999px",
                                                    padding: "8px 14px",
                                                    cursor: "pointer",
                                                    fontSize: "13px",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {text}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                justifyContent:
                                                    msg.role === "user"
                                                        ? "flex-end"
                                                        : "flex-start",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "80%",
                                                    padding: "12px",
                                                    borderRadius: "15px",
                                                    background:
                                                        msg.role === "user"
                                                            ? "linear-gradient(135deg, #7c3aed, #ec4899)"
                                                            : "#15122e",
                                                    border:
                                                        msg.role === "user"
                                                            ? "none"
                                                            : "1px solid rgba(168, 85, 247, 0.2)",
                                                    color: "white",
                                                    lineHeight: "1.6",
                                                    whiteSpace: "pre-wrap",
                                                }}
                                            >
                                                {renderMessage(msg.text, msg.role)}
                                            </div>
                                        </div>
                                    ))}
                                    {loading && (
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    maxWidth: "80%",
                                                    padding: "12px",
                                                    borderRadius: "15px",
                                                    background: "#15122e",
                                                    border: "1px solid rgba(168, 85, 247, 0.2)",
                                                    color: "#D1D5DB",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {loadingMessage}
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </>
                            )}

                        </div>

                        {/* Input Area */}
                        <div
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            <input
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !loading) {
                                        e.preventDefault();
                                        handleAsk();
                                    }
                                }}
                                placeholder="Ask about Swadha's portfolio..."
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    background: "#080714",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    color: "white",
                                    outline: "none",
                                    marginBottom: "10px",
                                }}
                            />

                            <button
                                onClick={() => handleAsk()}
                                disabled={loading}
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    border: "none",
                                    borderRadius: "12px",
                                    background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                                    boxShadow: "0 4px 15px rgba(236, 72, 153, 0.35)",
                                    color: "white",
                                    fontWeight: "bold",
                                    opacity: loading ? 0.7 : 1,
                                    cursor: loading ? "not-allowed" : "pointer",
                                }}
                            >
                                Send
                            </button>
                        </div>
                    </Resizable>
                )}
            </motion.div>
        </>
    );
}