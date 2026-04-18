const transactions = [
  {
    id: 1,
    title: "Grocery Shopping",
    amount: 2450,
    type: "Expense",
    category: "Food",
    date: "2026-01-03",
    notes:
      "Weekly grocery run at the supermarket, picked up vegetables, dairy, and pantry essentials for the week.",
  },
  {
    id: 2,
    title: "Monthly Salary",
    amount: 85000,
    type: "Income",
    category: "Salary",
    date: "2026-01-05",
    notes:
      "January monthly salary credited from employer after tax deduction, includes performance bonus for Q4 last year.",
  },
  {
    id: 3,
    title: "Electricity Bill",
    amount: 1200,
    type: "Expense",
    category: "Utilities",
    date: "2026-01-06",
    notes:
      "Monthly electricity bill payment for the apartment, slightly higher due to increased AC usage during summer months.",
  },
  {
    id: 4,
    title: "Netflix Subscription",
    amount: 649,
    type: "Expense",
    category: "Entertainment",
    date: "2026-01-07",
    notes:
      "Monthly Netflix premium plan subscription renewal for streaming movies and web series on multiple devices.",
  },
  {
    id: 5,
    title: "Uber Ride",
    amount: 320,
    type: "Expense",
    category: "Transport",
    date: "2026-01-08",
    notes:
      "Cab ride from office to home during late night hours, surge pricing applied due to peak demand in the evening.",
  },
  {
    id: 6,
    title: "Restaurant Dinner",
    amount: 1850,
    type: "Expense",
    category: "Food",
    date: "2026-01-10",
    notes:
      "Dinner with family at a local restaurant celebrating wife's birthday, ordered three-course meal with dessert.",
  },
  {
    id: 7,
    title: "Freelance Payment",
    amount: 15000,
    type: "Income",
    category: "Freelance",
    date: "2026-01-12",
    notes:
      "Received payment for web development project completed for a startup client, invoice settled after two-week delay.",
  },
  {
    id: 8,
    title: "Gym Membership",
    amount: 1500,
    type: "Expense",
    category: "Health",
    date: "2026-01-13",
    notes:
      "Monthly gym membership renewal at the fitness center near home, includes access to all equipment and group classes.",
  },
  {
    id: 9,
    title: "Phone Recharge",
    amount: 599,
    type: "Expense",
    category: "Utilities",
    date: "2026-01-14",
    notes:
      "Monthly prepaid mobile recharge with unlimited calls, 2GB daily data and free roaming benefits for the month.",
  },
  {
    id: 10,
    title: "Online Course",
    amount: 3999,
    type: "Expense",
    category: "Education",
    date: "2026-01-15",
    notes:
      "Enrolled in an advanced React and TypeScript course on Udemy, annual subscription with lifetime access included.",
  },
  {
    id: 11,
    title: "Book Purchase",
    amount: 450,
    type: "Expense",
    category: "Education",
    date: "2026-01-16",
    notes:
      "Bought three programming books from an online bookstore covering system design, algorithms and data structures.",
  },
  {
    id: 12,
    title: "Medical Checkup",
    amount: 800,
    type: "Expense",
    category: "Health",
    date: "2026-01-17",
    notes:
      "Routine annual health checkup at the diagnostic center, includes blood test, urine test and doctor consultation fee.",
  },
  {
    id: 13,
    title: "Amazon Shopping",
    amount: 3200,
    type: "Expense",
    category: "Shopping",
    date: "2026-01-18",
    notes:
      "Ordered a Bluetooth speaker and phone case during Amazon sale, delivery expected within two to three business days.",
  },
  {
    id: 14,
    title: "Dividend Income",
    amount: 4500,
    type: "Income",
    category: "Investment",
    date: "2026-01-20",
    notes:
      "Quarterly dividend received from mutual fund investment portfolio managed through Zerodha, credited to bank account.",
  },
  {
    id: 15,
    title: "Coffee",
    amount: 150,
    type: "Expense",
    category: "Food",
    date: "2026-01-21",
    notes:
      "Evening coffee and snack at the café near office, casual team outing after a long project review meeting session.",
  },
  {
    id: 16,
    title: "Petrol Refill",
    amount: 2000,
    type: "Expense",
    category: "Transport",
    date: "2026-01-22",
    notes:
      "Full tank petrol refill for the car at the nearby fuel station, prices slightly higher compared to last month.",
  },
  {
    id: 17,
    title: "House Rent",
    amount: 18000,
    type: "Expense",
    category: "Housing",
    date: "2026-01-01",
    notes:
      "Monthly house rent payment for the 2BHK apartment in the city, transferred directly to landlord via bank NEFT.",
  },
  {
    id: 18,
    title: "Savings Interest",
    amount: 620,
    type: "Income",
    category: "Investment",
    date: "2026-01-25",
    notes:
      "Monthly interest earned on fixed deposit savings account, auto-credited by the bank as per the deposit schedule.",
  },
  {
    id: 19,
    title: "Movie Tickets",
    amount: 700,
    type: "Expense",
    category: "Entertainment",
    date: "2026-01-26",
    notes:
      "Two movie tickets booked online for a weekend screening, includes recliner seats and convenience booking charges.",
  },
  {
    id: 20,
    title: "Dinner Takeout",
    amount: 550,
    type: "Expense",
    category: "Food",
    date: "2026-01-27",
    notes:
      "Ordered dinner via Swiggy for the family, had biryani and kebabs from a popular restaurant, quick 30-minute delivery.",
  },
  {
    id: 21,
    title: "Water Bill",
    amount: 350,
    type: "Expense",
    category: "Utilities",
    date: "2026-02-01",
    notes:
      "Monthly water supply bill payment to the municipal corporation, auto-deducted from the registered bank account.",
  },
  {
    id: 22,
    title: "Side Project Income",
    amount: 8000,
    type: "Income",
    category: "Freelance",
    date: "2026-02-03",
    notes:
      "Received first milestone payment for a logo and branding design project from a new e-commerce client overseas.",
  },
  {
    id: 23,
    title: "Vegetable Market",
    amount: 380,
    type: "Expense",
    category: "Food",
    date: "2026-02-04",
    notes:
      "Bought fresh vegetables and fruits from the local weekly market, much cheaper than supermarket, good quality produce.",
  },
  {
    id: 24,
    title: "Haircut",
    amount: 250,
    type: "Expense",
    category: "Personal Care",
    date: "2026-02-05",
    notes:
      "Monthly haircut at the local salon, also had a head massage and beard trim included in the premium grooming package.",
  },
  {
    id: 25,
    title: "Internet Bill",
    amount: 999,
    type: "Expense",
    category: "Utilities",
    date: "2026-02-06",
    notes:
      "Broadband internet bill for the month, 300 Mbps unlimited plan with no FUP limit, auto-pay deducted on the fifth.",
  },
  {
    id: 26,
    title: "Train Ticket",
    amount: 480,
    type: "Expense",
    category: "Transport",
    date: "2026-02-07",
    notes:
      "Reserved train ticket booked for weekend travel to hometown, sleeper class seat, e-ticket sent to email.",
  },
  {
    id: 27,
    title: "Spotify Premium",
    amount: 119,
    type: "Expense",
    category: "Entertainment",
    date: "2026-02-08",
    notes:
      "Monthly Spotify premium renewal, ad-free music streaming with offline download and high quality audio playback.",
  },
  {
    id: 28,
    title: "Rental Income",
    amount: 12000,
    type: "Income",
    category: "Rental",
    date: "2026-02-10",
    notes:
      "Monthly rent collected from tenants living in the family-owned flat located in the outskirts of the city.",
  },
  {
    id: 29,
    title: "Pharmacy",
    amount: 650,
    type: "Expense",
    category: "Health",
    date: "2026-02-11",
    notes:
      "Purchased prescribed medicines and vitamin supplements from the pharmacy, insurance reimbursement to be claimed later.",
  },
  {
    id: 30,
    title: "Eating Out Lunch",
    amount: 420,
    type: "Expense",
    category: "Food",
    date: "2026-02-12",
    notes:
      "Lunch with colleagues at a South Indian restaurant near the office, had a full thali meal with dessert included.",
  },
  {
    id: 31,
    title: "Stock Profit",
    amount: 6200,
    type: "Income",
    category: "Investment",
    date: "2026-02-14",
    notes:
      "Realized profit from selling equity shares in the portfolio, held for over one year qualifying for long-term capital gains.",
  },
  {
    id: 32,
    title: "Clothing Purchase",
    amount: 2800,
    type: "Expense",
    category: "Shopping",
    date: "2026-02-15",
    notes:
      "Bought formal shirts and trousers during end-of-season sale at the mall, great discounts on branded clothing items.",
  },
  {
    id: 33,
    title: "Auto Rickshaw",
    amount: 80,
    type: "Expense",
    category: "Transport",
    date: "2026-02-16",
    notes:
      "Short auto ride from the metro station to home in the evening, metered fare with a small additional night charge.",
  },
  {
    id: 34,
    title: "Cooking Gas",
    amount: 900,
    type: "Expense",
    category: "Utilities",
    date: "2026-02-17",
    notes:
      "LPG cylinder booking and delivery done online, subsidised rate applied after Aadhaar linking with gas connection.",
  },
  {
    id: 35,
    title: "Tuition Fee",
    amount: 5000,
    type: "Expense",
    category: "Education",
    date: "2026-02-18",
    notes:
      "Monthly tuition fee payment for child's math and science home tuition classes, paid directly to the private tutor.",
  },
  {
    id: 36,
    title: "Birthday Gift",
    amount: 1200,
    type: "Expense",
    category: "Shopping",
    date: "2026-02-20",
    notes:
      "Bought a gift hamper for a close friend's birthday, included chocolates, skincare products and a personalised card.",
  },
  {
    id: 37,
    title: "Health Insurance",
    amount: 4500,
    type: "Expense",
    category: "Health",
    date: "2026-02-22",
    notes:
      "Annual health insurance premium paid for family floater plan covering hospitalisation, surgery and outpatient expenses.",
  },
  {
    id: 38,
    title: "Swiggy Order",
    amount: 480,
    type: "Expense",
    category: "Food",
    date: "2026-02-23",
    notes:
      "Late-night food order from Swiggy, had pasta and garlic bread from an Italian restaurant, free delivery on first order.",
  },
  {
    id: 39,
    title: "Consulting Fee",
    amount: 20000,
    type: "Income",
    category: "Freelance",
    date: "2026-02-25",
    notes:
      "Consulting fee received for a two-week engagement with a fintech startup on their backend architecture review project.",
  },
  {
    id: 40,
    title: "Newspaper Subscription",
    amount: 149,
    type: "Expense",
    category: "Education",
    date: "2026-02-26",
    notes:
      "Monthly digital newspaper subscription renewed for access to premium news articles and exclusive editorial content.",
  },
  {
    id: 41,
    title: "House Rent",
    amount: 18000,
    type: "Expense",
    category: "Housing",
    date: "2026-03-01",
    notes:
      "Monthly house rent payment for March, transferred via NEFT on the first of the month as per the rental agreement.",
  },
  {
    id: 42,
    title: "Monthly Salary",
    amount: 85000,
    type: "Income",
    category: "Salary",
    date: "2026-03-05",
    notes:
      "March monthly salary credited on time, no deductions this month, performance incentive also included in the amount.",
  },
  {
    id: 43,
    title: "Car Maintenance",
    amount: 3500,
    type: "Expense",
    category: "Transport",
    date: "2026-03-06",
    notes:
      "Routine car service done at the authorised service centre, included oil change, filter replacement and brake check.",
  },
  {
    id: 44,
    title: "Yoga Classes",
    amount: 1200,
    type: "Expense",
    category: "Health",
    date: "2026-03-07",
    notes:
      "Monthly yoga class fee at the neighbourhood studio, early morning batch with experienced certified instructor.",
  },
  {
    id: 45,
    title: "Stationery",
    amount: 350,
    type: "Expense",
    category: "Education",
    date: "2026-03-08",
    notes:
      "Bought notebooks, pens and highlighters for the month, useful for daily journaling and meeting notes at work.",
  },
  {
    id: 46,
    title: "Google One Storage",
    amount: 130,
    type: "Expense",
    category: "Utilities",
    date: "2026-03-09",
    notes:
      "Monthly Google One subscription for 100GB cloud storage, used for backing up photos, documents and app data.",
  },
  {
    id: 47,
    title: "Weekend Trip Expense",
    amount: 6500,
    type: "Expense",
    category: "Travel",
    date: "2026-03-10",
    notes:
      "Expenses for a short weekend trip to a hill station, includes travel, accommodation, food and local sightseeing costs.",
  },
  {
    id: 48,
    title: "Hotel Stay Income",
    amount: 3200,
    type: "Income",
    category: "Rental",
    date: "2026-03-12",
    notes:
      "Income from short-term Airbnb rental of the spare room during a long weekend, three nights at a competitive rate.",
  },
  {
    id: 49,
    title: "Fast Food",
    amount: 320,
    type: "Expense",
    category: "Food",
    date: "2026-03-13",
    notes:
      "Quick fast food meal at the burger joint near the metro station, had a combo meal with fries and cold drink.",
  },
  {
    id: 50,
    title: "Bus Pass",
    amount: 500,
    type: "Expense",
    category: "Transport",
    date: "2026-03-14",
    notes:
      "Monthly bus pass purchased for commuting within the city, unlimited rides on designated routes for the full month.",
  },
  {
    id: 51,
    title: "Home Decor",
    amount: 2200,
    type: "Expense",
    category: "Shopping",
    date: "2026-03-15",
    notes:
      "Bought a set of decorative plants and wall frames to brighten up the living room, purchased from a local home decor store.",
  },
  {
    id: 52,
    title: "Tax Refund",
    amount: 9800,
    type: "Income",
    category: "Tax Refund",
    date: "2026-03-16",
    notes:
      "Income tax refund credited by the IT department for excess TDS deducted, verified through the income tax portal.",
  },
  {
    id: 53,
    title: "Lunch Box Food",
    amount: 180,
    type: "Expense",
    category: "Food",
    date: "2026-03-17",
    notes:
      "Bought fruits and snacks to pack in the lunch box for the day, healthier option compared to eating out every afternoon.",
  },
  {
    id: 54,
    title: "Printer Ink",
    amount: 750,
    type: "Expense",
    category: "Education",
    date: "2026-03-18",
    notes:
      "Replacement ink cartridges for the home printer, needed for printing study material and official documents at home.",
  },
  {
    id: 55,
    title: "Zomato Order",
    amount: 560,
    type: "Expense",
    category: "Food",
    date: "2026-03-20",
    notes:
      "Ordered a family combo from Zomato, had Chinese food with noodles and manchurian, delivery took about 45 minutes.",
  },
  {
    id: 56,
    title: "Investment SIP",
    amount: 5000,
    type: "Expense",
    category: "Investment",
    date: "2026-03-21",
    notes:
      "Monthly SIP investment in an equity mutual fund through the Groww app, auto-deducted from savings account on the 21st.",
  },
  {
    id: 57,
    title: "Evening Snacks",
    amount: 120,
    type: "Expense",
    category: "Food",
    date: "2026-03-22",
    notes:
      "Bought some biscuits and chips from the nearby convenience store for evening snacking during a long work from home day.",
  },
  {
    id: 58,
    title: "App Subscription",
    amount: 299,
    type: "Expense",
    category: "Entertainment",
    date: "2026-03-23",
    notes:
      "Monthly premium app subscription for a productivity tool used for task management, note-taking and team collaboration.",
  },
  {
    id: 59,
    title: "Repair Service",
    amount: 1800,
    type: "Expense",
    category: "Housing",
    date: "2026-03-24",
    notes:
      "Plumber called to fix a leaking tap and bathroom pipe, labour and material charges included in the final service bill.",
  },
  {
    id: 60,
    title: "Cash Gift Received",
    amount: 5000,
    type: "Income",
    category: "Gift",
    date: "2026-03-25",
    notes:
      "Received cash gift from relatives during a family function, will be added to the savings account for future planning.",
  },
  {
    id: 61,
    title: "Monthly Salary",
    amount: 85000,
    type: "Income",
    category: "Salary",
    date: "2026-04-05",
    notes:
      "April monthly salary credited, includes a mid-year increment of 8% effective from this month as per appraisal letter.",
  },
  {
    id: 62,
    title: "House Rent",
    amount: 18000,
    type: "Expense",
    category: "Housing",
    date: "2026-04-01",
    notes:
      "April rent payment made on the first, a small increase of Rs 500 applied as per revised annual rental agreement terms.",
  },
  {
    id: 63,
    title: "Medical Consultation",
    amount: 500,
    type: "Expense",
    category: "Health",
    date: "2026-04-06",
    notes:
      "Visited a general physician for seasonal allergy symptoms, consultation fee paid in cash, medicines prescribed separately.",
  },
  {
    id: 64,
    title: "Tea and Breakfast",
    amount: 90,
    type: "Expense",
    category: "Food",
    date: "2026-04-07",
    notes:
      "Quick breakfast at the roadside stall near the bus stop before heading to office, had idli sambar and cutting chai.",
  },
  {
    id: 65,
    title: "Online Grocery",
    amount: 1800,
    type: "Expense",
    category: "Food",
    date: "2026-04-08",
    notes:
      "Weekly grocery order placed on Blinkit for home delivery, includes staples, dairy, personal care and household items.",
  },
  {
    id: 66,
    title: "LinkedIn Premium",
    amount: 2600,
    type: "Expense",
    category: "Education",
    date: "2026-04-09",
    notes:
      "Monthly LinkedIn Premium Career plan for job seeking features, InMail credits and learning course access throughout month.",
  },
  {
    id: 67,
    title: "Metro Card Recharge",
    amount: 500,
    type: "Expense",
    category: "Transport",
    date: "2026-04-10",
    notes:
      "Recharged the metro smart card online for daily office commute, balance should last for approximately three weeks.",
  },
  {
    id: 68,
    title: "YouTube Premium",
    amount: 189,
    type: "Expense",
    category: "Entertainment",
    date: "2026-04-11",
    notes:
      "Monthly YouTube Premium subscription for ad-free video watching and background playback on mobile and desktop.",
  },
  {
    id: 69,
    title: "Freelance Design Job",
    amount: 12000,
    type: "Income",
    category: "Freelance",
    date: "2026-04-12",
    notes:
      "Payment received for UI/UX design work completed for a mobile app client, final delivery approved after revision round.",
  },
  {
    id: 70,
    title: "Dentist Visit",
    amount: 1500,
    type: "Expense",
    category: "Health",
    date: "2026-04-13",
    notes:
      "Visited the dentist for a routine dental cleaning and checkup, no cavities found, advised to use a sensitivity toothpaste.",
  },
  {
    id: 71,
    title: "Family Outing",
    amount: 2400,
    type: "Expense",
    category: "Entertainment",
    date: "2026-04-14",
    notes:
      "Family day out to the amusement park, entry tickets and food for three persons, kids enjoyed the rides thoroughly.",
  },
  {
    id: 72,
    title: "Milk and Bread",
    amount: 95,
    type: "Expense",
    category: "Food",
    date: "2026-04-15",
    notes:
      "Daily staples bought from the neighbourhood dairy and bakery shop, fresh milk and whole wheat bread for morning breakfast.",
  },
  {
    id: 73,
    title: "Festival Shopping",
    amount: 4200,
    type: "Expense",
    category: "Shopping",
    date: "2026-04-16",
    notes:
      "Bought ethnic wear and accessories for the upcoming festival season, great deals found at the city mall during sale event.",
  },
  {
    id: 74,
    title: "Bonus Income",
    amount: 30000,
    type: "Income",
    category: "Salary",
    date: "2026-04-17",
    notes:
      "Annual performance bonus credited along with salary, recognition for successfully delivering three major projects this year.",
  },
  {
    id: 75,
    title: "Parking Fee",
    amount: 40,
    type: "Expense",
    category: "Transport",
    date: "2026-04-18",
    notes:
      "Paid parking fee at the mall for two hours, parking charges are per hour, a bit expensive but convenient for shopping.",
  },
  {
    id: 76,
    title: "Cooking Class",
    amount: 800,
    type: "Expense",
    category: "Education",
    date: "2026-03-26",
    notes:
      "Weekend cooking workshop for learning Italian and Mediterranean cuisine basics, hands-on session with all ingredients provided.",
  },
  {
    id: 77,
    title: "EMI Payment",
    amount: 8500,
    type: "Expense",
    category: "Housing",
    date: "2026-03-27",
    notes:
      "Monthly EMI payment for the home loan deducted via auto-debit, currently in the 18th month of a 20-year repayment plan.",
  },
  {
    id: 78,
    title: "Breakfast Café",
    amount: 280,
    type: "Expense",
    category: "Food",
    date: "2026-03-28",
    notes:
      "Had a hearty breakfast at the café before a morning client meeting, ordered eggs, toast and freshly brewed filter coffee.",
  },
  {
    id: 79,
    title: "Referral Bonus",
    amount: 1000,
    type: "Income",
    category: "Freelance",
    date: "2026-03-29",
    notes:
      "Referral bonus earned from a food delivery app for successfully referring two new users who completed their first orders.",
  },
  {
    id: 80,
    title: "Home Internet Upgrade",
    amount: 1499,
    type: "Expense",
    category: "Utilities",
    date: "2026-03-30",
    notes:
      "Upgraded the home broadband plan to 600 Mbps for better speed during work from home, includes one month free offer.",
  },
  {
    id: 81,
    title: "Footwear Purchase",
    amount: 1800,
    type: "Expense",
    category: "Shopping",
    date: "2026-02-27",
    notes:
      "Bought a pair of comfortable running shoes for daily morning jog, branded sports footwear at a discounted price online.",
  },
  {
    id: 82,
    title: "Vitamin Supplements",
    amount: 720,
    type: "Expense",
    category: "Health",
    date: "2026-02-28",
    notes:
      "Monthly vitamin D, B12 and omega-3 supplements from the pharmacy, recommended by the doctor after last blood test results.",
  },
  {
    id: 83,
    title: "Weekend Snacks Party",
    amount: 900,
    type: "Expense",
    category: "Food",
    date: "2026-01-31",
    notes:
      "Bought chips, drinks and snacks for a small weekend gathering at home with college friends, everyone enjoyed the evening.",
  },
  {
    id: 84,
    title: "SIP Mutual Fund",
    amount: 3000,
    type: "Expense",
    category: "Investment",
    date: "2026-01-21",
    notes:
      "Second monthly SIP auto-deducted for a balanced advantage fund, long-term investment strategy for financial goals by 2035.",
  },
  {
    id: 85,
    title: "Tax Advance Payment",
    amount: 15000,
    type: "Expense",
    category: "Tax",
    date: "2026-03-15",
    notes:
      "Advance income tax payment made for the current financial year to avoid interest penalty under Section 234B and 234C.",
  },
  {
    id: 86,
    title: "Ola Cab to Airport",
    amount: 850,
    type: "Expense",
    category: "Transport",
    date: "2026-04-02",
    notes:
      "Ola cab booked early morning to reach the airport for a domestic business trip, surge pricing applied during peak hours.",
  },
  {
    id: 87,
    title: "Flight Ticket",
    amount: 6800,
    type: "Expense",
    category: "Travel",
    date: "2026-04-02",
    notes:
      "Domestic economy class flight ticket booked for a two-day business trip to Bangalore, refundable fare with meal included.",
  },
  {
    id: 88,
    title: "Hotel Stay Work Trip",
    amount: 4500,
    type: "Expense",
    category: "Travel",
    date: "2026-04-03",
    notes:
      "Two-night hotel stay in Bangalore for business meetings, company to reimburse 50% of the accommodation expense later.",
  },
  {
    id: 89,
    title: "Client Dinner",
    amount: 3200,
    type: "Expense",
    category: "Food",
    date: "2026-04-04",
    notes:
      "Business dinner hosted for the client team in Bangalore at a fine dining restaurant, networking and relationship building.",
  },
  {
    id: 90,
    title: "Travel Reimbursement",
    amount: 7500,
    type: "Income",
    category: "Salary",
    date: "2026-04-10",
    notes:
      "Company reimbursement received for travel and accommodation expenses incurred during the Bangalore business trip last week.",
  },
  {
    id: 91,
    title: "Rent from Farmland",
    amount: 8000,
    type: "Income",
    category: "Rental",
    date: "2026-01-15",
    notes:
      "Seasonal rent collected from the agricultural land leased to a local farmer, paid quarterly as per the farming lease agreement.",
  },
  {
    id: 92,
    title: "Used Laptop Sale",
    amount: 22000,
    type: "Income",
    category: "Other",
    date: "2026-02-01",
    notes:
      "Sold the old laptop on OLX after upgrading to a new model, got a good price after negotiation, transaction done in cash.",
  },
  {
    id: 93,
    title: "New Laptop Purchase",
    amount: 65000,
    type: "Expense",
    category: "Shopping",
    date: "2026-02-01",
    notes:
      "Bought a new laptop for work and personal use, 16GB RAM and 512GB SSD model, EMI option chosen for 12 months tenure.",
  },
  {
    id: 94,
    title: "Pet Food",
    amount: 420,
    type: "Expense",
    category: "Food",
    date: "2026-03-05",
    notes:
      "Monthly pet food stock purchased for the dog, premium dry kibble and wet food pouches, bought from the veterinary store.",
  },
  {
    id: 95,
    title: "Vet Consultation",
    amount: 600,
    type: "Expense",
    category: "Health",
    date: "2026-03-08",
    notes:
      "Annual vaccination and routine checkup for the pet dog at the local vet clinic, flea treatment medicine also prescribed.",
  },
  {
    id: 96,
    title: "Garden Supplies",
    amount: 380,
    type: "Expense",
    category: "Shopping",
    date: "2026-04-05",
    notes:
      "Purchased gardening soil, seeds and small pots for the balcony vegetable garden project, growing tomatoes and herbs.",
  },
  {
    id: 97,
    title: "Electricity Bill",
    amount: 1450,
    type: "Expense",
    category: "Utilities",
    date: "2026-02-07",
    notes:
      "February electricity bill, higher than usual due to an additional air cooler running during the unusually warm weather.",
  },
  {
    id: 98,
    title: "Cricket Match Tickets",
    amount: 1200,
    type: "Expense",
    category: "Entertainment",
    date: "2026-04-09",
    notes:
      "Bought two IPL match tickets from the official portal, stand seating category with food voucher included in the ticket price.",
  },
  {
    id: 99,
    title: "Online Tutoring Income",
    amount: 4000,
    type: "Income",
    category: "Freelance",
    date: "2026-04-11",
    notes:
      "Income from online tutoring sessions conducted over the weekend for two students preparing for competitive engineering exams.",
  },
  {
    id: 100,
    title: "Charity Donation",
    amount: 500,
    type: "Expense",
    category: "Other",
    date: "2026-04-18",
    notes:
      "Monthly donation to a verified NGO working for child education in rural areas, UPI transfer with tax exemption receipt.",
  },
];

export default transactions;
