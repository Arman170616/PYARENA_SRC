import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const categories = [
  { name: "Programming", description: "Learn various programming languages", slug: "programming" },
  { name: "Web Development", description: "Master front-end and back-end technologies", slug: "web-development" },
  { name: "AI/ML", description: "Explore artificial intelligence and machine learning", slug: "ai-ml" },
  { name: "DevOps", description: "Learn about development operations and tools", slug: "devops" },
]

export default function CourseCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Course Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={`/courses/${category.slug}`} key={category.slug}>
            <Card>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

