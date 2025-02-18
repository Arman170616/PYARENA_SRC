import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const courses = [
  { name: "Python Fundamentals", description: "Learn the basics of Python programming", slug: "python-fundamentals" },
  { name: "Java Masterclass", description: "Become a Java expert", slug: "java-masterclass" },
  {
    name: "JavaScript Essentials",
    description: "Master JavaScript for web development",
    slug: "javascript-essentials",
  },
]

export default function ProgrammingCoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Programming Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link href={`/courses/programming/${course.slug}`} key={course.slug}>
            <Card>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

