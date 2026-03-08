import { useState } from "react";
import {
  Box,
  Stack,
  Group,
  Text,
  Title,
  TextInput,
  Textarea,
  SimpleGrid,
  Anchor,
} from "@mantine/core";
import { useReveal } from "../hooks/useReveal";
import classes from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { ref, visible } = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const mailtoLink = `mailto:micheal1namma@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 600);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/micheal-namma-8111231b9",
      color: "#0A66C2",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:micheal1namma@gmail.com",
      color: "rgb(9,79,183)",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      name: "Phone",
      href: "tel:+963945922364",
      color: "#25D366",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.77 11a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.68 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 5.29 5.29l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14v2.92z" />
        </svg>
      ),
    },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      label: "Email",
      value: "micheal1namma@gmail.com",
      href: "mailto:micheal1namma@gmail.com",
    },
    {
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.77 11a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.68 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 5.29 5.29l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14v2.92z" />
        </svg>
      ),
      label: "Phone",
      value: "+963 945 922 364",
      href: "tel:+963945922364",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "micheal-namma-8111231b9",
      href: "https://www.linkedin.com/in/micheal-namma-8111231b9",
    },
  ];

  return (
    <>
      <Box
        component="section"
        id="contact"
        style={{
          background: "#09090f",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgb(9,79,183), transparent)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(9,79,183,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <Box
          ref={ref}
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <Box
            style={{
              marginBottom: "4rem",
              textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease",
            }}
          >
            <Text
              size="xs"
              c="brand.6"
              style={{
                textTransform: "uppercase",
                letterSpacing: "3.5px",
                fontWeight: 700,
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Let's talk
            </Text>
            <Title
              order={2}
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.5px",
                lineHeight: 1.05,
                marginBottom: "1rem",
              }}
            >
              Get In Touch
            </Title>
            <Text
              style={{
                color: "rgba(255,255,255,0.38)",
                maxWidth: "480px",
                margin: "0 auto",
                fontSize: "0.93rem",
                lineHeight: 1.8,
              }}
            >
              Have a project in mind or want to discuss opportunities? I'm
              always open to exciting new challenges.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="3rem">
            <Box
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.8s ease 0.2s",
              }}
            >
              <Group gap="0.75rem" mb="2rem">
                {socialLinks.map((s) => (
                  <Anchor
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    title={s.name}
                    className={classes.socialIcon}
                    style={{ "--icon-color": s.color } as React.CSSProperties}
                  >
                    {s.icon}
                  </Anchor>
                ))}
              </Group>

              <Stack gap="0.85rem" mb="2rem">
                {contactInfo.map((c) => (
                  <Anchor
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={classes.contactCard}
                  >
                    <Box
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(9,79,183,0.15)",
                        border: "1px solid rgba(9,79,183,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgb(9,79,183)",
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Box>
                      <Text
                        size="xs"
                        style={{
                          color: "rgba(255,255,255,0.25)",
                          textTransform: "uppercase",
                          letterSpacing: "1.2px",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {c.label}
                      </Text>
                      <Text
                        style={{
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.75)",
                          fontWeight: 600,
                        }}
                      >
                        {c.value}
                      </Text>
                    </Box>
                  </Anchor>
                ))}
              </Stack>

              <Box
                style={{
                  padding: "1.4rem",
                  background:
                    "linear-gradient(135deg, rgba(9,79,183,0.14) 0%, rgba(9,79,183,0.05) 100%)",
                  border: "1px solid rgba(9,79,183,0.25)",
                  borderRadius: "14px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(9,79,183,0.6), transparent)",
                  }}
                />
                <Group gap="0.6rem" mb="0.6rem">
                  <Box
                    component="span"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#4fffb0",
                      boxShadow: "0 0 10px #4fffb0",
                      animation: "pulse 2s infinite",
                      display: "inline-block",
                    }}
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                    }}
                  >
                    Open to Opportunities
                  </Text>
                </Group>
                <Text
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.8rem",
                    lineHeight: 1.75,
                  }}
                >
                  Available for full-time roles, freelance projects, and
                  consulting engagements. Let's build something great together!
                </Text>
              </Box>
            </Box>

            <Box
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.8s ease 0.35s",
              }}
            >
              <Box
                style={{
                  padding: "2rem",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "18px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(9,79,183,0.5), transparent)",
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  Send a Message
                </Text>

                <form onSubmit={handleSubmit}>
                  <SimpleGrid cols={2} spacing="1rem" mb="1rem">
                    <TextInput
                      label="Your Name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                      classNames={{ input: classes.inputFocus }}
                    />
                    <TextInput
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                      classNames={{ input: classes.inputFocus }}
                    />
                  </SimpleGrid>

                  <TextInput
                    label="Subject"
                    type="text"
                    placeholder="Project inquiry, collaboration..."
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    mb="1rem"
                    classNames={{ input: classes.inputFocus }}
                  />

                  <Textarea
                    label="Message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    mb="1.5rem"
                    classNames={{ input: classes.inputFocus }}
                  />

                  <button
                    type="submit"
                    disabled={sending}
                    className={sent ? classes.submitBtnSent : classes.submitBtn}
                  >
                    {sending
                      ? "Opening email client..."
                      : sent
                        ? "✓ Message ready in email client"
                        : "Send Message →"}
                  </button>
                </form>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

      <Box
        component="footer"
        style={{
          background: "#050508",
          borderTop: "1px solid rgba(9,79,183,0.12)",
          padding: "2.5rem 1.5rem",
        }}
      >
        <Stack
          align="center"
          gap="1rem"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <Group gap="2px" align="baseline">
            <Text
              style={{
                fontSize: "1.6rem",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-1px",
              }}
            >
              MN
            </Text>
            <Text
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "rgb(9,79,183)",
                textShadow: "0 0 20px rgba(9,79,183,0.8)",
              }}
            >
              .
            </Text>
          </Group>
          <Text
            style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.82rem" }}
          >
            Micheal Namma · Senior Backend Developer
          </Text>
          <Group gap="1.5rem">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/micheal-namma-8111231b9",
              },
              { label: "Email", href: "mailto:micheal1namma@gmail.com" },
              { label: "Phone", href: "tel:+963945922364" },
            ].map((l) => (
              <Anchor
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={classes.footerLink}
              >
                {l.label}
              </Anchor>
            ))}
          </Group>
        </Stack>
      </Box>
    </>
  );
}
