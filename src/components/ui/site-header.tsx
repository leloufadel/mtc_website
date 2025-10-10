"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV } from "./site-nav.config";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#4A4A4A]/90 backdrop-blur supports-[backdrop-filter]:bg-[#4A4A4A]/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="MTC" width={44} height={24} priority />
          <span className="sr-only">MTC</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {NAV.map((item) => (
                <DesktopItem key={item.label} {...item} activePath={pathname} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA (always visible on desktop) */}
        <div className="hidden lg:block">
          <Button asChild className="rounded-full bg-[#F15A24] hover:bg-[#E55320] text-white">
            <Link href="/contactez-nous">Contactez-Nous</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger className="lg:hidden inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 text-white">
            <Menu className="h-5 w-5" />
            Menu
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

/* ---------- Desktop item with flyout content ---------- */

type DesktopItemProps = {
  label: string;
  href?: string;
  children?: DesktopItemProps[];
  activePath: string | null;
};

function DesktopItem({ label, href = "#", children, activePath }: DesktopItemProps) {
  const active = href !== "#" && activePath?.startsWith(href);

  if (!children?.length) {
    return (
      <NavigationMenuItem>
        <Link
          href={href}
          className={cn(
            "px-3 py-2 rounded-xl text-white/90 hover:text-[#F15A24] transition-colors",
            active && "text-[#F15A24]"
          )}
        >
          {label}
        </Link>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "bg-transparent text-white/90 hover:text-[#F15A24] data-[state=open]:text-[#F15A24] focus:text-[#F15A24]",
          "px-3 py-2 rounded-xl"
        )}
      >
        {label}
      </NavigationMenuTrigger>

      <NavigationMenuContent className="rounded-2xl p-3 md:p-4 shadow-xl">
        {/* two-column flyout when there are grandchildren, otherwise single list */}
        <div className={cn("grid gap-2", hasGrandchildren(children) ? "grid-cols-2 min-w-[520px]" : "min-w-[260px]")}>
          {children.map((child) => (
            <div key={child.label} className="rounded-xl bg-white p-3 md:p-4 shadow-[0_3px_12px_rgba(0,0,0,0.10)]">
              <Link
                href={child.href ?? "#"}
                className="group inline-flex items-center justify-between w-full"
              >
                <span className="font-semibold text-neutral-800 group-hover:text-[#F15A24] transition-colors">
                  {child.label}
                </span>
              </Link>

              {child.children?.length ? (
                <ul className="mt-2 space-y-1">
                  {child.children.map((g) => (
                    <li key={g.label}>
                      <Link
                        href={g.href ?? "#"}
                        className="block rounded-lg px-2 py-1 text-sm text-neutral-600 hover:text-[#F15A24] hover:bg-[#FDE0D1]/40 transition-colors"
                      >
                        {g.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function hasGrandchildren(children?: DesktopItemProps[]) {
  return children?.some((c) => c.children && c.children.length > 0);
}

/* ---------- Mobile sheet menu with accordions ---------- */

function MobileMenu() {
  return (
    <div className="h-full bg-[#4A4A4A] text-white">
      <div className="px-5 py-4 border-b border-white/10 text-lg font-semibold">Navigation</div>
      <div className="p-2">
        <Accordion type="single" collapsible className="w-full">
          {NAV.map((item) =>
            item.children?.length ? (
              <AccordionItem key={item.label} value={item.label}>
                <AccordionTrigger className="px-4 py-3 hover:text-[#F15A24]">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <div className="flex flex-col">
                    <Link
                      href={item.href ?? "#"}
                      className="px-6 py-2 text-white/90 hover:text-[#F15A24]"
                    >
                      {item.label} — Page
                    </Link>

                    {item.children?.map((child) => (
                      <div key={child.label} className="pl-2">
                        <Link
                          href={child.href ?? "#"}
                          className="px-6 py-2 text-white/90 hover:text-[#F15A24]"
                        >
                          {child.label}
                        </Link>
                        {child.children?.length ? (
                          <div className="ml-2">
                            {child.children.map((g) => (
                              <Link
                                key={g.label}
                                href={g.href ?? "#"}
                                className="block px-8 py-2 text-sm text-white/80 hover:text-[#F15A24]"
                              >
                                {g.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div key={item.label} className="px-4">
                <Link href={item.href ?? "#"} className="block px-2 py-3 hover:text-[#F15A24]">
                  {item.label}
                </Link>
              </div>
            )
          )}
        </Accordion>
      </div>

      {/* CTA */}
      <div className="px-5 py-4 border-t border-white/10">
        <Button asChild className="w-full rounded-full bg-[#F15A24] hover:bg-[#E55320]">
          <Link href="/contactez-nous">Contactez-Nous</Link>
        </Button>
      </div>
    </div>
  );
}
