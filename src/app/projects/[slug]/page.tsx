"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";

const projectData: Record<string, any> = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    subtitle: "Full-stack e-commerce solution",
    description: "A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    date: "2024",
    client: "Tech Retail Co.",
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-blue-500 to-purple-500",
    sections: [
      {
        title: "The Challenge",
        content: "The client needed a scalable e-commerce platform that could handle high traffic during sales events while providing a seamless shopping experience across all devices.",
      },
      {
        title: "The Solution",
        content: "We built a modern e-commerce platform using Next.js 14 with server-side rendering for optimal performance. The platform features real-time inventory updates, secure payment processing with Stripe, and a comprehensive admin dashboard.",
      },
      {
        title: "Key Features",
        content: "• Real-time inventory management\n• Secure payment processing\n• Advanced search and filtering\n• Customer reviews and ratings\n• Order tracking and notifications\n• Responsive design for all devices",
      },
      {
        title: "Results",
        content: "The platform successfully handled 10,000+ concurrent users during the launch sale, with a 40% increase in conversion rates and 99.9% uptime.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    ],
  },
  "ai-content-generator": {
    title: "AI Content Generator",
    subtitle: "AI-powered content creation tool",
    description: "An intelligent content creation platform leveraging OpenAI's GPT models to generate high-quality content for blogs, social media, and marketing materials.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    tags: ["React", "OpenAI", "Tailwind CSS", "Node.js", "MongoDB"],
    date: "2024",
    client: "Content Marketing Agency",
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-purple-500 to-pink-500",
    sections: [
      {
        title: "The Challenge",
        content: "Content creators needed a tool to streamline their workflow and generate high-quality content ideas and drafts quickly without sacrificing creativity.",
      },
      {
        title: "The Solution",
        content: "We developed an AI-powered content generator that uses OpenAI's latest models to create engaging content. The platform includes templates for various content types, tone adjustments, and SEO optimization.",
      },
      {
        title: "Key Features",
        content: "• Multiple content types (blogs, social media, emails)\n• Custom tone and style settings\n• SEO optimization suggestions\n• Content history and favorites\n• Collaborative workspace\n• Export in multiple formats",
      },
      {
        title: "Results",
        content: "Users reported a 60% reduction in content creation time and a 35% increase in engagement rates on published content.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1675557009874-4911a5e57149?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=800&h=600&fit=crop",
    ],
  },
  "social-dashboard": {
    title: "Social Media Dashboard",
    subtitle: "Analytics dashboard for social media",
    description: "A comprehensive analytics dashboard that aggregates data from multiple social media platforms, providing real-time insights and actionable metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    tags: ["React", "D3.js", "Firebase", "Material-UI", "Chart.js"],
    date: "2024",
    client: "Digital Marketing Firm",
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-green-500 to-blue-500",
    sections: [
      {
        title: "The Challenge",
        content: "Social media managers were struggling to monitor multiple platforms and extract meaningful insights from scattered data sources.",
      },
      {
        title: "The Solution",
        content: "We created a unified dashboard that integrates with major social media platforms, providing real-time analytics, trend analysis, and automated reporting.",
      },
      {
        title: "Key Features",
        content: "• Multi-platform integration\n• Real-time data visualization\n• Custom report generation\n• Engagement metrics tracking\n• Competitor analysis\n• Scheduled posts management",
      },
      {
        title: "Results",
        content: "Teams saved an average of 15 hours per week on reporting and saw a 45% improvement in campaign performance through data-driven decisions.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop",
    ],
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push("/#projects")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            onClick={() => router.push("/#projects")}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  {project.client}
                </span>
                <span className="flex items-center gap-2 text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-foreground/70 mb-8"
              >
                {project.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm flex items-center gap-2"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border border-border rounded-full font-medium hover:border-primary/50 transition-all flex items-center gap-2 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all flex items-center gap-2 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-50`} />
              <img
                src={project.image}
                alt={project.title}
                className="relative rounded-3xl w-full shadow-2xl border border-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {project.sections.map((section: any, index: number) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                <div className="pl-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                    {section.title}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
          >
            Project Gallery
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {project.gallery.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-foreground/70 mb-8">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push("/#contact")}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                Start a Project
              </button>
              <button
                onClick={() => router.push("/#projects")}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all hover:scale-105"
              >
                View All Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}