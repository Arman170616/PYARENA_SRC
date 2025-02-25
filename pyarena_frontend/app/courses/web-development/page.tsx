import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Calendar, Users } from "lucide-react"

export default function WebDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Web Development Courses</h1>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-3xl">Python Django Bootcamp</CardTitle>
          <CardDescription>Master web development with Python and Django</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Bootcamp Overview</h3>
              <p className="mb-4">
                Dive into the world of web development with our comprehensive Python Django Bootcamp. Learn to build
                robust and scalable web applications using one of the most popular web frameworks in the industry.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>12 weeks, part-time</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>Next cohort starts July 1, 2023</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>Limited to 20 students per cohort</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="space-y-2">
                {[
                  "Python fundamentals and advanced concepts",
                  "Django framework architecture",
                  "Building RESTful APIs with Django REST framework",
                  "Database design and ORM usage",
                  "Authentication and authorization",
                  "Frontend integration (HTML, CSS, JavaScript)",
                  "Deployment and hosting of Django applications",
                  "Best practices in web development and security",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">Django</Badge>
            <Badge variant="secondary">Web Development</Badge>
            <Badge variant="secondary">Backend</Badge>
          </div>
          <Button asChild>
            <Link href="/courses/web-development/python-django-bootcamp">Learn More</Link>
          </Button>
        </CardFooter>
      </Card>

      <h2 className="text-2xl font-semibold mb-6">Other Web Development Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Frontend Fundamentals",
            description: "Master HTML, CSS, and JavaScript",
            duration: "8 weeks",
          },
          {
            title: "React.js Essentials",
            description: "Build modern UIs with React",
            duration: "10 weeks",
          },
          {
            title: "Full-Stack JavaScript",
            description: "Become a MERN stack developer",
            duration: "14 weeks",
          },
        ].map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Course
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

