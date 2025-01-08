import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-purple-800 flex items-center justify-center">
            <Shield className="mr-2 h-8 w-8" />
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-purple max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-4">
            1. Introduction
          </h2>
          <p>
            Welcome to Nexidea. We respect your privacy and are committed to
            protecting your personal data. This privacy policy will inform you
            about how we look after your personal data and tell you about your
            privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-4">
            2. Data We Collect
          </h2>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Identity Data: includes first name, last name, username or similar
              identifier.
            </li>
            <li>Contact Data: includes email address and telephone numbers.</li>
            <li>
              Technical Data: includes internet protocol (IP) address, your
              login data, browser type and version, time zone setting and
              location, browser plug-in types and versions, operating system and
              platform, and other technology on the devices you use to access
              this website.
            </li>
            <li>
              Usage Data: includes information about how you use our website,
              products and services.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-4">
            3. How We Use Your Data
          </h2>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Where we need to perform the contract we are about to enter into
              or have entered into with you.
            </li>
            <li>
              Where it is necessary for our legitimate interests (or those of a
              third party) and your interests and fundamental rights do not
              override those interests.
            </li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-4">
            4. Data Security
          </h2>
          <p>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used or accessed in an
            unauthorized way, altered or disclosed. In addition, we limit access
            to your personal data to those employees, agents, contractors and
            other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-4">
            5. Your Legal Rights
          </h2>
          <p>
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data, including the right to:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-4">
            6. Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at:
          </p>
          <p className="mt-2">Email: kartikmalviya30@gmail.com</p>

          <p className="text-sm text-gray-500 mt-8">
            This privacy policy is for informational purposes only. It does not
            create any contractual or legal rights. Please consult with a legal
            professional to ensure your privacy policy meets all applicable
            legal requirements.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
