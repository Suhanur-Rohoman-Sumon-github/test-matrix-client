import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Activity,
  Clock,
  Shield,
  Download,
  Settings,
  BarChart3,
  PieChart,
  Target,
  AlertCircle,
} from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for analytics
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-primary",
    },
    {
      title: "Active Assessments",
      value: "459",
      change: "+8%",
      icon: BookOpen,
      color: "text-success",
    },
    {
      title: "Certificates Issued",
      value: "1,234",
      change: "+23%",
      icon: Award,
      color: "text-accent",
    },
    {
      title: "Pass Rate",
      value: "87%",
      change: "+5%",
      icon: Target,
      color: "text-warning",
    },
  ];

  const recentUsers = [
    {
      name: "John Smith",
      email: "john@example.com",
      level: "B2",
      status: "Active",
      date: "2024-01-15",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      level: "A1",
      status: "Completed",
      date: "2024-01-14",
    },
    {
      name: "Mike Wilson",
      email: "mike@example.com",
      level: "C1",
      status: "In Progress",
      date: "2024-01-13",
    },
    {
      name: "Emma Davis",
      email: "emma@example.com",
      level: "A2",
      status: "Failed",
      date: "2024-01-12",
    },
  ];

  const assessmentData = [
    { level: "A1", passed: 340, failed: 60, total: 400 },
    { level: "A2", passed: 280, failed: 45, total: 325 },
    { level: "B1", passed: 210, failed: 40, total: 250 },
    { level: "B2", passed: 180, failed: 35, total: 215 },
    { level: "C1", passed: 95, failed: 25, total: 120 },
    { level: "C2", passed: 45, failed: 15, total: 60 },
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 light-top">
          <h1 className="text-4xl font-bold glow-text mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive analytics and management for the assessment platform
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <PieChart className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <p className="text-xs text-success">
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="">
                <CardHeader>
                  <CardTitle className="text-white">
                    Assessment Progress
                  </CardTitle>
                  <CardDescription>
                    User performance across all levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assessmentData.map((item) => (
                      <div key={item.level} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white font-medium">
                            {item.level}
                          </span>
                          <span className="text-muted-foreground">
                            {Math.round((item.passed / item.total) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{
                              width: `${(item.passed / item.total) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader>
                  <CardTitle className="text-white">Recent Activity</CardTitle>
                  <CardDescription>
                    Latest user assessments and certifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.slice(0, 6).map((user, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Level {user.level} • {user.status}
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {user.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  User Management
                </h2>
                <p className="text-muted-foreground">
                  Monitor and manage user accounts
                </p>
              </div>
              <Button variant="neon">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>

            <Card className=" light-bottom">
              <CardHeader>
                <CardTitle className="text-white">Recent Users</CardTitle>
                <CardDescription>
                  Latest user registrations and assessment results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-white font-medium">
                          Name
                        </th>
                        <th className="text-left py-3 px-2 text-white font-medium">
                          Email
                        </th>
                        <th className="text-left py-3 px-2 text-white font-medium">
                          Level
                        </th>
                        <th className="text-left py-3 px-2 text-white font-medium">
                          Status
                        </th>
                        <th className="text-left py-3 px-2 text-white font-medium">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 px-2 text-white">{user.name}</td>
                          <td className="py-3 px-2 text-muted-foreground">
                            {user.email}
                          </td>
                          <td className="py-3 px-2">
                            <Badge
                              variant="outline"
                              className="text-primary border-primary/30"
                            >
                              {user.level}
                            </Badge>
                          </td>
                          <td className="py-3 px-2">
                            <Badge
                              variant={
                                user.status === "Completed"
                                  ? "default"
                                  : user.status === "Active"
                                  ? "outline"
                                  : user.status === "In Progress"
                                  ? "secondary"
                                  : "destructive"
                              }
                            >
                              {user.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-muted-foreground">
                            {user.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Analytics Overview
              </h2>
              <p className="text-muted-foreground">
                Detailed insights into platform performance
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Daily Active Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">847</div>
                  <div className="text-sm text-success">+12% vs yesterday</div>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Avg. Assessment Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">
                    42min
                  </div>
                  <div className="text-sm text-warning">-3min vs last week</div>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Security Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white mb-2">3</div>
                  <div className="text-sm text-destructive">+1 new alert</div>
                </CardContent>
              </Card>
            </div>

            <Card className="">
              <CardHeader>
                <CardTitle className="text-white">
                  Competency Performance
                </CardTitle>
                <CardDescription>
                  Success rates across different digital competencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-white font-medium">
                      Programming Logic
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Success Rate
                        </span>
                        <span className="text-primary">89%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-[89%]" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-medium">Web Development</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Success Rate
                        </span>
                        <span className="text-primary">76%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-[76%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                System Settings
              </h2>
              <p className="text-muted-foreground">
                Configure platform parameters and security
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="">
                <CardHeader>
                  <CardTitle className="text-white">
                    Assessment Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure assessment timing and scoring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">
                      Time per Question (minutes)
                    </label>
                    <div className="text-lg text-primary">1.5</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">
                      Pass Threshold (%)
                    </label>
                    <div className="text-lg text-primary">75</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit Settings
                  </Button>
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader>
                  <CardTitle className="text-white">
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Platform security and monitoring controls
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Secure Browser Mode</span>
                    <Badge variant="default">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">Video Monitoring</span>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">IP Tracking</span>
                    <Badge variant="default">Enabled</Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure Security
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
