"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
  { name: "Moments", href: "/moments" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/moments") {
      setActiveSection("moments");
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const offset = 140;

      let current = "about";

      navItems
        .filter((item) => item.href.startsWith("#"))
        .forEach((item) => {
          const section = document.getElementById(item.href.slice(1));

          if (!section) return;

          if (window.scrollY >= section.offsetTop - offset) {
            current = item.href.slice(1);
          }
        });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    if (href.startsWith("/")) {
      router.push(href);
      setIsMobileMenuOpen(false);
      return;
    }

    const id = href.slice(1);
    setActiveSection(id);

    if (pathname === "/moments") {
      router.push("/" + href);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.a
              href="/"
              className="flex-shrink-0 whitespace-nowrap text-lg sm:text-xl font-bold font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {"<mdyhakash />"}
            </motion.a>

            <div className="hidden xl:flex flex-1 justify-end items-center gap-3 ml-10">
              {navItems.map((item, index) => {
                const isActive =
                  activeSection ===
                  (item.href.startsWith("#")
                    ? item.href.slice(1)
                    : item.href.slice(1));

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative whitespace-nowrap text-xs 2xl:text-sm font-mono transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-accent mr-1">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    {item.name}

                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            <motion.button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="xl:hidden p-3 -mr-3"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 220,
              }}
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-card border-l border-border p-6 pt-24"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const isActive =
                    activeSection ===
                    (item.href.startsWith("#")
                      ? item.href.slice(1)
                      : item.href.slice(1));

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`flex items-center gap-3 rounded px-4 py-4 font-mono ${
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span className="text-accent">
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      {item.name}
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
