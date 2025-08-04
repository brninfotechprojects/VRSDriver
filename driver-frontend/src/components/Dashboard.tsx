import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/VRSLogo.png";
import {
  LogOut,
  Package,
  MapPin,
  Clock,
  User,
  Calendar,
  Navigation,
  Phone,
  IndianRupee,
  Star,
  Users,
  Share2,
  Menu,
  X,
  CheckCircle,
  Route,
  Home,
  Wallet,
  HelpCircle,
  RotateCcw,
  MessageCircle,
  CreditCard,
  History,
  Shield,
  TrendingUp,
  Battery,
  Wifi,
  Signal,
} from "lucide-react";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const upcomingPickups = [
    {
      id: "PKG1023",
      date: "26th July",
      location: "Warehouse 3, Sector 15, Mumbai",
      time: "10:00 AM",
      value: 1500,
      status: "pending",
      distance: "12 km",
      priority: "high",
    },
    {
      id: "PKG1024",
      date: "26th July",
      location: "Distribution Center, Thane West",
      time: "2:00 PM",
      value: 2200,
      status: "confirmed",
      distance: "8 km",
      priority: "medium",
    },
    {
      id: "PKG1025",
      date: "27th July",
      location: "Logistics Hub, Navi Mumbai",
      time: "9:30 AM",
      value: 1800,
      status: "pending",
      distance: "15 km",
      priority: "high",
    },
    {
      id: "PKG1026",
      date: "27th July",
      location: "Industrial Area, Pune",
      time: "11:45 AM",
      value: 3200,
      status: "confirmed",
      distance: "45 km",
      priority: "urgent",
    },
  ];

  const dropOffs = [
    {
      id: "DROP001",
      location: "Customer Hub, FC Road, Pune",
      contact: "Mr. Raj Kumar",
      phone: "+91 98765 43210",
      time: "1:00 PM",
      status: "pending",
      value: 1500,
      address: "Shop No. 15, FC Road, Pune - 411005",
    },
    {
      id: "DROP002",
      location: "Retail Store, College Road, Nashik",
      contact: "Ms. Priya Sharma",
      phone: "+91 87654 32109",
      time: "4:30 PM",
      status: "completed",
      value: 2200,
      address: "Ground Floor, College Road, Nashik - 422005",
    },
    {
      id: "DROP003",
      location: "Office Complex, MIDC, Aurangabad",
      contact: "Mr. Amit Patel",
      phone: "+91 76543 21098",
      time: "11:00 AM",
      status: "pending",
      value: 1800,
      address: "Building A-2, MIDC Area, Aurangabad - 431001",
    },
    {
      id: "DROP004",
      location: "Shopping Mall, Baner, Pune",
      contact: "Ms. Sneha Desai",
      phone: "+91 65432 10987",
      time: "3:15 PM",
      status: "in-transit",
      value: 3200,
      address: "Level 2, Baner Road, Pune - 411045",
    },
  ];

  const scheduleItems = [
    {
      time: "8:00 AM",
      activity: "Vehicle Inspection & Fuel Check",
      status: "completed",
      location: "VRS Depot",
    },
    {
      time: "9:00 AM",
      activity: "Route Planning & Documentation",
      status: "completed",
      location: "Office",
    },
    {
      time: "10:00 AM",
      activity: "Pickup - Warehouse 3, Mumbai",
      status: "current",
      location: "Mumbai",
    },
    {
      time: "1:00 PM",
      activity: "Drop - Customer Hub, Pune",
      status: "pending",
      location: "Pune",
    },
    {
      time: "3:00 PM",
      activity: "Lunch Break & Vehicle Check",
      status: "pending",
      location: "Highway Rest Stop",
    },
    {
      time: "4:30 PM",
      activity: "Drop - Retail Store, Nashik",
      status: "pending",
      location: "Nashik",
    },
    {
      time: "6:00 PM",
      activity: "Return to Base & Report",
      status: "pending",
      location: "VRS Depot",
    },
    {
      time: "7:00 PM",
      activity: "End of Shift",
      status: "pending",
      location: "VRS Depot",
    },
  ];

  const driverStats = {
    totalDeliveries: 156,
    completedToday: 2,
    pendingToday: 6,
    todayEarnings: 5500,
    monthlyEarnings: 45000,
    rating: 4.8,
    totalRides: 24,
    referralCode: "VRS2025DRIVER",
  };

  const handleLogout = () => {
    logout();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "current":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "in-transit":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "confirmed":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Live Tracking Page Component
  const LivePage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">Live Tracking</h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-600">Online</span>
          </div>
        </div>

        {/* Live Map */}
        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4">
          <img
            src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800&h=450"
            alt="Live GPS Tracking"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Current Status */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Current Location
                </p>
                <p className="text-xs text-gray-600">Mumbai Highway, KM 45</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-700">ETA</p>
                <p className="text-xs text-gray-600">45 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-lg font-bold text-blue-600">65 km/h</p>
            <p className="text-xs text-gray-600">Speed</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-green-600">125 km</p>
            <p className="text-xs text-gray-600">Distance</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-orange-600">2h 15m</p>
            <p className="text-xs text-gray-600">Duration</p>
          </div>
        </div>
      </div>

      {/* Device Status */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h4 className="text-lg font-bold text-gray-800 mb-4">Device Status</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Battery className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700">Battery</span>
            </div>
            <span className="text-sm font-medium text-green-600">85%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wifi className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">WiFi</span>
            </div>
            <span className="text-sm font-medium text-blue-600">Connected</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Signal className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-700">GPS Signal</span>
            </div>
            <span className="text-sm font-medium text-purple-600">Strong</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Ride History Page Component
  const RidePage = () => {
    const rideHistory = [
      {
        id: "R001",
        date: "25 Jul 2025",
        route: "Mumbai → Pune",
        earnings: 2500,
        status: "completed",
        duration: "3h 45m",
      },
      {
        id: "R002",
        date: "24 Jul 2025",
        route: "Pune → Nashik",
        earnings: 1800,
        status: "completed",
        duration: "2h 30m",
      },
      {
        id: "R003",
        date: "23 Jul 2025",
        route: "Nashik → Mumbai",
        earnings: 3200,
        status: "completed",
        duration: "4h 15m",
      },
      {
        id: "R004",
        date: "22 Jul 2025",
        route: "Mumbai → Thane",
        earnings: 800,
        status: "completed",
        duration: "1h 20m",
      },
      {
        id: "R005",
        date: "21 Jul 2025",
        route: "Thane → Kalyan",
        earnings: 600,
        status: "completed",
        duration: "45m",
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
          <div className="flex items-center space-x-3 mb-6">
            <History className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-800">Ride History</h3>
          </div>

          {/* Weekly Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-purple-600">24</p>
              <p className="text-sm text-gray-600">Total Rides</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-green-600 flex items-center justify-center">
                <IndianRupee className="w-5 h-5" />
                45,000
              </p>
              <p className="text-sm text-gray-600">Total Earnings</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-blue-600">4.8</p>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </div>
          </div>

          {/* Ride List */}
          <div className="space-y-3">
            {rideHistory.map((ride) => (
              <div
                key={ride.id}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-800">{ride.route}</p>
                    <p className="text-sm text-gray-600">
                      {ride.date} • {ride.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600 flex items-center">
                      <IndianRupee className="w-4 h-4" />
                      {ride.earnings.toLocaleString()}
                    </p>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {ride.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Wallet Page Component
  const WalletPage = () => {
    const transactions = [
      {
        id: "T001",
        type: "credit",
        amount: 2500,
        description: "Delivery Payment - PKG1023",
        date: "25 Jul 2025",
      },
      {
        id: "T002",
        type: "credit",
        amount: 1800,
        description: "Delivery Payment - PKG1022",
        date: "24 Jul 2025",
      },
      {
        id: "T003",
        type: "debit",
        amount: 200,
        description: "Fuel Expense",
        date: "24 Jul 2025",
      },
      {
        id: "T004",
        type: "credit",
        amount: 3200,
        description: "Delivery Payment - PKG1021",
        date: "23 Jul 2025",
      },
      {
        id: "T005",
        type: "credit",
        amount: 500,
        description: "Bonus Payment",
        date: "22 Jul 2025",
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
          <div className="flex items-center space-x-3 mb-6">
            <Wallet className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">Wallet</h3>
          </div>

          {/* Balance Card */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white mb-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm opacity-90">Available Balance</p>
                <p className="text-3xl font-bold flex items-center">
                  <IndianRupee className="w-6 h-6" />
                  12,450
                </p>
              </div>
              <CreditCard className="w-8 h-8 opacity-80" />
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-sm opacity-90">This Month Earnings</p>
              <p className="text-xl font-semibold flex items-center">
                <IndianRupee className="w-4 h-4" />
                45,000
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="bg-blue-50 p-4 rounded-xl text-center hover:bg-blue-100 transition-colors">
              <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Withdraw</p>
            </button>
            <button className="bg-purple-50 p-4 rounded-xl text-center hover:bg-purple-100 transition-colors">
              <History className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">History</p>
            </button>
          </div>

          {/* Recent Transactions */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Recent Transactions
            </h4>
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "credit"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {transaction.type === "credit" ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-gray-600">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`font-bold flex items-center ${
                      transaction.type === "credit"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "credit" ? "+" : "-"}
                    <IndianRupee className="w-4 h-4" />
                    {transaction.amount.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Support Page Component
  const SupportPage = () => {
    const faqItems = [
      {
        question: "How do I update my delivery status?",
        answer:
          "You can update delivery status from the pickup/drop-off cards by tapping the status button.",
      },
      {
        question: "What should I do if I face vehicle breakdown?",
        answer:
          "Immediately contact our 24/7 support helpline and report your location for immediate assistance.",
      },
      {
        question: "How are my earnings calculated?",
        answer:
          "Earnings are based on distance, delivery type, and time. Bonuses are added for excellent ratings.",
      },
      {
        question: "Can I change my scheduled pickups?",
        answer:
          "Contact dispatch at least 2 hours before scheduled time for any changes to your route.",
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
          <div className="flex items-center space-x-3 mb-6">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Support Center</h3>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-red-600" />
              <div>
                <p className="font-bold text-red-800">Emergency Helpline</p>
                <p className="text-red-700">📞 1800-VRS-HELP (24/7)</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="bg-blue-50 p-4 rounded-xl text-center hover:bg-blue-100 transition-colors">
              <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Call Support</p>
            </button>
            <button className="bg-green-50 p-4 rounded-xl text-center hover:bg-green-100 transition-colors">
              <MessageCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">Live Chat</p>
            </button>
          </div>

          {/* FAQ Section */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h4>
            <div className="space-y-3">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-medium text-gray-800 mb-2">
                    {faq.question}
                  </p>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Contact Information
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">
                  Support: +91 1800-VRS-HELP
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">
                  Email: support@vrslogistics.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">
                  Hours: 24/7 Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main Dashboard Content
  const DashboardContent = () => (
    <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Today's Rides
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                {upcomingPickups.length + dropOffs.length}
              </p>
            </div>
            <Package className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Completed
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600">
                {driverStats.completedToday}
              </p>
            </div>
            <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Pending
              </p>
              <p className="text-xl sm:text-2xl font-bold text-orange-600">
                {driverStats.pendingToday}
              </p>
            </div>
            <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Today's Earnings
              </p>
              <p className="text-lg sm:text-2xl font-bold text-purple-600 flex items-center">
                <IndianRupee className="w-4 sm:w-5 h-4 sm:h-5" />
                {driverStats.todayEarnings.toLocaleString()}
              </p>
            </div>
            <IndianRupee className="w-6 sm:w-8 h-6 sm:h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Upcoming Pickups */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-blue-100">
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <Package className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            Upcoming Pickups
          </h3>
        </div>
        <div className="space-y-3 sm:space-y-4 max-h-96 overflow-y-auto">
          {upcomingPickups.map((pickup) => (
            <div
              key={pickup.id}
              className="bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-200"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      {pickup.id}
                    </p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                        pickup.priority
                      )}`}
                    >
                      {pickup.priority}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {pickup.date} at {pickup.time}
                  </p>
                  <p className="text-xs text-gray-500">
                    {pickup.distance} away
                  </p>
                </div>
                <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center">
                  <IndianRupee className="w-3 h-3 mr-1" />
                  {pickup.value.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{pickup.location}</span>
              </div>
              <div className="mt-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    pickup.status
                  )}`}
                >
                  {pickup.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drop Offs */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-blue-100">
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            Drop Offs
          </h3>
        </div>
        <div className="space-y-3 sm:space-y-4 max-h-96 overflow-y-auto">
          {dropOffs.map((drop) => (
            <div
              key={drop.id}
              className="bg-blue-50 rounded-xl p-3 sm:p-4 border border-blue-200"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    {drop.location}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {drop.time}
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center">
                    <IndianRupee className="w-3 h-3 mr-1" />
                    {drop.value.toLocaleString()}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      drop.status
                    )}`}
                  >
                    {drop.status}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{drop.contact}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{drop.phone}</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-700">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">{drop.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-purple-100">
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <Calendar className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            Today's Schedule
          </h3>
        </div>
        <div className="space-y-2 sm:space-y-3 max-h-96 overflow-y-auto">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div
                className={`w-3 h-3 rounded-full flex-shrink-0 ${
                  item.status === "completed"
                    ? "bg-green-500"
                    : item.status === "current"
                    ? "bg-blue-500 animate-pulse"
                    : "bg-gray-300"
                }`}
              ></div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      {item.time}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {item.activity}
                    </p>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium mt-1 sm:mt-0 self-start ${
                      item.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "current"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Road Map & Directions */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-indigo-100">
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <Navigation className="w-5 sm:w-6 h-5 sm:h-6 text-indigo-600" />
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            Road Map & Directions
          </h3>
        </div>
        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4">
          <img
            src="https://th.bing.com/th/id/R.52dcec05736b0100fc781e66c3093b51?rik=XmcbZKSI2I4NBg&riu=http%3a%2f%2fhyderabad-india-online.com%2fwp-content%2fuploads%2f2009%2f11%2fgreater-hyd.png&ehk=aocFq6q5JiMNXTF0oqHZZr6%2bWy7XpSv4nyuXlUu%2fd9o%3d&risl=&pid=ImgRaw&r=0"
            alt="Google Maps Navigation Interface"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3 sm:p-4 bg-indigo-50 rounded-xl border border-indigo-200">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-800">
                Next Destination
              </p>
              <p className="text-xs sm:text-sm text-indigo-600">
                Customer Hub, Pune - 45 km away
              </p>
            </div>
            <Route className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Driver Rating & Referral */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-yellow-100">
        <div className="space-y-4 sm:space-y-6">
          {/* Rating Section */}
          <div>
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <Star className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-600" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                Your Rating
              </h3>
            </div>
            <div className="text-center">
              <div className="flex justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                {driverStats.rating}
              </p>
              <p className="text-sm text-gray-600">
                Based on {driverStats.totalRides} rides
              </p>
            </div>
          </div>

          {/* Referral Section */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <Users className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
              <h4 className="text-base sm:text-lg font-bold text-gray-800">
                Invite Friends
              </h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Share your referral code and earn ₹10 for each friend who joins!
            </p>
            <div className="bg-gray-100 rounded-lg p-3 mb-4 text-center">
              <p className="text-lg sm:text-xl font-bold text-purple-600">
                {driverStats.referralCode}
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span className="text-sm sm:text-base">Share Referral Link</span>
            </button>
          </div>
        </div>
      </div>

      {/* Monthly Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
          Monthly Summary
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-blue-600">
              {driverStats.totalDeliveries}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">Total Rides</p>
          </div>
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-green-600 flex items-center justify-center">
              <IndianRupee className="w-4 sm:w-5 h-4 sm:h-5" />
              {driverStats.monthlyEarnings.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">Monthly Earnings</p>
          </div>
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-purple-600">
              {driverStats.rating}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-orange-600">98%</p>
            <p className="text-xs sm:text-sm text-gray-600">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Live":
        return <LivePage />;
      case "Ride":
        return <RidePage />;
      case "Wallet":
        return <WalletPage />;
      case "Support":
        return <SupportPage />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              {/* <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800">VRS Logistics</h1>
                <p className="text-sm text-gray-600">Driver Dashboard</p>
              </div> */}
              <img
                style={{ objectFit: "contain", height: "90px" }}
                src={logo}
              ></img>
              {/* <div className="sm:hidden">
                <h1 className="text-lg font-bold text-gray-800">
                  VRS Logistics
                </h1>
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-lg">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">
                  {driverStats.rating}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Rating: {driverStats.rating}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Welcome Section */}
        {activeTab === "Dashboard" && (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Welcome back, Driver!
            </h2>
            <p className="text-gray-600">Here's your schedule for today</p>
          </div>
        )}

        {/* Dynamic Content Based on Active Tab */}
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden z-50">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setActiveTab("Dashboard")}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              activeTab === "Dashboard"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab("Live")}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              activeTab === "Live"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600"
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span className="text-xs font-medium">Live</span>
          </button>

          <button
            onClick={() => setActiveTab("Ride")}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              activeTab === "Ride"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600"
            }`}
          >
            <RotateCcw className="w-5 h-5" />
            <span className="text-xs font-medium">Ride</span>
          </button>

          <button
            onClick={() => setActiveTab("Wallet")}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              activeTab === "Wallet"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600"
            }`}
          >
            <Wallet className="w-5 h-5" />
            <span className="text-xs font-medium">Wallet</span>
          </button>

          <button
            onClick={() => setActiveTab("Support")}
            className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
              activeTab === "Support"
                ? "text-blue-600 bg-blue-50"
                : "text-gray-600"
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-xs font-medium">Support</span>
          </button>
        </div>
      </div>

      {/* Add bottom padding to prevent content from being hidden behind bottom nav on mobile */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default Dashboard;
