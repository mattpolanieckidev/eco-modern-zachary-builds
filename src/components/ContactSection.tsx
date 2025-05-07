
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form (in a real app, you would handle form submission)
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 bg-eco-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-eco-green-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ready to start your project? Have questions about our services? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="w-full"
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-eco-green-500 hover:bg-eco-green-600 text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Our Office</h4>
                <p className="text-gray-700">
                  123 Eco Design Avenue<br />
                  Portland, OR 97201<br />
                  United States
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Contact Details</h4>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Phone:</span> (503) 555-0123
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@zacharyethan.com"
                    className="text-eco-green-500 hover:underline"
                  >
                    info@zacharyethan.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
                <p className="text-gray-700 mb-1">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-700">Weekends: By appointment only</p>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-eco-green-100 hover:bg-eco-green-200 text-eco-green-700 h-10 w-10 flex items-center justify-center rounded-full transition-colors duration-300"
                    >
                      {social[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
