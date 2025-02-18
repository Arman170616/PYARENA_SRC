import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the course details based on the slug
  const course = {
    name: "Python Fundamentals",
    description: "Learn the basics of Python programming",
    price: 6000,
    duration: "6 weeks",
    instructor: "M M Arman Hossain",
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{course.name}</h1>
      <p className="text-xl mb-4">{course.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
          <ul className="space-y-2">
            <li>
              <strong>Duration:</strong> {course.duration}
            </li>
            <li>
              <strong>Instructor:</strong> {course.instructor}
            </li>
            <li>
              <strong>Price:</strong> ${course.price}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Python syntax and data types</li>
            <li>Control structures and functions</li>
            <li>Object-oriented programming in Python</li>
            <li>Working with files and modules</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button size="lg">Enroll Now</Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="https://wa.me/8801811302984" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon className="mr-2 h-5 w-5" />
            Connect on WhatsApp
          </Link>
        </Button>
      </div>
    </div>
  )
}

