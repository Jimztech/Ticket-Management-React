import DecorativeCircle from "@/components/DecorativeCircle"
import { Button } from "@/components/ui/button"
import WavyBackground from "@/components/WavyBackground"
import { CheckCircle2, Clock, BarChart3, Users, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
    {
        icon: Clock,
        title: "Real-Time Updates",
        description: "Track ticket status changes instantly with live updates and notifications.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Work together seamlessly with your team on ticket resolution.",
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Get insights into your ticket metrics and team performance.",
    },
    {
        icon: Zap,
        title: "Fast & Efficient",
        description: "Streamlined workflows help you resolve tickets faster than ever.",
    },
    {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Your data is protected with enterprise-grade security measures.",
    },
    {
        icon: CheckCircle2,
        title: "Easy to Use",
        description: "Intuitive interface that your team will love from day one.",
    },
];

const stats = [
    { value: "50K+", label: "Tickets Resolved" },
    { value: "1K+", label: "Active Teams" },
    { value: "99.9%", label: "Uptime" },
]

export default function Landing() {
    return(
        <div className="min-h-screen flex flex-col">
            <header className="px-4 py-4 sm:px-6 lg:px-8 sticky z-100 bg-card/50 border-b border-border">
                <p className="text-2xl font-semibold">Ticketing</p>
            </header> 

            {/* Hero section */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-hero">
                <WavyBackground />
                <DecorativeCircle className="top-20 right-10" size="xl" />
                <DecorativeCircle className="bottom-40 left-10" size="lg" />

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            Manage Your Tickets 
                            <span className="block bg-gradient-primary bg-clip-text text-transparent">
                                Effortlessly
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                            Track, manage, and resolve support tickets with a modern, 
                            intuitive platform built for productive teams.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                            <Button className="bg-gradient-primary">
                                Get Started Free
                            </Button>
                            <Button className="bg-white text-sky-500 hover:bg-sky-500 hover:text-white">
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-hero">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Everything You Need
                        </h2>

                        <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
                            Powerful features to streamline your ticket management workflow
                        </p>
                    </div>

                    <div>
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="bg-gradient-card border-border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <CardHeader>
                                    <div>
                                        <feature.icon className="h-6 w-6 text-primary-foreground"/>
                                    </div>
                                    <CardTitle></CardTitle>
                                    <CardDescription></CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}