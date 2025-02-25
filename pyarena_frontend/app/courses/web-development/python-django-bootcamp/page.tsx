import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, Calendar, Users, DollarSign } from "lucide-react"

export default function PythonDjangoBootcampPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Python Django Bootcamp</h1>
      <p className="text-xl mb-8">Master web development with Python and Django</p>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructors">Instructors</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Bootcamp Overview</CardTitle>
              <CardDescription>Everything you need to know about the Python Django Bootcamp</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">
                    Our Python Django Bootcamp is designed to take you from a beginner to a confident Django developer.
                    Over the course of 12 weeks, you'll learn the ins and outs of web development using Python and the
                    Django framework.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>12 weeks, part-time (evenings and weekends)</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>Next cohort starts July 1, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>Limited to 20 students per cohort</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>Tuition: $2,999 (Payment plans available)</span>
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
          </Card>
        </TabsContent>
        <TabsContent value="curriculum">
          <Card>
            <CardHeader>
              <CardTitle>Curriculum</CardTitle>
              <CardDescription>Week-by-week breakdown of the bootcamp</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li>
                  <strong>Week 1-2:</strong> Python Fundamentals and Object-Oriented Programming
                </li>
                <li>
                  <strong>Week 3-4:</strong> Introduction to Django and MVT Architecture
                </li>
                <li>
                  <strong>Week 5-6:</strong> Working with Databases and Django ORM
                </li>
                <li>
                  <strong>Week 7-8:</strong> User Authentication and Authorization
                </li>
                <li>
                  <strong>Week 9-10:</strong> RESTful APIs with Django REST Framework
                </li>
                <li>
                  <strong>Week 11-12:</strong> Deployment, Testing, and Best Practices
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="instructors">
          <Card>
            <CardHeader>
              <CardTitle>Meet Your Instructors</CardTitle>
              <CardDescription>Learn from industry experts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                  <p className="text-muted-foreground mb-2">Lead Instructor</p>
                  <p>10+ years of experience in web development and Python programming.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                  <p className="text-muted-foreground mb-2">Assistant Instructor</p>
                  <p>Django core contributor and open-source enthusiast.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Got questions? We've got answers.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Do I need prior programming experience?</h3>
                  <p>While some programming experience is helpful, it's not required. We'll start with the basics.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Is there a job guarantee?</h3>
                  <p>
                    We don't offer a job guarantee, but we do provide career support and have a strong network of hiring
                    partners.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">What if I can't attend all the live sessions?</h3>
                  <p>
                    All sessions are recorded and made available to students. You can also schedule 1-on-1 sessions with
                    instructors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" asChild>
          <Link href="/enroll/python-django-bootcamp">Enroll Now</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="https://wa.me/8801811302984" target="_blank" rel="noopener noreferrer">
            Connect on WhatsApp
          </Link>
        </Button>
      </div>
    </div>
  )
}

