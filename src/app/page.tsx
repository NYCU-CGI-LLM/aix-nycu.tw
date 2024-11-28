import { PageTransition } from "@/components/transitions/page-transition"
import { PageLayout } from "@/components/layout/page-layout"
import { Hero } from "@/components/sections/home/hero"
import { FeaturedPrograms } from "@/components/sections/home/featured-programs"

export default function Home() {
  return (
    <PageTransition>
      <PageLayout fullWidth>
        <Hero />
        <FeaturedPrograms />
      </PageLayout>
    </PageTransition>
  )
}