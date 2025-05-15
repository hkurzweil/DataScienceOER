var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-intro-to-data",
  "level": "1",
  "url": "sec-intro-to-data.html",
  "type": "Section",
  "number": "",
  "title": "Introduction to Data",
  "body": " Introduction to Data    What is Data Science and its Applications?  Data science combines multiple disciplines to extract meaningful insights from data. It incorporates elements of statistics, computer science, domain expertise, and critical thinking to interpret complex datasets. Many people use data science and statistics interchangably, but they are not the same. Both statistics and data science explore, quantify, and understand uncertainty in data. They both design experiments, test hypotheses, create visualizations to better understand the data, and conduct inference from data. However, data science goes further. Data science uses statistical concepts, but also builds machine learning models and uses programming tools to solve real world problems. Data science is powerful and empowering.  Imagine waking up to your phone's weather alert, checking your fitness tracker's sleep report, streaming music curated to your taste, and navigating to class using the fastest route—all before your first morning class. What powers these everyday experiences? Data. At its core, data is simply information: observations, facts, and measurements that represent the world around us. But in today's digital landscape, data has become the invisible foundation of modern society—the new electricity that powers everything from social media algorithms that shape what you see online to medical research that develops life-saving treatments. Every time you tap, swipe, search, or purchase, you're both consuming and creating data in an intricate global ecosystem. Understanding data isn't just academic—it's becoming as essential as literacy itself. Data science has transformed how businesses operate, how governments make policy, how scientists conduct research, and how we make decisions in our daily lives. Data powers AI. As you begin this journey into data science, you're not just learning about spreadsheets and statistics—you're gaining the power to decode the language that increasingly shapes our world, solve complex problems, and perhaps even create positive change in ways previous generations could never imagine.  The field has grown exponentially as organizations recognize the value of data-driven decision making across sectors including healthcare, finance, technology, and marketing.    Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.      A healthcare provider uses patient data to predict which individuals might be at risk for specific conditions, allowing for early intervention and preventive care.    A great team from North Carolina State University published Investigating Data Like a Scientist: Key Practices and Processes in 2022 that yields a lot of insight into data science. I'd like to highlight their framework for data investigation, as seen below in the figure. While the process is iterative, it almost always starts with framing the problem.   Team at NCSU's graphic for the data investigation process framework.     Knowledge Check: Data Science Applications   Which of the following is NOT typically considered an application of data science?      Predictive maintenance for industrial equipment    This is a common application of data science, using sensor data to predict when equipment might fail.      Manual data entry into spreadsheets    Correct! While data entry is important for data collection, it's not considered a data science application itself.      Customer segmentation for targeted marketing    This is a common data science application in marketing analytics.      Fraud detection in financial transactions    This is a major application of data science in the financial sector.      Data science applications continue to expand as technology evolves. From improving healthcare outcomes to optimizing supply chains and business operations, the impact of data-driven decision making touches virtually every industry.     Explore how data shapes our daily lives  Data has become integral to our daily experiences, often in ways we don't notice. From personalized recommendations on streaming platforms to traffic routing in navigation apps, data analytics influences countless aspects of modern life.  Consider these common examples of data science in daily life:    Recommendation systems on streaming and e-commerce platforms    Weather forecasting applications    Personalized health insights from wearable devices    Traffic optimization in navigation apps    Fraud detection systems for financial transactions     Data Around You   Take a moment to reflect on your digital activities in the past 24 hours. List three examples where you've interacted with systems that likely used data science to customize or improve your experience.      Match Data Types to Real-World Examples   Match each data-driven system to the primary type of data it collects:     Weather forecasting app  Atmospheric sensor data    Music streaming service  Listening habits and preferences    Fitness tracker  Biometric and activity data    E-commerce website  Browsing and purchase history     The ubiquity of data in our lives raises important questions about privacy, security, and the ethical use of information. As we become more data-driven as a society, understanding these implications becomes increasingly important.     Set up Web-R accounts and platform familiarization  Programming knowledge is not a prerequisite for this course, but programming is extremely helpful in the iterative process of data science, especially for data analysis, visualizations, and statistical computing. The most common languages used in data science are called R and python. In this course, we will use the R programming language and Web-R as our primary online platform. Web-R provides a cloud-based environment for the R programming language many statisticians and data scientists use, but it eliminates the need for local installation or downloading any software. You will be able to work with small snippets of code withing this textbook, but for homework and some activities you will want to navigate to www.web.r-wasm.org\/latest\/ in a different web browswer tab.   Web-R interface overview   Screenshot of the Web-R interface showing the main components: script editor (top left), console (bottom left), environment\/history (top right), and files\/plots\/packages\/help (bottom right).    The Web-R environment consists of several key components:    Script Editor : Where you write and edit your R code    Console : Where code is executed and results are displayed    Environment Pane : Shows variables and objects in memory    Output Pane : Displays plots, files, packages, and help documentation    While we will dive more into using R later in the course, let's go ahead and practice a few lines of code now. While this is not a coding focused class, it is important to understand a few operators. What you will notice first is the the symbols <- combined define a variable. In the first section of code, you'll see that it defines x as 10. This does not actually give you any output in R, but the next operation, the print() function then tells the code to give the output value of 10. The next section of code defines the variable y as a function of x. The last piece defines the variable numbers as a set and then calculates the mean.     Web-R Interface Identification   Identify the four main panels in the Web-R interface and their functions:    Look at the figure above for reference.    The four main panels are:    Script Editor (top left): Where you write and edit your R code    Console (bottom left): Where code is executed and results are displayed    Environment\/History (top right): Shows variables in memory and command history    Files\/Plots\/Packages\/Help (bottom right): Tabbed panel for file navigation, viewing plots, managing packages, and accessing help documentation       Web-R Coding   Go back up to the code box above and decide what lines of code you would need to change to get: (1) the y variable to compute to be 70 and (2) give an output of the median instead of the mean for the numbers variable    (1) What variable does y depend on? (2) What key word should be changed? Type your answers in the code box and click Evaluate to see if you're right!      Change the 10 in line 3 to a 35 so that y multiplies x, which is now 35, by 2 to yield 70.    Change the word mean in line 16 to median and it will execute the new function       "
},
{
  "id": "def-data-science",
  "level": "2",
  "url": "sec-intro-to-data.html#def-data-science",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "  Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.   "
},
{
  "id": "subsec-what-is-data-science-6",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-what-is-data-science-6",
  "type": "Example",
  "number": "2",
  "title": "",
  "body": "  A healthcare provider uses patient data to predict which individuals might be at risk for specific conditions, allowing for early intervention and preventive care.   "
},
{
  "id": "ex-data-science-applications",
  "level": "2",
  "url": "sec-intro-to-data.html#ex-data-science-applications",
  "type": "Checkpoint",
  "number": "3",
  "title": "Knowledge Check: Data Science Applications.",
  "body": " Knowledge Check: Data Science Applications   Which of the following is NOT typically considered an application of data science?      Predictive maintenance for industrial equipment    This is a common application of data science, using sensor data to predict when equipment might fail.      Manual data entry into spreadsheets    Correct! While data entry is important for data collection, it's not considered a data science application itself.      Customer segmentation for targeted marketing    This is a common data science application in marketing analytics.      Fraud detection in financial transactions    This is a major application of data science in the financial sector.     "
},
{
  "id": "subsec-data-daily-lives-5",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-data-daily-lives-5",
  "type": "Exploration",
  "number": "1",
  "title": "Data Around You.",
  "body": " Data Around You   Take a moment to reflect on your digital activities in the past 24 hours. List three examples where you've interacted with systems that likely used data science to customize or improve your experience.   "
},
{
  "id": "ex-matching-data-examples",
  "level": "2",
  "url": "sec-intro-to-data.html#ex-matching-data-examples",
  "type": "Checkpoint",
  "number": "4",
  "title": "Match Data Types to Real-World Examples.",
  "body": " Match Data Types to Real-World Examples   Match each data-driven system to the primary type of data it collects:     Weather forecasting app  Atmospheric sensor data    Music streaming service  Listening habits and preferences    Fitness tracker  Biometric and activity data    E-commerce website  Browsing and purchase history    "
},
{
  "id": "fig-web-r-interface",
  "level": "2",
  "url": "sec-intro-to-data.html#fig-web-r-interface",
  "type": "Figure",
  "number": "5",
  "title": "",
  "body": " Web-R interface overview   Screenshot of the Web-R interface showing the main components: script editor (top left), console (bottom left), environment\/history (top right), and files\/plots\/packages\/help (bottom right).   "
},
{
  "id": "subsec-web-r-setup-5-1-1",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-web-r-setup-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Script Editor "
},
{
  "id": "subsec-web-r-setup-5-2-1",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-web-r-setup-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Console "
},
{
  "id": "subsec-web-r-setup-5-3-1",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-web-r-setup-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Environment Pane "
},
{
  "id": "subsec-web-r-setup-5-4-1",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-web-r-setup-5-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Output Pane "
},
{
  "id": "ex-web-r-interface",
  "level": "2",
  "url": "sec-intro-to-data.html#ex-web-r-interface",
  "type": "Checkpoint",
  "number": "6",
  "title": "Web-R Interface Identification.",
  "body": " Web-R Interface Identification   Identify the four main panels in the Web-R interface and their functions:    Look at the figure above for reference.    The four main panels are:    Script Editor (top left): Where you write and edit your R code    Console (bottom left): Where code is executed and results are displayed    Environment\/History (top right): Shows variables in memory and command history    Files\/Plots\/Packages\/Help (bottom right): Tabbed panel for file navigation, viewing plots, managing packages, and accessing help documentation     "
},
{
  "id": "ex-coding-intro",
  "level": "2",
  "url": "sec-intro-to-data.html#ex-coding-intro",
  "type": "Checkpoint",
  "number": "7",
  "title": "Web-R Coding.",
  "body": " Web-R Coding   Go back up to the code box above and decide what lines of code you would need to change to get: (1) the y variable to compute to be 70 and (2) give an output of the median instead of the mean for the numbers variable    (1) What variable does y depend on? (2) What key word should be changed? Type your answers in the code box and click Evaluate to see if you're right!      Change the 10 in line 3 to a 35 so that y multiplies x, which is now 35, by 2 to yield 70.    Change the word mean in line 16 to median and it will execute the new function     "
},
{
  "id": "sec-types-of-data",
  "level": "1",
  "url": "sec-types-of-data.html",
  "type": "Section",
  "number": "",
  "title": "Types of data and their characteristics",
  "body": " Types of data and their characteristics    Qualitative vs. quantitative data  Data can be broadly categorized into two main types: qualitative and quantitative. Understanding the difference is crucial for selecting appropriate analysis methods.    Qualitative data represents descriptive information that can be observed but not measured numerically. It includes categories, attributes, labels, or other descriptive properties.      Quantitative data represents numerical measurements or counts that can be expressed as numbers and analyzed mathematically.     Comparison of Qualitative and Quantitative Data    Aspect  Qualitative Data  Quantitative Data    Nature  Descriptive  Numerical    Examples  Color, gender, opinion  Height, weight, temperature    Analysis Methods  Thematic, content analysis  Statistical analysis    Data Collection  Interviews, observations  Experiments, surveys with numeric responses     Visually, quantitative data is typically described in histograms, line graphs, and scatter plots. Quantitative data can be further divided into:    Discrete data : Counts or whole numbers (e.g., number of students in a class)    Continuous data : Measurements that can take any value within a range (e.g., height, weight, time)    Visually, qualitative data is typically described using pie charts and bar charts. Qualitative data can be categorized as:    Nominal : Categories with no inherent order (e.g., colors, gender)    Ordinal : Categories with a meaningful order (e.g., education level, satisfaction ratings)      Sort the Data Types   Classify each of the following as either qualitative or quantitative data:     Student's favorite color  Qualitative    Temperature in degrees Celsius  Quantitative    Number of students in a class  Quantitative    Brand of smartphone  Qualitative    Customer satisfaction rating (1-5 stars)  Quantitative    Blood type  Qualitative        Structured vs. unstructured data  Another important distinction in data science is between structured and unstructured data, which affects how we store, process, and analyze information.    Structured data is organized in a predefined format, typically arranged in rows and columns, making it easily searchable and analyzable using traditional database techniques.      Unstructured data lacks a predefined organization or format, making it more challenging to process using conventional methods. Examples include text documents, social media posts, images, and videos.     Structured vs. Unstructured Data    Structured Data Example   A spreadsheet showing neatly organized data in rows and columns     Unstructured Data Example   Various unorganized data formats including text documents, images, and audio files      Between these two extremes is semi-structured data , which contains some organizational properties but doesn't conform to the strict structure of a relational database. Examples include JSON and XML files.   Examples of Data Structure Types   Structured data : Customer database with columns for name, address, purchase history  Semi-structured data : JSON file containing customer reviews with varying fields  Unstructured data : Collection of video testimonials from customers      Identify Data Structure Types   Identify whether each of the following is typically structured or unstructured data:      A CSV file containing customer purchase history    Correct! CSV files are organized in rows and columns, making them structured data.      A collection of customer reviews written as free text    Free text reviews are unstructured data as they don't follow a predefined format.      A relational database of product inventory    Correct! Relational databases are a classic example of structured data.      A folder of surveillance camera footage    Video footage is unstructured data as it doesn't have a predefined organizational format.         Activity: Identifying data types in real-world examples   Data Type Scavenger Hunt   For this activity, you'll examine various real-world datasets and identify the types of data they contain.  Instructions:    Form small groups of 2-3 students    Evaluate the code below in the Web-R workspace    For each dataset, identify:    Whether it contains primarily qualitative or quantitative data    Whether it is structured or unstructured    At least three specific variables and their data types      Be prepared to share your analysis with the class      Remember that some datasets might contain multiple types of data and that's okay. Focus on identifying the characteristics of each variable and determining whether the dataset as a whole is primarily qualitative or quantitative.      "
},
{
  "id": "def-qualitative-data",
  "level": "2",
  "url": "sec-types-of-data.html#def-qualitative-data",
  "type": "Definition",
  "number": "8",
  "title": "",
  "body": "  Qualitative data represents descriptive information that can be observed but not measured numerically. It includes categories, attributes, labels, or other descriptive properties.   "
},
{
  "id": "def-quantitative-data",
  "level": "2",
  "url": "sec-types-of-data.html#def-quantitative-data",
  "type": "Definition",
  "number": "9",
  "title": "",
  "body": "  Quantitative data represents numerical measurements or counts that can be expressed as numbers and analyzed mathematically.   "
},
{
  "id": "table-qual-quant-comparison",
  "level": "2",
  "url": "sec-types-of-data.html#table-qual-quant-comparison",
  "type": "Table",
  "number": "10",
  "title": "Comparison of Qualitative and Quantitative Data",
  "body": " Comparison of Qualitative and Quantitative Data    Aspect  Qualitative Data  Quantitative Data    Nature  Descriptive  Numerical    Examples  Color, gender, opinion  Height, weight, temperature    Analysis Methods  Thematic, content analysis  Statistical analysis    Data Collection  Interviews, observations  Experiments, surveys with numeric responses    "
},
{
  "id": "subsec-qualitative-quantitative-7-1-1",
  "level": "2",
  "url": "sec-types-of-data.html#subsec-qualitative-quantitative-7-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Discrete data "
},
{
  "id": "subsec-qualitative-quantitative-7-2-1",
  "level": "2",
  "url": "sec-types-of-data.html#subsec-qualitative-quantitative-7-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Continuous data "
},
{
  "id": "subsec-qualitative-quantitative-9-1-1",
  "level": "2",
  "url": "sec-types-of-data.html#subsec-qualitative-quantitative-9-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nominal "
},
{
  "id": "subsec-qualitative-quantitative-9-2-1",
  "level": "2",
  "url": "sec-types-of-data.html#subsec-qualitative-quantitative-9-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ordinal "
},
{
  "id": "ex-sort-data-types",
  "level": "2",
  "url": "sec-types-of-data.html#ex-sort-data-types",
  "type": "Checkpoint",
  "number": "11",
  "title": "Sort the Data Types.",
  "body": " Sort the Data Types   Classify each of the following as either qualitative or quantitative data:     Student's favorite color  Qualitative    Temperature in degrees Celsius  Quantitative    Number of students in a class  Quantitative    Brand of smartphone  Qualitative    Customer satisfaction rating (1-5 stars)  Quantitative    Blood type  Qualitative    "
},
{
  "id": "def-structured-data",
  "level": "2",
  "url": "sec-types-of-data.html#def-structured-data",
  "type": "Definition",
  "number": "12",
  "title": "",
  "body": "  Structured data is organized in a predefined format, typically arranged in rows and columns, making it easily searchable and analyzable using traditional database techniques.   "
},
{
  "id": "def-unstructured-data",
  "level": "2",
  "url": "sec-types-of-data.html#def-unstructured-data",
  "type": "Definition",
  "number": "13",
  "title": "",
  "body": "  Unstructured data lacks a predefined organization or format, making it more challenging to process using conventional methods. Examples include text documents, social media posts, images, and videos.   "
},
{
  "id": "fig-data-structure-types",
  "level": "2",
  "url": "sec-types-of-data.html#fig-data-structure-types",
  "type": "Figure",
  "number": "14",
  "title": "",
  "body": " Structured vs. Unstructured Data    Structured Data Example   A spreadsheet showing neatly organized data in rows and columns     Unstructured Data Example   Various unorganized data formats including text documents, images, and audio files     "
},
{
  "id": "subsec-structured-unstructured-6",
  "level": "2",
  "url": "sec-types-of-data.html#subsec-structured-unstructured-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semi-structured data "
},
{
  "id": "subsec-structured-unstructured-7",
  "level": "2",
  "url": "sec-types-of-data.html#subsec-structured-unstructured-7",
  "type": "Example",
  "number": "15",
  "title": "Examples of Data Structure Types.",
  "body": " Examples of Data Structure Types   Structured data : Customer database with columns for name, address, purchase history  Semi-structured data : JSON file containing customer reviews with varying fields  Unstructured data : Collection of video testimonials from customers   "
},
{
  "id": "ex-structured-unstructured",
  "level": "2",
  "url": "sec-types-of-data.html#ex-structured-unstructured",
  "type": "Checkpoint",
  "number": "16",
  "title": "Identify Data Structure Types.",
  "body": " Identify Data Structure Types   Identify whether each of the following is typically structured or unstructured data:      A CSV file containing customer purchase history    Correct! CSV files are organized in rows and columns, making them structured data.      A collection of customer reviews written as free text    Free text reviews are unstructured data as they don't follow a predefined format.      A relational database of product inventory    Correct! Relational databases are a classic example of structured data.      A folder of surveillance camera footage    Video footage is unstructured data as it doesn't have a predefined organizational format.     "
},
{
  "id": "activity-data-types",
  "level": "2",
  "url": "sec-types-of-data.html#activity-data-types",
  "type": "Activity",
  "number": "2",
  "title": "Data Type Scavenger Hunt.",
  "body": " Data Type Scavenger Hunt   For this activity, you'll examine various real-world datasets and identify the types of data they contain.  Instructions:    Form small groups of 2-3 students    Evaluate the code below in the Web-R workspace    For each dataset, identify:    Whether it contains primarily qualitative or quantitative data    Whether it is structured or unstructured    At least three specific variables and their data types      Be prepared to share your analysis with the class      Remember that some datasets might contain multiple types of data and that's okay. Focus on identifying the characteristics of each variable and determining whether the dataset as a whole is primarily qualitative or quantitative.   "
},
{
  "id": "sec-data-collection",
  "level": "1",
  "url": "sec-data-collection.html",
  "type": "Section",
  "number": "",
  "title": "Data Collection and Sources",
  "body": " Data Collection and Sources   How data is collected and by whom  Data collection is the process of gathering and measuring information on variables of interest in a systematic way. The methods used and the entities involved in collection significantly impact data quality and usability.  Common data collection methods include:    Surveys and questionnaires : Structured sets of questions presented to respondents    Interviews : One-on-one or group discussions to gather in-depth information    Observations : Direct recording of behaviors, events, or patterns    Sensors and IoT devices : Automated collection of environmental or activity data    Web scraping : Extraction of data from websites    Transaction records : Data generated during business operations     Match the Method   Match each data collection scenario with the most appropriate method:     A researcher recording the number of people entering a store each hour  Observation    A device measuring room temperature every 15 minutes  Sensors and IoT devices    A marketer gathering customer feedback on a new product  Surveys and questionnaires    A program collecting product prices from various online retailers  Web scraping        Organizations that collect data and their motivations  Various entities collect data for different purposes, each with their own motivations and objectives:    Businesses : Collect customer data to improve products, target marketing, and increase profitability    Government agencies : Gather data for policy making, public service provision, and regulatory purposes    Academic institutions : Collect data for research and knowledge advancement    Healthcare providers : Maintain patient records for treatment planning and health management    Non-profit organizations : Gather data to support advocacy, service delivery, and impact measurement     Data Collection Motivations   A retail company collects purchase transaction data to:    Optimize inventory levels    Develop targeted marketing campaigns    Identify cross-selling opportunities    Predict consumer trends       Identify Organizational Motivations   For each organization type, identify their most likely primary motivation for collecting data:      A social media company primarily collects user interaction data to:   Sell targeted advertising     A government census bureau primarily collects population data to:   Allocate resources and representation     A university primarily collects student performance data to:   Improve educational outcomes and institutional effectiveness     A healthcare provider primarily collects patient health history to:   Provide appropriate and effective treatment        Introduction to the DIKW pyramid  The DIKW (Data, Information, Knowledge, Wisdom) pyramid is a conceptual framework that illustrates the hierarchical relationships between different levels of understanding and insight. The graphic below is from Research Gate.   The DIKW Pyramid   A pyramid showing the hierarchical progression from Data at the bottom, followed by Information, Knowledge, and Wisdom at the top.    The four levels of the pyramid are:    Data : Raw facts and figures without context or interpretation (e.g., a list of numbers)      Information : Data that has been processed, organized, or structured to provide meaning and context (e.g., those numbers organized into a table with labels)      Knowledge : Information that has been analyzed, interpreted, and understood, allowing for its application (e.g., recognizing patterns in the table)      Wisdom : The ability to apply knowledge effectively, make sound judgments, and take appropriate actions based on understanding and experience (e.g., making informed decisions based on the patterns)     DIKW in Practice   Data : 98.6, 101.2, 97.9, 100.4, 99.1  Information : Patient temperature readings over five days: 98.6°F, 101.2°F, 97.9°F, 100.4°F, 99.1°F  Knowledge : The patient had a fever that peaked on day 2 and has been gradually subsiding  Wisdom : Based on the pattern of decreasing fever and other symptoms, the treatment is working and should be continued     Identify DIKW Levels   Classify each of the following examples according to its level in the DIKW pyramid:     A spreadsheet showing raw sales figures: $10,435, $12,893, $9,260...  Data    A monthly sales report comparing current performance to targets and historical trends  Information    Understanding that sales increase during certain seasons and with specific marketing campaigns  Knowledge    Developing a strategic plan to optimize marketing spending and inventory based on sales patterns  Wisdom        Discussion: Ethics of data collection  The collection and use of data raise important ethical considerations, particularly regarding privacy, consent, and potential biases. Key ethical principles include:    Informed consent : Ensuring individuals understand what data is being collected and how it will be used    Data minimization : Collecting only the data necessary for the stated purpose    Privacy protection : Implementing measures to safeguard personal information    Transparency : Being open about data collection practices and purposes    Fairness : Ensuring data collection methods don't disadvantage or discriminate against particular groups     Ethical Case Study   Consider the following scenario:  A social media company has collected extensive data on users' browsing habits, post interactions, and private messages. They plan to use this data to develop a psychological profile of each user for targeted advertising. They included this in their terms of service, which users accepted when joining the platform.  Discuss the following questions:    Is this data collection ethically justified? Why or why not?    Does inclusion in the terms of service constitute proper informed consent?    What potential harms could arise from this data use?    What alternative approaches might better balance business needs with ethical considerations?       Ethical Principles in Action   For each scenario, identify which ethical principle(s) is being violated or upheld:      A retail store tracks customers by their cell phone signals without notification.    This violates informed consent and transparency principles, as customers are unaware their movements are being tracked.      A research study collects only anonymous demographic information necessary for their analysis.    This upholds the data minimization principle by collecting only what's necessary for the stated purpose.      A company stores customer credit card details in an unencrypted database.    This violates privacy protection principles, as sensitive financial information is not being adequately safeguarded.      A website explains clearly how cookies will be used before asking for permission.    This upholds informed consent and transparency principles by clearly explaining data practices before collection.       "
},
{
  "id": "subsec-data-collection-methods-4-1-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-methods-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Surveys and questionnaires "
},
{
  "id": "subsec-data-collection-methods-4-2-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-methods-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Interviews "
},
{
  "id": "subsec-data-collection-methods-4-3-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-methods-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Observations "
},
{
  "id": "subsec-data-collection-methods-4-4-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-methods-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sensors and IoT devices "
},
{
  "id": "subsec-data-collection-methods-4-5-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-methods-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Web scraping "
},
{
  "id": "subsec-data-collection-methods-4-6-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-methods-4-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transaction records "
},
{
  "id": "ex-data-collection-methods",
  "level": "2",
  "url": "sec-data-collection.html#ex-data-collection-methods",
  "type": "Checkpoint",
  "number": "17",
  "title": "Match the Method.",
  "body": " Match the Method   Match each data collection scenario with the most appropriate method:     A researcher recording the number of people entering a store each hour  Observation    A device measuring room temperature every 15 minutes  Sensors and IoT devices    A marketer gathering customer feedback on a new product  Surveys and questionnaires    A program collecting product prices from various online retailers  Web scraping    "
},
{
  "id": "subsec-data-collection-organizations-3-1-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-organizations-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Businesses "
},
{
  "id": "subsec-data-collection-organizations-3-2-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-organizations-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Government agencies "
},
{
  "id": "subsec-data-collection-organizations-3-3-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-organizations-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Academic institutions "
},
{
  "id": "subsec-data-collection-organizations-3-4-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-organizations-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Healthcare providers "
},
{
  "id": "subsec-data-collection-organizations-3-5-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-organizations-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Non-profit organizations "
},
{
  "id": "subsec-data-collection-organizations-4",
  "level": "2",
  "url": "sec-data-collection.html#subsec-data-collection-organizations-4",
  "type": "Example",
  "number": "18",
  "title": "Data Collection Motivations.",
  "body": " Data Collection Motivations   A retail company collects purchase transaction data to:    Optimize inventory levels    Develop targeted marketing campaigns    Identify cross-selling opportunities    Predict consumer trends     "
},
{
  "id": "ex-org-motivations",
  "level": "2",
  "url": "sec-data-collection.html#ex-org-motivations",
  "type": "Checkpoint",
  "number": "19",
  "title": "Identify Organizational Motivations.",
  "body": " Identify Organizational Motivations   For each organization type, identify their most likely primary motivation for collecting data:      A social media company primarily collects user interaction data to:   Sell targeted advertising     A government census bureau primarily collects population data to:   Allocate resources and representation     A university primarily collects student performance data to:   Improve educational outcomes and institutional effectiveness     A healthcare provider primarily collects patient health history to:   Provide appropriate and effective treatment    "
},
{
  "id": "fig-dikw-pyramid",
  "level": "2",
  "url": "sec-data-collection.html#fig-dikw-pyramid",
  "type": "Figure",
  "number": "20",
  "title": "",
  "body": " The DIKW Pyramid   A pyramid showing the hierarchical progression from Data at the bottom, followed by Information, Knowledge, and Wisdom at the top.   "
},
{
  "id": "def-data-dikw",
  "level": "2",
  "url": "sec-data-collection.html#def-data-dikw",
  "type": "Definition",
  "number": "21",
  "title": "",
  "body": "  Data : Raw facts and figures without context or interpretation (e.g., a list of numbers)   "
},
{
  "id": "def-information-dikw",
  "level": "2",
  "url": "sec-data-collection.html#def-information-dikw",
  "type": "Definition",
  "number": "22",
  "title": "",
  "body": "  Information : Data that has been processed, organized, or structured to provide meaning and context (e.g., those numbers organized into a table with labels)   "
},
{
  "id": "def-knowledge-dikw",
  "level": "2",
  "url": "sec-data-collection.html#def-knowledge-dikw",
  "type": "Definition",
  "number": "23",
  "title": "",
  "body": "  Knowledge : Information that has been analyzed, interpreted, and understood, allowing for its application (e.g., recognizing patterns in the table)   "
},
{
  "id": "def-wisdom-dikw",
  "level": "2",
  "url": "sec-data-collection.html#def-wisdom-dikw",
  "type": "Definition",
  "number": "24",
  "title": "",
  "body": "  Wisdom : The ability to apply knowledge effectively, make sound judgments, and take appropriate actions based on understanding and experience (e.g., making informed decisions based on the patterns)   "
},
{
  "id": "subsec-dikw-pyramid-9",
  "level": "2",
  "url": "sec-data-collection.html#subsec-dikw-pyramid-9",
  "type": "Example",
  "number": "25",
  "title": "DIKW in Practice.",
  "body": " DIKW in Practice   Data : 98.6, 101.2, 97.9, 100.4, 99.1  Information : Patient temperature readings over five days: 98.6°F, 101.2°F, 97.9°F, 100.4°F, 99.1°F  Knowledge : The patient had a fever that peaked on day 2 and has been gradually subsiding  Wisdom : Based on the pattern of decreasing fever and other symptoms, the treatment is working and should be continued   "
},
{
  "id": "ex-dikw-levels",
  "level": "2",
  "url": "sec-data-collection.html#ex-dikw-levels",
  "type": "Checkpoint",
  "number": "26",
  "title": "Identify DIKW Levels.",
  "body": " Identify DIKW Levels   Classify each of the following examples according to its level in the DIKW pyramid:     A spreadsheet showing raw sales figures: $10,435, $12,893, $9,260...  Data    A monthly sales report comparing current performance to targets and historical trends  Information    Understanding that sales increase during certain seasons and with specific marketing campaigns  Knowledge    Developing a strategic plan to optimize marketing spending and inventory based on sales patterns  Wisdom    "
},
{
  "id": "subsec-ethics-data-collection-3-1-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-ethics-data-collection-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Informed consent "
},
{
  "id": "subsec-ethics-data-collection-3-2-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-ethics-data-collection-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data minimization "
},
{
  "id": "subsec-ethics-data-collection-3-3-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-ethics-data-collection-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Privacy protection "
},
{
  "id": "subsec-ethics-data-collection-3-4-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-ethics-data-collection-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transparency "
},
{
  "id": "subsec-ethics-data-collection-3-5-1",
  "level": "2",
  "url": "sec-data-collection.html#subsec-ethics-data-collection-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fairness "
},
{
  "id": "exp-ethical-case-study",
  "level": "2",
  "url": "sec-data-collection.html#exp-ethical-case-study",
  "type": "Exploration",
  "number": "3",
  "title": "Ethical Case Study.",
  "body": " Ethical Case Study   Consider the following scenario:  A social media company has collected extensive data on users' browsing habits, post interactions, and private messages. They plan to use this data to develop a psychological profile of each user for targeted advertising. They included this in their terms of service, which users accepted when joining the platform.  Discuss the following questions:    Is this data collection ethically justified? Why or why not?    Does inclusion in the terms of service constitute proper informed consent?    What potential harms could arise from this data use?    What alternative approaches might better balance business needs with ethical considerations?     "
},
{
  "id": "ex-ethical-principles",
  "level": "2",
  "url": "sec-data-collection.html#ex-ethical-principles",
  "type": "Checkpoint",
  "number": "27",
  "title": "Ethical Principles in Action.",
  "body": " Ethical Principles in Action   For each scenario, identify which ethical principle(s) is being violated or upheld:      A retail store tracks customers by their cell phone signals without notification.    This violates informed consent and transparency principles, as customers are unaware their movements are being tracked.      A research study collects only anonymous demographic information necessary for their analysis.    This upholds the data minimization principle by collecting only what's necessary for the stated purpose.      A company stores customer credit card details in an unencrypted database.    This violates privacy protection principles, as sensitive financial information is not being adequately safeguarded.      A website explains clearly how cookies will be used before asking for permission.    This upholds informed consent and transparency principles by clearly explaining data practices before collection.     "
},
{
  "id": "sec-data-sources",
  "level": "1",
  "url": "sec-data-sources.html",
  "type": "Section",
  "number": "",
  "title": "Primary vs. secondary data sources",
  "body": " Primary vs. secondary data sources    Distinguishing between data sources  In data science, it's important to understand the origin of your data and how it was collected. Data sources are typically classified as either primary or secondary.    Primary data is information collected directly by the researcher for a specific purpose. The researcher controls the collection process, design, and methods.      Secondary data is information collected by someone else for another purpose and reused by the researcher. It may have been processed or analyzed before becoming available.     Comparison of Primary and Secondary Data Sources    Characteristic  Primary Data  Secondary Data    Collection  Collected firsthand by the researcher  Collected by someone else    Purpose  Designed for specific research objectives  Originally collected for different purposes    Time  More time-consuming to collect  Often immediately available    Cost  Usually more expensive  Generally less expensive or free    Control  High control over methods and quality  Limited or no control over methods    Examples  Surveys, experiments, interviews  Census data, academic publications, company reports      Primary vs. Secondary Data Examples   Primary data example : A researcher designs and conducts a survey to gather information about consumer preferences for a new product.  Secondary data example : A researcher analyzes existing customer review data from an e-commerce website to understand consumer preferences.     Identify Data Source Types   Classify each of the following as either a primary or secondary data source:     Conducting focus groups with potential customers  Primary data    Analyzing government census statistics  Secondary data    Tracking website user behavior with analytics tools  Primary data    Using historical stock market data from a financial database  Secondary data    Setting up sensors to monitor traffic patterns  Primary data    Reviewing academic journal articles for a literature review  Secondary data        Reliability and validity of different sources  When evaluating data sources, it's essential to consider their reliability and validity to ensure the quality of your analysis and conclusions.    Reliability refers to the consistency and stability of a data source. A reliable source produces similar results under consistent conditions when measurements are repeated.      Validity refers to how accurately a data source measures what it claims to measure. Valid data truly represents the concept or phenomenon being studied.    Factors affecting the reliability and validity of data sources include:    Methodology : How the data was collected    Sample size and selection : Whether the sample is representative and adequate    Measurement instruments : The quality and calibration of tools used    Data processing methods : How raw data was cleaned, aggregated, or transformed    Source reputation : The credibility of the organization or individuals who collected the data    Potential biases : Systematic errors in collection or reporting    Recency : How recently the data was collected     Evaluating Data Source Quality   Consider a research study on consumer spending habits:  High reliability and validity : A large-scale, randomized survey conducted by a reputable market research firm using validated questionnaires, with transparent methodology and a representative sample  Low reliability and validity : An online poll on a niche website with a small, self-selected sample of respondents, using ambiguous questions and no controls for duplicate submissions     Evaluate Data Source Quality   For each scenario, identify at least two factors that might affect the reliability or validity of the data source:    Consider who collected the data, how it was collected, and for what purpose.     A survey about political opinions conducted via landline phones only    Sample bias (excludes those without landlines, who tend to be younger)  Response bias (people with strong political opinions may be more likely to participate)      Customer satisfaction data collected by a company through product registration cards    Sample bias (only customers who complete registration cards)  Timing bias (feedback collected immediately after purchase, before long-term use)      Health statistics reported by a country with limited healthcare infrastructure    Coverage bias (data may only reflect populations with healthcare access)  Measurement inconsistency (limited diagnostic capabilities may affect accuracy)      Match Data Collection Methods   Match each personal tracking topic with the most appropriate data collection method:     Sleep patterns  Mobile app or wearable device    Mood fluctuations  Daily journal or rating scale    Spending habits  Expense tracking app or spreadsheet    Study productivity  Time tracking tool or timer    Nutrition intake  Food diary or photo log        Mini-project introduction: Personal data tracking exercise  In this first mini-project, you'll collect and analyze your own personal data to gain hands-on experience with data science concepts. Click here for details on the project.   "
},
{
  "id": "def-primary-data",
  "level": "2",
  "url": "sec-data-sources.html#def-primary-data",
  "type": "Definition",
  "number": "28",
  "title": "",
  "body": "  Primary data is information collected directly by the researcher for a specific purpose. The researcher controls the collection process, design, and methods.   "
},
{
  "id": "def-secondary-data",
  "level": "2",
  "url": "sec-data-sources.html#def-secondary-data",
  "type": "Definition",
  "number": "29",
  "title": "",
  "body": "  Secondary data is information collected by someone else for another purpose and reused by the researcher. It may have been processed or analyzed before becoming available.   "
},
{
  "id": "table-primary-secondary-comparison",
  "level": "2",
  "url": "sec-data-sources.html#table-primary-secondary-comparison",
  "type": "Table",
  "number": "30",
  "title": "Comparison of Primary and Secondary Data Sources",
  "body": " Comparison of Primary and Secondary Data Sources    Characteristic  Primary Data  Secondary Data    Collection  Collected firsthand by the researcher  Collected by someone else    Purpose  Designed for specific research objectives  Originally collected for different purposes    Time  More time-consuming to collect  Often immediately available    Cost  Usually more expensive  Generally less expensive or free    Control  High control over methods and quality  Limited or no control over methods    Examples  Surveys, experiments, interviews  Census data, academic publications, company reports    "
},
{
  "id": "subsec-primary-secondary-data-6",
  "level": "2",
  "url": "sec-data-sources.html#subsec-primary-secondary-data-6",
  "type": "Example",
  "number": "31",
  "title": "Primary vs. Secondary Data Examples.",
  "body": " Primary vs. Secondary Data Examples   Primary data example : A researcher designs and conducts a survey to gather information about consumer preferences for a new product.  Secondary data example : A researcher analyzes existing customer review data from an e-commerce website to understand consumer preferences.   "
},
{
  "id": "ex-identify-data-sources",
  "level": "2",
  "url": "sec-data-sources.html#ex-identify-data-sources",
  "type": "Checkpoint",
  "number": "32",
  "title": "Identify Data Source Types.",
  "body": " Identify Data Source Types   Classify each of the following as either a primary or secondary data source:     Conducting focus groups with potential customers  Primary data    Analyzing government census statistics  Secondary data    Tracking website user behavior with analytics tools  Primary data    Using historical stock market data from a financial database  Secondary data    Setting up sensors to monitor traffic patterns  Primary data    Reviewing academic journal articles for a literature review  Secondary data    "
},
{
  "id": "def-reliability",
  "level": "2",
  "url": "sec-data-sources.html#def-reliability",
  "type": "Definition",
  "number": "33",
  "title": "",
  "body": "  Reliability refers to the consistency and stability of a data source. A reliable source produces similar results under consistent conditions when measurements are repeated.   "
},
{
  "id": "def-validity",
  "level": "2",
  "url": "sec-data-sources.html#def-validity",
  "type": "Definition",
  "number": "34",
  "title": "",
  "body": "  Validity refers to how accurately a data source measures what it claims to measure. Valid data truly represents the concept or phenomenon being studied.   "
},
{
  "id": "subsec-reliability-validity-6-1-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-reliability-validity-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Methodology "
},
{
  "id": "subsec-reliability-validity-6-2-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-reliability-validity-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sample size and selection "
},
{
  "id": "subsec-reliability-validity-6-3-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-reliability-validity-6-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Measurement instruments "
},
{
  "id": "subsec-reliability-validity-6-4-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-reliability-validity-6-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data processing methods "
},
{
  "id": "subsec-reliability-validity-6-5-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-reliability-validity-6-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Source reputation "
},
{
  "id": "subsec-reliability-validity-6-6-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-reliability-validity-6-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Potential biases "
},
{
  "id": "subsec-reliability-validity-6-7-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-reliability-validity-6-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Recency "
},
{
  "id": "subsec-reliability-validity-7",
  "level": "2",
  "url": "sec-data-sources.html#subsec-reliability-validity-7",
  "type": "Example",
  "number": "35",
  "title": "Evaluating Data Source Quality.",
  "body": " Evaluating Data Source Quality   Consider a research study on consumer spending habits:  High reliability and validity : A large-scale, randomized survey conducted by a reputable market research firm using validated questionnaires, with transparent methodology and a representative sample  Low reliability and validity : An online poll on a niche website with a small, self-selected sample of respondents, using ambiguous questions and no controls for duplicate submissions   "
},
{
  "id": "ex-source-evaluation",
  "level": "2",
  "url": "sec-data-sources.html#ex-source-evaluation",
  "type": "Checkpoint",
  "number": "36",
  "title": "Evaluate Data Source Quality.",
  "body": " Evaluate Data Source Quality   For each scenario, identify at least two factors that might affect the reliability or validity of the data source:    Consider who collected the data, how it was collected, and for what purpose.     A survey about political opinions conducted via landline phones only    Sample bias (excludes those without landlines, who tend to be younger)  Response bias (people with strong political opinions may be more likely to participate)      Customer satisfaction data collected by a company through product registration cards    Sample bias (only customers who complete registration cards)  Timing bias (feedback collected immediately after purchase, before long-term use)      Health statistics reported by a country with limited healthcare infrastructure    Coverage bias (data may only reflect populations with healthcare access)  Measurement inconsistency (limited diagnostic capabilities may affect accuracy)    "
},
{
  "id": "ex-tracking-methods",
  "level": "2",
  "url": "sec-data-sources.html#ex-tracking-methods",
  "type": "Checkpoint",
  "number": "37",
  "title": "Match Data Collection Methods.",
  "body": " Match Data Collection Methods   Match each personal tracking topic with the most appropriate data collection method:     Sleep patterns  Mobile app or wearable device    Mood fluctuations  Daily journal or rating scale    Spending habits  Expense tracking app or spreadsheet    Study productivity  Time tracking tool or timer    Nutrition intake  Food diary or photo log    "
},
{
  "id": "sec-data-quality",
  "level": "1",
  "url": "sec-data-quality.html",
  "type": "Section",
  "number": "",
  "title": "Data Quality and Evaluation",
  "body": " Data Quality and Evaluation    Evaluating dataset quality  The quality of your data directly impacts the reliability of your analysis and conclusions. Evaluating dataset quality is a critical step in the data science workflow.  Key dimensions of data quality include:    Accuracy : The degree to which data correctly reflects the real world    Completeness : The extent to which required data is available    Consistency : The absence of contradictions within the data    Timeliness : How current the data is relative to needs    Precision : The level of detail in the data    Relevance : How applicable the data is to the specific analysis needs     Data Quality Issues   Consider a customer database with the following issues:    Accuracy issue : Some customer addresses are incorrectly formatted or contain typos    Completeness issue : 15% of customer records are missing email addresses    Consistency issue : The same customer appears multiple times with slightly different information    Timeliness issue : Contact information hasn't been updated in over three years         The 5Vs framework: Volume, Velocity, Variety, Veracity, Value  The 5Vs framework is a useful model for evaluating the characteristics and challenges of datasets, particularly in the context of big data.    Volume refers to the size of the dataset. Big data typically involves datasets too large to be processed by traditional database systems.      Velocity refers to the speed at which data is generated, collected, and processed. High-velocity data streams require real-time or near-real-time processing.      Variety refers to the diversity of data types and sources. Modern datasets often combine structured, semi-structured, and unstructured data.      Veracity refers to the reliability and trustworthiness of the data. It addresses concerns about data accuracy, completeness, and potential biases.      Value refers to the usefulness and applicability of the data for generating insights and informing decisions.    Visually this looks like this graphic made by Excelsior.   The 5Vs of Big Data   A diagram showing the five Vs of big data: Volume, Velocity, Variety, Veracity, and Value, with icons representing each concept.     Identify the 5Vs   Match each scenario with the most relevant \"V\" from the 5Vs framework:     A social media platform processes 500 million tweets per day  Volume    A financial system must detect fraud attempts in milliseconds  Velocity    A retailer combines purchase records, website clicks, and customer service interactions  Variety    Researchers are concerned about sampling bias in their survey data  Veracity    A company evaluates whether collecting certain data will improve business outcomes  Value        Identifying biases in datasets  Biases in datasets can lead to skewed analysis, inaccurate predictions, and potentially harmful decisions. Identifying and addressing these biases is a critical responsibility in data science.  Common types of biases include:    Selection bias : When the data does not represent the population it's intended to analyze    Sampling bias : When certain members of the intended population are more likely to be included than others    Measurement bias : When the method of data collection systematically distorts the data    Confirmation bias : When data is collected or interpreted to confirm preexisting beliefs    Survivorship bias : When analysis focuses only on data that \"survived\" some selection process    Reporting bias : When only certain outcomes or observations are reported     Dataset Biases in Practice   Selection bias example : A survey about internet usage conducted exclusively online will miss people with limited or no internet access.  Measurement bias example : A health study that relies on self-reported exercise levels may be skewed by respondents overestimating their activity.  Survivorship bias example : Analyzing only successful startups while ignoring failed ones will give an incomplete picture of success factors.     Identify Dataset Biases   For each scenario, identify the most likely type of bias:      A study on work-life balance surveys employees during business hours at their workplace   Selection bias   This is selection bias because it only captures employees who are at work during business hours, missing those who work different shifts or are absent.      A product rating system only prompts for feedback from customers who completed a purchase   Sampling bias   This is sampling bias because it excludes potential customers who decided not to purchase, perhaps due to negative impressions.      A researcher examining the durability of products only analyzes items that are returned under warranty   Survivorship bias   This is survivorship bias because it only examines failed products that were returned, missing both successful products and those that failed but weren't returned.      A study finds that taller people earn more on average, but doesn't account for gender differences   Measurement bias   This is measurement bias because the relationship between height and income may be confounded by gender, as men are typically taller and often earn more due to gender-based pay disparities.         Activity: Apply 5Vs to evaluate sample datasets   Dataset Evaluation with the 5Vs Framework   In this activity, you will apply the 5Vs framework to evaluate different sample datasets.  Instructions:    Form small groups of 2-3 students    Each group will be assigned one of the following datasets:    Twitter sentiment data during a major sporting event    Hospital patient records from a regional healthcare system    Real-time sensor data from manufacturing equipment    Customer transaction history from an e-commerce platform      For your assigned dataset, assess each of the 5Vs:    Volume: How large is the dataset likely to be?    Velocity: At what rate is new data generated?    Variety: What different types of data are included?    Veracity: What quality issues or biases might be present?    Value: What insights or applications could this data support?      Create a brief presentation of your evaluation    Share your findings with the class         Project 1 check-in: Personal data tracking discussion  Let's take this opportunity to review progress on your personal data tracking mini-project we've been working on.   Personal Data Tracking Reflection   Take a few minutes to reflect on your data tracking experience so far:    What data are you tracking and how are you collecting it?    What challenges have you encountered in consistent data collection?    What initial patterns or insights have you observed?    How might you improve your data collection methodology?    What questions do you hope to answer with your collected data?        Improve Your Data Collection   Based on our discussion and what you've learned about data quality, identify:    Two specific ways you could improve the quality of your personal data collection    One potential bias in your current collection methodology and how you might address it    One additional variable you could track that might provide valuable context or insights        "
},
{
  "id": "subsec-dataset-quality-4-1-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-dataset-quality-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Accuracy "
},
{
  "id": "subsec-dataset-quality-4-2-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-dataset-quality-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Completeness "
},
{
  "id": "subsec-dataset-quality-4-3-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-dataset-quality-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Consistency "
},
{
  "id": "subsec-dataset-quality-4-4-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-dataset-quality-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Timeliness "
},
{
  "id": "subsec-dataset-quality-4-5-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-dataset-quality-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Precision "
},
{
  "id": "subsec-dataset-quality-4-6-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-dataset-quality-4-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Relevance "
},
{
  "id": "subsec-dataset-quality-5",
  "level": "2",
  "url": "sec-data-quality.html#subsec-dataset-quality-5",
  "type": "Example",
  "number": "38",
  "title": "Data Quality Issues.",
  "body": " Data Quality Issues   Consider a customer database with the following issues:    Accuracy issue : Some customer addresses are incorrectly formatted or contain typos    Completeness issue : 15% of customer records are missing email addresses    Consistency issue : The same customer appears multiple times with slightly different information    Timeliness issue : Contact information hasn't been updated in over three years     "
},
{
  "id": "def-volume",
  "level": "2",
  "url": "sec-data-quality.html#def-volume",
  "type": "Definition",
  "number": "39",
  "title": "",
  "body": "  Volume refers to the size of the dataset. Big data typically involves datasets too large to be processed by traditional database systems.   "
},
{
  "id": "def-velocity",
  "level": "2",
  "url": "sec-data-quality.html#def-velocity",
  "type": "Definition",
  "number": "40",
  "title": "",
  "body": "  Velocity refers to the speed at which data is generated, collected, and processed. High-velocity data streams require real-time or near-real-time processing.   "
},
{
  "id": "def-variety",
  "level": "2",
  "url": "sec-data-quality.html#def-variety",
  "type": "Definition",
  "number": "41",
  "title": "",
  "body": "  Variety refers to the diversity of data types and sources. Modern datasets often combine structured, semi-structured, and unstructured data.   "
},
{
  "id": "def-veracity",
  "level": "2",
  "url": "sec-data-quality.html#def-veracity",
  "type": "Definition",
  "number": "42",
  "title": "",
  "body": "  Veracity refers to the reliability and trustworthiness of the data. It addresses concerns about data accuracy, completeness, and potential biases.   "
},
{
  "id": "def-value",
  "level": "2",
  "url": "sec-data-quality.html#def-value",
  "type": "Definition",
  "number": "43",
  "title": "",
  "body": "  Value refers to the usefulness and applicability of the data for generating insights and informing decisions.   "
},
{
  "id": "fig-5vs-framework",
  "level": "2",
  "url": "sec-data-quality.html#fig-5vs-framework",
  "type": "Figure",
  "number": "44",
  "title": "",
  "body": " The 5Vs of Big Data   A diagram showing the five Vs of big data: Volume, Velocity, Variety, Veracity, and Value, with icons representing each concept.   "
},
{
  "id": "ex-identify-5vs",
  "level": "2",
  "url": "sec-data-quality.html#ex-identify-5vs",
  "type": "Checkpoint",
  "number": "45",
  "title": "Identify the 5Vs.",
  "body": " Identify the 5Vs   Match each scenario with the most relevant \"V\" from the 5Vs framework:     A social media platform processes 500 million tweets per day  Volume    A financial system must detect fraud attempts in milliseconds  Velocity    A retailer combines purchase records, website clicks, and customer service interactions  Variety    Researchers are concerned about sampling bias in their survey data  Veracity    A company evaluates whether collecting certain data will improve business outcomes  Value    "
},
{
  "id": "subsec-identifying-biases-4-1-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-identifying-biases-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Selection bias "
},
{
  "id": "subsec-identifying-biases-4-2-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-identifying-biases-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sampling bias "
},
{
  "id": "subsec-identifying-biases-4-3-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-identifying-biases-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Measurement bias "
},
{
  "id": "subsec-identifying-biases-4-4-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-identifying-biases-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Confirmation bias "
},
{
  "id": "subsec-identifying-biases-4-5-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-identifying-biases-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Survivorship bias "
},
{
  "id": "subsec-identifying-biases-4-6-1",
  "level": "2",
  "url": "sec-data-quality.html#subsec-identifying-biases-4-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reporting bias "
},
{
  "id": "subsec-identifying-biases-5",
  "level": "2",
  "url": "sec-data-quality.html#subsec-identifying-biases-5",
  "type": "Example",
  "number": "46",
  "title": "Dataset Biases in Practice.",
  "body": " Dataset Biases in Practice   Selection bias example : A survey about internet usage conducted exclusively online will miss people with limited or no internet access.  Measurement bias example : A health study that relies on self-reported exercise levels may be skewed by respondents overestimating their activity.  Survivorship bias example : Analyzing only successful startups while ignoring failed ones will give an incomplete picture of success factors.   "
},
{
  "id": "ex-identify-biases",
  "level": "2",
  "url": "sec-data-quality.html#ex-identify-biases",
  "type": "Checkpoint",
  "number": "47",
  "title": "Identify Dataset Biases.",
  "body": " Identify Dataset Biases   For each scenario, identify the most likely type of bias:      A study on work-life balance surveys employees during business hours at their workplace   Selection bias   This is selection bias because it only captures employees who are at work during business hours, missing those who work different shifts or are absent.      A product rating system only prompts for feedback from customers who completed a purchase   Sampling bias   This is sampling bias because it excludes potential customers who decided not to purchase, perhaps due to negative impressions.      A researcher examining the durability of products only analyzes items that are returned under warranty   Survivorship bias   This is survivorship bias because it only examines failed products that were returned, missing both successful products and those that failed but weren't returned.      A study finds that taller people earn more on average, but doesn't account for gender differences   Measurement bias   This is measurement bias because the relationship between height and income may be confounded by gender, as men are typically taller and often earn more due to gender-based pay disparities.     "
},
{
  "id": "activity-evaluate-5vs",
  "level": "2",
  "url": "sec-data-quality.html#activity-evaluate-5vs",
  "type": "Activity",
  "number": "4",
  "title": "Dataset Evaluation with the 5Vs Framework.",
  "body": " Dataset Evaluation with the 5Vs Framework   In this activity, you will apply the 5Vs framework to evaluate different sample datasets.  Instructions:    Form small groups of 2-3 students    Each group will be assigned one of the following datasets:    Twitter sentiment data during a major sporting event    Hospital patient records from a regional healthcare system    Real-time sensor data from manufacturing equipment    Customer transaction history from an e-commerce platform      For your assigned dataset, assess each of the 5Vs:    Volume: How large is the dataset likely to be?    Velocity: At what rate is new data generated?    Variety: What different types of data are included?    Veracity: What quality issues or biases might be present?    Value: What insights or applications could this data support?      Create a brief presentation of your evaluation    Share your findings with the class     "
},
{
  "id": "exp-tracking-progress",
  "level": "2",
  "url": "sec-data-quality.html#exp-tracking-progress",
  "type": "Exploration",
  "number": "5",
  "title": "Personal Data Tracking Reflection.",
  "body": " Personal Data Tracking Reflection   Take a few minutes to reflect on your data tracking experience so far:    What data are you tracking and how are you collecting it?    What challenges have you encountered in consistent data collection?    What initial patterns or insights have you observed?    How might you improve your data collection methodology?    What questions do you hope to answer with your collected data?     "
},
{
  "id": "ex-tracking-improvement",
  "level": "2",
  "url": "sec-data-quality.html#ex-tracking-improvement",
  "type": "Checkpoint",
  "number": "48",
  "title": "Improve Your Data Collection.",
  "body": " Improve Your Data Collection   Based on our discussion and what you've learned about data quality, identify:    Two specific ways you could improve the quality of your personal data collection    One potential bias in your current collection methodology and how you might address it    One additional variable you could track that might provide valuable context or insights      "
},
{
  "id": "sec-data-impact",
  "level": "1",
  "url": "sec-data-impact.html",
  "type": "Section",
  "number": "",
  "title": "Data Impact and Ethics",
  "body": " Data Impact and Ethics    Data's impact on equity and society  Data and algorithms increasingly influence important decisions in society, from hiring and lending to criminal justice and healthcare. This influence carries significant implications for equity and fairness.  Key areas of societal impact include:    Access to opportunities : How data-driven systems determine who gets jobs, loans, housing, or education    Resource allocation : How algorithms distribute public resources, services, or attention    Representation : How data collection and analysis shapes whose perspectives and needs are considered    Privacy and autonomy : How data systems affect individual rights and freedoms    Cultural impact : How data-driven platforms influence cultural expression and diversity    Data science can either reinforce existing inequities or help address them, depending on how it's practiced.   Data Impact Examples   Reinforcing inequity : A hiring algorithm trained on historical data learns to prefer candidates from prestigious universities, perpetuating existing socioeconomic advantages  Promoting equity : Public health data analysis identifies underserved communities and informs targeted resource allocation to address healthcare disparities     Data Impact Reflection   Consider a data-driven system you regularly interact with (e.g., social media algorithm, customer service chatbot, navigation app, recommendation system). Reflect on:    How does this system influence your decisions or experiences?    What assumptions might be embedded in the system's design?    Who might be advantaged or disadvantaged by how the system works?    What responsibility do the system's creators have to consider societal impacts?         How data can perpetuate or mitigate biases  Data and algorithms can either amplify existing biases or help identify and address them. Understanding this dual potential is essential for responsible data science practice.  Ways data systems can perpetuate biases:    Training on biased historical data : Algorithms learn patterns from past decisions that may reflect discrimination    Proxy variables : Even when sensitive attributes are removed, other variables may serve as proxies (e.g., zip code as a proxy for race)    Feedback loops : Predictions influence future data collection, potentially amplifying initial biases    Unequal representation : Some groups may be underrepresented in training data, leading to less accurate results for them    Lack of context : Algorithms may miss important contextual factors that humans would consider    Ways data can help mitigate biases:    Bias detection : Data analysis can identify existing disparities in systems and outcomes    Fairness constraints : Algorithms can be designed with explicit fairness objectives    Diverse data collection : Intentionally gathering representative data from diverse populations    Transparency : Making data processes more visible enables scrutiny and improvement    Counterfactual analysis : Testing what would happen if protected attributes were different     Analyze Bias Scenarios   For each scenario, identify whether the data approach is more likely to perpetuate or mitigate bias, and explain why:     A loan approval algorithm is trained on historical lending decisions without considering whether those decisions were fair    Perpetuates bias: This approach risks encoding any historical discrimination in lending practices into the new algorithm. If certain groups were unfairly denied loans in the past, the algorithm will learn to continue this pattern.      A healthcare researcher intentionally oversamples underrepresented populations to ensure sufficient data for accurate predictions across all groups    Mitigates bias: This approach addresses the common problem of insufficient data for minority populations, which often leads to less accurate models for these groups. Oversampling helps ensure the model works well for everyone.      A company removes names from job applications before review but continues to prioritize candidates from certain universities    Perpetuates bias: While removing names may reduce some direct bias, university attendance often correlates with socioeconomic status, race, and other protected attributes. Using university as a proxy maintains systemic advantages for privileged groups.        Case studies in algorithmic bias  Examining real-world cases of algorithmic bias helps illustrate both the challenges and potential solutions in this area.   COMPAS Recidivism Algorithm   The Correctional Offender Management Profiling for Alternative Sanctions (COMPAS) tool is used in some U.S. courts to assess defendants' risk of reoffending. In 2016, ProPublica analyzed the algorithm's performance and found:    Black defendants were nearly twice as likely to be incorrectly labeled as high-risk compared to white defendants    White defendants were more likely to be incorrectly labeled as low-risk compared to black defendants    The tool's developer, Northpointe (now Equivant), disputed these findings, arguing that the algorithm was equally accurate across racial groups when measuring calibration rather than error rates    This case highlighted that different mathematical definitions of fairness can be mutually incompatible      Key takeaways:    Multiple valid definitions of algorithmic fairness exist and may conflict    The choice of fairness metric is ultimately a value judgment, not just a technical decision    Automated systems in high-stakes contexts require careful scrutiny and transparency    Broader societal disparities in the criminal justice system affect the data used to train such algorithms       Amazon's AI Recruiting Tool   In 2018, Amazon abandoned an AI recruiting tool they had been developing because it showed bias against women:    The system was trained on resumes submitted to Amazon over a 10-year period    Since the tech industry and Amazon's workforce were predominantly male during that period, the algorithm learned to penalize resumes containing terms associated with women    It downgraded resumes that included words like \"women's\" (as in \"women's chess club captain\") and graduates of women's colleges    Amazon attempted to modify the algorithm to be neutral to these terms, but ultimately could not guarantee the system wouldn't find other ways to discriminate      Key lessons:    Historical data often reflects historical biases and can perpetuate them    Simply removing explicit gender indicators is insufficient to prevent bias    Complex machine learning systems may find subtle proxies for protected attributes    Sometimes the responsible decision is not to deploy an algorithm if fairness cannot be ensured       Compare Case Studies   Compare and contrast the COMPAS and Amazon case studies by addressing the following questions:    What similarities do you observe in how bias manifested in these two systems?    How did the organizations respond differently to the discovery of bias?    What might be the relative societal impacts of bias in criminal justice algorithms versus hiring algorithms?    What approaches might have helped prevent these biases before the systems were developed or deployed?          Discussion: Responsible data practices  Responsible data practices balance innovation with ethical considerations to minimize harm and maximize benefit. Key principles include:    Transparency : Clearly communicating how data is collected, used, and shared    Informed consent : Ensuring individuals understand and agree to data collection    Data minimization : Collecting only what's necessary for the intended purpose    Fairness assessment : Evaluating systems for potential discriminatory impacts    Accountability : Taking responsibility for data practices and their consequences    Security : Protecting data from unauthorized access or breaches    Contextual integrity : Respecting the context in which data was collected     Ethical Framework Discussion   In small groups, develop a simple ethical framework that data scientists could use to guide their work. Consider:    What key questions should data scientists ask themselves at each stage of a project?    What principles should guide decisions about data collection, analysis, and use?    How should potential harms be identified and weighed against benefits?    What stakeholders should be considered and potentially consulted?    What processes might help ensure ethical considerations are not overlooked?    Prepare to share your framework with the class.     Apply Responsible Data Practices   For the following scenario, identify at least three specific responsible data practices that should be implemented:  A healthcare app collects user data including physical activity, sleep patterns, heart rate, location, and dietary habits. The company plans to use this data to provide personalized health recommendations and potentially share insights with research partners and health insurance companies.      "
},
{
  "id": "subsec-data-equity-impact-4-1-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-equity-impact-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Access to opportunities "
},
{
  "id": "subsec-data-equity-impact-4-2-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-equity-impact-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Resource allocation "
},
{
  "id": "subsec-data-equity-impact-4-3-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-equity-impact-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Representation "
},
{
  "id": "subsec-data-equity-impact-4-4-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-equity-impact-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Privacy and autonomy "
},
{
  "id": "subsec-data-equity-impact-4-5-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-equity-impact-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cultural impact "
},
{
  "id": "subsec-data-equity-impact-6",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-equity-impact-6",
  "type": "Example",
  "number": "49",
  "title": "Data Impact Examples.",
  "body": " Data Impact Examples   Reinforcing inequity : A hiring algorithm trained on historical data learns to prefer candidates from prestigious universities, perpetuating existing socioeconomic advantages  Promoting equity : Public health data analysis identifies underserved communities and informs targeted resource allocation to address healthcare disparities   "
},
{
  "id": "exp-data-impact-society",
  "level": "2",
  "url": "sec-data-impact.html#exp-data-impact-society",
  "type": "Exploration",
  "number": "6",
  "title": "Data Impact Reflection.",
  "body": " Data Impact Reflection   Consider a data-driven system you regularly interact with (e.g., social media algorithm, customer service chatbot, navigation app, recommendation system). Reflect on:    How does this system influence your decisions or experiences?    What assumptions might be embedded in the system's design?    Who might be advantaged or disadvantaged by how the system works?    What responsibility do the system's creators have to consider societal impacts?     "
},
{
  "id": "subsec-data-bias-impact-4-1-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Training on biased historical data "
},
{
  "id": "subsec-data-bias-impact-4-2-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proxy variables "
},
{
  "id": "subsec-data-bias-impact-4-3-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Feedback loops "
},
{
  "id": "subsec-data-bias-impact-4-4-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Unequal representation "
},
{
  "id": "subsec-data-bias-impact-4-5-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lack of context "
},
{
  "id": "subsec-data-bias-impact-6-1-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bias detection "
},
{
  "id": "subsec-data-bias-impact-6-2-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fairness constraints "
},
{
  "id": "subsec-data-bias-impact-6-3-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-6-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Diverse data collection "
},
{
  "id": "subsec-data-bias-impact-6-4-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-6-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transparency "
},
{
  "id": "subsec-data-bias-impact-6-5-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-data-bias-impact-6-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Counterfactual analysis "
},
{
  "id": "ex-bias-scenarios",
  "level": "2",
  "url": "sec-data-impact.html#ex-bias-scenarios",
  "type": "Checkpoint",
  "number": "50",
  "title": "Analyze Bias Scenarios.",
  "body": " Analyze Bias Scenarios   For each scenario, identify whether the data approach is more likely to perpetuate or mitigate bias, and explain why:     A loan approval algorithm is trained on historical lending decisions without considering whether those decisions were fair    Perpetuates bias: This approach risks encoding any historical discrimination in lending practices into the new algorithm. If certain groups were unfairly denied loans in the past, the algorithm will learn to continue this pattern.      A healthcare researcher intentionally oversamples underrepresented populations to ensure sufficient data for accurate predictions across all groups    Mitigates bias: This approach addresses the common problem of insufficient data for minority populations, which often leads to less accurate models for these groups. Oversampling helps ensure the model works well for everyone.      A company removes names from job applications before review but continues to prioritize candidates from certain universities    Perpetuates bias: While removing names may reduce some direct bias, university attendance often correlates with socioeconomic status, race, and other protected attributes. Using university as a proxy maintains systemic advantages for privileged groups.    "
},
{
  "id": "ex-case-comparison",
  "level": "2",
  "url": "sec-data-impact.html#ex-case-comparison",
  "type": "Checkpoint",
  "number": "51",
  "title": "Compare Case Studies.",
  "body": " Compare Case Studies   Compare and contrast the COMPAS and Amazon case studies by addressing the following questions:    What similarities do you observe in how bias manifested in these two systems?    How did the organizations respond differently to the discovery of bias?    What might be the relative societal impacts of bias in criminal justice algorithms versus hiring algorithms?    What approaches might have helped prevent these biases before the systems were developed or deployed?      "
},
{
  "id": "subsec-responsible-data-practices-3-1-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-responsible-data-practices-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transparency "
},
{
  "id": "subsec-responsible-data-practices-3-2-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-responsible-data-practices-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Informed consent "
},
{
  "id": "subsec-responsible-data-practices-3-3-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-responsible-data-practices-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data minimization "
},
{
  "id": "subsec-responsible-data-practices-3-4-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-responsible-data-practices-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fairness assessment "
},
{
  "id": "subsec-responsible-data-practices-3-5-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-responsible-data-practices-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Accountability "
},
{
  "id": "subsec-responsible-data-practices-3-6-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-responsible-data-practices-3-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Security "
},
{
  "id": "subsec-responsible-data-practices-3-7-1",
  "level": "2",
  "url": "sec-data-impact.html#subsec-responsible-data-practices-3-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Contextual integrity "
},
{
  "id": "exp-ethical-framework",
  "level": "2",
  "url": "sec-data-impact.html#exp-ethical-framework",
  "type": "Exploration",
  "number": "7",
  "title": "Ethical Framework Discussion.",
  "body": " Ethical Framework Discussion   In small groups, develop a simple ethical framework that data scientists could use to guide their work. Consider:    What key questions should data scientists ask themselves at each stage of a project?    What principles should guide decisions about data collection, analysis, and use?    How should potential harms be identified and weighed against benefits?    What stakeholders should be considered and potentially consulted?    What processes might help ensure ethical considerations are not overlooked?    Prepare to share your framework with the class.   "
},
{
  "id": "ex-responsible-practices",
  "level": "2",
  "url": "sec-data-impact.html#ex-responsible-practices",
  "type": "Checkpoint",
  "number": "52",
  "title": "Apply Responsible Data Practices.",
  "body": " Apply Responsible Data Practices   For the following scenario, identify at least three specific responsible data practices that should be implemented:  A healthcare app collects user data including physical activity, sleep patterns, heart rate, location, and dietary habits. The company plans to use this data to provide personalized health recommendations and potentially share insights with research partners and health insurance companies.    "
},
{
  "id": "sec-unit-one-conclusion",
  "level": "1",
  "url": "sec-unit-one-conclusion.html",
  "type": "Section",
  "number": "",
  "title": "Unit 1 Conclusion",
  "body": " Unit 1 Conclusion    Reflection on data's role in students' lives  This final activity encourages reflection on how data shapes your lives and your relationship with data after all the learning we've accomplished in Unit 1.   Data in Your Life Reflection   After completing this unit and your personal data tracking project, reflect on the following questions:    How has your awareness of data in your daily life changed since beginning this course?    What surprised you most about your own data in the tracking project?    How might you use data more intentionally in your personal or professional decision-making?    What concerns or questions do you have about how others might be using data related to your activities?    What aspects of data science are you most interested in exploring further in the upcoming units?       Data Literacy Self-Assessment   Rate your current level of confidence in the following data literacy skills on a scale of 1-5 (1 = Not confident at all, 5 = Very confident):      Distinguishing between different types of data (qualitative\/quantitative, structured\/unstructured)      Evaluating the quality and reliability of data sources      Identifying potential biases in data collection and analysis      Creating basic visualizations to represent data      Using data to inform personal or academic decisions      Understanding ethical implications of data collection and use      As we conclude Unit 1, take a moment to review the key concepts we've covered:    The fundamentals of data science and its applications    Different types and characteristics of data    How data is collected and by whom    Evaluating data quality and sources    Data's role in decision-making    Ethical considerations and societal impacts of data    In Unit 2, we'll build on these foundational concepts learning about key data moves and by developing a few computational skills with Web-R to work with data more effectively.   "
},
{
  "id": "exp-data-role-reflection",
  "level": "2",
  "url": "sec-unit-one-conclusion.html#exp-data-role-reflection",
  "type": "Exploration",
  "number": "8",
  "title": "Data in Your Life Reflection.",
  "body": " Data in Your Life Reflection   After completing this unit and your personal data tracking project, reflect on the following questions:    How has your awareness of data in your daily life changed since beginning this course?    What surprised you most about your own data in the tracking project?    How might you use data more intentionally in your personal or professional decision-making?    What concerns or questions do you have about how others might be using data related to your activities?    What aspects of data science are you most interested in exploring further in the upcoming units?     "
},
{
  "id": "ex-data-literacy",
  "level": "2",
  "url": "sec-unit-one-conclusion.html#ex-data-literacy",
  "type": "Checkpoint",
  "number": "53",
  "title": "Data Literacy Self-Assessment.",
  "body": " Data Literacy Self-Assessment   Rate your current level of confidence in the following data literacy skills on a scale of 1-5 (1 = Not confident at all, 5 = Very confident):      Distinguishing between different types of data (qualitative\/quantitative, structured\/unstructured)      Evaluating the quality and reliability of data sources      Identifying potential biases in data collection and analysis      Creating basic visualizations to represent data      Using data to inform personal or academic decisions      Understanding ethical implications of data collection and use     "
},
{
  "id": "sec-intro-to-web-r",
  "level": "1",
  "url": "sec-intro-to-web-r.html",
  "type": "Section",
  "number": "",
  "title": "Introduction to Web-R",
  "body": " Introduction to Web-R    R environment overview and basic syntax  R is a powerful programming language and environment specifically designed for statistical computing and data analysis. Web-R provides browser-based access to R without requiring local installation.  Key components of the R environment include:    Console : Where commands are entered and executed    Script Editor : For writing and saving R code files    Environment : Shows variables and objects in memory    Packages : Extensions that add functionality to base R    Help : Documentation and assistance for R functions    R syntax fundamentals:    Case sensitivity: R distinguishes between uppercase and lowercase letters    Assignment: Use <- to assign values to variables (though = also works)    Comments: Begin with # and are not executed    Function calls: function_name(arg1, arg2)    Indexing: Use square brackets [] to access elements      R Syntax Fundamentals   Match each R code example on the left with its correct description on the right.     Assignment operator creating a variable x with value 10  x<-10    Accessing the third element of a vector or list called names  names[3]    A comment that R ignores during execution  #Calculate Mean    Testing if two variables have equal values  total==sum    An operation that will return a remainder of (1)  5%%2    Creating a complex expression that adds two variables and multiplies by 2  <- (x + y) * 2    Function call with two arguments to calculate an average while removing missing values  mean(data, na.rm=TRUE)    Testing if a variable is not equal to zero  Value !=    Requesting help documentation for a function  ?mean    Creating two different variables due to case sensitivity  Count <- count     Correct matches:   x <- 10: Assignment operator creating a variable x with value 10  names[3]: Accessing the third element of a vector or list called names  # Calculate average: A comment that R ignores during execution  total == sum: Testing if two variables have equal values  5 %% 2: Modulo operation returning the remainder (1)  result <- (x + y) * 2: Creating a complex expression that adds two variables and multiplies by 2  mean(data, na.rm=TRUE): Function call with two arguments to calculate an average while removing missing values  Value != 0: Testing if a variable is not equal to zero  ?mean: Requesting help documentation for a function  Count <- count: Creating two different variables due to case sensitivity        Variables, data types, and basic operations  R supports various data types for different kinds of information:   Common R Data Types    Data Type  Description  Example    Numeric  Real numbers  42.5    Integer  Whole numbers  42L (the L specifies integer)    Character  Text strings  \"Hello\" or 'World'    Logical  Boolean values  TRUE or FALSE    Factor  Categorical variables  factor(c(\"small\", \"medium\", \"large\"))    Date  Calendar dates  as.Date(\"2025-05-10\")     Key operations and functions for working with variables include:    Type checking : class() , typeof() , is.numeric() , is.character() , etc.    Type conversion : as.numeric() , as.character() , as.factor() , etc.    Variable information : length() , str() , summary()    Mathematical operations : + , - , * , \/ , ^ , %% (modulo), %\/% (integer division)    Logical operations : == , != , < , > , <= , >= , & (and), | (or), ! (not)      Data Types Practice   For each of the following R expressions, predict what data type the result will be:     \"42\" + 8  error (can't add a number to a character string)    as.numeric(\"42\") + 8  numeric    10 > 5  logical    c(\"red\", \"green\", \"blue\")  character vector    as.Date(\"2025-01-01\") + 30  Date        Hands-on practice: Simple calculations and variable assignments  Let's practice some fundamental R operations through hands-on exercises.   Basic R Calculations   Work through the following exercises in Web-R:    Calculate the area of a circle with radius 5 (remember: area = π × r²)    Convert a temperature of 75°F to Celsius using the formula: C = (F - 32) × 5\/9    Calculate the average of the following five numbers: 18, 24, 32, 21, 15    Determine whether the average you calculated is greater than 20        Debugging Practice   The following R code contains several errors. Find and fix all the errors to make the code run correctly:  # Calculate the final price of an item with tax item_price = 29.99 tax_rate = 0.08 # Calculate tax amount tax_amount <- item_price x tax_rate # Calculate final price final_price <- item_price + tax_Amount # Check if the price is below budget budget <- 35 is_affordable = final price < Budget # Print results print(\"Tax amount:\" tax_amount) print(\"Final price:\" final_price) print(\"Affordable?\", is_affordable)    # Calculate the final price of an item with tax item_price <- 29.99 # Proper syntax is to use <- to assign variables tax_rate <- 0.08 #though = technically still works # Calculate tax amount tax_amount <- item_price * tax_rate # Changed 'x' to '*' # Calculate final price final_price <- item_price + tax_amount # Fixed capitalization of tax_amount # Check if the price is below budget budget <- 35 is_affordable <- final_price < budget # Added space and fixed capitalization # Print results print(paste(\"Tax amount:\", tax_amount)) # Added paste function print(paste(\"Final price:\", final_price)) # Added paste function print(paste(\"Affordable?\", is_affordable)) # Added paste function     "
},
{
  "id": "subsec-r-environment-4-1-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-r-environment-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Console "
},
{
  "id": "subsec-r-environment-4-2-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-r-environment-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Script Editor "
},
{
  "id": "subsec-r-environment-4-3-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-r-environment-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Environment "
},
{
  "id": "subsec-r-environment-4-4-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-r-environment-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Packages "
},
{
  "id": "subsec-r-environment-4-5-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-r-environment-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Help "
},
{
  "id": "exercise-r-syntax-matching",
  "level": "2",
  "url": "sec-intro-to-web-r.html#exercise-r-syntax-matching",
  "type": "Checkpoint",
  "number": "54",
  "title": "R Syntax Fundamentals.",
  "body": " R Syntax Fundamentals   Match each R code example on the left with its correct description on the right.     Assignment operator creating a variable x with value 10  x<-10    Accessing the third element of a vector or list called names  names[3]    A comment that R ignores during execution  #Calculate Mean    Testing if two variables have equal values  total==sum    An operation that will return a remainder of (1)  5%%2    Creating a complex expression that adds two variables and multiplies by 2  <- (x + y) * 2    Function call with two arguments to calculate an average while removing missing values  mean(data, na.rm=TRUE)    Testing if a variable is not equal to zero  Value !=    Requesting help documentation for a function  ?mean    Creating two different variables due to case sensitivity  Count <- count     Correct matches:   x <- 10: Assignment operator creating a variable x with value 10  names[3]: Accessing the third element of a vector or list called names  # Calculate average: A comment that R ignores during execution  total == sum: Testing if two variables have equal values  5 %% 2: Modulo operation returning the remainder (1)  result <- (x + y) * 2: Creating a complex expression that adds two variables and multiplies by 2  mean(data, na.rm=TRUE): Function call with two arguments to calculate an average while removing missing values  Value != 0: Testing if a variable is not equal to zero  ?mean: Requesting help documentation for a function  Count <- count: Creating two different variables due to case sensitivity    "
},
{
  "id": "table-r-data-types",
  "level": "2",
  "url": "sec-intro-to-web-r.html#table-r-data-types",
  "type": "Table",
  "number": "55",
  "title": "Common R Data Types",
  "body": " Common R Data Types    Data Type  Description  Example    Numeric  Real numbers  42.5    Integer  Whole numbers  42L (the L specifies integer)    Character  Text strings  \"Hello\" or 'World'    Logical  Boolean values  TRUE or FALSE    Factor  Categorical variables  factor(c(\"small\", \"medium\", \"large\"))    Date  Calendar dates  as.Date(\"2025-05-10\")    "
},
{
  "id": "subsec-variables-datatypes-5-1-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-variables-datatypes-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Type checking "
},
{
  "id": "subsec-variables-datatypes-5-2-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-variables-datatypes-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Type conversion "
},
{
  "id": "subsec-variables-datatypes-5-3-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-variables-datatypes-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Variable information "
},
{
  "id": "subsec-variables-datatypes-5-4-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-variables-datatypes-5-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mathematical operations "
},
{
  "id": "subsec-variables-datatypes-5-5-1",
  "level": "2",
  "url": "sec-intro-to-web-r.html#subsec-variables-datatypes-5-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Logical operations "
},
{
  "id": "ex-data-types",
  "level": "2",
  "url": "sec-intro-to-web-r.html#ex-data-types",
  "type": "Checkpoint",
  "number": "56",
  "title": "Data Types Practice.",
  "body": " Data Types Practice   For each of the following R expressions, predict what data type the result will be:     \"42\" + 8  error (can't add a number to a character string)    as.numeric(\"42\") + 8  numeric    10 > 5  logical    c(\"red\", \"green\", \"blue\")  character vector    as.Date(\"2025-01-01\") + 30  Date    "
},
{
  "id": "activity-basic-calculations",
  "level": "2",
  "url": "sec-intro-to-web-r.html#activity-basic-calculations",
  "type": "Activity",
  "number": "9",
  "title": "Basic R Calculations.",
  "body": " Basic R Calculations   Work through the following exercises in Web-R:    Calculate the area of a circle with radius 5 (remember: area = π × r²)    Convert a temperature of 75°F to Celsius using the formula: C = (F - 32) × 5\/9    Calculate the average of the following five numbers: 18, 24, 32, 21, 15    Determine whether the average you calculated is greater than 20     "
},
{
  "id": "ex-debugging-practice",
  "level": "2",
  "url": "sec-intro-to-web-r.html#ex-debugging-practice",
  "type": "Checkpoint",
  "number": "57",
  "title": "Debugging Practice.",
  "body": " Debugging Practice   The following R code contains several errors. Find and fix all the errors to make the code run correctly:  # Calculate the final price of an item with tax item_price = 29.99 tax_rate = 0.08 # Calculate tax amount tax_amount <- item_price x tax_rate # Calculate final price final_price <- item_price + tax_Amount # Check if the price is below budget budget <- 35 is_affordable = final price < Budget # Print results print(\"Tax amount:\" tax_amount) print(\"Final price:\" final_price) print(\"Affordable?\", is_affordable)    # Calculate the final price of an item with tax item_price <- 29.99 # Proper syntax is to use <- to assign variables tax_rate <- 0.08 #though = technically still works # Calculate tax amount tax_amount <- item_price * tax_rate # Changed 'x' to '*' # Calculate final price final_price <- item_price + tax_amount # Fixed capitalization of tax_amount # Check if the price is below budget budget <- 35 is_affordable <- final_price < budget # Added space and fixed capitalization # Print results print(paste(\"Tax amount:\", tax_amount)) # Added paste function print(paste(\"Final price:\", final_price)) # Added paste function print(paste(\"Affordable?\", is_affordable)) # Added paste function   "
},
{
  "id": "sec-data-structures",
  "level": "1",
  "url": "sec-data-structures.html",
  "type": "Section",
  "number": "",
  "title": "Working with data structures",
  "body": " Working with data structures    Lists and Dataframes  R provides several data structures for organizing and manipulating dat, but we will be primarily working with:    A vector is a one-dimensional collection of elements of the same data type. Vectors are created using the c() function.      A list is a flexible collection that can contain elements of different data types, including other lists. Lists are created using the list() function.      A data frame is a two-dimensional table-like structure where each column can contain a different data type. Data frames are the most common structure for datasets in R.        Creating and manipulating basic data structures  Let's explore common operations for creating and manipulating data structures in R. Here are some common data frame operations:    Creating : data.frame() , as.data.frame()    Selecting columns : df$column , df[, \"column\"] , df[, 1]    Selecting rows : df[1:5, ] , df[df$x > 10, ]    Adding columns : df$new_col <- values , cbind(df, new_col = values)    Adding rows : rbind(df, new_row)    Information functions : nrow() , ncol() , dim() , names() , str() , summary()        Exercise: Building and transforming data structures   Building a Student Dataset   In this exercise, you will create and manipulate a dataset of student information.  Instructions:    Create a data frame containing information for 5 students with the following columns:   last_four_digits_student_id (numeric)  name (character)  age (numeric)  major (character)  gpa (numeric) Note: you can use any GPA if you're not comfortable sharing     Add a new column called 'year' indicating the year of study (1, 2, 3, or 4) for each student    Add a new column called 'honors' that contains TRUE for students with GPA ≥ 3.5 and FALSE otherwise    Create a subset of the data frame that includes only honors students    Calculate and display the average GPA for each major        Answer   # Step 1: Create the student data frame students <- data.frame( student_id = 1:5, name = c(\"Alex\", \"Beatrice\", \"Carlos\", \"Diana\", \"Eli\"), age = c(19, 20, 21, 19, 22), major = c(\"Computer Science\", \"Biology\", \"Computer Science\", \"Mathematics\", \"Biology\"), gpa = c(3.7, 3.4, 3.2, 3.9, 3.6) ) # Display the data frame students # Step 2: Add a 'year' column students$year <- c(2, 3, 4, 1, 4) students # Step 3: Add an 'honors' column students$honors <- students$gpa >= 3.5 students # Step 4: Create a subset of honors students honors_students <- students[students$honors, ] honors_students # Step 5: Calculate average GPA by major # Using aggregate function avg_gpa_by_major <- aggregate(gpa ~ major, data = students, FUN = mean) avg_gpa_by_major     Challenge Task   Using the student dataset from the exercise above, complete the following tasks:    Find the student with the highest GPA    Calculate the percentage of students who are on the honors list    Create a new column called 'age_group' that categorizes students as 'Under 20', '20-21', or '22+' based on their age      # Find the student with the highest GPA top_student <- students[which.max(students$gpa), ] top_student # Calculate percentage of honors students percent_honors <- mean(students$honors) * 100 percent_honors # Create age_group column students$age_group <- cut(students$age, breaks = c(0, 20, 22, Inf), labels = c(\"Under 20\", \"20-21\", \"22+\")) students     "
},
{
  "id": "def-vector",
  "level": "2",
  "url": "sec-data-structures.html#def-vector",
  "type": "Definition",
  "number": "58",
  "title": "",
  "body": "  A vector is a one-dimensional collection of elements of the same data type. Vectors are created using the c() function.   "
},
{
  "id": "def-list",
  "level": "2",
  "url": "sec-data-structures.html#def-list",
  "type": "Definition",
  "number": "59",
  "title": "",
  "body": "  A list is a flexible collection that can contain elements of different data types, including other lists. Lists are created using the list() function.   "
},
{
  "id": "def-dataframe",
  "level": "2",
  "url": "sec-data-structures.html#def-dataframe",
  "type": "Definition",
  "number": "60",
  "title": "",
  "body": "  A data frame is a two-dimensional table-like structure where each column can contain a different data type. Data frames are the most common structure for datasets in R.   "
},
{
  "id": "subsec-manipulating-structures-3-1-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Creating "
},
{
  "id": "subsec-manipulating-structures-3-2-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Selecting columns "
},
{
  "id": "subsec-manipulating-structures-3-3-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Selecting rows "
},
{
  "id": "subsec-manipulating-structures-3-4-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adding columns "
},
{
  "id": "subsec-manipulating-structures-3-5-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adding rows "
},
{
  "id": "subsec-manipulating-structures-3-6-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-3-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Information functions "
},
{
  "id": "activity-build-dataset",
  "level": "2",
  "url": "sec-data-structures.html#activity-build-dataset",
  "type": "Activity",
  "number": "10",
  "title": "Building a Student Dataset.",
  "body": " Building a Student Dataset   In this exercise, you will create and manipulate a dataset of student information.  Instructions:    Create a data frame containing information for 5 students with the following columns:   last_four_digits_student_id (numeric)  name (character)  age (numeric)  major (character)  gpa (numeric) Note: you can use any GPA if you're not comfortable sharing     Add a new column called 'year' indicating the year of study (1, 2, 3, or 4) for each student    Add a new column called 'honors' that contains TRUE for students with GPA ≥ 3.5 and FALSE otherwise    Create a subset of the data frame that includes only honors students    Calculate and display the average GPA for each major     "
},
{
  "id": "ex-student-dataset-answer",
  "level": "2",
  "url": "sec-data-structures.html#ex-student-dataset-answer",
  "type": "Checkpoint",
  "number": "61",
  "title": "Answer.",
  "body": " Answer   # Step 1: Create the student data frame students <- data.frame( student_id = 1:5, name = c(\"Alex\", \"Beatrice\", \"Carlos\", \"Diana\", \"Eli\"), age = c(19, 20, 21, 19, 22), major = c(\"Computer Science\", \"Biology\", \"Computer Science\", \"Mathematics\", \"Biology\"), gpa = c(3.7, 3.4, 3.2, 3.9, 3.6) ) # Display the data frame students # Step 2: Add a 'year' column students$year <- c(2, 3, 4, 1, 4) students # Step 3: Add an 'honors' column students$honors <- students$gpa >= 3.5 students # Step 4: Create a subset of honors students honors_students <- students[students$honors, ] honors_students # Step 5: Calculate average GPA by major # Using aggregate function avg_gpa_by_major <- aggregate(gpa ~ major, data = students, FUN = mean) avg_gpa_by_major   "
},
{
  "id": "ex-challenge-task",
  "level": "2",
  "url": "sec-data-structures.html#ex-challenge-task",
  "type": "Checkpoint",
  "number": "62",
  "title": "Challenge Task.",
  "body": " Challenge Task   Using the student dataset from the exercise above, complete the following tasks:    Find the student with the highest GPA    Calculate the percentage of students who are on the honors list    Create a new column called 'age_group' that categorizes students as 'Under 20', '20-21', or '22+' based on their age      # Find the student with the highest GPA top_student <- students[which.max(students$gpa), ] top_student # Calculate percentage of honors students percent_honors <- mean(students$honors) * 100 percent_honors # Create age_group column students$age_group <- cut(students$age, breaks = c(0, 20, 22, Inf), labels = c(\"Under 20\", \"20-21\", \"22+\")) students   "
},
{
  "id": "sec-data-cleaning",
  "level": "1",
  "url": "sec-data-cleaning.html",
  "type": "Section",
  "number": "",
  "title": "Data Cleaning and Organizing",
  "body": " Data Cleaning and Organizing   Real-world data rarely comes in a perfect, analysis-ready format. Data cleaning (sometimes called data wrangling or data preprocessing) is the process of detecting and correcting errors, inconsistencies, and inaccuracies in datasets. It's often said that data scientists spend up to 80% of their time cleaning and organizing data, making this a critical skill in the data science workflow.    Why Clean Data Matters  Clean data is a prerequisite for reliable analysis. Working with messy data can lead to:   Incorrect conclusions or predictions  Wasted time debugging analytical procedures  Difficulties reproducing results  Loss of credibility when presenting findings   The concept of \"garbage in, garbage out\" is especially relevant in data science—even the most sophisticated analysis methods will produce flawed results if applied to poor-quality data.    Common Data Quality Issues  Before cleaning data, it's important to recognize common quality issues:    Missing values  Data points that are absent from the dataset, often represented as NA in R    Duplicate records  Identical or nearly identical rows that appear multiple times    Outliers  Values that differ significantly from other observations and may represent errors    Inconsistent formatting  The same data represented differently (e.g., \"New York\" vs. \"NY\" vs. \"N.Y.\")    Incorrect data types  Data stored in inappropriate formats (e.g., dates stored as text)    Structural issues  Problems with how the data is organized (e.g., multiple values in a single cell)      Data Cleaning Process  A systematic approach to data cleaning typically includes:   Inspecting the data to identify issues  Handling missing values through deletion or imputation  Correcting inconsistencies and errors  Validating and verifying the cleaned dataset  Documenting the cleaning process for reproducibility   Let's explore how to perform these tasks in R.    Data Cleaning in R  R provides numerous functions and packages for data cleaning. Here are some fundamental techniques:   The above example demonstrates basic data cleaning techniques. For more complex datasets, specialized packages like tidyr , dplyr , and janitor offer powerful tools.    Tidy Data Principles  \"Tidy data\" is a standard way of organizing data that makes analysis easier. According to Hadley Wickham, tidy data has the following characteristics:   Each variable forms a column  Each observation forms a row  Each type of observational unit forms a table   The tidyr package helps reshape data to meet these principles:   # Load tidyr package library(tidyr) # Create a messy dataset where columns represent years untidy_data <- data.frame( country = c(\"USA\", \"Canada\", \"Mexico\"), `2018` = c(100, 90, 85), `2019` = c(105, 92, 87), `2020` = c(98, 88, 84) ) print(untidy_data) # Convert to tidy format - each row is a country-year observation tidy_data <- pivot_longer( untidy_data, cols = c(`2018`, `2019`, `2020`), names_to = \"year\", values_to = \"score\" ) print(tidy_data) # The reverse operation - from tidy to wide format wide_data <- pivot_wider( tidy_data, names_from = year, values_from = score ) print(wide_data)     Data Validation  After cleaning, it's essential to validate your data to ensure it meets quality standards:   # Create a simple cleaned dataset for validation clean_data <- data.frame( ID = 1:5, Age = c(25, 30, 22, 41, 38), Income = c(45000, 52000, 0, 63000, 58000) ) # Validation checks validation_results <- list( # Check for missing values missing_values = any(is.na(clean_data)), # Check for duplicates duplicates = any(duplicated(clean_data$ID)), # Check value ranges age_in_range = all(clean_data$Age >= 0 & clean_data$Age < 120), # Check for suspicious values suspicious_income = any(clean_data$Income == 0) ) print(validation_results) # Create a validation report for (check in names(validation_results)) { status <- if(check == \"suspicious_income\") { ifelse(validation_results[[check]], \"WARNING\", \"PASS\") } else { ifelse(validation_results[[check]], \"FAIL\", \"PASS\") } cat(check, \": \", status, \"\\n\", sep=\"\") }     Data cleaning is an iterative process that requires careful attention to detail and domain knowledge. While it may not be the most glamorous part of data science, it is undoubtedly one of the most important. Clean, well-organized data sets the foundation for all subsequent analysis and modeling tasks.    Data Cleaning Practice   Given the following dataset of student records with various issues, apply data cleaning techniques to address the problems:   # Student records with quality issues students <- data.frame( ID = c(101, 102, 102, 103, NA, 105), Name = c(\"john smith\", \"JANE DOE\", \"Jane Doe\", \"Sam Brown\", \"Alex Johnson\", \"\"), Score = c(85, \"A\", 92, 78, 65, 90), Grade = c(\"B\", \"A\", \"A-\", \"C+\", \"D\", \"A-\"), Date_Enrolled = c(\"2023-09-01\", \"09\/01\/2023\", \"2023-09-01\", \"Sept 1, 2023\", NA, \"01-09-2023\") ) # Your cleaning tasks: # 1. Handle duplicate student IDs (keep the higher score) # 2. Fill in missing or empty values # 3. Standardize name formats (proper case) # 4. Ensure Score is numeric (convert \"A\" to 95) # 5. Standardize date formats # 6. Validate the cleaned data      # Load required packages library(dplyr) library(lubridate) # First look at the data print(students) str(students) # Define a proper case function proper_case <- function(x) { return(gsub(\"\\\\b([a-z])\", \"\\\\U\\\\1\", tolower(x), perl=TRUE)) } # Clean the data cleaned_students <- students %>% # Convert Score to numeric (A = 95) mutate(Score = case_when( Score == \"A\" ~ 95, TRUE ~ as.numeric(as.character(Score)) )) %>% # Handle duplicates - keep row with higher score group_by(ID) %>% slice_max(Score, with_ties = FALSE) %>% ungroup() %>% # Standardize names mutate(Name = proper_case(Name)) %>% # Fill missing\/empty values mutate( ID = if_else(is.na(ID), 999, ID), Name = if_else(Name == \"\", \"Unknown\", Name) ) # Parse and standardize dates parse_date <- function(date_str) { if (is.na(date_str) || date_str == \"\") return(as.Date(\"2023-09-01\")) # Try different formats date <- try(ymd(date_str), silent = TRUE) if (inherits(date, \"try-error\") || is.na(date)) date <- try(mdy(date_str), silent = TRUE) if (inherits(date, \"try-error\") || is.na(date)) date <- try(dmy(date_str), silent = TRUE) if (inherits(date, \"try-error\") || is.na(date)) { # Handle text dates like \"Sept 1, 2023\" if (grepl(\"Sept\", date_str)) { date <- as.Date(\"2023-09-01\") } } return(date) } # Apply date parsing cleaned_students$Date_Enrolled <- sapply(students$Date_Enrolled, parse_date) # Validate the cleaned data validation_checks <- list( no_missing_values = !any(is.na(cleaned_students)), no_duplicates = !any(duplicated(cleaned_students$ID)), all_scores_numeric = is.numeric(cleaned_students$Score), all_dates_standardized = all(class(cleaned_students$Date_Enrolled) == \"Date\") ) # Print validation results print(validation_checks) # Display the cleaned dataset print(cleaned_students)      Data Cleaning Concepts  Which of the following are key principles of \"tidy data\"? Select all that apply.   Each variable forms a column  Missing values should be replaced with zeros  Each observation forms a row  Variable names should be in uppercase  Each type of observational unit forms a table    "
},
{
  "id": "ex-data-cleaning",
  "level": "2",
  "url": "sec-data-cleaning.html#ex-data-cleaning",
  "type": "Checkpoint",
  "number": "63",
  "title": "Data Cleaning Practice.",
  "body": " Data Cleaning Practice   Given the following dataset of student records with various issues, apply data cleaning techniques to address the problems:   # Student records with quality issues students <- data.frame( ID = c(101, 102, 102, 103, NA, 105), Name = c(\"john smith\", \"JANE DOE\", \"Jane Doe\", \"Sam Brown\", \"Alex Johnson\", \"\"), Score = c(85, \"A\", 92, 78, 65, 90), Grade = c(\"B\", \"A\", \"A-\", \"C+\", \"D\", \"A-\"), Date_Enrolled = c(\"2023-09-01\", \"09\/01\/2023\", \"2023-09-01\", \"Sept 1, 2023\", NA, \"01-09-2023\") ) # Your cleaning tasks: # 1. Handle duplicate student IDs (keep the higher score) # 2. Fill in missing or empty values # 3. Standardize name formats (proper case) # 4. Ensure Score is numeric (convert \"A\" to 95) # 5. Standardize date formats # 6. Validate the cleaned data      # Load required packages library(dplyr) library(lubridate) # First look at the data print(students) str(students) # Define a proper case function proper_case <- function(x) { return(gsub(\"\\\\b([a-z])\", \"\\\\U\\\\1\", tolower(x), perl=TRUE)) } # Clean the data cleaned_students <- students %>% # Convert Score to numeric (A = 95) mutate(Score = case_when( Score == \"A\" ~ 95, TRUE ~ as.numeric(as.character(Score)) )) %>% # Handle duplicates - keep row with higher score group_by(ID) %>% slice_max(Score, with_ties = FALSE) %>% ungroup() %>% # Standardize names mutate(Name = proper_case(Name)) %>% # Fill missing\/empty values mutate( ID = if_else(is.na(ID), 999, ID), Name = if_else(Name == \"\", \"Unknown\", Name) ) # Parse and standardize dates parse_date <- function(date_str) { if (is.na(date_str) || date_str == \"\") return(as.Date(\"2023-09-01\")) # Try different formats date <- try(ymd(date_str), silent = TRUE) if (inherits(date, \"try-error\") || is.na(date)) date <- try(mdy(date_str), silent = TRUE) if (inherits(date, \"try-error\") || is.na(date)) date <- try(dmy(date_str), silent = TRUE) if (inherits(date, \"try-error\") || is.na(date)) { # Handle text dates like \"Sept 1, 2023\" if (grepl(\"Sept\", date_str)) { date <- as.Date(\"2023-09-01\") } } return(date) } # Apply date parsing cleaned_students$Date_Enrolled <- sapply(students$Date_Enrolled, parse_date) # Validate the cleaned data validation_checks <- list( no_missing_values = !any(is.na(cleaned_students)), no_duplicates = !any(duplicated(cleaned_students$ID)), all_scores_numeric = is.numeric(cleaned_students$Score), all_dates_standardized = all(class(cleaned_students$Date_Enrolled) == \"Date\") ) # Print validation results print(validation_checks) # Display the cleaned dataset print(cleaned_students)    "
},
{
  "id": "sec-data-import",
  "level": "1",
  "url": "sec-data-import.html",
  "type": "Section",
  "number": "",
  "title": "Data Import and Exploration",
  "body": " Data Import and Exploration    Reading CSV files and other data formats  R can import data from various file formats. The most common is the CSV (Comma-Separated Values) format, but R also supports Excel files, JSON, XML, and database connections.  Basic functions for importing data include:    read.csv() : For comma-separated files    read.table() : For more general text files with flexible delimiter options    read.delim() : For tab-delimited files    readxl::read_excel() : For Excel files (requires the readxl package)    jsonlite::fromJSON() : For JSON files (requires the jsonlite package)    Key parameters for the read.csv() function:    file : File path or URL    header : TRUE if the first row contains column names    sep : Field separator character    dec : Decimal point character    stringsAsFactors : Should character columns be converted to factors?    na.strings : Strings to be treated as NA values     # First, let's create a sample CSV file to use # Create a sample dataset sample_data <- data.frame( ID = 1:5, Name = c(\"Alice\", \"Bob\", \"Charlie\", \"Diana\", \"Elijah\"), Age = c(25, 32, 28, 41, 35), Salary = c(55000, 62000, 58000, 75000, 68000), Department = c(\"HR\", \"IT\", \"Marketing\", \"Finance\", \"IT\") ) # Save it as a CSV file write.csv(sample_data, \"employee_data.csv\", row.names = FALSE) # Verify the file was created list.files(pattern = \"*.csv\") # Now let's import the CSV file # Basic import employees <- read.csv(\"employee_data.csv\") head(employees) # Import with some options employees2 <- read.csv(\"employee_data.csv\", stringsAsFactors = TRUE, # Convert strings to factors na.strings = c(\"NA\", \"N\/A\", \"\")) # Define NA values # Compare the structure of the two imports str(employees) str(employees2) # Creating a CSV with missing values sample_data_na <- data.frame( ID = 1:5, Name = c(\"Alice\", \"Bob\", \"Charlie\", \"\", \"Elijah\"), Age = c(25, NA, 28, 41, 35), Salary = c(55000, 62000, NA, 75000, 68000), Department = c(\"HR\", \"IT\", \"N\/A\", \"Finance\", \"IT\") ) # Save it as a CSV file write.csv(sample_data_na, \"employee_data_na.csv\", row.names = FALSE) # Import handling missing values employees_na <- read.csv(\"employee_data_na.csv\", na.strings = c(\"NA\", \"N\/A\", \"\")) # Check for missing values employees_na is.na(employees_na) colSums(is.na(employees_na)) # Count NAs in each column   In real-world applications, you might need to import data from URLs or from other packages:   # Importing data from a URL # Note: This URL is a placeholder and may not work in the actual Web-R environment # First, let's use a dataset from R's built-in datasets data(mtcars) head(mtcars) # To load from a URL (commented out as it may not work in Web-R) # url <- \"https:\/\/raw.githubusercontent.com\/datasets\/sample\/main\/data.csv\" # online_data <- read.csv(url) # Using datasets from packages # Install and load a package with datasets # install.packages(\"palmerpenguins\") # Uncomment to install # library(palmerpenguins) # data(penguins) # head(penguins) # For this example, let's use another built-in dataset data(iris) head(iris) str(iris)    Data Import Practice   Answer the following questions about data import in R:      Which parameter would you set to ensure empty strings are treated as missing values?   na.strings = \"\"     Which function would you use to import an Excel file?   read.csv()   read.csv() is for CSV files. For Excel files, you would use read_excel() from the readxl package.      What is the default behavior of read.csv() regarding the first row of data?   It treats the first row as column headers (header = TRUE)     How would you check the number of missing values in each column of a data frame called 'df'?   colSums(is.na(df))        Basic data inspection functions  After importing data, the next step is to inspect and understand the structure and content of your dataset. R provides several functions for this purpose:   Common Data Inspection Functions    Function  Description    head()  Display the first few rows (default: 6)    tail()  Display the last few rows (default: 6)    View()  Open data in a spreadsheet-like viewer (not available in Web-R)    str()  Display the structure, including data types of each column    summary()  Generate summary statistics for each column    dim()  Show dimensions (rows, columns)    names()  List column names    glimpse()  From dplyr package; similar to str() but more readable    class()  Show the class of an object    table()  Create frequency tables of categorical variables      # Load the built-in iris dataset data(iris) # Basic inspection # Get dimensions dim(iris) # See the first few rows head(iris) # See the last few rows tail(iris) # Display column names names(iris) # Get the structure str(iris) # Generate summary statistics summary(iris) # Class of the object class(iris) # Class of individual columns class(iris$Sepal.Length) class(iris$Species) # Frequency table of a categorical variable table(iris$Species) # Check for missing values any(is.na(iris)) # Are there any missing values? colSums(is.na(iris)) # Count missing values by column # Basic counts and proportions # Number of observations by species species_counts <- table(iris$Species) species_counts # Proportions by species prop.table(species_counts) # Create cross-tabulation # Count combinations of species and sepal width categories sepal_width_cat <- cut(iris$Sepal.Width, breaks = c(0, 2.5, 3, 3.5, 4.5), labels = c(\"Narrow\", \"Medium\", \"Wide\", \"Very Wide\")) # Cross-tabulation cross_tab <- table(iris$Species, sepal_width_cat) cross_tab # Proportions in cross-tabulation prop.table(cross_tab, margin = 1) # Row proportions    Match Inspection Functions   Match each data inspection task with the most appropriate R function:     Check how many rows and columns are in a dataset  dim()    Get a quick overview of the data types in each column  str()    Calculate basic statistics like mean, median, min, and max for numerical columns  summary()    Count how many observations fall into each category of a variable  table()    Check for missing values in a dataset  is.na()        Activity: Import and explore a dataset of interest   Dataset Exploration   In this activity, you will import and explore a built-in dataset to practice your data inspection skills.  Instructions:    Load the mtcars dataset using data(mtcars)    Perform a comprehensive exploration of the dataset using the inspection functions you've learned    Answer the following questions:    How many rows and columns are in the dataset?    What are the variables (column names) in the dataset?    What is the average miles per gallon (mpg) in the dataset?    Which car has the highest horsepower (hp)?    How many cars have 4 cylinders (cyl)?    Is there a relationship between miles per gallon (mpg) and weight (wt)?         # Step 1: Load the mtcars dataset data(mtcars) # Step 2: Comprehensive exploration # Your code here # Step 3: Answer the questions # Your code here    # Step 1: Load the mtcars dataset data(mtcars) # Step 2: Comprehensive exploration # Basic dimensions dim(mtcars) # Column names names(mtcars) # First few rows head(mtcars) # Structure str(mtcars) # Summary statistics summary(mtcars) # Check for missing values any(is.na(mtcars)) # Step 3: Answer the questions # How many rows and columns are in the dataset? cat(\"Rows:\", nrow(mtcars), \"Columns:\", ncol(mtcars), \"\\n\") # What are the variables (column names) in the dataset? cat(\"Variables:\", paste(names(mtcars), collapse=\", \"), \"\\n\") # What is the average miles per gallon (mpg) in the dataset? cat(\"Average MPG:\", mean(mtcars$mpg), \"\\n\") # Which car has the highest horsepower (hp)? highest_hp_index <- which.max(mtcars$hp) cat(\"Car with highest horsepower:\", rownames(mtcars)[highest_hp_index], \"with\", mtcars$hp[highest_hp_index], \"hp\\n\") # How many cars have 4 cylinders (cyl)? cat(\"Number of cars with 4 cylinders:\", sum(mtcars$cyl == 4), \"\\n\") # Is there a relationship between miles per gallon (mpg) and weight (wt)? cor_mpg_wt <- cor(mtcars$mpg, mtcars$wt) cat(\"Correlation between MPG and weight:\", cor_mpg_wt, \"\\n\") # Visualize the relationship plot(mtcars$wt, mtcars$mpg, main=\"Relationship between Weight and MPG\", xlab=\"Weight (1000 lbs)\", ylab=\"Miles Per Gallon\", pch=19, col=\"blue\") # Add a regression line abline(lm(mpg ~ wt, data=mtcars), col=\"red\", lwd=2)    Dataset Analysis Questions   Based on the mtcars dataset exploration, answer the following questions:     What does the correlation between mpg and weight tell you about their relationship?    The correlation between mpg and weight is strongly negative (around -0.87), indicating that as the weight of a car increases, its fuel efficiency (mpg) tends to decrease significantly. This is an expected relationship as heavier cars generally require more energy to move, resulting in lower fuel efficiency.      What other variables in the dataset might be related to mpg? How would you investigate these relationships?    Other variables likely related to mpg include:   cyl (number of cylinders): More cylinders typically means lower fuel efficiency  hp (horsepower): Higher horsepower often corresponds to lower mpg  disp (displacement): Larger engines generally consume more fuel  am (transmission type): Manual transmissions might be more fuel-efficient   To investigate these relationships, I would:   Calculate correlations between mpg and each variable  Create scatterplots for continuous variables  Create boxplots for categorical variables (like cyl and am)  Run multiple regression analysis to identify which factors have the strongest influence on mpg       "
},
{
  "id": "subsec-importing-data-4-1-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "read.csv() "
},
{
  "id": "subsec-importing-data-4-2-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "read.table() "
},
{
  "id": "subsec-importing-data-4-3-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "read.delim() "
},
{
  "id": "subsec-importing-data-4-4-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "readxl::read_excel() "
},
{
  "id": "subsec-importing-data-4-5-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "jsonlite::fromJSON() "
},
{
  "id": "subsec-importing-data-6-1-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "file "
},
{
  "id": "subsec-importing-data-6-2-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "header "
},
{
  "id": "subsec-importing-data-6-3-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-6-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sep "
},
{
  "id": "subsec-importing-data-6-4-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-6-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dec "
},
{
  "id": "subsec-importing-data-6-5-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-6-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stringsAsFactors "
},
{
  "id": "subsec-importing-data-6-6-1",
  "level": "2",
  "url": "sec-data-import.html#subsec-importing-data-6-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "na.strings "
},
{
  "id": "ex-import-practice",
  "level": "2",
  "url": "sec-data-import.html#ex-import-practice",
  "type": "Checkpoint",
  "number": "64",
  "title": "Data Import Practice.",
  "body": " Data Import Practice   Answer the following questions about data import in R:      Which parameter would you set to ensure empty strings are treated as missing values?   na.strings = \"\"     Which function would you use to import an Excel file?   read.csv()   read.csv() is for CSV files. For Excel files, you would use read_excel() from the readxl package.      What is the default behavior of read.csv() regarding the first row of data?   It treats the first row as column headers (header = TRUE)     How would you check the number of missing values in each column of a data frame called 'df'?   colSums(is.na(df))    "
},
{
  "id": "table-inspection-functions",
  "level": "2",
  "url": "sec-data-import.html#table-inspection-functions",
  "type": "Table",
  "number": "65",
  "title": "Common Data Inspection Functions",
  "body": " Common Data Inspection Functions    Function  Description    head()  Display the first few rows (default: 6)    tail()  Display the last few rows (default: 6)    View()  Open data in a spreadsheet-like viewer (not available in Web-R)    str()  Display the structure, including data types of each column    summary()  Generate summary statistics for each column    dim()  Show dimensions (rows, columns)    names()  List column names    glimpse()  From dplyr package; similar to str() but more readable    class()  Show the class of an object    table()  Create frequency tables of categorical variables    "
},
{
  "id": "ex-inspection-matching",
  "level": "2",
  "url": "sec-data-import.html#ex-inspection-matching",
  "type": "Checkpoint",
  "number": "66",
  "title": "Match Inspection Functions.",
  "body": " Match Inspection Functions   Match each data inspection task with the most appropriate R function:     Check how many rows and columns are in a dataset  dim()    Get a quick overview of the data types in each column  str()    Calculate basic statistics like mean, median, min, and max for numerical columns  summary()    Count how many observations fall into each category of a variable  table()    Check for missing values in a dataset  is.na()    "
},
{
  "id": "activity-import-explore",
  "level": "2",
  "url": "sec-data-import.html#activity-import-explore",
  "type": "Activity",
  "number": "11",
  "title": "Dataset Exploration.",
  "body": " Dataset Exploration   In this activity, you will import and explore a built-in dataset to practice your data inspection skills.  Instructions:    Load the mtcars dataset using data(mtcars)    Perform a comprehensive exploration of the dataset using the inspection functions you've learned    Answer the following questions:    How many rows and columns are in the dataset?    What are the variables (column names) in the dataset?    What is the average miles per gallon (mpg) in the dataset?    Which car has the highest horsepower (hp)?    How many cars have 4 cylinders (cyl)?    Is there a relationship between miles per gallon (mpg) and weight (wt)?       "
},
{
  "id": "ex-dataset-questions",
  "level": "2",
  "url": "sec-data-import.html#ex-dataset-questions",
  "type": "Checkpoint",
  "number": "67",
  "title": "Dataset Analysis Questions.",
  "body": " Dataset Analysis Questions   Based on the mtcars dataset exploration, answer the following questions:     What does the correlation between mpg and weight tell you about their relationship?    The correlation between mpg and weight is strongly negative (around -0.87), indicating that as the weight of a car increases, its fuel efficiency (mpg) tends to decrease significantly. This is an expected relationship as heavier cars generally require more energy to move, resulting in lower fuel efficiency.      What other variables in the dataset might be related to mpg? How would you investigate these relationships?    Other variables likely related to mpg include:   cyl (number of cylinders): More cylinders typically means lower fuel efficiency  hp (horsepower): Higher horsepower often corresponds to lower mpg  disp (displacement): Larger engines generally consume more fuel  am (transmission type): Manual transmissions might be more fuel-efficient   To investigate these relationships, I would:   Calculate correlations between mpg and each variable  Create scatterplots for continuous variables  Create boxplots for categorical variables (like cyl and am)  Run multiple regression analysis to identify which factors have the strongest influence on mpg     "
},
{
  "id": "sec-data-exploration",
  "level": "1",
  "url": "sec-data-exploration.html",
  "type": "Section",
  "number": "",
  "title": "Data exploration techniques",
  "body": " Data exploration techniques    Summary statistics and data summaries  Summary statistics provide a concise way to understand the central tendencies, dispersion, and shape of your data. Key summary statistics include:    Measures of central tendency : mean, median, mode    Measures of dispersion : range, variance, standard deviation, interquartile range (IQR)    Measures of shape : skewness, kurtosis    Quantiles : min, max, quartiles, percentiles    R functions for calculating summary statistics:    summary() : General summary statistics for each column in a data frame    mean(), median(), range() : Basic statistical functions    sd(), var() : Standard deviation and variance    quantile() : Calculate quantiles    IQR() : Interquartile range    cor() : Correlation between variables    aggregate() : Calculate statistics by group     # Load the mtcars dataset data(mtcars) # Basic summary statistics summary(mtcars) # Calculate specific statistics for mpg mean(mtcars$mpg) # Mean median(mtcars$mpg) # Median min(mtcars$mpg) # Minimum max(mtcars$mpg) # Maximum range(mtcars$mpg) # Range (min and max) var(mtcars$mpg) # Variance sd(mtcars$mpg) # Standard deviation IQR(mtcars$mpg) # Interquartile range # Calculate quartiles quantile(mtcars$mpg) # Default quartiles (0%, 25%, 50%, 75%, 100%) quantile(mtcars$mpg, probs = seq(0, 1, 0.1)) # Deciles (0%, 10%, 20%, ..., 100%) # Correlation matrix for numeric variables cor_matrix <- cor(mtcars) round(cor_matrix, 2) # Round to 2 decimal places for better readability # Correlation between specific variables cor(mtcars$mpg, mtcars$wt) # Grouped summary statistics # Average mpg by number of cylinders aggregate(mpg ~ cyl, data = mtcars, FUN = mean) # Multiple statistics by cylinder aggregate(mpg ~ cyl, data = mtcars, FUN = function(x) c(mean = mean(x), sd = sd(x), min = min(x), max = max(x))) # Multiple variables and grouping factors aggregate(cbind(mpg, hp) ~ cyl + am, data = mtcars, FUN = mean) # Alternative using tapply tapply(mtcars$mpg, mtcars$cyl, mean) # Create a simple statistical summary function my_stats <- function(x) { c(mean = mean(x), median = median(x), sd = sd(x), IQR = IQR(x), min = min(x), max = max(x), n = length(x)) } # Apply to mpg my_stats(mtcars$mpg) # Apply to multiple groups by(mtcars$mpg, mtcars$cyl, my_stats)    Summary Statistics Practice   Using the following data about student exam scores, answer the questions below:  scores <- c(65, 72, 83, 85, 68, 92, 78, 95, 69, 74, 88, 73)     Calculate the mean, median, minimum, and maximum of the scores.    mean(scores) # Result: 78.5 median(scores) # Result: 76 min(scores) # Result: 65 max(scores) # Result: 95      Calculate the standard deviation and interquartile range (IQR).    sd(scores) # Result: 10.13 IQR(scores) # Result: 16.25      Determine the quartiles (25th, 50th, and 75th percentiles).    quantile(scores) # Result: # 0% 25% 50% 75% 100% # 65.0 69.5 76.0 85.8 95.0        Initial data visualization  Visualization is an essential tool for data exploration. Basic R plotting functions allow you to quickly visualize patterns and relationships in your data.  Common plot types for initial data exploration:    Histograms : Visualize the distribution of a single numerical variable    Boxplots : Show the five-number summary and identify outliers    Scatter plots : Examine relationships between two numerical variables    Bar plots : Visualize frequencies of categorical variables    Line plots : Show trends over time or ordered categories    Density plots : Smooth approximation of the distribution of a numerical variable     # Load the iris dataset data(iris) # Histogram of Sepal.Length hist(iris$Sepal.Length, main = \"Distribution of Sepal Length\", xlab = \"Sepal Length (cm)\", col = \"lightblue\", breaks = 10) # Add a density curve to a histogram hist(iris$Sepal.Length, main = \"Distribution of Sepal Length with Density Curve\", xlab = \"Sepal Length (cm)\", col = \"lightblue\", freq = FALSE) # Use density instead of frequency lines(density(iris$Sepal.Length), col = \"red\", lwd = 2) # Boxplot of Sepal.Width boxplot(iris$Sepal.Width, main = \"Boxplot of Sepal Width\", ylab = \"Sepal Width (cm)\", col = \"lightgreen\") # Boxplot by group boxplot(Sepal.Width ~ Species, data = iris, main = \"Sepal Width by Species\", xlab = \"Species\", ylab = \"Sepal Width (cm)\", col = c(\"lightpink\", \"lightblue\", \"lightgreen\")) # Scatter plot of Sepal.Length vs. Sepal.Width plot(iris$Sepal.Length, iris$Sepal.Width, main = \"Sepal Length vs. Sepal Width\", xlab = \"Sepal Length (cm)\", ylab = \"Sepal Width (cm)\", pch = 19, col = \"darkblue\") # Scatter plot with color by species plot(iris$Sepal.Length, iris$Sepal.Width, main = \"Sepal Length vs. Sepal Width by Species\", xlab = \"Sepal Length (cm)\", ylab = \"Sepal Width (cm)\", pch = 19, col = as.numeric(iris$Species)) # Color points by species legend(\"topright\", legend = levels(iris$Species), col = 1:3, pch = 19) # Bar plot of species counts species_counts <- table(iris$Species) barplot(species_counts, main = \"Count of Iris Flowers by Species\", xlab = \"Species\", ylab = \"Count\", col = c(\"coral\", \"skyblue\", \"palegreen\")) # Multiple plots in one figure par(mfrow = c(2, 2)) # 2x2 grid of plots # Plot 1: Histogram hist(iris$Sepal.Length, main = \"Sepal Length\", xlab = \"cm\", col = \"lightblue\") # Plot 2: Boxplot boxplot(Sepal.Width ~ Species, data = iris, main = \"Sepal Width by Species\", xlab = \"\", col = c(\"pink\", \"lightblue\", \"lightgreen\")) # Plot 3: Scatter plot plot(iris$Petal.Length, iris$Petal.Width, main = \"Petal Length vs. Width\", xlab = \"Length (cm)\", ylab = \"Width (cm)\", pch = 19, col = as.numeric(iris$Species)) # Plot 4: Bar plot barplot(table(iris$Species), main = \"Species Count\", col = c(\"coral\", \"skyblue\", \"palegreen\")) # Reset to single plot par(mfrow = c(1, 1)) # Pairs plot (scatter plot matrix) pairs(iris[, 1:4], main = \"Iris Data Scatter Plot Matrix\", pch = 21, bg = c(\"red\", \"green\", \"blue\")[unclass(iris$Species)])   Additional plots for specific analysis needs:   # Load datasets data(mtcars) data(iris) # Density plot plot(density(mtcars$mpg), main = \"Density Plot of MPG\", xlab = \"Miles Per Gallon\", col = \"blue\", lwd = 2) # Overlaid density plots by group # First, split the data by cylinder mpg_by_cyl <- split(mtcars$mpg, mtcars$cyl) # Create an empty plot with appropriate limits plot(density(mtcars$mpg), main = \"MPG Density by Number of Cylinders\", xlab = \"Miles Per Gallon\", col = \"white\", # Make the line invisible lwd = 2) # Add density curves for each cylinder group colors <- c(\"red\", \"green\", \"blue\") labels <- names(mpg_by_cyl) for (i in 1:length(mpg_by_cyl)) { lines(density(mpg_by_cyl[[i]]), col = colors[i], lwd = 2) } # Add a legend legend(\"topright\", legend = paste(labels, \"cylinders\"), col = colors, lwd = 2) # Correlation plot # Create correlation matrix cor_matrix <- cor(mtcars) # Simple visualization of correlation matrix image(cor_matrix, main = \"Correlation Matrix Heatmap\", axes = FALSE) axis(1, at = seq(0, 1, length.out = ncol(mtcars)), labels = colnames(mtcars), las = 2) axis(2, at = seq(0, 1, length.out = ncol(mtcars)), labels = colnames(mtcars), las = 2) # Add correlation values text(expand.grid(seq(0, 1, length.out = ncol(mtcars)), seq(0, 1, length.out = ncol(mtcars))), labels = round(c(cor_matrix), 2), cex = 0.7) # Violin plot (combination of boxplot and density) # We'll create a simple version since violin plots are typically made with ggplot2 # First, create side-by-side boxplots boxplot(Sepal.Length ~ Species, data = iris, main = \"Sepal Length by Species\", xlab = \"Species\", ylab = \"Sepal Length (cm)\", col = c(\"lightpink\", \"lightblue\", \"lightgreen\")) # Now add density curves on the sides (simplified violin plot) for (i in 1:length(levels(iris$Species))) { species_data <- iris$Sepal.Length[iris$Species == levels(iris$Species)[i]] # Calculate density dens <- density(species_data) # Scale density to appropriate width scaled_dens <- dens$y \/ max(dens$y) * 0.4 # Plot the density curve lines(i + scaled_dens, dens$x, col = \"darkred\", lwd = 2) lines(i - scaled_dens, dens$x, col = \"darkred\", lwd = 2) }    Data Visualization Tasks   Using the iris dataset, create the following visualizations:     Create a histogram of Petal.Length with an appropriate title, labels, and coloring.    hist(iris$Petal.Length, main = \"Distribution of Petal Length\", xlab = \"Petal Length (cm)\", ylab = \"Frequency\", col = \"lightgreen\", breaks = 12)      Create a scatter plot of Petal.Length (x-axis) vs. Petal.Width (y-axis), with points colored by Species.    plot(iris$Petal.Length, iris$Petal.Width, main = \"Petal Length vs. Petal Width by Species\", xlab = \"Petal Length (cm)\", ylab = \"Petal Width (cm)\", pch = 19, col = as.numeric(iris$Species)) legend(\"topleft\", legend = levels(iris$Species), col = 1:3, pch = 19, title = \"Species\")        Exercise: Exploratory analysis of a dataset   Comprehensive Exploratory Data Analysis   In this exercise, you will conduct a comprehensive exploratory data analysis (EDA) of the ToothGrowth dataset, which shows the effect of Vitamin C on tooth growth in guinea pigs.  Instructions:    Load the ToothGrowth dataset using data(ToothGrowth)    Perform a thorough exploration of the dataset structure and summary statistics    Create appropriate visualizations to understand:    The distribution of tooth length    The relationship between dose and tooth length    The effect of supplement type on tooth length    The combined effect of dose and supplement type      Document your findings and insights from the analysis       # Step 1: Load the dataset data(ToothGrowth) # Step 2: Data exploration # Your code here # Step 3: Create visualizations # Your code here # Step 4: Document findings # Your insights here    # Step 1: Load the dataset data(ToothGrowth) # Step 2: Data exploration # Examine the structure str(ToothGrowth) # Look at the first few rows head(ToothGrowth) # Summary statistics summary(ToothGrowth) # Convert 'dose' to a factor for better analysis and visualization ToothGrowth$dose <- as.factor(ToothGrowth$dose) # Check for missing values any(is.na(ToothGrowth)) # Group summary statistics # Mean tooth length by supplement type aggregate(len ~ supp, data = ToothGrowth, FUN = mean) # Mean tooth length by dose aggregate(len ~ dose, data = ToothGrowth, FUN = mean) # Mean tooth length by supplement type and dose aggregate(len ~ supp + dose, data = ToothGrowth, FUN = mean) # Step 3: Create visualizations # Distribution of tooth length hist(ToothGrowth$len, main = \"Distribution of Tooth Length\", xlab = \"Tooth Length\", col = \"lightblue\", breaks = 10) # Add density curve hist(ToothGrowth$len, main = \"Distribution of Tooth Length with Density Curve\", xlab = \"Tooth Length\", col = \"lightblue\", freq = FALSE) lines(density(ToothGrowth$len), col = \"red\", lwd = 2) # Boxplot of tooth length by supplement type boxplot(len ~ supp, data = ToothGrowth, main = \"Tooth Length by Supplement Type\", xlab = \"Supplement Type\", ylab = \"Tooth Length\", col = c(\"orange\", \"lightskyblue\")) # Boxplot of tooth length by dose boxplot(len ~ dose, data = ToothGrowth, main = \"Tooth Length by Vitamin C Dose\", xlab = \"Dose (mg\/day)\", ylab = \"Tooth Length\", col = \"lightgreen\") # Boxplot of tooth length by supplement type and dose boxplot(len ~ supp:dose, data = ToothGrowth, main = \"Tooth Length by Supplement Type and Dose\", xlab = \"Supplement Type and Dose\", ylab = \"Tooth Length\", col = c(\"orange\", \"lightskyblue\")) # Create a more readable combined boxplot par(mfrow=c(1,2)) # OJ supplement boxplot(len ~ dose, data = ToothGrowth[ToothGrowth$supp == \"OJ\",], main = \"Orange Juice (OJ)\", xlab = \"Dose (mg\/day)\", ylab = \"Tooth Length\", col = \"orange\") # VC supplement boxplot(len ~ dose, data = ToothGrowth[ToothGrowth$supp == \"VC\",], main = \"Ascorbic Acid (VC)\", xlab = \"Dose (mg\/day)\", ylab = \"Tooth Length\", col = \"lightskyblue\") # Reset plot settings par(mfrow=c(1,1)) # Interaction plot interaction.plot(x.factor = ToothGrowth$dose, trace.factor = ToothGrowth$supp, response = ToothGrowth$len, fun = mean, type = \"b\", legend = TRUE, trace.label = \"Supplement Type\", xlab = \"Dose (mg\/day)\", ylab = \"Mean Tooth Length\", main = \"Interaction Plot: Dose and Supplement Type\", col = c(\"red\", \"blue\"), lwd = 2, pch = c(16, 17)) # Step 4: Document findings cat(\"\\nKey Findings from Exploratory Data Analysis:\\n\\n\") cat(\"1. The dataset contains\", nrow(ToothGrowth), \"observations of tooth growth in guinea pigs.\\n\") cat(\"2. Variables include tooth length (len), supplement type (supp: OJ or VC), and dose (0.5, 1, or 2 mg\/day).\\n\") cat(\"\\n3. Overall tooth length statistics:\\n\") cat(\" - Mean:\", mean(ToothGrowth$len), \"\\n\") cat(\" - Median:\", median(ToothGrowth$len), \"\\n\") cat(\" - Range:\", min(ToothGrowth$len), \"to\", max(ToothGrowth$len), \"\\n\") cat(\"\\n4. Effect of supplement type on tooth length:\\n\") supp_means <- aggregate(len ~ supp, data = ToothGrowth, FUN = mean) cat(\" - OJ (Orange Juice) mean:\", supp_means[1, 2], \"\\n\") cat(\" - VC (Ascorbic Acid) mean:\", supp_means[2, 2], \"\\n\") cat(\"\\n5. Effect of dose on tooth length:\\n\") dose_means <- aggregate(len ~ dose, data = ToothGrowth, FUN = mean) cat(\" - 0.5 mg mean:\", dose_means[1, 2], \"\\n\") cat(\" - 1.0 mg mean:\", dose_means[2, 2], \"\\n\") cat(\" - 2.0 mg mean:\", dose_means[3, 2], \"\\n\") cat(\"\\n6. Key insights:\\n\") cat(\" - Higher doses consistently lead to greater tooth length\\n\") cat(\" - Orange juice (OJ) appears more effective than ascorbic acid (VC) at lower doses\\n\") cat(\" - At the highest dose (2.0 mg), both supplements show similar effectiveness\\n\") cat(\" - There appears to be an interaction between supplement type and dose\\n\")    EDA Interpretation Questions   Based on the exploratory analysis of the ToothGrowth dataset, answer the following questions:     What appears to be the relationship between vitamin C dose and tooth growth?    There is a clear positive relationship between vitamin C dose and tooth growth. As the dose increases from 0.5 mg to 1.0 mg to 2.0 mg, the average tooth length consistently increases as well. This suggests that higher doses of vitamin C promote greater tooth growth in guinea pigs, regardless of the delivery method (supplement type).      How does the effectiveness of the two supplement types (OJ and VC) compare at different doses?    The effectiveness of the two supplements varies by dose:   At the lowest dose (0.5 mg), orange juice (OJ) appears significantly more effective than ascorbic acid (VC) for promoting tooth growth  At the medium dose (1.0 mg), orange juice still shows a noticeable advantage over ascorbic acid  At the highest dose (2.0 mg), the difference between the two supplements becomes minimal, with both achieving similar tooth growth results   This suggests that orange juice might be a more efficient delivery method for vitamin C at lower doses, but this advantage disappears at higher concentrations.      What additional analyses or visualizations might help further explore this dataset?    Additional analyses and visualizations that could provide further insights include:   Statistical tests (such as t-tests or ANOVA) to determine if the observed differences between groups are statistically significant  A linear regression model to quantify the relationship between dose and tooth length, potentially including an interaction term between dose and supplement type  Density plots for each combination of supplement type and dose to better visualize the distribution of tooth lengths in each group  Residual plots to check for any patterns or outliers that might influence the conclusions  If additional variables were available (such as guinea pig age, weight, or sex), including these in the analysis to control for potential confounding factors       "
},
{
  "id": "subsec-summary-statistics-3-1-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Measures of central tendency "
},
{
  "id": "subsec-summary-statistics-3-2-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Measures of dispersion "
},
{
  "id": "subsec-summary-statistics-3-3-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Measures of shape "
},
{
  "id": "subsec-summary-statistics-3-4-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quantiles "
},
{
  "id": "subsec-summary-statistics-5-1-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "summary() "
},
{
  "id": "subsec-summary-statistics-5-2-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean(), median(), range() "
},
{
  "id": "subsec-summary-statistics-5-3-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sd(), var() "
},
{
  "id": "subsec-summary-statistics-5-4-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-5-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantile() "
},
{
  "id": "subsec-summary-statistics-5-5-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-5-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "IQR() "
},
{
  "id": "subsec-summary-statistics-5-6-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-5-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cor() "
},
{
  "id": "subsec-summary-statistics-5-7-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-summary-statistics-5-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "aggregate() "
},
{
  "id": "ex-summary-stats",
  "level": "2",
  "url": "sec-data-exploration.html#ex-summary-stats",
  "type": "Checkpoint",
  "number": "68",
  "title": "Summary Statistics Practice.",
  "body": " Summary Statistics Practice   Using the following data about student exam scores, answer the questions below:  scores <- c(65, 72, 83, 85, 68, 92, 78, 95, 69, 74, 88, 73)     Calculate the mean, median, minimum, and maximum of the scores.    mean(scores) # Result: 78.5 median(scores) # Result: 76 min(scores) # Result: 65 max(scores) # Result: 95      Calculate the standard deviation and interquartile range (IQR).    sd(scores) # Result: 10.13 IQR(scores) # Result: 16.25      Determine the quartiles (25th, 50th, and 75th percentiles).    quantile(scores) # Result: # 0% 25% 50% 75% 100% # 65.0 69.5 76.0 85.8 95.0    "
},
{
  "id": "subsec-initial-visualization-4-1-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-initial-visualization-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Histograms "
},
{
  "id": "subsec-initial-visualization-4-2-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-initial-visualization-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Boxplots "
},
{
  "id": "subsec-initial-visualization-4-3-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-initial-visualization-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scatter plots "
},
{
  "id": "subsec-initial-visualization-4-4-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-initial-visualization-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bar plots "
},
{
  "id": "subsec-initial-visualization-4-5-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-initial-visualization-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Line plots "
},
{
  "id": "subsec-initial-visualization-4-6-1",
  "level": "2",
  "url": "sec-data-exploration.html#subsec-initial-visualization-4-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Density plots "
},
{
  "id": "ex-visualization-tasks",
  "level": "2",
  "url": "sec-data-exploration.html#ex-visualization-tasks",
  "type": "Checkpoint",
  "number": "69",
  "title": "Data Visualization Tasks.",
  "body": " Data Visualization Tasks   Using the iris dataset, create the following visualizations:     Create a histogram of Petal.Length with an appropriate title, labels, and coloring.    hist(iris$Petal.Length, main = \"Distribution of Petal Length\", xlab = \"Petal Length (cm)\", ylab = \"Frequency\", col = \"lightgreen\", breaks = 12)      Create a scatter plot of Petal.Length (x-axis) vs. Petal.Width (y-axis), with points colored by Species.    plot(iris$Petal.Length, iris$Petal.Width, main = \"Petal Length vs. Petal Width by Species\", xlab = \"Petal Length (cm)\", ylab = \"Petal Width (cm)\", pch = 19, col = as.numeric(iris$Species)) legend(\"topleft\", legend = levels(iris$Species), col = 1:3, pch = 19, title = \"Species\")    "
},
{
  "id": "activity-exploratory-analysis",
  "level": "2",
  "url": "sec-data-exploration.html#activity-exploratory-analysis",
  "type": "Activity",
  "number": "12",
  "title": "Comprehensive Exploratory Data Analysis.",
  "body": " Comprehensive Exploratory Data Analysis   In this exercise, you will conduct a comprehensive exploratory data analysis (EDA) of the ToothGrowth dataset, which shows the effect of Vitamin C on tooth growth in guinea pigs.  Instructions:    Load the ToothGrowth dataset using data(ToothGrowth)    Perform a thorough exploration of the dataset structure and summary statistics    Create appropriate visualizations to understand:    The distribution of tooth length    The relationship between dose and tooth length    The effect of supplement type on tooth length    The combined effect of dose and supplement type      Document your findings and insights from the analysis     "
},
{
  "id": "ex-eda-interpretation",
  "level": "2",
  "url": "sec-data-exploration.html#ex-eda-interpretation",
  "type": "Checkpoint",
  "number": "70",
  "title": "EDA Interpretation Questions.",
  "body": " EDA Interpretation Questions   Based on the exploratory analysis of the ToothGrowth dataset, answer the following questions:     What appears to be the relationship between vitamin C dose and tooth growth?    There is a clear positive relationship between vitamin C dose and tooth growth. As the dose increases from 0.5 mg to 1.0 mg to 2.0 mg, the average tooth length consistently increases as well. This suggests that higher doses of vitamin C promote greater tooth growth in guinea pigs, regardless of the delivery method (supplement type).      How does the effectiveness of the two supplement types (OJ and VC) compare at different doses?    The effectiveness of the two supplements varies by dose:   At the lowest dose (0.5 mg), orange juice (OJ) appears significantly more effective than ascorbic acid (VC) for promoting tooth growth  At the medium dose (1.0 mg), orange juice still shows a noticeable advantage over ascorbic acid  At the highest dose (2.0 mg), the difference between the two supplements becomes minimal, with both achieving similar tooth growth results   This suggests that orange juice might be a more efficient delivery method for vitamin C at lower doses, but this advantage disappears at higher concentrations.      What additional analyses or visualizations might help further explore this dataset?    Additional analyses and visualizations that could provide further insights include:   Statistical tests (such as t-tests or ANOVA) to determine if the observed differences between groups are statistically significant  A linear regression model to quantify the relationship between dose and tooth length, potentially including an interaction term between dose and supplement type  Density plots for each combination of supplement type and dose to better visualize the distribution of tooth lengths in each group  Residual plots to check for any patterns or outliers that might influence the conclusions  If additional variables were available (such as guinea pig age, weight, or sex), including these in the analysis to control for potential confounding factors     "
},
{
  "id": "sec-data-transformation",
  "level": "1",
  "url": "sec-data-transformation.html",
  "type": "Section",
  "number": "",
  "title": "Data Transformation",
  "body": " Data Transformation    Filtering and selecting data  Data transformation involves manipulating and reshaping your data to prepare it for analysis. Two fundamental transformation operations are filtering (selecting rows) and selecting (choosing columns).  In base R, you can filter and select data using indexing operations:    Filtering rows : df[condition, ] - Select rows that meet a condition    Selecting columns : df[, c(\"col1\", \"col2\")] or df[, c(1, 3)] - Select specific columns    Combined operations : df[condition, c(\"col1\", \"col2\")] - Filter rows and select columns    Subset function : subset(df, condition, select = c(\"col1\", \"col2\")) - More readable alternative     # Load the mtcars dataset data(mtcars) # Add rownames as a column for better demonstration mtcars$car_name <- rownames(mtcars) # Basic row filtering # Cars with mpg > 20 high_mpg_cars <- mtcars[mtcars$mpg > 20, ] head(high_mpg_cars) # Cars with 6 cylinders six_cyl_cars <- mtcars[mtcars$cyl == 6, ] head(six_cyl_cars) # Multiple conditions with AND (&) efficient_six_cyl <- mtcars[mtcars$mpg > 20 & mtcars$cyl == 6, ] efficient_six_cyl # Multiple conditions with OR (|) high_mpg_or_low_weight <- mtcars[mtcars$mpg > 25 | mtcars$wt < 2, ] high_mpg_or_low_weight # Selecting specific columns # By column name mpg_hp <- mtcars[, c(\"mpg\", \"hp\", \"car_name\")] head(mpg_hp) # By column position first_three_cols <- mtcars[, 1:3] head(first_three_cols) # Excluding columns with negative indexing without_rowname <- mtcars[, -12] # Exclude the car_name column head(without_rowname) # Combined filtering and selection efficient_cars_subset <- mtcars[mtcars$mpg > 25, c(\"mpg\", \"wt\", \"car_name\")] efficient_cars_subset # Using the subset() function # Filter rows efficient_cars_alt <- subset(mtcars, mpg > 25) efficient_cars_alt$car_name # Select columns car_details <- subset(mtcars, select = c(\"mpg\", \"hp\", \"wt\", \"car_name\")) head(car_details) # Combined operation efficient_details <- subset(mtcars, mpg > 25, select = c(\"mpg\", \"hp\", \"wt\", \"car_name\")) efficient_details # Filtering with %in% operator for multiple values specific_cyl <- mtcars[mtcars$cyl %in% c(4, 8), ] table(specific_cyl$cyl) # Filtering with logical functions # Find rows with missing values (not applicable in mtcars, but showing syntax) # missing_rows <- mtcars[!complete.cases(mtcars), ] # Filtering with text patterns (using grepl) merc_cars <- mtcars[grepl(\"Merc\", mtcars$car_name), ] merc_cars$car_name    Filtering and Selecting Practice   Using the iris dataset, complete the following filtering and selection tasks:     Select all flowers of the species 'virginica' with petal length greater than 5.5 cm.    # Load the iris dataset data(iris) # Filter for virginica species with petal length > 5.5 selected_flowers <- iris[iris$Species == \"virginica\" & iris$Petal.Length > 5.5, ] selected_flowers # Alternative using subset() selected_flowers_alt <- subset(iris, Species == \"virginica\" & Petal.Length > 5.5) selected_flowers_alt      Create a new dataset containing only the sepal measurements (Sepal.Length and Sepal.Width) for flowers with sepal width less than 3.0 cm, regardless of species.    # Filter for sepal width < 3.0 and select only sepal measurements sepal_data <- iris[iris$Sepal.Width < 3.0, c(\"Sepal.Length\", \"Sepal.Width\")] head(sepal_data) # Alternative using subset() sepal_data_alt <- subset(iris, Sepal.Width < 3.0, select = c(\"Sepal.Length\", \"Sepal.Width\")) head(sepal_data_alt)        Subsetting data frames  Subsetting refers to extracting specific portions of a data frame based on various criteria. This is an extension of filtering and selecting, with some additional techniques.    Random sampling : Selecting a random subset of rows    Top\/bottom rows : Getting the first or last n rows    Stratified sampling : Sampling proportionally from different groups    Logical indexing : Using vectors of TRUE\/FALSE to select elements     # Load datasets data(iris) # Random sampling # Set seed for reproducibility set.seed(123) # Sample 10 random rows random_sample <- iris[sample(nrow(iris), 10), ] random_sample # Get top\/bottom rows # First 5 rows (same as head()) top_rows <- iris[1:5, ] top_rows # Last 5 rows (same as tail()) bottom_rows <- iris[(nrow(iris)-4):nrow(iris), ] bottom_rows # Stratified sampling # Sample 10 rows proportionally from each species # First, split the data by species iris_by_species <- split(iris, iris$Species) # Then sample from each group and combine set.seed(456) stratified_sample <- do.call(rbind, lapply(iris_by_species, function(x) { x[sample(nrow(x), 10), ] })) # Check the distribution of species in the sample table(stratified_sample$Species) # Logical indexing for complex conditions # Create a logical vector is_large_sepal <- iris$Sepal.Length > 6.5 is_wide_sepal <- iris$Sepal.Width > 3.0 is_setosa <- iris$Species == \"setosa\" # Combine logical conditions combined_condition <- (is_large_sepal and is_wide_sepal) | is_setosa # Use the logical vector to subset complex_subset <- iris[combined_condition, ] head(complex_subset) # Count how many rows match each individual condition sum(is_large_sepal) sum(is_wide_sepal) sum(is_setosa) # Count how many rows match the combined condition sum(combined_condition) # Subsetting using %in% for selecting multiple categories selected_species <- iris[iris$Species %in% c(\"setosa\", \"virginica\"), ] table(selected_species$Species) # Subsetting with which() - returns indices of TRUE values large_sepal_indices <- which(iris$Sepal.Length > 7) large_sepal_flowers <- iris[large_sepal_indices, ] large_sepal_flowers # Finding the index of the maximum value max_petal_length_index <- which.max(iris$Petal.Length) iris[max_petal_length_index, ] # Finding the index of the minimum value min_petal_length_index <- which.min(iris$Petal.Length) iris[min_petal_length_index, ]   Real-world example of subsetting to create a training and testing set:   # Create a simple train\/test split using subsetting data(iris) # Set seed for reproducibility set.seed(42) # Create a random index for training data (80% of data) train_indices <- sample(1:nrow(iris), size = round(0.8 * nrow(iris))) # Create training and testing sets train_data <- iris[train_indices, ] test_data <- iris[-train_indices, ] # The '-' means \"not in train_indices\" # Check the dimensions cat(\"Original data dimensions:\", dim(iris), \"\\n\") cat(\"Training data dimensions:\", dim(train_data), \"\\n\") cat(\"Testing data dimensions:\", dim(test_data), \"\\n\") # Verify species distribution cat(\"\\nSpecies distribution in original data:\\n\") print(table(iris$Species)) cat(\"\\nSpecies distribution in training data:\\n\") print(table(train_data$Species)) cat(\"\\nSpecies distribution in testing data:\\n\") print(table(test_data$Species)) # Example: Stratified sampling for train\/test split # Split the data by species iris_by_species <- split(iris, iris$Species) # Function to create a stratified split create_stratified_split <- function(data_list, train_prop = 0.8) { train_data <- list() test_data <- list() for (i in 1:length(data_list)) { group_data <- data_list[[i]] n_train <- round(train_prop * nrow(group_data)) # Random indices for training train_idx <- sample(1:nrow(group_data), size = n_train) # Split the data train_data[[i]] <- group_data[train_idx, ] test_data[[i]] <- group_data[-train_idx, ] } # Combine all groups return(list( train = do.call(rbind, train_data), test = do.call(rbind, test_data) )) } # Create stratified split set.seed(42) strat_split <- create_stratified_split(iris_by_species, 0.8) # Check dimensions cat(\"\\nStratified sampling:\\n\") cat(\"Training data dimensions:\", dim(strat_split$train), \"\\n\") cat(\"Testing data dimensions:\", dim(strat_split$test), \"\\n\") # Verify species distribution cat(\"\\nSpecies distribution in stratified training data:\\n\") print(table(strat_split$train$Species)) cat(\"\\nSpecies distribution in stratified testing data:\\n\") print(table(strat_split$test$Species))    Subsetting Practice   Using the mtcars dataset, complete the following subsetting tasks:     Create a random sample of 8 cars from the dataset.    # Load dataset data(mtcars) # Set seed for reproducibility set.seed(123) # Sample 8 random cars car_sample <- mtcars[sample(nrow(mtcars), 8), ] car_sample      Find the car with the best fuel efficiency (highest mpg) and the car with the most horsepower (hp).    # Find the car with the highest mpg most_efficient_index <- which.max(mtcars$mpg) most_efficient_car <- mtcars[most_efficient_index, ] rownames(most_efficient_car) # Toyota Corolla # Find the car with the most horsepower most_powerful_index <- which.max(mtcars$hp) most_powerful_car <- mtcars[most_powerful_index, ] rownames(most_powerful_car) # Maserati Bora        Activity: Extract meaningful subsets from datasets   Extracting Insights from Data Subsets   In this activity, you will extract and analyze meaningful subsets from the mpg dataset (from the ggplot2 package, but we'll provide a version).  The mpg dataset contains fuel economy data for 38 popular car models from 1999 to 2008, including variables such as manufacturer, model, year, engine displacement, number of cylinders, transmission type, and fuel economy ratings.  Instructions:    Create the mpg dataset using the code provided    Extract and analyze the following subsets:    All compact cars (class = \"compact\")    All cars manufactured by Toyota    All 4-cylinder cars with highway fuel economy (hwy) greater than 30 mpg    Compare the average city fuel economy (cty) for cars with 4, 6, and 8 cylinders    Create a random sample of 15 cars and calculate their average fuel economy      For each subset, create appropriate summary statistics and visualizations    Document your findings and insights from each subset       # Create a simplified version of the mpg dataset mpg <- data.frame( manufacturer = c(\"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"audi\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"chevrolet\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"dodge\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"ford\", \"honda\", \"honda\", \"honda\", \"honda\", \"honda\", \"honda\", \"honda\", \"honda\", \"honda\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"hyundai\", \"jeep\", \"jeep\", \"jeep\", \"jeep\", \"jeep\", \"jeep\", \"jeep\", \"jeep\", \"land rover\", \"land rover\", \"land rover\", \"land rover\", \"lincoln\", \"lincoln\", \"lincoln\", \"mercury\", \"mercury\", \"mercury\", \"mercury\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"nissan\", \"pontiac\", \"pontiac\", \"pontiac\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"subaru\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"toyota\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\", \"volkswagen\"), model = c(\"a4\", \"a4\", \"a4\", \"a4\", \"a4\", \"a4\", \"a4\", \"a4\", \"a4 quattro\", \"a4 quattro\", \"a4 quattro\", \"a4 quattro\", \"a4 quattro\", \"a4 quattro\", \"a4 quattro\", \"a4 quattro\", \"a6 quattro\", \"a6 quattro\", \"c1500 suburban 2wd\", \"c1500 suburban 2wd\", \"corvette\", \"corvette\", \"corvette\", \"corvette\", \"k1500 tahoe 4wd\", \"k1500 tahoe 4wd\", \"malibu\", \"malibu\", \"malibu\", \"malibu\", \"malibu\", \"malibu\", \"malibu\", \"caravan 2wd\", \"caravan 2wd\", \"caravan 2wd\", \"caravan 2wd\", \"caravan 2wd\", \"caravan 2wd\", \"caravan 2wd\", \"dakota pickup 4wd\", \"dakota pickup 4wd\", \"dakota pickup 4wd\", \"durango 4wd\", \"durango 4wd\", \"durango 4wd\", \"durango 4wd\", \"durango 4wd\", \"durango 4wd\", \"ram 1500 pickup 4wd\", \"ram 1500 pickup 4wd\", \"ram 1500 pickup 4wd\", \"ram 1500 pickup 4wd\", \"ram 1500 pickup 4wd\", \"ram 1500 pickup 4wd\", \"ram 1500 pickup 4wd\", \"ram 1500 pickup 4wd\", \"expedition 2wd\", \"expedition 2wd\", \"expedition 2wd\", \"explorer 4wd\", \"explorer 4wd\", \"explorer 4wd\", \"explorer 4wd\", \"explorer 4wd\", \"explorer 4wd\", \"f150 pickup 4wd\", \"f150 pickup 4wd\", \"f150 pickup 4wd\", \"f150 pickup 4wd\", \"f150 pickup 4wd\", \"f150 pickup 4wd\", \"f150 pickup 4wd\", \"f150 pickup 4wd\", \"f150 pickup 4wd\", \"mustang\", \"mustang\", \"mustang\", \"mustang\", \"mustang\", \"mustang\", \"mustang\", \"mustang\", \"mustang\", \"civic\", \"civic\", \"civic\", \"civic\", \"civic\", \"civic\", \"civic\", \"civic\", \"civic\", \"sonata\", \"sonata\", \"sonata\", \"sonata\", \"sonata\", \"sonata\", \"sonata\", \"sonata\", \"sonata\", \"tiburon\", \"tiburon\", \"tiburon\", \"tiburon\", \"tiburon\", \"grand cherokee 4wd\", \"grand cherokee 4wd\", \"grand cherokee 4wd\", \"grand cherokee 4wd\", \"grand cherokee 4wd\", \"grand cherokee 4wd\", \"grand cherokee 4wd\", \"grand cherokee 4wd\", \"range rover\", \"range rover\", \"range rover\", \"range rover\", \"navigator 2wd\", \"navigator 2wd\", \"navigator 2wd\", \"mountaineer 4wd\", \"mountaineer 4wd\", \"mountaineer 4wd\", \"mountaineer 4wd\", \"altima\", \"altima\", \"altima\", \"altima\", \"maxima\", \"maxima\", \"maxima\", \"maxima\", \"pathfinder 4wd\", \"pathfinder 4wd\", \"pathfinder 4wd\", \"pathfinder 4wd\", \"pathfinder 4wd\", \"grand prix\", \"grand prix\", \"grand prix\", \"forester awd\", \"forester awd\", \"forester awd\", \"forester awd\", \"impreza awd\", \"impreza awd\", \"impreza awd\", \"impreza awd\", \"impreza awd\", \"impreza awd\", \"impreza awd\", \"impreza awd\", \"impreza awd\", \"impreza awd\", \"4runner 4wd\", \"4runner 4wd\", \"4runner 4wd\", \"4runner 4wd\", \"4runner 4wd\", \"4runner 4wd\", \"4runner 4wd\", \"4runner 4wd\", \"camry\", \"camry\", \"camry\", \"camry\", \"camry\", \"camry\", \"camry\", \"camry\", \"camry\", \"camry\", \"camry solara\", \"camry solara\", \"camry solara\", \"camry solara\", \"camry solara\", \"camry solara\", \"corolla\", \"corolla\", \"corolla\", \"corolla\", \"corolla\", \"corolla\", \"land cruiser wagon 4wd\", \"land cruiser wagon 4wd\", \"toyota tacoma 4wd\", \"toyota tacoma 4wd\", \"toyota tacoma 4wd\", \"gti\", \"gti\", \"jetta\", \"jetta\", \"jetta\", \"jetta\", \"jetta\", \"jetta\", \"jetta\", \"jetta\", \"new beetle\", \"new beetle\", \"new beetle\", \"new beetle\", \"new beetle\", \"new beetle\", \"new beetle\", \"passat\", \"passat\", \"passat\", \"passat\", \"passat\", \"passat\", \"passat\", \"passat\", \"passat\"), displ = c(1.8, 1.8, 2, 2, 2.8, 2.8, 3.1, 3.1, 1.8, 1.8, 2, 2, 2.8, 2.8, 3.1, 3.1, 2.8, 4.2, 5.3, 5.3, 5.7, 5.7, 6.2, 6.2, 5.3, 5.3, 2.4, 2.4, 3.1, 3.1, 3.5, 3.5, 3.5, 2.4, 2.4, 2.4, 3.3, 3.3, 3.3, 3.8, 3.7, 3.7, 4.7, 3.7, 3.7, 4.7, 4.7, 5.7, 5.9, 4.7, 4.7, 4.7, 5.7, 5.7, 5.7, 5.7, 5.9, 4.6, 5.4, 5.4, 4, 4, 4, 4.6, 4.6, 5, 4.2, 4.2, 4.6, 4.6, 4.6, 5.4, 5.4, 5.4, 5.4, 3.8, 3.8, 4, 4, 4.6, 4.6, 5.4, 5.4, 5.4, 1.6, 1.6, 1.6, 1.6, 1.8, 1.8, 1.8, 2, 2, 2.4, 2.4, 2.5, 2.5, 3.3, 3.3, 3.3, 3.3, 2, 2, 2, 2.7, 2.7, 3, 3.7, 3.7, 4, 4, 4.7, 4.7, 4.7, 4.7, 4.7, 4, 4, 4, 4, 4.4, 4.4, 5.4, 5.4, 5.4, 4, 4, 4, 4, 2.4, 2.4, 2.4, 2.4, 3, 3, 3, 3, 3.3, 3.5, 3.8, 3.8, 3.8, 5.7, 5.7, 3.8, 2.5, 2.5, 2.5, 2.5, 2.2, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.7, 2.7, 3.4, 3.4, 4, 4, 4, 4.7, 2.2, 2.2, 2.2, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 3, 2.2, 2.2, 2.4, 2.4, 3, 3, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 4.7, 4.7, 2.7, 3.4, 4, 1.8, 2, 1.9, 1.9, 2, 2, 2, 2, 2.5, 2.5, 1.8, 1.8, 1.9, 1.9, 2, 2, 2.5, 1.8, 1.8, 1.8, 2, 2, 2, 2.8, 2.8, 3.6), year = c(1999, 1999, 2008, 2008, 1999, 1999, 2008, 2008, 1999, 1999, 2008, 2008, 1999, 1999, 2008, 2008, 1999, 2008, 1999, 2008, 1999, 2008, 2008, 2008, 1999, 2008, 1999, 1999, 1999, 1999, 2008, 2008, 2008, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 2008, 1999, 1999, 1999, 2008, 1999, 1999, 1999, 1999, 2008, 1999, 1999, 2008, 2008, 2008, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 2008, 2008, 1999, 1999, 1999, 1999, 2008, 1999, 1999, 2008, 2008, 1999, 1999, 1999, 2008, 1999, 2008, 1999, 2008, 2008, 1999, 1999, 1999, 1999, 1999, 1999, 2008, 2008, 2008, 1999, 1999, 1999, 1999, 1999, 1999, 2008, 2008, 1999, 1999, 2008, 2008, 1999, 1999, 1999, 1999, 2008, 2008, 2008, 1999, 1999, 1999, 1999, 2008, 2008, 2008, 2008, 1999, 1999, 1999, 2008, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 2008, 2008, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 2008, 2008, 2008, 2008, 1999, 1999, 1999, 1999, 1999, 2008, 2008, 2008, 2008, 2008, 1999, 1999, 1999, 2008, 2008, 2008, 1999, 1999, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 2008, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 1999, 2008), cyl = c(4, 4, 4, 4, 6, 6, 6, 6, 4, 4, 4, 4, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 4, 4, 6, 6, 6, 6, 6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 8, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 8, 8, 8, 6, 6, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 8, 8, 8, 8, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 4, 4, 4, 6, 6, 6, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 4, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 8, 8, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 4, 4, 4, 4, 6, 6, 4, 4, 4, 4, 4, 4, 8, 8, 4, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 6, 6, 6), trans = c(\"auto(l5)\", \"manual(m5)\", \"manual(m6)\", \"auto(av)\", \"auto(l5)\", \"manual(m5)\", \"auto(av)\", \"manual(m6)\", \"auto(l5)\", \"manual(m5)\", \"manual(m6)\", \"auto(av)\", \"auto(l5)\", \"manual(m5)\", \"auto(av)\", \"manual(m6)\", \"auto(l5)\", \"auto(s6)\", \"auto(l4)\", \"auto(l4)\", \"manual(m6)\", \"manual(m6)\", \"manual(m6)\", \"auto(s6)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"auto(l6)\", \"auto(l6)\", \"auto(l3)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"auto(l5)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l5)\", \"manual(m6)\", \"auto(l5)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l5)\", \"manual(m5)\", \"auto(l5)\", \"auto(l5)\", \"auto(l5)\", \"auto(l5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"auto(l5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l5)\", \"manual(m5)\", \"auto(l5)\", \"manual(m5)\", \"auto(l5)\", \"manual(m5)\", \"manual(m5)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l5)\", \"auto(l5)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l5)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"manual(m5)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l5)\", \"auto(l5)\", \"auto(l5)\", \"auto(l5)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l5)\", \"auto(l5)\", \"auto(l5)\", \"auto(l4)\", \"auto(l5)\", \"auto(l5)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l5)\", \"auto(l5)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(a5)\", \"auto(a6)\", \"auto(s5)\", \"auto(l5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(s6)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\", \"manual(m5)\", \"auto(l4)\"), drv = c(\"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"4\", \"4\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"r\", \"r\", \"r\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"r\", \"r\", \"r\", \"4\", \"4\", \"4\", \"4\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"4\", \"4\", \"4\", \"4\", \"4\", \"r\", \"r\", \"r\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"4\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"4\", \"4\", \"4\", \"4\", \"4\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\", \"f\"), cty = c(18, 21, 20, 21, 16, 18, 18, 18, 18, 18, 20, 19, 15, 17, 17, 17, 15, 14, 11, 14, 16, 15, 16, 15, 14, 11, 19, 19, 18, 17, 17, 17, 17, 18, 18, 20, 17, 16, 16, 15, 14, 14, 13, 13, 13, 12, 12, 13, 12, 14, 12, 13, 13, 13, 13, 12, 12, 11, 11, 11, 14, 15, 15, 14, 11, 11, 12, 14, 13, 13, 13, 14, 13, 13, 12, 18, 18, 18, 16, 15, 15, 15, 15, 14, 28, 28, 27, 25, 25, 24, 25, 23, 24, 21, 21, 21, 20, 18, 18, 19, 19, 20, 19, 19, 20, 15, 15, 15, 14, 14, 13, 12, 12, 12, 12, 13, 12, 11, 11, 11, 12, 12, 12, 11, 17, 16, 16, 15, 19, 19, 19, 19, 19, 16, 16, 16, 16, 14, 14, 14, 15, 15, 15, 9, 9, 9, 22, 21, 21, 20, 20, 20, 21, 22, 21, 22, 22, 19, 19, 18, 18, 16, 15, 15, 12, 21, 21, 21, 21, 21, 31, 29, 31, 30, 26, 26, 22, 22, 22, 20, 21, 21, 27, 27, 18, 17, 19, 21, 21, 30, 31, 29, 26, 26, 28, 26, 26, 29, 29, 29, 28, 25, 24, 19, 25, 26, 26, 25, 25, 24, 21, 21, 18), hwy = c(29, 29, 31, 30, 26, 26, 27, 26, 26, 25, 28, 27, 25, 25, 25, 25, 24, 19, 15, 20, 26, 25, 26, 25, 17, 17, 27, 27, 26, 25, 26, 25, 26, 24, 24, 28, 22, 22, 23, 20, 17, 19, 17, 17, 18, 17, 16, 17, 15, 17, 18, 17, 15, 17, 15, 16, 15, 17, 17, 17, 17, 19, 19, 17, 17, 15, 15, 16, 16, 17, 16, 15, 15, 17, 15, 26, 27, 27, 25, 20, 20, 20, 20, 19, 33, 32, 32, 32, 32, 32, 34, 32, 30, 28, 27, 30, 28, 24, 24, 26, 27, 27, 28, 28, 25, 20, 18, 20, 19, 19, 17, 17, 16, 15, 15, 15, 18, 17, 19, 19, 17, 17, 16, 16, 24, 25, 23, 23, 26, 25, 26, 27, 26, 24, 25, 23, 25, 20, 20, 20, 20, 22, 20, 17, 15, 14, 29, 26, 27, 25, 27, 28, 28, 29, 29, 30, 30, 26, 26, 24, 24, 23, 20, 22, 17, 31, 30, 31, 32, 30, 35, 35, 35, 35, 29, 28, 24, 24, 24, 22, 28, 29, 31, 32, 24, 23, 26, 30, 28, 40, 38, 40, 38, 36, 40, 36, 35, 38, 35, 38, 38, 35, 32, 27, 35, 35, 35, 31, 32, 32, 27, 26, 26), fl = c(\"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"r\", \"r\", \"p\", \"p\", \"p\", \"p\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"e\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"d\", \"d\", \"d\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"r\", \"r\", \"p\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"r\", \"p\", \"p\", \"d\", \"d\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\", \"p\"), class = c(\"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"midsize\", \"midsize\", \"suv\", \"suv\", \"2seater\", \"2seater\", \"2seater\", \"2seater\", \"suv\", \"suv\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"minivan\", \"minivan\", \"minivan\", \"minivan\", \"minivan\", \"minivan\", \"minivan\", \"pickup\", \"pickup\", \"pickup\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"pickup\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"midsize\", \"midsize\", \"midsize\", \"compact\", \"compact\", \"compact\", \"compact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"suv\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"suv\", \"suv\", \"pickup\", \"pickup\", \"pickup\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"compact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"subcompact\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\", \"midsize\") ) # Step 1: Explore the dataset # First, get a quick overview of the data str(mpg) head(mpg) summary(mpg) # Step 2: Extract and analyze the requested subsets # (a) All compact cars compact_cars <- mpg[mpg$class == \"compact\", ] # Basic summary of compact cars cat(\"\\n===== COMPACT CARS =====\\n\") cat(\"Number of compact cars:\", nrow(compact_cars), \"\\n\") # Summary statistics for compact cars compact_summary <- summary(compact_cars[, c(\"cty\", \"hwy\")]) compact_summary # Distribution of manufacturers within compact cars table(compact_cars$manufacturer) # Visualize fuel economy of compact cars par(mfrow = c(1, 2)) hist(compact_cars$cty, main = \"City MPG - Compact Cars\", xlab = \"MPG (City)\", col = \"lightblue\") hist(compact_cars$hwy, main = \"Highway MPG - Compact Cars\", xlab = \"MPG (Highway)\", col = \"lightgreen\") par(mfrow = c(1, 1)) # (b) All cars manufactured by Toyota toyota_cars <- mpg[mpg$manufacturer == \"toyota\", ] cat(\"\\n===== TOYOTA CARS =====\\n\") cat(\"Number of Toyota cars:\", nrow(toyota_cars), \"\\n\") # Distribution of Toyota car types toyota_class_table <- table(toyota_cars$class) toyota_class_table # Average fuel economy by car type for Toyota toyota_mpg_by_class <- aggregate(cbind(cty, hwy) ~ class, data = toyota_cars, FUN = mean) toyota_mpg_by_class # Visualize Toyota models by class and MPG boxplot(hwy ~ class, data = toyota_cars, main = \"Highway MPG by Toyota Vehicle Class\", xlab = \"Vehicle Class\", ylab = \"Highway MPG\", col = \"lightyellow\") # (c) All 4-cylinder cars with highway fuel economy (hwy) greater than 30 mpg efficient_4cyl <- mpg[mpg$cyl == 4 & mpg$hwy > 30, ] cat(\"\\n===== EFFICIENT 4-CYLINDER CARS =====\\n\") cat(\"Number of 4-cylinder cars with hwy mpg > 30:\", nrow(efficient_4cyl), \"\\n\") # Which manufacturers are producing these efficient cars? table(efficient_4cyl$manufacturer) # Average city and highway MPG for these efficient cars cat(\"Average city MPG:\", mean(efficient_4cyl$cty), \"\\n\") cat(\"Average highway MPG:\", mean(efficient_4cyl$hwy), \"\\n\") # Visualize these efficient cars plot(efficient_4cyl$displ, efficient_4cyl$hwy, main = \"Engine Displacement vs Highway MPG\\nFor Efficient 4-Cylinder Cars\", xlab = \"Engine Displacement (liters)\", ylab = \"Highway MPG\", pch = 19, col = \"darkgreen\") # (d) Compare average city fuel economy for cars with 4, 6, and 8 cylinders cyl_comparison <- aggregate(cty ~ cyl, data = mpg, FUN = mean) cyl_comparison # Visualize the comparison barplot(cyl_comparison$cty, names.arg = cyl_comparison$cyl, main = \"Average City MPG by Number of Cylinders\", xlab = \"Number of Cylinders\", ylab = \"Average City MPG\", col = \"lightcoral\", ylim = c(0, 25)) # Additional analysis - relationship between cylinders and highway MPG hwy_comparison <- aggregate(hwy ~ cyl, data = mpg, FUN = mean) # (e) Create a random sample of 15 cars set.seed(123) # For reproducibility car_sample <- mpg[sample(nrow(mpg), 15), ] cat(\"\\n===== RANDOM SAMPLE OF 15 CARS =====\\n\") # Show the models in the sample car_sample$model # Calculate average fuel economy for the sample cat(\"Average city MPG in sample:\", mean(car_sample$cty), \"\\n\") cat(\"Average highway MPG in sample:\", mean(car_sample$hwy), \"\\n\") # Compare sample averages to population averages cat(\"\\nComparison to overall averages:\\n\") cat(\"Overall average city MPG:\", mean(mpg$cty), \"\\n\") cat(\"Overall average highway MPG:\", mean(mpg$hwy), \"\\n\") # Step 3: Document findings and insights cat(\"\\n\\n===== SUMMARY OF FINDINGS =====\\n\") cat(\"1. Compact Cars:\\n\") cat(\" - There are\", nrow(compact_cars), \"compact cars in the dataset\\n\") cat(\" - Average city MPG:\", mean(compact_cars$cty), \"\\n\") cat(\" - Average highway MPG:\", mean(compact_cars$hwy), \"\\n\") cat(\" - Main manufacturers:\", names(sort(table(compact_cars$manufacturer), decreasing = TRUE)[1:3]), \"\\n\\n\") cat(\"2. Toyota Vehicles:\\n\") cat(\" - Toyota offers\", length(toyota_class_table), \"different vehicle classes\\n\") cat(\" - Most common Toyota class:\", names(which.max(toyota_class_table)), \"\\n\") cat(\" - Toyota's most fuel-efficient class (highway):\", toyota_mpg_by_class$class[which.max(toyota_mpg_by_class$hwy)], \"\\n\\n\") cat(\"3. Efficient 4-Cylinder Cars (MPG > 30):\\n\") cat(\" - There are\", nrow(efficient_4cyl), \"4-cylinder cars with highway MPG > 30\\n\") cat(\" - Top manufacturer of efficient cars:\", names(which.max(table(efficient_4cyl$manufacturer))), \"\\n\") cat(\" - Average highway MPG:\", mean(efficient_4cyl$hwy), \"\\n\\n\") cat(\"4. Cylinder Comparison:\\n\") cat(\" - 4-cylinder cars average\", cyl_comparison$cty[cyl_comparison$cyl == 4], \"city MPG\\n\") cat(\" - 6-cylinder cars average\", cyl_comparison$cty[cyl_comparison$cyl == 6], \"city MPG\\n\") cat(\" - 8-cylinder cars average\", cyl_comparison$cty[cyl_comparison$cyl == 8], \"city MPG\\n\") cat(\" - Each additional 2 cylinders reduces city MPG by approximately\", round((cyl_comparison$cty[cyl_comparison$cyl == 4] - cyl_comparison$cty[cyl_comparison$cyl == 8])\/2, 1), \"MPG\\n\\n\")    Dataset Analysis Insights   Based on the exploratory analysis of the mpg dataset, answer the following questions:     Why might car manufacturers continue to produce vehicles with more cylinders despite their lower fuel efficiency?    Car manufacturers continue to produce vehicles with more cylinders despite lower fuel efficiency because:   Higher cylinder engines typically provide more power and torque, which is necessary for larger vehicles like trucks and SUVs that need to haul heavy loads or tow trailers  Many consumers prioritize performance, acceleration, and driving experience over fuel economy  Vehicles with more cylinders often serve different market segments (luxury, performance, utility) where fuel efficiency is not the primary concern  Some applications require the additional power that comes with more cylinders, such as off-road driving or commercial use   The data shows that as cylinders increase, fuel economy decreases significantly, but this represents a design trade-off rather than a simple deficiency. For many use cases, the benefits of additional power outweigh the costs of reduced efficiency.      What patterns do you observe regarding the relationship between engine displacement, number of cylinders, and fuel economy?    The analysis reveals several clear patterns regarding engine displacement, cylinders, and fuel economy:   There is a strong negative correlation between engine displacement and fuel economy - as displacement increases, both city and highway MPG decrease  The number of cylinders is directly related to engine displacement - vehicles with more cylinders typically have larger displacement engines  4-cylinder engines show the best fuel economy, followed by 6-cylinder engines, with 8-cylinder engines being the least efficient  Within the same cylinder count, smaller displacement engines tend to be more fuel-efficient than larger ones  Efficient 4-cylinder cars (highway MPG > 30) almost exclusively have displacement below 2.5 liters  The relationship appears to be non-linear - the MPG penalty for going from 4 to 6 cylinders is less severe than going from 6 to 8 cylinders   These patterns reflect the fundamental engineering trade-offs in internal combustion engines, where greater displacement and more cylinders typically result in more power but reduced efficiency due to increased friction, weight, and fuel consumption.      "
},
{
  "id": "subsec-filtering-selecting-4-1-1",
  "level": "2",
  "url": "sec-data-transformation.html#subsec-filtering-selecting-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Filtering rows "
},
{
  "id": "subsec-filtering-selecting-4-2-1",
  "level": "2",
  "url": "sec-data-transformation.html#subsec-filtering-selecting-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Selecting columns "
},
{
  "id": "subsec-filtering-selecting-4-3-1",
  "level": "2",
  "url": "sec-data-transformation.html#subsec-filtering-selecting-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Combined operations "
},
{
  "id": "subsec-filtering-selecting-4-4-1",
  "level": "2",
  "url": "sec-data-transformation.html#subsec-filtering-selecting-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Subset function "
},
{
  "id": "ex-filter-select",
  "level": "2",
  "url": "sec-data-transformation.html#ex-filter-select",
  "type": "Checkpoint",
  "number": "71",
  "title": "Filtering and Selecting Practice.",
  "body": " Filtering and Selecting Practice   Using the iris dataset, complete the following filtering and selection tasks:     Select all flowers of the species 'virginica' with petal length greater than 5.5 cm.    # Load the iris dataset data(iris) # Filter for virginica species with petal length > 5.5 selected_flowers <- iris[iris$Species == \"virginica\" & iris$Petal.Length > 5.5, ] selected_flowers # Alternative using subset() selected_flowers_alt <- subset(iris, Species == \"virginica\" & Petal.Length > 5.5) selected_flowers_alt      Create a new dataset containing only the sepal measurements (Sepal.Length and Sepal.Width) for flowers with sepal width less than 3.0 cm, regardless of species.    # Filter for sepal width < 3.0 and select only sepal measurements sepal_data <- iris[iris$Sepal.Width < 3.0, c(\"Sepal.Length\", \"Sepal.Width\")] head(sepal_data) # Alternative using subset() sepal_data_alt <- subset(iris, Sepal.Width < 3.0, select = c(\"Sepal.Length\", \"Sepal.Width\")) head(sepal_data_alt)    "
},
{
  "id": "subsec-subsetting-dataframes-3-1-1",
  "level": "2",
  "url": "sec-data-transformation.html#subsec-subsetting-dataframes-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Random sampling "
},
{
  "id": "subsec-subsetting-dataframes-3-2-1",
  "level": "2",
  "url": "sec-data-transformation.html#subsec-subsetting-dataframes-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Top\/bottom rows "
},
{
  "id": "subsec-subsetting-dataframes-3-3-1",
  "level": "2",
  "url": "sec-data-transformation.html#subsec-subsetting-dataframes-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stratified sampling "
},
{
  "id": "subsec-subsetting-dataframes-3-4-1",
  "level": "2",
  "url": "sec-data-transformation.html#subsec-subsetting-dataframes-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Logical indexing "
},
{
  "id": "ex-subsetting-practice",
  "level": "2",
  "url": "sec-data-transformation.html#ex-subsetting-practice",
  "type": "Checkpoint",
  "number": "72",
  "title": "Subsetting Practice.",
  "body": " Subsetting Practice   Using the mtcars dataset, complete the following subsetting tasks:     Create a random sample of 8 cars from the dataset.    # Load dataset data(mtcars) # Set seed for reproducibility set.seed(123) # Sample 8 random cars car_sample <- mtcars[sample(nrow(mtcars), 8), ] car_sample      Find the car with the best fuel efficiency (highest mpg) and the car with the most horsepower (hp).    # Find the car with the highest mpg most_efficient_index <- which.max(mtcars$mpg) most_efficient_car <- mtcars[most_efficient_index, ] rownames(most_efficient_car) # Toyota Corolla # Find the car with the most horsepower most_powerful_index <- which.max(mtcars$hp) most_powerful_car <- mtcars[most_powerful_index, ] rownames(most_powerful_car) # Maserati Bora    "
},
{
  "id": "activity-meaningful-subsets",
  "level": "2",
  "url": "sec-data-transformation.html#activity-meaningful-subsets",
  "type": "Activity",
  "number": "13",
  "title": "Extracting Insights from Data Subsets.",
  "body": " Extracting Insights from Data Subsets   In this activity, you will extract and analyze meaningful subsets from the mpg dataset (from the ggplot2 package, but we'll provide a version).  The mpg dataset contains fuel economy data for 38 popular car models from 1999 to 2008, including variables such as manufacturer, model, year, engine displacement, number of cylinders, transmission type, and fuel economy ratings.  Instructions:    Create the mpg dataset using the code provided    Extract and analyze the following subsets:    All compact cars (class = \"compact\")    All cars manufactured by Toyota    All 4-cylinder cars with highway fuel economy (hwy) greater than 30 mpg    Compare the average city fuel economy (cty) for cars with 4, 6, and 8 cylinders    Create a random sample of 15 cars and calculate their average fuel economy      For each subset, create appropriate summary statistics and visualizations    Document your findings and insights from each subset     "
},
{
  "id": "ex-mpg-insights",
  "level": "2",
  "url": "sec-data-transformation.html#ex-mpg-insights",
  "type": "Checkpoint",
  "number": "73",
  "title": "Dataset Analysis Insights.",
  "body": " Dataset Analysis Insights   Based on the exploratory analysis of the mpg dataset, answer the following questions:     Why might car manufacturers continue to produce vehicles with more cylinders despite their lower fuel efficiency?    Car manufacturers continue to produce vehicles with more cylinders despite lower fuel efficiency because:   Higher cylinder engines typically provide more power and torque, which is necessary for larger vehicles like trucks and SUVs that need to haul heavy loads or tow trailers  Many consumers prioritize performance, acceleration, and driving experience over fuel economy  Vehicles with more cylinders often serve different market segments (luxury, performance, utility) where fuel efficiency is not the primary concern  Some applications require the additional power that comes with more cylinders, such as off-road driving or commercial use   The data shows that as cylinders increase, fuel economy decreases significantly, but this represents a design trade-off rather than a simple deficiency. For many use cases, the benefits of additional power outweigh the costs of reduced efficiency.      What patterns do you observe regarding the relationship between engine displacement, number of cylinders, and fuel economy?    The analysis reveals several clear patterns regarding engine displacement, cylinders, and fuel economy:   There is a strong negative correlation between engine displacement and fuel economy - as displacement increases, both city and highway MPG decrease  The number of cylinders is directly related to engine displacement - vehicles with more cylinders typically have larger displacement engines  4-cylinder engines show the best fuel economy, followed by 6-cylinder engines, with 8-cylinder engines being the least efficient  Within the same cylinder count, smaller displacement engines tend to be more fuel-efficient than larger ones  Efficient 4-cylinder cars (highway MPG > 30) almost exclusively have displacement below 2.5 liters  The relationship appears to be non-linear - the MPG penalty for going from 4 to 6 cylinders is less severe than going from 6 to 8 cylinders   These patterns reflect the fundamental engineering trade-offs in internal combustion engines, where greater displacement and more cylinders typically result in more power but reduced efficiency due to increased friction, weight, and fuel consumption.    "
},
{
  "id": "sec-creating-transforming-variables",
  "level": "1",
  "url": "sec-creating-transforming-variables.html",
  "type": "Section",
  "number": "",
  "title": "Creating and transforming variables",
  "body": " Creating and transforming variables    Adding and modifying columns  Creating new variables and transforming existing ones are essential data preparation tasks. In R, you can easily add or modify columns in a data frame using various techniques.  Common ways to add or modify columns:    Direct assignment : df$new_col <- values    Calculated columns : df$new_col <- df$col1 + df$col2    Applying functions : df$new_col <- function(df$existing_col)    Conditional assignment : df$new_col <- ifelse(condition, value_if_true, value_if_false)    Using transform() : df <- transform(df, new_col = expression)    Category creation : df$new_cat <- cut(df$numeric_var, breaks, labels)     # Create a sample dataset students <- data.frame( id = 1:6, name = c(\"Alice\", \"Bob\", \"Charlie\", \"David\", \"Emma\", \"Frank\"), math_score = c(85, 92, 78, 95, 88, 72), science_score = c(92, 88, 75, 89, 94, 77) ) # Display the original data students # 1. Direct assignment - Add a new column students$english_score <- c(88, 90, 82, 78, 95, 85) students # 2. Calculated columns - Calculate average score students$avg_score <- (students$math_score + students$science_score + students$english_score) \/ 3 students # 3. Using a function - Round the average score students$avg_score_rounded <- round(students$avg_score) students # 4. Conditional assignment with ifelse() - Assign grades students$grade <- ifelse(students$avg_score >= 90, \"A\", ifelse(students$avg_score >= 80, \"B\", ifelse(students$avg_score >= 70, \"C\", ifelse(students$avg_score >= 60, \"D\", \"F\")))) students # 5. Using transform() - Add multiple columns at once students <- transform(students, math_pct = math_score \/ 100, science_pct = science_score \/ 100, english_pct = english_score \/ 100) students # 6. Creating categories with cut() - Group by performance students$performance_group <- cut(students$avg_score, breaks = c(0, 70, 80, 90, 100), labels = c(\"Needs Improvement\", \"Satisfactory\", \"Good\", \"Excellent\"), right = FALSE) students # 7. Creating a binary variable students$honor_roll <- students$avg_score >= 85 students # 8. Modifying an existing column students$math_score <- students$math_score + 2 # Curve everyone's math score students # 9. Creating an index or rank students$rank <- rank(-students$avg_score) # Negative for descending order students # 10. Using apply() to create a column # Calculate maximum score across all subjects students$max_score <- apply(students[, c(\"math_score\", \"science_score\", \"english_score\")], 1, max) students   More advanced transformations:   # Load the iris dataset data(iris) # Create a copy to work with iris_modified <- iris # Z-score standardization (mean = 0, sd = 1) # For Sepal.Length iris_modified$Sepal.Length_z <- (iris$Sepal.Length - mean(iris$Sepal.Length)) \/ sd(iris$Sepal.Length) # Check that the new variable has mean ≈ 0 and sd ≈ 1 mean(iris_modified$Sepal.Length_z) sd(iris_modified$Sepal.Length_z) # Min-max scaling (range [0,1]) # For Sepal.Width iris_modified$Sepal.Width_scaled <- (iris$Sepal.Width - min(iris$Sepal.Width)) \/ (max(iris$Sepal.Width) - min(iris$Sepal.Width)) # Check that the range is [0,1] range(iris_modified$Sepal.Width_scaled) # Log transformation (useful for skewed data) # Create a sample skewed variable set.seed(123) skewed_data <- data.frame( id = 1:100, value = rlnorm(100, meanlog = 2, sdlog = 1) # Log-normal distribution ) # Plot the original skewed data hist(skewed_data$value, main = \"Original Skewed Distribution\", xlab = \"Value\", col = \"lightblue\") # Apply log transformation skewed_data$log_value <- log(skewed_data$value) # Plot the transformed data hist(skewed_data$log_value, main = \"Log-Transformed Distribution\", xlab = \"Log(Value)\", col = \"lightgreen\") # Square root transformation (another option for right-skewed data) skewed_data$sqrt_value <- sqrt(skewed_data$value) # Plot the square root transformed data hist(skewed_data$sqrt_value, main = \"Square Root Transformed Distribution\", xlab = \"Sqrt(Value)\", col = \"lightpink\") # Creating dummy variables (one-hot encoding) # For iris Species iris_dummy <- iris # Create dummy variables for Species iris_dummy$is_setosa <- as.integer(iris$Species == \"setosa\") iris_dummy$is_versicolor <- as.integer(iris$Species == \"versicolor\") iris_dummy$is_virginica <- as.integer(iris$Species == \"virginica\") # Check the dummy variables head(iris_dummy[, c(\"Species\", \"is_setosa\", \"is_versicolor\", \"is_virginica\")]) # Binning continuous variables # Bin Petal.Length into categories iris_dummy$petal_size <- cut(iris$Petal.Length, breaks = c(0, 2, 4, 7), labels = c(\"small\", \"medium\", \"large\"), include.lowest = TRUE) # Check the binning table(iris_dummy$petal_size, iris_dummy$Species) # String manipulations # Create a sample dataset with text text_data <- data.frame( id = 1:5, full_name = c(\"John Smith\", \"Mary Johnson\", \"Robert Brown\", \"Linda Davis\", \"James Wilson\") ) # Extract first name text_data$first_name <- sapply(strsplit(text_data$full_name, \" \"), `[`, 1) # Extract last name text_data$last_name <- sapply(strsplit(text_data$full_name, \" \"), `[`, 2) # Create initials text_data$initials <- paste0(substr(text_data$first_name, 1, 1), substr(text_data$last_name, 1, 1)) # Make names uppercase text_data$full_name_upper <- toupper(text_data$full_name) text_data    Column Transformation Practice   Using the mtcars dataset, perform the following transformations:     Create a new column called 'efficiency_ratio' that divides mpg by wt (miles per gallon per unit of weight).    data(mtcars) # Create efficiency ratio column mtcars$efficiency_ratio <- mtcars$mpg \/ mtcars$wt # Check the results head(mtcars[, c(\"mpg\", \"wt\", \"efficiency_ratio\")])      Create a new categorical variable 'size_category' based on the 'wt' variable, with categories \"Light\" (less than 2.5), \"Medium\" (2.5 to 3.5), and \"Heavy\" (greater than 3.5).    # Create size category based on weight mtcars$size_category <- cut(mtcars$wt, breaks = c(0, 2.5, 3.5, Inf), labels = c(\"Light\", \"Medium\", \"Heavy\")) # Check the distribution of size categories table(mtcars$size_category)        Reshaping data (wide vs. long format)  Data often needs to be reshaped between \"wide\" and \"long\" formats for different types of analysis or visualization. Understanding these formats and how to convert between them is an important skill in data science.  Wide format vs. Long format:    Wide format : Each subject\/entity is in a single row, with multiple columns for different variables or time points    Long format : Each observation is in a separate row, with columns for ID variables, measurement variables, and values    In base R, reshaping can be done with the reshape() function:   # Create a sample dataset in wide format # Student scores for different subjects student_scores_wide <- data.frame( student_id = 1:5, name = c(\"Alice\", \"Bob\", \"Charlie\", \"Diana\", \"Eduardo\"), math = c(85, 92, 78, 95, 88), science = c(92, 88, 75, 89, 94), english = c(88, 90, 82, 78, 95) ) # Display the wide format data student_scores_wide # Reshape from wide to long format using reshape() student_scores_long <- reshape( student_scores_wide, direction = \"long\", # Reshape to long format varying = c(\"math\", \"science\", \"english\"), # Columns to reshape v.names = \"score\", # Name for the values column timevar = \"subject\", # Name for the variable names column idvar = c(\"student_id\", \"name\"), # ID columns to keep times = c(\"math\", \"science\", \"english\"), # Values for the timevar column new.row.names = 1:15 # New row names (5 students × 3 subjects) ) # Display the long format data student_scores_long # Sort for better viewing student_scores_long <- student_scores_long[order(student_scores_long$student_id), ] student_scores_long # Reshape back from long to wide format student_scores_wide2 <- reshape( student_scores_long, direction = \"wide\", # Reshape to wide format idvar = c(\"student_id\", \"name\"), # ID columns timevar = \"subject\" # Variable that contains the column names ) # Fix column names by removing \"score.\" prefix names(student_scores_wide2) <- gsub(\"score.\", \"\", names(student_scores_wide2)) # Display the result of reshaping back to wide format student_scores_wide2 # Example with multiple measurement variables # Create a dataset with students' scores and absences in wide format student_data_wide <- data.frame( student_id = 1:4, math_score = c(85, 92, 78, 95), science_score = c(92, 88, 75, 89), math_absences = c(2, 0, 3, 1), science_absences = c(1, 2, 4, 0) ) student_data_wide # Reshape to long format with multiple measurement variables student_data_long <- reshape( student_data_wide, direction = \"long\", varying = list(c(\"math_score\", \"science_score\"), c(\"math_absences\", \"science_absences\")), v.names = c(\"score\", \"absences\"), timevar = \"subject\", times = c(\"math\", \"science\"), idvar = \"student_id\" ) # Sort for better viewing student_data_long <- student_data_long[order(student_data_long$student_id), ] student_data_long # Another approach using melt function from reshape2 package (not run since we don't have the package in Web-R) # Commented out as it requires a package # install.packages(\"reshape2\") # library(reshape2) # student_scores_long_alt <- melt(student_scores_wide, # id.vars = c(\"student_id\", \"name\"), # measure.vars = c(\"math\", \"science\", \"english\"), # variable.name = \"subject\", # value.name = \"score\") # Real-world example - Measuring multiple variables over time # Create a dataset of patient measurements over time patients <- data.frame( patient_id = rep(1:3, each = 3), visit = rep(c(\"baseline\", \"month_3\", \"month_6\"), 3), weight = c(70, 68, 67, 85, 83, 82, 62, 60, 61), blood_pressure = c(140, 135, 130, 150, 145, 140, 125, 120, 120), cholesterol = c(220, 200, 195, 240, 220, 210, 190, 185, 180) ) # View the initial data (in wide format by visit) patients # Reshape to have all measurements for each patient-visit in a single row # We're already in long format for visit, but wide format for measurements # Let's reshape to have each measurement in its own row patients_long <- reshape( patients, direction = \"long\", varying = c(\"weight\", \"blood_pressure\", \"cholesterol\"), v.names = \"value\", timevar = \"measurement\", idvar = c(\"patient_id\", \"visit\"), times = c(\"weight\", \"blood_pressure\", \"cholesterol\") ) # Sort for better viewing patients_long <- patients_long[order(patients_long$patient_id, patients_long$visit), ] patients_long # Now let's reshape to have each patient in a single row with all visits and measurements # First, reshape to have measurements in columns patients_wide_meas <- reshape( patients_long, direction = \"wide\", idvar = c(\"patient_id\", \"visit\"), timevar = \"measurement\" ) patients_wide_meas # Then reshape to have visits in columns patients_wide_all <- reshape( patients_wide_meas, direction = \"wide\", idvar = \"patient_id\", timevar = \"visit\" ) patients_wide_all # Cleaning up column names for better readability (not executed in this example) # Would need to rename columns like value.weight.baseline to baseline_weight    Data Reshaping Practice   For each of the following scenarios, determine whether the data should be in wide or long format, and explain why:     Creating a line plot showing the trend of stock prices for multiple companies over time    Long format would be most appropriate for this scenario.  Reasons:   Most plotting functions in R (especially ggplot2) work better with long-format data for this type of visualization  In long format, each row would represent a single observation: one company's stock price on a specific date  The data would have columns for: date, company name, and stock price  This structure allows for easily grouping by company and creating lines for each company over time  It also simplifies adding visual attributes like different colors for each company   In contrast, wide format (with each company as a separate column) would make the plotting more difficult and would require reshaping before visualization.      Running a correlation analysis between different test scores (math, science, english) for a group of students    Wide format would be most appropriate for this scenario.  Reasons:   Correlation analysis typically compares variables (columns) to each other  In wide format, each row would represent one student, with separate columns for math score, science score, and English score  Functions like cor() in R expect data in wide format, where each variable to be correlated is a separate column  This structure allows for directly calculating the correlation matrix between all test scores  Wide format is also more convenient for calculating descriptive statistics for each subject   Using long format (with a single \"score\" column and a \"subject\" column) would require reshaping the data before performing the correlation analysis.        Group work: Begin transforming a dataset for mid-term project   Dataset Transformation for Mid-Term Project   In this activity, you will work with partners to prepare a dataset for your mid-term project. The goal is to apply the data transformation techniques you've learned to clean, reshape, and enhance a dataset for analysis.  Instructions:    Form groups of 2-3 students    Choose one of the following datasets:    The built-in airquality dataset (daily air quality measurements in New York, 1973)    The built-in mtcars dataset (fuel consumption and design characteristics for car models)    The built-in ChickWeight dataset (weight versus age of chicks on different diets)      Perform the following transformations on your chosen dataset:    Clean any missing or problematic values    Create at least three new derived variables based on the existing data    Reshape the data as needed for your planned analysis    Create appropriate categorical variables using binning    Standardize or normalize numerical variables if appropriate      Document your transformations and explain the reasoning behind each step    Prepare a brief presentation of your transformed dataset and the insights it enables       # Example transformation workflow for the airquality dataset # This is an example of what students might do in their group work # Load the dataset data(airquality) # Examine the structure str(airquality) # Look at the first few rows head(airquality) # Check for missing values summary(airquality) sum(is.na(airquality)) colSums(is.na(airquality)) # 1. Cleaning missing values # Method 1: Remove rows with any missing values airquality_complete <- na.omit(airquality) dim(airquality) # Original dimensions dim(airquality_complete) # Dimensions after removing NAs # Method 2: Impute missing values with column means airquality_imputed <- airquality for(col in names(airquality)) { airquality_imputed[is.na(airquality_imputed[, col]), col] <- mean(airquality[, col], na.rm = TRUE) } # Verify imputation colSums(is.na(airquality_imputed)) # 2. Creating derived variables # Add a Date column by combining Month and Day airquality_imputed$Date <- as.Date(paste(\"1973\", airquality_imputed$Month, airquality_imputed$Day, sep = \"-\")) # Create a Heat Index (simple version) airquality_imputed$HeatIndex <- airquality_imputed$Temp + 0.05 * airquality_imputed$Temp * airquality_imputed$Wind # Create Air Quality Index (simplified version) airquality_imputed$AQI <- (airquality_imputed$Ozone + airquality_imputed$Solar.R) \/ 2 # Add a Weekend indicator # First, get the day of the week (1 = Monday, ... 7 = Sunday) airquality_imputed$Weekday <- as.POSIXlt(airquality_imputed$Date)$wday # Create a binary weekend indicator (0 = weekday, 1 = weekend) airquality_imputed$Weekend <- as.integer(airquality_imputed$Weekday %in% c(0, 6)) # 3. Creating categorical variables # Bin temperature into categories airquality_imputed$TempCategory <- cut(airquality_imputed$Temp, breaks = c(50, 70, 80, 100), labels = c(\"Cool\", \"Moderate\", \"Hot\"), include.lowest = TRUE) # Categorize Ozone levels airquality_imputed$OzoneLevel <- cut(airquality_imputed$Ozone, breaks = c(0, 30, 60, 100, 200), labels = c(\"Good\", \"Moderate\", \"Unhealthy for Sensitive Groups\", \"Unhealthy\"), include.lowest = TRUE) # 4. Standardize numerical variables # Z-score standardization numeric_cols <- c(\"Ozone\", \"Solar.R\", \"Wind\", \"Temp\") for(col in numeric_cols) { col_z <- paste0(col, \"_z\") airquality_imputed[, col_z] <- scale(airquality_imputed[, col]) } # 5. Reshape the data for time series analysis # First, prepare a dataset with just the variables of interest aq_ts <- airquality_imputed[, c(\"Date\", \"Ozone\", \"Solar.R\", \"Wind\", \"Temp\")] # Reshape to long format aq_long <- reshape( aq_ts, direction = \"long\", varying = c(\"Ozone\", \"Solar.R\", \"Wind\", \"Temp\"), v.names = \"Value\", timevar = \"Measurement\", idvar = \"Date\", times = c(\"Ozone\", \"Solar.R\", \"Wind\", \"Temp\") ) # Sort for better viewing aq_long <- aq_long[order(aq_long$Date, aq_long$Measurement), ] # View the final transformed dataset head(airquality_imputed) # View the long format data head(aq_long) # 6. Analysis example: How do weather conditions affect air quality? # Correlation between variables cors <- cor(airquality_imputed[, c(\"Ozone\", \"Solar.R\", \"Wind\", \"Temp\")]) cors # Average Ozone by temperature category aggregate(Ozone ~ TempCategory, data = airquality_imputed, FUN = mean) # Is air quality worse on weekends? aggregate(Ozone ~ Weekend, data = airquality_imputed, FUN = mean) # Visualize the relationship between temperature and ozone plot(airquality_imputed$Temp, airquality_imputed$Ozone, main = \"Relationship Between Temperature and Ozone\", xlab = \"Temperature (F)\", ylab = \"Ozone (ppb)\", pch = 19, col = \"darkblue\") abline(lm(Ozone ~ Temp, data = airquality_imputed), col = \"red\", lwd = 2)    Transformation Explanation   For each of the following data transformations in the example above, explain why it might be useful for analysis:     Creating the Heat Index variable    Creating the Heat Index variable is useful for analysis because:   It combines temperature and wind data to create a measure of perceived temperature or thermal comfort  This derived variable can be more relevant for understanding how weather conditions actually feel to humans than raw temperature alone  It might correlate better with certain health outcomes or behavioral patterns than either temperature or wind speed individually  It can be used to study how perceived temperature (rather than actual temperature) affects air quality metrics like ozone levels  Creating composite indices like this often provides more intuitive and interpretable measures for analysis and visualization   While the implementation in the example is simplified, it demonstrates how multiple variables can be combined to create more meaningful metrics for specific analytical purposes.      Categorizing Ozone levels into \"Good\", \"Moderate\", \"Unhealthy for Sensitive Groups\", and \"Unhealthy\"    Categorizing Ozone levels is valuable for analysis because:   It transforms a continuous numerical variable into meaningful categories that align with established air quality standards and health guidelines  These categories have direct practical implications for public health recommendations and actions  It simplifies communication of results to non-technical audiences, as descriptive categories like \"Good\" or \"Unhealthy\" are more intuitive than raw numerical values  It facilitates certain types of analyses, such as contingency tables, chi-square tests, or categorical visualizations  It can reveal non-linear relationships that might be obscured when using the continuous variable (e.g., certain effects might only appear at \"Unhealthy\" levels)  It allows for comparisons with official air quality reporting formats, which typically use similar category systems   This transformation bridges the gap between raw scientific measurements and meaningful health-related interpretations, making the data more useful for both analysis and decision-making.      "
},
{
  "id": "subsec-adding-modifying-columns-4-1-1",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#subsec-adding-modifying-columns-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Direct assignment "
},
{
  "id": "subsec-adding-modifying-columns-4-2-1",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#subsec-adding-modifying-columns-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Calculated columns "
},
{
  "id": "subsec-adding-modifying-columns-4-3-1",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#subsec-adding-modifying-columns-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Applying functions "
},
{
  "id": "subsec-adding-modifying-columns-4-4-1",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#subsec-adding-modifying-columns-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Conditional assignment "
},
{
  "id": "subsec-adding-modifying-columns-4-5-1",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#subsec-adding-modifying-columns-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Using transform() "
},
{
  "id": "subsec-adding-modifying-columns-4-6-1",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#subsec-adding-modifying-columns-4-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Category creation "
},
{
  "id": "ex-column-transformations",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#ex-column-transformations",
  "type": "Checkpoint",
  "number": "74",
  "title": "Column Transformation Practice.",
  "body": " Column Transformation Practice   Using the mtcars dataset, perform the following transformations:     Create a new column called 'efficiency_ratio' that divides mpg by wt (miles per gallon per unit of weight).    data(mtcars) # Create efficiency ratio column mtcars$efficiency_ratio <- mtcars$mpg \/ mtcars$wt # Check the results head(mtcars[, c(\"mpg\", \"wt\", \"efficiency_ratio\")])      Create a new categorical variable 'size_category' based on the 'wt' variable, with categories \"Light\" (less than 2.5), \"Medium\" (2.5 to 3.5), and \"Heavy\" (greater than 3.5).    # Create size category based on weight mtcars$size_category <- cut(mtcars$wt, breaks = c(0, 2.5, 3.5, Inf), labels = c(\"Light\", \"Medium\", \"Heavy\")) # Check the distribution of size categories table(mtcars$size_category)    "
},
{
  "id": "subsec-reshaping-data-4-1-1",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#subsec-reshaping-data-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Wide format "
},
{
  "id": "subsec-reshaping-data-4-2-1",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#subsec-reshaping-data-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Long format "
},
{
  "id": "ex-reshaping-practice",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#ex-reshaping-practice",
  "type": "Checkpoint",
  "number": "75",
  "title": "Data Reshaping Practice.",
  "body": " Data Reshaping Practice   For each of the following scenarios, determine whether the data should be in wide or long format, and explain why:     Creating a line plot showing the trend of stock prices for multiple companies over time    Long format would be most appropriate for this scenario.  Reasons:   Most plotting functions in R (especially ggplot2) work better with long-format data for this type of visualization  In long format, each row would represent a single observation: one company's stock price on a specific date  The data would have columns for: date, company name, and stock price  This structure allows for easily grouping by company and creating lines for each company over time  It also simplifies adding visual attributes like different colors for each company   In contrast, wide format (with each company as a separate column) would make the plotting more difficult and would require reshaping before visualization.      Running a correlation analysis between different test scores (math, science, english) for a group of students    Wide format would be most appropriate for this scenario.  Reasons:   Correlation analysis typically compares variables (columns) to each other  In wide format, each row would represent one student, with separate columns for math score, science score, and English score  Functions like cor() in R expect data in wide format, where each variable to be correlated is a separate column  This structure allows for directly calculating the correlation matrix between all test scores  Wide format is also more convenient for calculating descriptive statistics for each subject   Using long format (with a single \"score\" column and a \"subject\" column) would require reshaping the data before performing the correlation analysis.    "
},
{
  "id": "activity-dataset-transformation",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#activity-dataset-transformation",
  "type": "Activity",
  "number": "14",
  "title": "Dataset Transformation for Mid-Term Project.",
  "body": " Dataset Transformation for Mid-Term Project   In this activity, you will work with partners to prepare a dataset for your mid-term project. The goal is to apply the data transformation techniques you've learned to clean, reshape, and enhance a dataset for analysis.  Instructions:    Form groups of 2-3 students    Choose one of the following datasets:    The built-in airquality dataset (daily air quality measurements in New York, 1973)    The built-in mtcars dataset (fuel consumption and design characteristics for car models)    The built-in ChickWeight dataset (weight versus age of chicks on different diets)      Perform the following transformations on your chosen dataset:    Clean any missing or problematic values    Create at least three new derived variables based on the existing data    Reshape the data as needed for your planned analysis    Create appropriate categorical variables using binning    Standardize or normalize numerical variables if appropriate      Document your transformations and explain the reasoning behind each step    Prepare a brief presentation of your transformed dataset and the insights it enables     "
},
{
  "id": "ex-transformation-explanation",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#ex-transformation-explanation",
  "type": "Checkpoint",
  "number": "76",
  "title": "Transformation Explanation.",
  "body": " Transformation Explanation   For each of the following data transformations in the example above, explain why it might be useful for analysis:     Creating the Heat Index variable    Creating the Heat Index variable is useful for analysis because:   It combines temperature and wind data to create a measure of perceived temperature or thermal comfort  This derived variable can be more relevant for understanding how weather conditions actually feel to humans than raw temperature alone  It might correlate better with certain health outcomes or behavioral patterns than either temperature or wind speed individually  It can be used to study how perceived temperature (rather than actual temperature) affects air quality metrics like ozone levels  Creating composite indices like this often provides more intuitive and interpretable measures for analysis and visualization   While the implementation in the example is simplified, it demonstrates how multiple variables can be combined to create more meaningful metrics for specific analytical purposes.      Categorizing Ozone levels into \"Good\", \"Moderate\", \"Unhealthy for Sensitive Groups\", and \"Unhealthy\"    Categorizing Ozone levels is valuable for analysis because:   It transforms a continuous numerical variable into meaningful categories that align with established air quality standards and health guidelines  These categories have direct practical implications for public health recommendations and actions  It simplifies communication of results to non-technical audiences, as descriptive categories like \"Good\" or \"Unhealthy\" are more intuitive than raw numerical values  It facilitates certain types of analyses, such as contingency tables, chi-square tests, or categorical visualizations  It can reveal non-linear relationships that might be obscured when using the continuous variable (e.g., certain effects might only appear at \"Unhealthy\" levels)  It allows for comparisons with official air quality reporting formats, which typically use similar category systems   This transformation bridges the gap between raw scientific measurements and meaningful health-related interpretations, making the data more useful for both analysis and decision-making.    "
},
{
  "id": "sec-working-with-web-data",
  "level": "1",
  "url": "sec-working-with-web-data.html",
  "type": "Section",
  "number": "",
  "title": "Working with Web Data",
  "body": " Working with Web Data    Introduction to APIs  APIs (Application Programming Interfaces) allow different software applications to communicate with each other. In data science, APIs are often used to access data from web services, databases, or other applications.  Key concepts about APIs:    API : A set of rules and protocols for building and interacting with software applications    RESTful API : A common architectural style for web APIs that uses HTTP methods    Endpoints : Specific URLs where API requests are sent    HTTP Methods : GET, POST, PUT, DELETE, etc., used to perform different operations    Parameters : Values sent to the API to customize requests    Authentication : Methods to verify user identity (API keys, OAuth, etc.)    Rate Limiting : Restrictions on how many requests can be made in a given time period    Response Formats : Common formats include JSON, XML, CSV, etc.    In R, there are several packages for working with APIs, including httr for making HTTP requests and jsonlite for parsing JSON data.   # Basic API concepts and demonstration # Note: Some code is commented out since we can't install packages or make actual API calls in Web-R # Example of how to make a basic API request using httr (not run) # install.packages(\"httr\") # install.packages(\"jsonlite\") # library(httr) # library(jsonlite) # Simple GET request (not run) # response <- GET(\"https:\/\/api.example.com\/data\") # Check status code # status_code(response) # View headers # headers(response) # Extract content # content <- content(response, \"text\") # Parse JSON # data <- fromJSON(content) # Example of API request with parameters # params <- list( # param1 = \"value1\", # param2 = \"value2\" # ) # response_with_params <- GET(\"https:\/\/api.example.com\/data\", query = params) # Example with authentication (API key) # api_key <- \"your_api_key_here\" # auth_response <- GET( # \"https:\/\/api.example.com\/protected\", # add_headers(Authorization = paste(\"Bearer\", api_key)) # ) # Instead of making real API calls, let's simulate the basic structure # This helps understand the concepts even without internet access # Simulate a JSON response simulated_json <- '{ \"data\": [ {\"id\": 1, \"name\": \"Item 1\", \"value\": 42}, {\"id\": 2, \"name\": \"Item 2\", \"value\": 73}, {\"id\": 3, \"name\": \"Item 3\", \"value\": 29} ], \"metadata\": { \"count\": 3, \"page\": 1, \"total_pages\": 5 } }' # Parse the simulated JSON # In a real scenario, this would come from an API response parsed_data <- jsonlite::fromJSON(simulated_json) # Explore the structure str(parsed_data) # Access specific data parsed_data$data parsed_data$metadata$count # Convert the data part to a data frame # This is often done with API responses data_df <- as.data.frame(parsed_data$data) data_df # Calculate summary statistics summary(data_df$value) # Examples of common data formats in APIs # JSON (JavaScript Object Notation) json_example <- '{ \"person\": { \"name\": \"John Doe\", \"age\": 30, \"address\": { \"street\": \"123 Main St\", \"city\": \"Anytown\", \"zip\": \"12345\" }, \"phoneNumbers\": [ {\"type\": \"home\", \"number\": \"555-1234\"}, {\"type\": \"work\", \"number\": \"555-5678\"} ] } }' parsed_json <- jsonlite::fromJSON(json_example) str(parsed_json) # XML (eXtensible Markup Language) # In a real scenario, you would use the xml2 package xml_example &lt;- '<?xml version=\"1.0\" encoding=\"UTF-8\"?> <person> <name>John Doe<\/name> <age>30<\/age> <address> <street>123 Main St<\/street> <city>Anytown<\/city> <zip>12345<\/zip> <\/address> <phoneNumbers> <phone type=\"home\">555-1234<\/phone> <phone type=\"work\">555-5678<\/phone> <\/phoneNumbers> <\/person>' # CSV (Comma-Separated Values) csv_example <- 'id,name,value 1,Item 1,42 2,Item 2,73 3,Item 3,29' # Parse CSV string parsed_csv <- read.csv(text = csv_example) parsed_csv   Examples of popular APIs for data science:    Weather APIs : OpenWeatherMap, Weather Underground, National Weather Service    Financial APIs : Alpha Vantage, Yahoo Finance, FRED (Federal Reserve Economic Data)    Social Media APIs : Twitter API, Reddit API, YouTube Data API    Government Data APIs : Data.gov, Census API, WHO Data API    Mapping APIs : Google Maps, OpenStreetMap, Mapbox     API Concepts   Match each API term with its correct description:     REST API  An architectural style that uses HTTP requests to GET, PUT, POST, and DELETE data    Endpoint  A specific URL where API requests are sent    API Key  A unique identifier used to authenticate requests to the API    JSON  A common data format used for API responses, organized as key-value pairs    Rate Limiting  Restrictions on how many API requests can be made in a given time period    HTTP GET  A request method used to retrieve data from a server without modifying any resources        Using R to access web data  R provides several packages and functions for accessing web data, whether through APIs or direct web scraping. Here, we'll explore how to use R to access web data, focusing on APIs.  Key packages for working with web data in R:    httr : For making HTTP requests    jsonlite : For parsing JSON data    xml2 : For parsing XML data    rvest : For web scraping HTML pages    curl : For making low-level HTTP requests     # Working with web data in R # Note: Most code is commented out as we can't make actual web requests in Web-R # Basic structure of API requests in R # GET request (not run) # library(httr) # response <- GET(\"https:\/\/api.example.com\/data\") # POST request with body data (not run) # post_data <- list(name = \"value\", otherParam = \"otherValue\") # post_response <- POST(\"https:\/\/api.example.com\/create\", # body = post_data, # encode = \"json\") # Working with query parameters (not run) # params <- list(param1 = \"value1\", param2 = \"value2\") # param_response <- GET(\"https:\/\/api.example.com\/search\", # query = params) # Authentication methods # Basic authentication (not run) # basic_auth_response <- GET(\"https:\/\/api.example.com\/secure\", # authenticate(\"username\", \"password\")) # API key in header (not run) # key_response <- GET(\"https:\/\/api.example.com\/data\", # add_headers(Authorization = \"Bearer YOUR_API_KEY\")) # API key as a parameter (not run) # key_param_response <- GET(\"https:\/\/api.example.com\/data\", # query = list(api_key = \"YOUR_API_KEY\")) # Handling API responses # Check status code (not run) # if (status_code(response) == 200) { # # Process successful response # } else { # # Handle error # print(paste(\"Error:\", status_code(response))) # } # Parse JSON response (not run) # library(jsonlite) # content <- content(response, \"text\") # data <- fromJSON(content) # Parse XML response (not run) # library(xml2) # xml_content <- content(response, \"text\") # xml_data <- read_xml(xml_content) # xml_values <- xml_find_all(xml_data, \"\/\/path\/to\/element\") # Example of error handling (not run) # tryCatch({ # response <- GET(\"https:\/\/api.example.com\/data\") # if (status_code(response) != 200) { # stop(paste(\"API request failed with status code:\", status_code(response))) # } # content <- content(response, \"text\") # data <- fromJSON(content) # # Process data... # }, error = function(e) { # message(\"Error: \", e$message) # }, warning = function(w) { # message(\"Warning: \", w$message) # }) # Working with paginated responses (not run) # all_data <- list() # page <- 1 # more_pages <- TRUE # # while(more_pages) { # response <- GET(\"https:\/\/api.example.com\/data\", # query = list(page = page, per_page = 100)) # # if (status_code(response) != 200) { # stop(\"API request failed\") # } # # content <- content(response, \"text\") # data <- fromJSON(content) # # all_data <- c(all_data, list(data$results)) # # # Check if there are more pages # if (data$metadata$page < data$metadata$total_pages) { # page <- page + 1 # } else { # more_pages <- FALSE # } # } # # # Combine all pages of data # final_data <- do.call(rbind, all_data) # Web scraping example (not run) # library(rvest) # # url <- \"https:\/\/example.com\/table_page\" # page <- read_html(url) # # # Extract tables # tables <- html_table(page) # first_table <- tables[[1]] # Get the first table on the page # # # Extract specific elements # titles <- page %>% # html_nodes(\"h2.title\") %>% # html_text() # # links <- page %>% # html_nodes(\"a\") %>% # html_attr(\"href\") # Instead of making real web requests, let's create a simulated example # to demonstrate the workflow of processing API data # Simulate multiple pages of API data simulate_api_page <- function(page, items_per_page = 5) { # Create simulated data start_id <- (page - 1) * items_per_page + 1 end_id <- page * items_per_page # Generate simulated items items <- data.frame( id = start_id:end_id, name = paste(\"Item\", start_id:end_id), value = sample(1:100, items_per_page, replace = TRUE) ) # Return the simulated page data list( results = items, metadata = list( page = page, per_page = items_per_page, total_items = 25, total_pages = ceiling(25 \/ items_per_page) ) ) } # Simulate the API workflow all_data <- list() page <- 1 more_pages <- TRUE while(more_pages) { # Simulate an API call data <- simulate_api_page(page) # Store the results all_data <- c(all_data, list(data$results)) # Check if there are more pages if (data$metadata$page < data$metadata$total_pages) { page <- page + 1 } else { more_pages <- FALSE } # Print progress cat(\"Retrieved page\", data$metadata$page, \"of\", data$metadata$total_pages, \"\\n\") } # Combine all pages of data final_data <- do.call(rbind, all_data) # View the combined data final_data # Analyze the data summary(final_data$value) # Create a simple visualization hist(final_data$value, main = \"Distribution of Item Values\", xlab = \"Value\", col = \"lightblue\", breaks = 10)    API Workflow   Put the following steps in the correct order for retrieving and processing data from an API:    Make an HTTP request to the API endpoint  Convert the JSON response to a data frame  Check the HTTP status code to ensure the request was successful  Perform data analysis and visualization  Extract the response content as text  Parse the text into a structured format (e.g., JSON)     Make an HTTP request to the API endpoint  Check the HTTP status code to ensure the request was successful  Extract the response content as text  Parse the text into a structured format (e.g., JSON)  Convert the JSON response to a data frame  Perform data analysis and visualization        Demonstration: Extracting data from a simple API  In this section, we'll walk through a detailed example of how to extract and analyze data from a public API. Since we can't make actual API calls in Web-R, we'll simulate the process using realistic data structures and workflows.  We'll use a simulated weather API as our example, as weather data is commonly used in data science projects and is readily available through many public APIs.   # Simulated Weather API Example # Function to simulate weather API response for a city simulate_weather_api <- function(city, days = 7) { # Simulate different base temperatures and conditions based on city city_info <- list( \"New York\" = list(base_temp = 20, conditions = c(\"Clear\", \"Partly Cloudy\", \"Cloudy\", \"Rain\", \"Thunderstorm\")), \"Los Angeles\" = list(base_temp = 25, conditions = c(\"Clear\", \"Partly Cloudy\", \"Sunny\", \"Fog\")), \"Chicago\" = list(base_temp = 18, conditions = c(\"Clear\", \"Partly Cloudy\", \"Cloudy\", \"Rain\", \"Snow\")), \"Miami\" = list(base_temp = 28, conditions = c(\"Clear\", \"Partly Cloudy\", \"Sunny\", \"Rain\", \"Thunderstorm\")), \"Denver\" = list(base_temp = 15, conditions = c(\"Clear\", \"Partly Cloudy\", \"Sunny\", \"Rain\", \"Snow\")) ) # Default to New York if city not found if (!city %in% names(city_info)) { city <- \"New York\" } # Get city base info base_temp <- city_info[[city]]$base_temp possible_conditions <- city_info[[city]]$conditions # Create dates current_date <- Sys.Date() forecast_dates <- current_date + 0:(days-1) # Generate random weather data forecast <- data.frame( date = as.character(forecast_dates), day_of_week = weekdays(forecast_dates), temp_high = base_temp + sample(-3:7, days, replace = TRUE), temp_low = base_temp - sample(5:10, days, replace = TRUE), humidity = sample(40:90, days, replace = TRUE), wind_speed = round(runif(days, 0, 15), 1), precipitation = round(rexp(days, 1\/2) * 10, 1), conditions = sample(possible_conditions, days, replace = TRUE), stringsAsFactors = FALSE ) # Create an API-like response structure response <- list( location = list( city = city, country = \"United States\", latitude = runif(1, 25, 49), longitude = runif(1, -125, -70) ), forecast = forecast, metadata = list( generated_at = Sys.time(), days = days, units = list( temperature = \"Celsius\", wind_speed = \"km\/h\", precipitation = \"mm\" ) ) ) return(response) } # Simulate API calls for multiple cities cities <- c(\"New York\", \"Los Angeles\", \"Chicago\", \"Miami\", \"Denver\") weather_data <- list() for (city in cities) { # Simulate API call cat(\"Fetching weather data for\", city, \"\\n\") response <- simulate_weather_api(city) weather_data[[city]] <- response } # Function to extract forecast data from API responses extract_forecast <- function(weather_data) { result <- data.frame() for (city_name in names(weather_data)) { city_data <- weather_data[[city_name]] forecast <- city_data$forecast # Add city name to forecast data forecast$city <- city_name # Combine with previous results result <- rbind(result, forecast) } return(result) } # Extract and combine forecast data from all cities all_forecasts <- extract_forecast(weather_data) # Convert date strings to Date objects for proper sorting all_forecasts$date <- as.Date(all_forecasts$date) # View the combined dataset head(all_forecasts) # Basic data analysis # Summary statistics for temperature by city city_temp_summary <- aggregate( cbind(temp_high, temp_low) ~ city, data = all_forecasts, FUN = function(x) c(mean = mean(x), min = min(x), max = max(x)) ) city_temp_summary # Average precipitation by city city_precip <- aggregate( precipitation ~ city, data = all_forecasts, FUN = mean ) city_precip # Find the city with the highest average temperature city_with_highest_temp <- city_temp_summary[which.max(city_temp_summary$temp_high[, \"mean\"]), \"city\"] cat(\"City with highest average temperature:\", city_with_highest_temp, \"\\n\") # Find days with extreme weather conditions extreme_days <- all_forecasts[all_forecasts$precipitation > 15 | all_forecasts$wind_speed > 10, ] if (nrow(extreme_days) > 0) { cat(\"Days with extreme weather conditions:\\n\") print(extreme_days[, c(\"city\", \"date\", \"conditions\", \"precipitation\", \"wind_speed\")]) } else { cat(\"No days with extreme weather conditions found\\n\") } # Visualize the data # Temperature comparison by city boxplot(temp_high ~ city, data = all_forecasts, main = \"High Temperature Comparison by City\", xlab = \"City\", ylab = \"Temperature (°C)\", col = \"lightblue\") # Visualization of temperature range by city plot(1:nrow(city_temp_summary), city_temp_summary$temp_high[, \"mean\"], type = \"n\", # Empty plot xlim = c(0.5, nrow(city_temp_summary) + 0.5), ylim = c(min(city_temp_summary$temp_low[, \"min\"]) - 2, max(city_temp_summary$temp_high[, \"max\"]) + 2), xlab = \"City\", ylab = \"Temperature (°C)\", main = \"Temperature Range by City\", xaxt = \"n\") # No x-axis labels initially # Add x-axis labels axis(1, at = 1:nrow(city_temp_summary), labels = city_temp_summary$city) # Add temperature ranges for (i in 1:nrow(city_temp_summary)) { # Draw line for temperature range lines(c(i, i), c(city_temp_summary$temp_low[i, \"min\"], city_temp_summary$temp_high[i, \"max\"]), lwd = 2, col = \"darkgray\") # Add points for min, mean, and max temperatures points(i, city_temp_summary$temp_low[i, \"min\"], pch = 25, bg = \"blue\", cex = 1.2) points(i, city_temp_summary$temp_low[i, \"mean\"], pch = 22, bg = \"lightblue\", cex = 1.2) points(i, city_temp_summary$temp_high[i, \"mean\"], pch = 22, bg = \"pink\", cex = 1.2) points(i, city_temp_summary$temp_high[i, \"max\"], pch = 24, bg = \"red\", cex = 1.2) } # Add legend legend(\"topright\", legend = c(\"Min\", \"Mean Low\", \"Mean High\", \"Max\"), pch = c(25, 22, 22, 24), pt.bg = c(\"blue\", \"lightblue\", \"pink\", \"red\"), title = \"Temperature (°C)\")   In a real-world scenario, you would need to consider several additional factors when working with APIs:    API Documentation : Always consult the API documentation to understand available endpoints, parameters, and response formats    Authentication : Most production APIs require authentication through API keys or OAuth    Rate Limiting : Be mindful of rate limits and implement appropriate delays or retry mechanisms    Error Handling : Implement robust error handling to deal with network issues, API errors, and unexpected responses    Data Validation : Validate the data received before processing it    Caching : Consider caching responses to reduce API calls and improve performance     API Usage   Consider a scenario where you need to analyze weather data for 100 cities over a period of one year. What challenges might you face when using a weather API for this purpose, and how would you address them?    When analyzing weather data for 100 cities over one year using a weather API, several challenges would arise:  1. Rate Limiting and API Quotas:   Challenge : Most weather APIs impose rate limits (e.g., 1000 calls\/day or 60 calls\/minute)  Solution : Implement throttling to stay within limits (pause between requests), batch requests where possible, and spread data collection over multiple days   2. Data Volume Management:   Challenge : 100 cities × 365 days = 36,500 requests, potentially generating gigabytes of data  Solution : Create an efficient storage structure (database or optimized files), implement incremental processing, and consider data compression techniques   3. Cost Considerations:   Challenge : Many weather APIs charge for high-volume usage  Solution : Compare pricing plans across providers, consider historical bulk data purchases instead of individual requests, and optimize query structure to minimize calls   4. Handling Missing or Erroneous Data:   Challenge : API outages, missing weather stations, or corrupted records  Solution : Implement robust error handling, data validation checks, imputation strategies for missing values, and possibly use multiple data sources for validation   5. API Changes or Deprecation:   Challenge : APIs may change structure or endpoints during a year-long project  Solution : Build an abstraction layer between API and analysis code, monitor for API announcements, and design for easy adaptation   6. Consistency in Data Collection:   Challenge : Ensuring consistent timing and parameters across all requests  Solution : Develop automated scripts with logging, implement data quality checks, and standardize request parameters   7. Time Zone Management:   Challenge : Cities across different time zones complicating temporal analysis  Solution : Store timestamps in UTC with time zone information, and implement time zone conversion functions for analysis   An effective implementation would involve creating a robust data pipeline with error handling, rate limiting, logging, and storage optimization, potentially running on a scheduled basis to collect data incrementally.       Web data project work   Web Data Analysis Project   In this activity, you will work with your partner to design and plan a data analysis project that utilizes web data. Since we can't make actual API calls in Web-R, the implementation will be simulated, but the planning process will follow real-world practices.  Instructions:    Work with a partner to select one of the following project scenarios:    Analyzing weather patterns and their relationship with energy consumption    Tracking stock prices and financial news sentiment for selected companies    Analyzing social media trends around specific topics or events    Comparing economic indicators across different regions or countries    Analyzing public health data in relation to environmental factors      For your chosen scenario, design a data collection and analysis plan that includes:    The specific research question(s) you want to answer    The APIs or web data sources you would use    The data collection strategy (frequency, scope, parameters)    The data storage approach    The data transformations and analyses you would perform    The expected insights and how they would be presented      Create a rough pseudocode or flowchart outlining the steps in your data pipeline    Identify potential challenges and how you would address them    Design a sample visualization that you would create with the collected data       # Example of a simulated data analysis project: Weather and Energy Consumption # This is a simplified simulation of what a real project might involve # 1. Define project parameters cities <- c(\"New York\", \"Chicago\", \"Los Angeles\", \"Houston\", \"Phoenix\") start_date <- as.Date(\"2024-01-01\") end_date <- as.Date(\"2024-03-31\") date_range <- seq(start_date, end_date, by = \"day\") # 2. Simulate data collection function (in reality, this would call an API) simulate_weather_data <- function(city, date) { # Base temperature differs by city base_temps <- list( \"New York\" = list(winter = 0, spring = 15, summer = 25, fall = 10), \"Chicago\" = list(winter = -5, spring = 10, summer = 23, fall = 8), \"Los Angeles\" = list(winter = 15, spring = 20, summer = 25, fall = 22), \"Houston\" = list(winter = 10, spring = 20, summer = 30, fall = 18), \"Phoenix\" = list(winter = 15, spring = 25, summer = 35, fall = 20) ) # Determine season month <- as.numeric(format(date, \"%m\")) season <- case_when( month %in% c(12, 1, 2) ~ \"winter\", month %in% c(3, 4, 5) ~ \"spring\", month %in% c(6, 7, 8) ~ \"summer\", month %in% c(9, 10, 11) ~ \"fall\" ) # Generate weather data base_temp <- base_temps[[city]][[season]] daily_variation <- rnorm(1, mean = 0, sd = 5) # Add some randomness based on the day of year to simulate seasonal patterns day_of_year <- as.numeric(format(date, \"%j\")) seasonal_effect <- sin(2 * pi * day_of_year \/ 365) * 10 # Temperature calculation temperature <- base_temp + daily_variation + seasonal_effect # Precipitation calculation - more likely in certain seasons precip_prob <- case_when( season == \"winter\" ~ 0.3, season == \"spring\" ~ 0.4, season == \"summer\" ~ 0.2, season == \"fall\" ~ 0.3 ) precipitation <- if (runif(1) < precip_prob) { rexp(1, 1) * 10 # Generate precipitation amount } else { 0 # No precipitation } # Return simulated weather data data.frame( city = city, date = date, temperature = round(temperature, 1), precipitation = round(precipitation, 1), humidity = sample(30:90, 1), stringsAsFactors = FALSE ) } # Simulate energy consumption based on weather simulate_energy_consumption <- function(weather_data) { # Base energy usage varies by city (population, infrastructure, etc.) base_energy <- list( \"New York\" = 1000, \"Chicago\" = 800, \"Los Angeles\" = 900, \"Houston\" = 850, \"Phoenix\" = 700 ) # Calculate energy consumption # Formula includes: # - Base usage for the city # - Temperature effect (higher in extreme temperatures due to heating\/cooling) # - Day of week effect (weekdays have higher consumption) # - Random variation energy_data <- weather_data %>% mutate( weekday = as.numeric(format(date, \"%u\")), is_weekend = weekday >= 6, # Temperature effect: U-shaped curve centered at 20°C (comfortable temperature) temp_effect = 0.5 * (temperature - 20)^2, # Base energy for the city base_usage = base_energy[[city]], # Weekend reduction factor weekend_factor = if_else(is_weekend, 0.8, 1.0), # Calculate energy usage energy_consumption = base_usage * weekend_factor * (1 + temp_effect\/100) * (1 + rnorm(1, mean = 0, sd = 0.05)) ) # Return the calculated energy consumption energy_data$energy_consumption <- round(energy_data$energy_consumption, 0) return(energy_data) } # 3. Collect data for all cities and dates cat(\"Simulating data collection...\\n\") all_weather_data <- data.frame() # This would be API calls in a real scenario for (city in cities) { cat(\"Collecting data for\", city, \"\\n\") for (date in date_range) { # Get weather data weather <- simulate_weather_data(city, date) # Get energy consumption data energy <- simulate_energy_consumption(weather) # Combine all_weather_data <- rbind(all_weather_data, energy) } } # 4. Data Analysis # Summary by city city_summary <- aggregate( cbind(temperature, precipitation, energy_consumption) ~ city, data = all_weather_data, FUN = function(x) c(mean = mean(x), min = min(x), max = max(x)) ) cat(\"\\nSummary by City:\\n\") print(city_summary) # Correlation between temperature and energy consumption cat(\"\\nCorrelation between temperature and energy consumption:\\n\") correlation_by_city <- by(all_weather_data, all_weather_data$city, function(city_data) { cor(city_data$temperature, city_data$energy_consumption) }) print(correlation_by_city) # Overall trends over time monthly_avg <- aggregate( cbind(temperature, energy_consumption) ~ city + format(date, \"%Y-%m\"), data = all_weather_data, FUN = mean ) names(monthly_avg)[2] <- \"month\" cat(\"\\nMonthly averages:\\n\") print(head(monthly_avg)) # 5. Visualization # Plot temperature vs. energy consumption for all cities plot(all_weather_data$temperature, all_weather_data$energy_consumption, main = \"Temperature vs. Energy Consumption\", xlab = \"Temperature (°C)\", ylab = \"Energy Consumption (units)\", pch = 19, col = factor(all_weather_data$city)) # Add regression line abline(lm(energy_consumption ~ temperature, data = all_weather_data), col = \"red\", lwd = 2) # Add legend legend(\"topleft\", legend = unique(all_weather_data$city), col = 1:length(cities), pch = 19) # Create a boxplot of energy consumption by city boxplot(energy_consumption ~ city, data = all_weather_data, main = \"Energy Consumption by City\", xlab = \"City\", ylab = \"Energy Consumption (units)\", col = rainbow(length(cities))) # Create time series plot for a specific city ny_data <- all_weather_data[all_weather_data$city == \"New York\", ] ny_data <- ny_data[order(ny_data$date), ] # Smooth the data for better visualization smooth_temp <- zoo::rollmean(ny_data$temperature, 7, fill = NA) smooth_energy <- zoo::rollmean(ny_data$energy_consumption, 7, fill = NA) # Create a time series plot with two y-axes par(mar = c(5, 4, 4, 4) + 0.1) plot(ny_data$date, ny_data$temperature, type = \"l\", col = \"blue\", lwd = 2, xlab = \"Date\", ylab = \"Temperature (°C)\", main = \"Temperature and Energy Consumption in New York\") # Add smoothed temperature line lines(ny_data$date, smooth_temp, col = \"darkblue\", lwd = 3) # Add right y-axis for energy consumption par(new = TRUE) plot(ny_data$date, ny_data$energy_consumption, type = \"l\", col = \"red\", lwd = 2, xlab = \"\", ylab = \"\", yaxt = \"n\") # Add smoothed energy consumption line lines(ny_data$date, smooth_energy, col = \"darkred\", lwd = 3) # Add right y-axis axis(4) mtext(\"Energy Consumption (units)\", side = 4, line = 3) # Add legend legend(\"topleft\", legend = c(\"Temperature\", \"Temperature (7-day avg)\", \"Energy\", \"Energy (7-day avg)\"), col = c(\"blue\", \"darkblue\", \"red\", \"darkred\"), lwd = c(2, 3, 2, 3))    Project Planning   For the \"Tracking stock prices and financial news sentiment\" project scenario, answer the following questions:     What specific APIs or web data sources would you need to access, and what type of data would each provide?    For tracking stock prices and financial news sentiment, we would need the following APIs and data sources:    Financial Market Data APIs:   Alpha Vantage or Yahoo Finance API - Provides historical and real-time stock price data, including opening\/closing prices, high\/low prices, trading volume, and technical indicators  FRED API (Federal Reserve Economic Data) - Offers macroeconomic indicators that might influence stock performance, such as interest rates, GDP growth, and inflation metrics  IEX Cloud - Provides company fundamentals, financial metrics, and real-time market data     News and Sentiment APIs:   News API - Delivers financial news articles from multiple sources, including publication dates, headlines, and content  AYLIEN News API or Google News API - Provides targeted news coverage about specific companies or sectors  Sentiment Analysis APIs (TextBlob, IBM Watson, Microsoft Azure) - Offers pre-built sentiment scoring of text content     Social Media APIs:   Twitter API - Provides access to tweets mentioning target companies or financial keywords  Reddit API - Allows access to financial discussion forums like r\/wallstreetbets, r\/investing, etc.     SEC Filing APIs:   SEC EDGAR API - Provides access to company filings and financial disclosures     These data sources would collectively provide a comprehensive view of both market performance metrics and the sentiment surrounding target companies, enabling analysis of correlations between news sentiment and stock price movements.      What data transformations would you need to perform to prepare the collected data for analysis, and what challenges might you encounter?    Several data transformations would be necessary for this project, along with potential challenges:  Data Transformations:    Time Series Alignment   Synchronize news timestamps with stock market data (accounting for market hours vs. 24\/7 news)  Create time-lagged variables to assess delayed impact of news on stock prices  Resampling data to consistent intervals (hourly, daily, etc.)     Text Processing and Sentiment Analysis   Convert raw news text to numerical sentiment scores  Perform named entity recognition to identify mentioned companies  Extract relevant keywords and categorize news by topic  Aggregate multiple news items into composite sentiment indicators     Financial Data Transformations   Calculate derived metrics (returns, volatility, moving averages)  Normalize price data across different stocks  Create categorical variables for market conditions (bull\/bear)  Adjust for stock splits, dividends, and other corporate actions     Feature Engineering   Create composite indicators combining sentiment and price data  Develop sector-specific variables to account for industry trends  Engineer seasonality features (day-of-week effects, month effects)     Potential Challenges:    Temporal Relationship Complexity   Determining the optimal time window for news impact on stock prices  Distinguishing causation from correlation in news-price relationships  Handling news that breaks outside market hours     Data Quality Issues   Dealing with inaccurate or misleading news reports  Managing duplicate news items across different sources  Handling missing data during market closures or API outages     Sentiment Analysis Limitations   Financial text often contains nuanced language that basic sentiment models struggle with  Sarcasm, figures of speech, and industry jargon may confuse automated sentiment analysis  News headlines may have different sentiment than full articles     Scale and Performance Issues   Processing large volumes of news text efficiently  Managing high-frequency financial data  Optimizing storage and retrieval for time-series analysis     Addressing these challenges would require an iterative approach to data transformation, careful validation of sentiment analysis results, and potentially the development of finance-specific text analysis models.      "
},
{
  "id": "subsec-intro-to-apis-4-1-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "API "
},
{
  "id": "subsec-intro-to-apis-4-2-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "RESTful API "
},
{
  "id": "subsec-intro-to-apis-4-3-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Endpoints "
},
{
  "id": "subsec-intro-to-apis-4-4-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "HTTP Methods "
},
{
  "id": "subsec-intro-to-apis-4-5-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parameters "
},
{
  "id": "subsec-intro-to-apis-4-6-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-4-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Authentication "
},
{
  "id": "subsec-intro-to-apis-4-7-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-4-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Rate Limiting "
},
{
  "id": "subsec-intro-to-apis-4-8-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-4-8-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Response Formats "
},
{
  "id": "subsec-intro-to-apis-8-1-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-8-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Weather APIs "
},
{
  "id": "subsec-intro-to-apis-8-2-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-8-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Financial APIs "
},
{
  "id": "subsec-intro-to-apis-8-3-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-8-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Social Media APIs "
},
{
  "id": "subsec-intro-to-apis-8-4-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-8-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Government Data APIs "
},
{
  "id": "subsec-intro-to-apis-8-5-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-intro-to-apis-8-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mapping APIs "
},
{
  "id": "ex-api-concepts",
  "level": "2",
  "url": "sec-working-with-web-data.html#ex-api-concepts",
  "type": "Checkpoint",
  "number": "77",
  "title": "API Concepts.",
  "body": " API Concepts   Match each API term with its correct description:     REST API  An architectural style that uses HTTP requests to GET, PUT, POST, and DELETE data    Endpoint  A specific URL where API requests are sent    API Key  A unique identifier used to authenticate requests to the API    JSON  A common data format used for API responses, organized as key-value pairs    Rate Limiting  Restrictions on how many API requests can be made in a given time period    HTTP GET  A request method used to retrieve data from a server without modifying any resources    "
},
{
  "id": "subsec-using-r-with-apis-4-1-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-using-r-with-apis-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "httr "
},
{
  "id": "subsec-using-r-with-apis-4-2-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-using-r-with-apis-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "jsonlite "
},
{
  "id": "subsec-using-r-with-apis-4-3-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-using-r-with-apis-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "xml2 "
},
{
  "id": "subsec-using-r-with-apis-4-4-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-using-r-with-apis-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rvest "
},
{
  "id": "subsec-using-r-with-apis-4-5-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-using-r-with-apis-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curl "
},
{
  "id": "ex-api-workflow",
  "level": "2",
  "url": "sec-working-with-web-data.html#ex-api-workflow",
  "type": "Checkpoint",
  "number": "78",
  "title": "API Workflow.",
  "body": " API Workflow   Put the following steps in the correct order for retrieving and processing data from an API:    Make an HTTP request to the API endpoint  Convert the JSON response to a data frame  Check the HTTP status code to ensure the request was successful  Perform data analysis and visualization  Extract the response content as text  Parse the text into a structured format (e.g., JSON)     Make an HTTP request to the API endpoint  Check the HTTP status code to ensure the request was successful  Extract the response content as text  Parse the text into a structured format (e.g., JSON)  Convert the JSON response to a data frame  Perform data analysis and visualization    "
},
{
  "id": "subsec-api-demonstration-6-1-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-api-demonstration-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "API Documentation "
},
{
  "id": "subsec-api-demonstration-6-2-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-api-demonstration-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Authentication "
},
{
  "id": "subsec-api-demonstration-6-3-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-api-demonstration-6-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Rate Limiting "
},
{
  "id": "subsec-api-demonstration-6-4-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-api-demonstration-6-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Error Handling "
},
{
  "id": "subsec-api-demonstration-6-5-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-api-demonstration-6-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data Validation "
},
{
  "id": "subsec-api-demonstration-6-6-1",
  "level": "2",
  "url": "sec-working-with-web-data.html#subsec-api-demonstration-6-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Caching "
},
{
  "id": "ex-api-usage",
  "level": "2",
  "url": "sec-working-with-web-data.html#ex-api-usage",
  "type": "Checkpoint",
  "number": "79",
  "title": "API Usage.",
  "body": " API Usage   Consider a scenario where you need to analyze weather data for 100 cities over a period of one year. What challenges might you face when using a weather API for this purpose, and how would you address them?    When analyzing weather data for 100 cities over one year using a weather API, several challenges would arise:  1. Rate Limiting and API Quotas:   Challenge : Most weather APIs impose rate limits (e.g., 1000 calls\/day or 60 calls\/minute)  Solution : Implement throttling to stay within limits (pause between requests), batch requests where possible, and spread data collection over multiple days   2. Data Volume Management:   Challenge : 100 cities × 365 days = 36,500 requests, potentially generating gigabytes of data  Solution : Create an efficient storage structure (database or optimized files), implement incremental processing, and consider data compression techniques   3. Cost Considerations:   Challenge : Many weather APIs charge for high-volume usage  Solution : Compare pricing plans across providers, consider historical bulk data purchases instead of individual requests, and optimize query structure to minimize calls   4. Handling Missing or Erroneous Data:   Challenge : API outages, missing weather stations, or corrupted records  Solution : Implement robust error handling, data validation checks, imputation strategies for missing values, and possibly use multiple data sources for validation   5. API Changes or Deprecation:   Challenge : APIs may change structure or endpoints during a year-long project  Solution : Build an abstraction layer between API and analysis code, monitor for API announcements, and design for easy adaptation   6. Consistency in Data Collection:   Challenge : Ensuring consistent timing and parameters across all requests  Solution : Develop automated scripts with logging, implement data quality checks, and standardize request parameters   7. Time Zone Management:   Challenge : Cities across different time zones complicating temporal analysis  Solution : Store timestamps in UTC with time zone information, and implement time zone conversion functions for analysis   An effective implementation would involve creating a robust data pipeline with error handling, rate limiting, logging, and storage optimization, potentially running on a scheduled basis to collect data incrementally.   "
},
{
  "id": "activity-web-data-project",
  "level": "2",
  "url": "sec-working-with-web-data.html#activity-web-data-project",
  "type": "Activity",
  "number": "15",
  "title": "Web Data Analysis Project.",
  "body": " Web Data Analysis Project   In this activity, you will work with your partner to design and plan a data analysis project that utilizes web data. Since we can't make actual API calls in Web-R, the implementation will be simulated, but the planning process will follow real-world practices.  Instructions:    Work with a partner to select one of the following project scenarios:    Analyzing weather patterns and their relationship with energy consumption    Tracking stock prices and financial news sentiment for selected companies    Analyzing social media trends around specific topics or events    Comparing economic indicators across different regions or countries    Analyzing public health data in relation to environmental factors      For your chosen scenario, design a data collection and analysis plan that includes:    The specific research question(s) you want to answer    The APIs or web data sources you would use    The data collection strategy (frequency, scope, parameters)    The data storage approach    The data transformations and analyses you would perform    The expected insights and how they would be presented      Create a rough pseudocode or flowchart outlining the steps in your data pipeline    Identify potential challenges and how you would address them    Design a sample visualization that you would create with the collected data     "
},
{
  "id": "ex-project-planning",
  "level": "2",
  "url": "sec-working-with-web-data.html#ex-project-planning",
  "type": "Checkpoint",
  "number": "80",
  "title": "Project Planning.",
  "body": " Project Planning   For the \"Tracking stock prices and financial news sentiment\" project scenario, answer the following questions:     What specific APIs or web data sources would you need to access, and what type of data would each provide?    For tracking stock prices and financial news sentiment, we would need the following APIs and data sources:    Financial Market Data APIs:   Alpha Vantage or Yahoo Finance API - Provides historical and real-time stock price data, including opening\/closing prices, high\/low prices, trading volume, and technical indicators  FRED API (Federal Reserve Economic Data) - Offers macroeconomic indicators that might influence stock performance, such as interest rates, GDP growth, and inflation metrics  IEX Cloud - Provides company fundamentals, financial metrics, and real-time market data     News and Sentiment APIs:   News API - Delivers financial news articles from multiple sources, including publication dates, headlines, and content  AYLIEN News API or Google News API - Provides targeted news coverage about specific companies or sectors  Sentiment Analysis APIs (TextBlob, IBM Watson, Microsoft Azure) - Offers pre-built sentiment scoring of text content     Social Media APIs:   Twitter API - Provides access to tweets mentioning target companies or financial keywords  Reddit API - Allows access to financial discussion forums like r\/wallstreetbets, r\/investing, etc.     SEC Filing APIs:   SEC EDGAR API - Provides access to company filings and financial disclosures     These data sources would collectively provide a comprehensive view of both market performance metrics and the sentiment surrounding target companies, enabling analysis of correlations between news sentiment and stock price movements.      What data transformations would you need to perform to prepare the collected data for analysis, and what challenges might you encounter?    Several data transformations would be necessary for this project, along with potential challenges:  Data Transformations:    Time Series Alignment   Synchronize news timestamps with stock market data (accounting for market hours vs. 24\/7 news)  Create time-lagged variables to assess delayed impact of news on stock prices  Resampling data to consistent intervals (hourly, daily, etc.)     Text Processing and Sentiment Analysis   Convert raw news text to numerical sentiment scores  Perform named entity recognition to identify mentioned companies  Extract relevant keywords and categorize news by topic  Aggregate multiple news items into composite sentiment indicators     Financial Data Transformations   Calculate derived metrics (returns, volatility, moving averages)  Normalize price data across different stocks  Create categorical variables for market conditions (bull\/bear)  Adjust for stock splits, dividends, and other corporate actions     Feature Engineering   Create composite indicators combining sentiment and price data  Develop sector-specific variables to account for industry trends  Engineer seasonality features (day-of-week effects, month effects)     Potential Challenges:    Temporal Relationship Complexity   Determining the optimal time window for news impact on stock prices  Distinguishing causation from correlation in news-price relationships  Handling news that breaks outside market hours     Data Quality Issues   Dealing with inaccurate or misleading news reports  Managing duplicate news items across different sources  Handling missing data during market closures or API outages     Sentiment Analysis Limitations   Financial text often contains nuanced language that basic sentiment models struggle with  Sarcasm, figures of speech, and industry jargon may confuse automated sentiment analysis  News headlines may have different sentiment than full articles     Scale and Performance Issues   Processing large volumes of news text efficiently  Managing high-frequency financial data  Optimizing storage and retrieval for time-series analysis     Addressing these challenges would require an iterative approach to data transformation, careful validation of sentiment analysis results, and potentially the development of finance-specific text analysis models.    "
},
{
  "id": "sec-mid-term-project",
  "level": "1",
  "url": "sec-mid-term-project.html",
  "type": "Section",
  "number": "",
  "title": "Mid-Term Project Topic",
  "body": " Mid-Term Project Topic    Mid-term project work session  This session is dedicated to providing in-class time for you to work on your mid-term projects. You'll have the opportunity to apply the data science concepts and techniques you've learned so far to a practical project.   Mid-Term Project: Data Analysis and Visualization   For your mid-term project, you will work in pairs to analyze a dataset of your choice. The project will involve data import, exploration, transformation, and visualization to extract meaningful insights.  Project requirements:    Select and import a dataset of interest    You may use a built-in R dataset, a publicly available dataset, or data from an API    The dataset should be of reasonable size and complexity to allow for meaningful analysis      Perform data preparation and transformation    Clean and handle any missing or problematic data    Create derived variables that enhance your analysis    Reshape or aggregate data as needed      Conduct exploratory data analysis    Generate appropriate summary statistics    Create visualizations to understand data distributions and relationships    Identify interesting patterns or trends      Develop at least four different types of visualizations    The visualizations should effectively communicate key insights    Each visualization should serve a specific analytical purpose    Include proper titles, labels, and other elements for clarity      Document your process and findings    Include comments in your code explaining key steps    Provide written explanations of your approach and discoveries    Address any challenges you encountered and how you resolved them      Deliverables:    R script or R Markdown document containing your code and documentation    Brief presentation (5-7 minutes) showcasing your key findings and visualizations    Short written report summarizing your project (2-3 pages)      During this work session, you should:    Finalize your dataset selection    Begin data import and initial exploration    Discuss with your partner the key questions you want to answer    Create a project plan outlining the tasks and timeline    Consult with the instructor about any questions or challenges     # Mid-Term Project Template # Names: [Your Names Here] # Date: [Date] # 1. Data Import and Initial Exploration # ====================================== # Load necessary packages # install.packages(\"package_name\") # If needed # library(package_name) # Import the dataset # data <- read.csv(\"your_file.csv\") # For CSV files # OR use a built-in dataset data(mtcars) # Example using built-in dataset # Explore the structure of the data str(mtcars) # View the first few rows head(mtcars) # Summary statistics summary(mtcars) # Check for missing values any(is.na(mtcars)) # 2. Data Cleaning and Transformation # ================================== # Handle missing values (if any) # Example: Replace missing values with the mean # data$column[is.na(data$column)] <- mean(data$column, na.rm = TRUE) # Create derived variables mtcars$efficiency <- mtcars$mpg \/ mtcars$wt # Create categorical variables mtcars$weight_category <- cut(mtcars$wt, breaks = c(0, 2.5, 3.5, Inf), labels = c(\"Light\", \"Medium\", \"Heavy\")) # 3. Exploratory Data Analysis # =========================== # Distribution of a numerical variable hist(mtcars$mpg, main = \"Distribution of MPG\", xlab = \"Miles Per Gallon\", col = \"lightblue\") # Relationship between two numerical variables plot(mtcars$wt, mtcars$mpg, main = \"Weight vs. MPG\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\", pch = 19, col = \"darkblue\") # Add a regression line abline(lm(mpg ~ wt, data = mtcars), col = \"red\", lwd = 2) # Boxplot of a numerical variable by a categorical variable boxplot(mpg ~ cyl, data = mtcars, main = \"MPG by Number of Cylinders\", xlab = \"Number of Cylinders\", ylab = \"Miles Per Gallon\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # 4. Advanced Visualizations # ========================= # Scatter plot matrix pairs(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"wt\")], main = \"Scatter Plot Matrix\", pch = 19, col = \"darkblue\") # Multiple plots in one figure par(mfrow = c(2, 2)) # Plot 1: Histogram hist(mtcars$mpg, main = \"MPG Distribution\", xlab = \"Miles Per Gallon\", col = \"lightblue\") # Plot 2: Boxplot boxplot(mpg ~ cyl, data = mtcars, main = \"MPG by Cylinders\", xlab = \"Cylinders\", ylab = \"MPG\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # Plot 3: Scatter plot plot(mtcars$wt, mtcars$mpg, main = \"Weight vs. MPG\", xlab = \"Weight\", ylab = \"MPG\", pch = 19, col = \"darkblue\") # Plot 4: Bar plot barplot(table(mtcars$cyl), main = \"Cylinder Count\", xlab = \"Number of Cylinders\", ylab = \"Count\", col = c(\"red\", \"green\", \"blue\")) # Reset plotting window par(mfrow = c(1, 1)) # 5. Key Findings and Insights # =========================== # Calculate correlation between variables cor_matrix <- cor(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"wt\", \"qsec\")]) round(cor_matrix, 2) # Linear regression model model <- lm(mpg ~ wt + hp, data = mtcars) summary(model) # Group comparisons aggregate(mpg ~ cyl, data = mtcars, FUN = mean) # Efficiency analysis aggregate(efficiency ~ weight_category, data = mtcars, FUN = mean) # 6. Documentation of Findings # =========================== # Key Finding 1: [Description of finding] # Key Finding 2: [Description of finding] # Key Finding 3: [Description of finding] # Challenges and Solutions: # [Describe any challenges you encountered and how you resolved them] # Conclusions: # [Summarize your main conclusions from the analysis]    Project Planning   Complete the following project planning template for your mid-term project:  Title: [Your Project Title]  Team Members: [Names]  Dataset: [Name and brief description of your chosen dataset]  Research Questions: [List 2-3 specific questions you aim to answer with your analysis]  Project Tasks and Timeline:   Data acquisition and exploration: [Date]  Data cleaning and transformation: [Date]  Exploratory analysis and visualization: [Date]  Advanced analysis and key findings: [Date]  Documentation and presentation preparation: [Date]   Planned Visualizations: [Describe at least 4 types of visualizations you plan to create]  Expected Challenges: [Identify potential challenges and how you plan to address them]  Division of Responsibilities: [How will you divide the work between team members?]        Instructor and peer consultations  During this session, you'll have the opportunity to consult with the instructor and your peers about your mid-term project. This collaborative environment will help you refine your approach and address any questions or challenges.  Consultation guidelines:    Be prepared to briefly describe your project and the specific aspects you need help with    Listen actively to suggestions and be open to constructive feedback    Take notes on the advice you receive    When providing feedback to peers, be specific, constructive, and respectful     Peer Consultation Exercise   Form groups of four (two project pairs) and conduct a structured peer consultation session following these steps:    Project Overview (2 minutes per pair)    Briefly present your project topic, dataset, and research questions      Progress Update (2 minutes per pair)    Share what you've accomplished so far and your next steps      Challenges Discussion (3 minutes per pair)    Describe specific challenges or questions you're facing      Feedback Exchange (5 minutes per pair)    The other pair provides suggestions, ideas, and constructive feedback      Action Planning (3 minutes per pair)    Based on the feedback received, update your project plan         Consultation Reflection   After completing the peer consultation exercise, reflect on the following questions:    What were the most valuable insights or suggestions you received during the consultation?    How will you incorporate this feedback into your project?    What specific changes will you make to your project plan based on the consultation?    What did you learn from reviewing your peers' projects that could be helpful for your own work?          Progress check-ins  Regular progress check-ins are essential for keeping your project on track. This section provides a structured format for documenting your progress and planning your next steps.   Mid-Term Project Progress Check-In   Complete the following progress check-in form to document your project status and plan your next steps:  Project Title: [Your Project Title]  Team Members: [Names]  Date: [Current Date]  1. Accomplished Since Last Check-In:    [Task 1 completed]    [Task 2 completed]    [Task 3 completed]    2. Current Status:    Data collection: [Complete\/In progress\/Not started]    Data cleaning: [Complete\/In progress\/Not started]    Exploratory analysis: [Complete\/In progress\/Not started]    Visualization development: [Complete\/In progress\/Not started]    Documentation: [Complete\/In progress\/Not started]    3. Challenges and Solutions:    Challenge 1: [Description]  Solution: [How you addressed it or plan to address it]    Challenge 2: [Description]  Solution: [How you addressed it or plan to address it]    4. Next Steps:    [Task 1 to complete] - Responsible: [Name] - Deadline: [Date]    [Task 2 to complete] - Responsible: [Name] - Deadline: [Date]    [Task 3 to complete] - Responsible: [Name] - Deadline: [Date]    5. Questions for Instructor or Peers:    [Question 1]    [Question 2]       Project Milestone Checklist   Use the following checklist to track your progress on key project milestones:      We have selected an appropriate dataset for our analysis      We have formulated clear research questions      We have successfully imported and examined the raw data      We have cleaned the data and handled any missing or problematic values      We have created appropriate derived variables to enhance our analysis      We have conducted initial exploratory data analysis      We have created at least two different types of visualizations      We have identified preliminary insights or patterns in the data      We have documented our code with appropriate comments      We have started drafting our project report       "
},
{
  "id": "activity-mid-term-project",
  "level": "2",
  "url": "sec-mid-term-project.html#activity-mid-term-project",
  "type": "Activity",
  "number": "16",
  "title": "Mid-Term Project: Data Analysis and Visualization.",
  "body": " Mid-Term Project: Data Analysis and Visualization   For your mid-term project, you will work in pairs to analyze a dataset of your choice. The project will involve data import, exploration, transformation, and visualization to extract meaningful insights.  Project requirements:    Select and import a dataset of interest    You may use a built-in R dataset, a publicly available dataset, or data from an API    The dataset should be of reasonable size and complexity to allow for meaningful analysis      Perform data preparation and transformation    Clean and handle any missing or problematic data    Create derived variables that enhance your analysis    Reshape or aggregate data as needed      Conduct exploratory data analysis    Generate appropriate summary statistics    Create visualizations to understand data distributions and relationships    Identify interesting patterns or trends      Develop at least four different types of visualizations    The visualizations should effectively communicate key insights    Each visualization should serve a specific analytical purpose    Include proper titles, labels, and other elements for clarity      Document your process and findings    Include comments in your code explaining key steps    Provide written explanations of your approach and discoveries    Address any challenges you encountered and how you resolved them      Deliverables:    R script or R Markdown document containing your code and documentation    Brief presentation (5-7 minutes) showcasing your key findings and visualizations    Short written report summarizing your project (2-3 pages)     "
},
{
  "id": "ex-project-planning-template",
  "level": "2",
  "url": "sec-mid-term-project.html#ex-project-planning-template",
  "type": "Checkpoint",
  "number": "81",
  "title": "Project Planning.",
  "body": " Project Planning   Complete the following project planning template for your mid-term project:  Title: [Your Project Title]  Team Members: [Names]  Dataset: [Name and brief description of your chosen dataset]  Research Questions: [List 2-3 specific questions you aim to answer with your analysis]  Project Tasks and Timeline:   Data acquisition and exploration: [Date]  Data cleaning and transformation: [Date]  Exploratory analysis and visualization: [Date]  Advanced analysis and key findings: [Date]  Documentation and presentation preparation: [Date]   Planned Visualizations: [Describe at least 4 types of visualizations you plan to create]  Expected Challenges: [Identify potential challenges and how you plan to address them]  Division of Responsibilities: [How will you divide the work between team members?]    "
},
{
  "id": "activity-peer-consultation",
  "level": "2",
  "url": "sec-mid-term-project.html#activity-peer-consultation",
  "type": "Activity",
  "number": "17",
  "title": "Peer Consultation Exercise.",
  "body": " Peer Consultation Exercise   Form groups of four (two project pairs) and conduct a structured peer consultation session following these steps:    Project Overview (2 minutes per pair)    Briefly present your project topic, dataset, and research questions      Progress Update (2 minutes per pair)    Share what you've accomplished so far and your next steps      Challenges Discussion (3 minutes per pair)    Describe specific challenges or questions you're facing      Feedback Exchange (5 minutes per pair)    The other pair provides suggestions, ideas, and constructive feedback      Action Planning (3 minutes per pair)    Based on the feedback received, update your project plan       "
},
{
  "id": "ex-consultation-reflection",
  "level": "2",
  "url": "sec-mid-term-project.html#ex-consultation-reflection",
  "type": "Checkpoint",
  "number": "82",
  "title": "Consultation Reflection.",
  "body": " Consultation Reflection   After completing the peer consultation exercise, reflect on the following questions:    What were the most valuable insights or suggestions you received during the consultation?    How will you incorporate this feedback into your project?    What specific changes will you make to your project plan based on the consultation?    What did you learn from reviewing your peers' projects that could be helpful for your own work?      "
},
{
  "id": "activity-progress-checkin",
  "level": "2",
  "url": "sec-mid-term-project.html#activity-progress-checkin",
  "type": "Activity",
  "number": "18",
  "title": "Mid-Term Project Progress Check-In.",
  "body": " Mid-Term Project Progress Check-In   Complete the following progress check-in form to document your project status and plan your next steps:  Project Title: [Your Project Title]  Team Members: [Names]  Date: [Current Date]  1. Accomplished Since Last Check-In:    [Task 1 completed]    [Task 2 completed]    [Task 3 completed]    2. Current Status:    Data collection: [Complete\/In progress\/Not started]    Data cleaning: [Complete\/In progress\/Not started]    Exploratory analysis: [Complete\/In progress\/Not started]    Visualization development: [Complete\/In progress\/Not started]    Documentation: [Complete\/In progress\/Not started]    3. Challenges and Solutions:    Challenge 1: [Description]  Solution: [How you addressed it or plan to address it]    Challenge 2: [Description]  Solution: [How you addressed it or plan to address it]    4. Next Steps:    [Task 1 to complete] - Responsible: [Name] - Deadline: [Date]    [Task 2 to complete] - Responsible: [Name] - Deadline: [Date]    [Task 3 to complete] - Responsible: [Name] - Deadline: [Date]    5. Questions for Instructor or Peers:    [Question 1]    [Question 2]     "
},
{
  "id": "ex-project-milestone-checklist",
  "level": "2",
  "url": "sec-mid-term-project.html#ex-project-milestone-checklist",
  "type": "Checkpoint",
  "number": "83",
  "title": "Project Milestone Checklist.",
  "body": " Project Milestone Checklist   Use the following checklist to track your progress on key project milestones:      We have selected an appropriate dataset for our analysis      We have formulated clear research questions      We have successfully imported and examined the raw data      We have cleaned the data and handled any missing or problematic values      We have created appropriate derived variables to enhance our analysis      We have conducted initial exploratory data analysis      We have created at least two different types of visualizations      We have identified preliminary insights or patterns in the data      We have documented our code with appropriate comments      We have started drafting our project report     "
},
{
  "id": "sec-mid-term-presentations",
  "level": "1",
  "url": "sec-mid-term-presentations.html",
  "type": "Section",
  "number": "",
  "title": "Mid-term project presentations",
  "body": " Mid-term project presentations    Presentation guidelines  Your mid-term project presentation should effectively communicate your analysis and findings to your classmates and instructor. Follow these guidelines to create a clear and engaging presentation.  Presentation structure (5-7 minutes total):    Introduction (30-45 seconds)    Project title and team members    Brief dataset description    Research questions or objectives      Methods (1-1.5 minutes)    Data acquisition and preparation approach    Key transformations or derived variables    Analysis techniques used      Results (2-3 minutes)    Present your most important visualizations    Highlight key patterns or relationships    Share surprising or interesting findings      Conclusions (1 minute)    Main takeaways from your analysis    Answers to your research questions    Limitations of your analysis      Future work (30 seconds)    How your analysis could be extended or improved    Additional questions that arose during your analysis      Presentation tips:    Focus on the most important aspects of your project - you can't cover everything in 5-7 minutes    Use clear, well-labeled visualizations that are easy to understand    Minimize text on slides - use visuals to tell your story    Practice your timing to ensure you don't run over the allotted time    Be prepared to answer questions about your methods and findings    Both team members should participate in the presentation     Presentation Outline   Create an outline for your mid-term project presentation using the following template:  Title Slide: [Project Title], [Team Members]  Introduction:    Dataset: [Brief description of your dataset]    Research questions: [List your main research questions]    Methods:    Data acquisition: [How you obtained the data]    Data cleaning: [Key cleaning steps]    Analysis approach: [Main analytical techniques]    Results (for each visualization):    Visualization 1: [Description and key finding]    Visualization 2: [Description and key finding]    Visualization 3: [Description and key finding]    Visualization 4: [Description and key finding]    Conclusions:    Key finding 1: [Brief description]    Key finding 2: [Brief description]    Limitations: [Brief description]    Future Work:    Potential extension: [Brief description]    New questions: [Brief description]          Groups present their data transformation and analysis  During this session, each project group will present their work to the class. After each presentation, there will be a brief period for questions and feedback.  Presentation schedule:    Each group will have 5-7 minutes to present    Followed by 2-3 minutes for questions and feedback    Short transition time between presentations     Peer Presentation Feedback   For each presentation, complete the following peer feedback form:  Presenters: [Names]  Project Title: [Title]  What aspects of the project were most effective or interesting?  [Your response]  What visualizations were particularly insightful?  [Your response]  What questions do you have about their analysis or findings?  [Your response]  What suggestions do you have for improving or extending their analysis?  [Your response]  One thing you learned or found valuable from this presentation:  [Your response]     Presentation Reflection   After completing your presentation, reflect on the following questions:    What aspects of your presentation do you think were most effective?    What would you do differently if you were to give this presentation again?    What was the most valuable feedback you received from your peers or instructor?    How will you incorporate this feedback into your future data science projects or presentations?          Peer feedback and discussion  Peer feedback and discussion are valuable components of the learning process. In this section, we'll discuss how to provide constructive feedback to your peers and reflect on the common themes and insights from all the presentations.  Guidelines for providing effective feedback:    Be specific and descriptive rather than general and evaluative    Focus on the work, not the person    Balance positive observations with suggestions for improvement    Offer actionable suggestions rather than vague critiques    Ask questions to clarify your understanding    Be respectful and constructive in your tone     Class Discussion: Project Insights   After all presentations have been completed, participate in a class discussion addressing the following questions:    What common challenges did most groups face in their data analysis?    What visualization techniques were particularly effective across projects?    What surprising or unexpected findings emerged from the various analyses?    What data transformation techniques proved most useful across different projects?    How might the insights from these projects be applied in real-world scenarios?    What additional skills or techniques would be beneficial to learn for future data science projects?       Learning Reflection   Reflect on what you've learned from both your own project and your peers' presentations:    What are the three most important data science skills or concepts you've developed through this project?    What techniques or approaches did you observe in other presentations that you'd like to incorporate into your future work?    How has your understanding of the data analysis process evolved through this project?    What aspects of data science do you find most challenging, and how do you plan to improve in these areas?    How might you apply what you've learned in this project to future academic or professional endeavors?          Reflection on computational techniques learned  As we conclude the mid-term project and the first half of the course, it's valuable to reflect on the computational techniques and skills you've developed. This reflection will help consolidate your learning and identify areas for further growth.  Key computational techniques covered in Units 1 and 2:    Basic R syntax and operations : Variables, data types, functions, and control structures    Data structures : Vectors, lists, data frames, and matrices    Data import : Reading data from files and web sources    Data exploration : Summary statistics, initial visualizations, and data inspection    Data transformation : Filtering, selecting, creating new variables, and reshaping data    Data visualization : Creating and customizing various plot types    Working with web data : Understanding APIs and accessing web resources     Computational Technique Inventory   Create a personal inventory of the computational techniques you've learned and applied in this course so far. For each technique, rate your confidence level on a scale of 1-5 (1 = Novice, 5 = Proficient) and note how you've applied it in your project work.     Technique  Confidence (1-5)  How I've Applied It  Areas for Improvement    Basic R syntax  [Rating]  [Application]  [Improvement]    Data import  [Rating]  [Application]  [Improvement]    Data cleaning  [Rating]  [Application]  [Improvement]    Data exploration  [Rating]  [Application]  [Improvement]    Data visualization  [Rating]  [Application]  [Improvement]    Data transformation  [Rating]  [Application]  [Improvement]    Working with web data  [Rating]  [Application]  [Improvement]    Documentation and commenting  [Rating]  [Application]  [Improvement]    Problem-solving approaches  [Rating]  [Application]  [Improvement]        Course Midpoint Reflection   As we reach the midpoint of the course, reflect on your overall learning experience:    How has your perception of data science changed since the beginning of the course?    What has been the most valuable skill or concept you've learned so far?    What aspects of data science are you most excited to explore in the second half of the course?    What specific goals do you have for your data science learning in the remaining units?    How do you plan to continue developing your computational skills beyond this course?        "
},
{
  "id": "subsec-presentation-guidelines-4-1-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-presentation-guidelines-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Introduction (30-45 seconds) "
},
{
  "id": "subsec-presentation-guidelines-4-2-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-presentation-guidelines-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Methods (1-1.5 minutes) "
},
{
  "id": "subsec-presentation-guidelines-4-3-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-presentation-guidelines-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Results (2-3 minutes) "
},
{
  "id": "subsec-presentation-guidelines-4-4-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-presentation-guidelines-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Conclusions (1 minute) "
},
{
  "id": "subsec-presentation-guidelines-4-5-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-presentation-guidelines-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Future work (30 seconds) "
},
{
  "id": "ex-presentation-outline",
  "level": "2",
  "url": "sec-mid-term-presentations.html#ex-presentation-outline",
  "type": "Checkpoint",
  "number": "84",
  "title": "Presentation Outline.",
  "body": " Presentation Outline   Create an outline for your mid-term project presentation using the following template:  Title Slide: [Project Title], [Team Members]  Introduction:    Dataset: [Brief description of your dataset]    Research questions: [List your main research questions]    Methods:    Data acquisition: [How you obtained the data]    Data cleaning: [Key cleaning steps]    Analysis approach: [Main analytical techniques]    Results (for each visualization):    Visualization 1: [Description and key finding]    Visualization 2: [Description and key finding]    Visualization 3: [Description and key finding]    Visualization 4: [Description and key finding]    Conclusions:    Key finding 1: [Brief description]    Key finding 2: [Brief description]    Limitations: [Brief description]    Future Work:    Potential extension: [Brief description]    New questions: [Brief description]      "
},
{
  "id": "activity-peer-feedback",
  "level": "2",
  "url": "sec-mid-term-presentations.html#activity-peer-feedback",
  "type": "Activity",
  "number": "19",
  "title": "Peer Presentation Feedback.",
  "body": " Peer Presentation Feedback   For each presentation, complete the following peer feedback form:  Presenters: [Names]  Project Title: [Title]  What aspects of the project were most effective or interesting?  [Your response]  What visualizations were particularly insightful?  [Your response]  What questions do you have about their analysis or findings?  [Your response]  What suggestions do you have for improving or extending their analysis?  [Your response]  One thing you learned or found valuable from this presentation:  [Your response]   "
},
{
  "id": "ex-presentation-reflection",
  "level": "2",
  "url": "sec-mid-term-presentations.html#ex-presentation-reflection",
  "type": "Checkpoint",
  "number": "85",
  "title": "Presentation Reflection.",
  "body": " Presentation Reflection   After completing your presentation, reflect on the following questions:    What aspects of your presentation do you think were most effective?    What would you do differently if you were to give this presentation again?    What was the most valuable feedback you received from your peers or instructor?    How will you incorporate this feedback into your future data science projects or presentations?      "
},
{
  "id": "activity-class-discussion",
  "level": "2",
  "url": "sec-mid-term-presentations.html#activity-class-discussion",
  "type": "Activity",
  "number": "20",
  "title": "Class Discussion: Project Insights.",
  "body": " Class Discussion: Project Insights   After all presentations have been completed, participate in a class discussion addressing the following questions:    What common challenges did most groups face in their data analysis?    What visualization techniques were particularly effective across projects?    What surprising or unexpected findings emerged from the various analyses?    What data transformation techniques proved most useful across different projects?    How might the insights from these projects be applied in real-world scenarios?    What additional skills or techniques would be beneficial to learn for future data science projects?     "
},
{
  "id": "ex-learning-reflection",
  "level": "2",
  "url": "sec-mid-term-presentations.html#ex-learning-reflection",
  "type": "Checkpoint",
  "number": "86",
  "title": "Learning Reflection.",
  "body": " Learning Reflection   Reflect on what you've learned from both your own project and your peers' presentations:    What are the three most important data science skills or concepts you've developed through this project?    What techniques or approaches did you observe in other presentations that you'd like to incorporate into your future work?    How has your understanding of the data analysis process evolved through this project?    What aspects of data science do you find most challenging, and how do you plan to improve in these areas?    How might you apply what you've learned in this project to future academic or professional endeavors?      "
},
{
  "id": "subsec-computational-reflection-4-1-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-computational-reflection-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Basic R syntax and operations "
},
{
  "id": "subsec-computational-reflection-4-2-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-computational-reflection-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data structures "
},
{
  "id": "subsec-computational-reflection-4-3-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-computational-reflection-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data import "
},
{
  "id": "subsec-computational-reflection-4-4-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-computational-reflection-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data exploration "
},
{
  "id": "subsec-computational-reflection-4-5-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-computational-reflection-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data transformation "
},
{
  "id": "subsec-computational-reflection-4-6-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-computational-reflection-4-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data visualization "
},
{
  "id": "subsec-computational-reflection-4-7-1",
  "level": "2",
  "url": "sec-mid-term-presentations.html#subsec-computational-reflection-4-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Working with web data "
},
{
  "id": "activity-technique-inventory",
  "level": "2",
  "url": "sec-mid-term-presentations.html#activity-technique-inventory",
  "type": "Activity",
  "number": "21",
  "title": "Computational Technique Inventory.",
  "body": " Computational Technique Inventory   Create a personal inventory of the computational techniques you've learned and applied in this course so far. For each technique, rate your confidence level on a scale of 1-5 (1 = Novice, 5 = Proficient) and note how you've applied it in your project work.     Technique  Confidence (1-5)  How I've Applied It  Areas for Improvement    Basic R syntax  [Rating]  [Application]  [Improvement]    Data import  [Rating]  [Application]  [Improvement]    Data cleaning  [Rating]  [Application]  [Improvement]    Data exploration  [Rating]  [Application]  [Improvement]    Data visualization  [Rating]  [Application]  [Improvement]    Data transformation  [Rating]  [Application]  [Improvement]    Working with web data  [Rating]  [Application]  [Improvement]    Documentation and commenting  [Rating]  [Application]  [Improvement]    Problem-solving approaches  [Rating]  [Application]  [Improvement]      "
},
{
  "id": "ex-course-midpoint-reflection",
  "level": "2",
  "url": "sec-mid-term-presentations.html#ex-course-midpoint-reflection",
  "type": "Checkpoint",
  "number": "88",
  "title": "Course Midpoint Reflection.",
  "body": " Course Midpoint Reflection   As we reach the midpoint of the course, reflect on your overall learning experience:    How has your perception of data science changed since the beginning of the course?    What has been the most valuable skill or concept you've learned so far?    What aspects of data science are you most excited to explore in the second half of the course?    What specific goals do you have for your data science learning in the remaining units?    How do you plan to continue developing your computational skills beyond this course?      "
},
{
  "id": "sec-visualization-principles",
  "level": "1",
  "url": "sec-visualization-principles.html",
  "type": "Section",
  "number": "",
  "title": "Data Visualization Principles",
  "body": " Data Visualization Principles    Principles of effective visualization  Data visualization is the graphical representation of information and data. Effective visualizations help to communicate complex data relationships, identify patterns, and support decision-making.  Key principles of effective data visualization include:    Show the data : Ensure the visualization accurately represents the underlying data without distortion    Minimize chart junk : Remove excessive decorative elements that don't convey information    Use appropriate visualization types : Choose chart types that best represent the relationships in your data    Emphasize clarity : Make your visualizations easy to understand and interpret    Label appropriately : Include clear titles, axis labels, and legends    Consider color effectively : Use color purposefully and consider accessibility    As Edward Tufte, a pioneer in data visualization, states: \"Above all else, show the data.\"    Consider a dataset showing monthly sales figures for a company over two years. An effective visualization might be a line chart with:   X-axis showing months  Y-axis showing sales values  Clear title indicating what is being shown  Different colors for each year to allow comparison  Minimal gridlines to aid reading values  Direct labeling of notable peaks or trends        Visual perception principles  Understanding how humans perceive visual information is fundamental to creating effective visualizations. Several key principles guide visual perception:  Pre-attentive processing : Certain visual properties are processed automatically and quickly by our visual system, including:   Position  Length  Color (hue)  Orientation  Size  Shape   Visual hierarchy : How we organize and prioritize visual elements:   Position: Elements at the top or left are typically seen first  Size: Larger elements attract more attention  Color: Brighter or more saturated colors stand out  Contrast: Elements that differ from their surroundings are noticed more   Gestalt principles : How we perceive visual elements as organized patterns:   Proximity: Objects near each other appear grouped  Similarity: Similar objects appear grouped  Continuity: We perceive continuous forms rather than disjointed segments  Closure: We perceive complete shapes even when parts are missing  Figure-ground: We distinguish objects (figures) from backgrounds   These principles help us design visualizations that are quickly and accurately perceived by viewers.   Visual Perception Exercise   For each of the following data relationships, identify which visual encoding (position, length, angle, area, color, etc.) would be most effective and explain why:     Comparing the exact values of sales across five product categories    Position or length (as in a bar chart) would be most effective because these encodings allow for the most accurate comparisons of quantitative values. Humans can easily and accurately compare positions along a common scale or the lengths of bars, making it ideal for comparing exact values across categories.      Showing the geographic distribution of customers across different regions    Position on a map (spatial encoding) combined with color intensity would be most effective. Position naturally corresponds to geographic location, while color intensity can represent the density or number of customers in each region, creating an intuitive visualization of geographic distribution.      Displaying the proportion of a budget allocated to different departments    Area (as in a pie chart or treemap) can be effective for showing proportions of a whole. However, for precise comparison of proportions, length encoding (as in a stacked or side-by-side bar chart) would be more accurate, as humans perceive differences in areas less accurately than differences in length or position.        Choosing appropriate chart types  Selecting the right type of visualization for your data is crucial for effective communication. Different chart types are suited to different data relationships and analysis goals.   Common Chart Types and Their Uses    Chart Type  Best Used For  Example Scenario    Bar Chart  Comparing values across categories  Sales by product category    Line Chart  Showing trends over time  Stock price changes over months    Scatter Plot  Showing relationship between two variables  Height vs. weight correlation    Pie Chart  Showing composition of a whole (use sparingly)  Budget allocation percentages    Histogram  Showing distribution of a continuous variable  Age distribution in a population    Box Plot  Showing statistical distribution and outliers  Test scores across different schools    Heatmap  Showing patterns in a matrix of values  Correlation matrix of variables    Map  Showing geographic data  Sales by region or country     Guidelines for selecting chart types:    Consider your audience and their familiarity with different visualization types    Think about the key message you want to convey    Choose visualizations that highlight the patterns or relationships most relevant to your analysis    Consider combining multiple chart types for complex data stories    When in doubt, simpler chart types are often better     Chart Selection Exercise   Match each data scenario with the most appropriate chart type:     Monthly revenue over the past five years  Line chart    Distribution of employee salaries  Histogram    Relationship between advertising spend and sales  Scatter plot    Comparison of quarterly sales across product categories  Grouped bar chart    Customer satisfaction scores by department  Bar chart    Market share of top competitors  Pie chart        Activity: Critique and improve sample visualizations   Visualization Critique and Improvement   In this activity, you will analyze and critique sample visualizations, then suggest improvements based on the principles we've discussed.  For each of the following visualization descriptions, identify potential issues and suggest specific improvements:  Visualization 1 : A 3D pie chart showing the percentage breakdown of a company's expenses across 8 categories.  Visualization 2 : A line chart showing monthly sales over two years, with no clear title, unlabeled axes, and rainbow-colored lines for different product categories.  Visualization 3 : A bar chart comparing the GDP of 20 countries, with the y-axis starting at 10 trillion dollars instead of zero.  For each visualization:    Identify at least three specific issues that make the visualization less effective    Suggest specific improvements to address each issue    Consider whether a different chart type would be more appropriate       Visualization Principles Application   You've been asked to create a visualization showing monthly website traffic over the past year, broken down by traffic source (organic search, paid advertising, social media, direct, and referral).  Describe how you would design this visualization, addressing each of the following aspects:    What chart type would you choose and why?    How would you use color effectively?    What labels and annotations would you include?    How would you handle potential issues like overlapping lines or seasonal patterns?    What alternative visualization might you consider if the goal was to emphasize the proportion of traffic from each source rather than the total volume?        "
},
{
  "id": "subsec-effective-visualization-4-1-1",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-effective-visualization-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Show the data "
},
{
  "id": "subsec-effective-visualization-4-2-1",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-effective-visualization-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Minimize chart junk "
},
{
  "id": "subsec-effective-visualization-4-3-1",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-effective-visualization-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use appropriate visualization types "
},
{
  "id": "subsec-effective-visualization-4-4-1",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-effective-visualization-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Emphasize clarity "
},
{
  "id": "subsec-effective-visualization-4-5-1",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-effective-visualization-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Label appropriately "
},
{
  "id": "subsec-effective-visualization-4-6-1",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-effective-visualization-4-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Consider color effectively "
},
{
  "id": "subsec-effective-visualization-6",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-effective-visualization-6",
  "type": "Example",
  "number": "89",
  "title": "",
  "body": "  Consider a dataset showing monthly sales figures for a company over two years. An effective visualization might be a line chart with:   X-axis showing months  Y-axis showing sales values  Clear title indicating what is being shown  Different colors for each year to allow comparison  Minimal gridlines to aid reading values  Direct labeling of notable peaks or trends    "
},
{
  "id": "subsec-visual-perception-3",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-visual-perception-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pre-attentive processing "
},
{
  "id": "subsec-visual-perception-5",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-visual-perception-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Visual hierarchy "
},
{
  "id": "subsec-visual-perception-7",
  "level": "2",
  "url": "sec-visualization-principles.html#subsec-visual-perception-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gestalt principles "
},
{
  "id": "ex-visual-processing",
  "level": "2",
  "url": "sec-visualization-principles.html#ex-visual-processing",
  "type": "Checkpoint",
  "number": "90",
  "title": "Visual Perception Exercise.",
  "body": " Visual Perception Exercise   For each of the following data relationships, identify which visual encoding (position, length, angle, area, color, etc.) would be most effective and explain why:     Comparing the exact values of sales across five product categories    Position or length (as in a bar chart) would be most effective because these encodings allow for the most accurate comparisons of quantitative values. Humans can easily and accurately compare positions along a common scale or the lengths of bars, making it ideal for comparing exact values across categories.      Showing the geographic distribution of customers across different regions    Position on a map (spatial encoding) combined with color intensity would be most effective. Position naturally corresponds to geographic location, while color intensity can represent the density or number of customers in each region, creating an intuitive visualization of geographic distribution.      Displaying the proportion of a budget allocated to different departments    Area (as in a pie chart or treemap) can be effective for showing proportions of a whole. However, for precise comparison of proportions, length encoding (as in a stacked or side-by-side bar chart) would be more accurate, as humans perceive differences in areas less accurately than differences in length or position.    "
},
{
  "id": "table-chart-types",
  "level": "2",
  "url": "sec-visualization-principles.html#table-chart-types",
  "type": "Table",
  "number": "91",
  "title": "Common Chart Types and Their Uses",
  "body": " Common Chart Types and Their Uses    Chart Type  Best Used For  Example Scenario    Bar Chart  Comparing values across categories  Sales by product category    Line Chart  Showing trends over time  Stock price changes over months    Scatter Plot  Showing relationship between two variables  Height vs. weight correlation    Pie Chart  Showing composition of a whole (use sparingly)  Budget allocation percentages    Histogram  Showing distribution of a continuous variable  Age distribution in a population    Box Plot  Showing statistical distribution and outliers  Test scores across different schools    Heatmap  Showing patterns in a matrix of values  Correlation matrix of variables    Map  Showing geographic data  Sales by region or country    "
},
{
  "id": "ex-chart-selection",
  "level": "2",
  "url": "sec-visualization-principles.html#ex-chart-selection",
  "type": "Checkpoint",
  "number": "92",
  "title": "Chart Selection Exercise.",
  "body": " Chart Selection Exercise   Match each data scenario with the most appropriate chart type:     Monthly revenue over the past five years  Line chart    Distribution of employee salaries  Histogram    Relationship between advertising spend and sales  Scatter plot    Comparison of quarterly sales across product categories  Grouped bar chart    Customer satisfaction scores by department  Bar chart    Market share of top competitors  Pie chart    "
},
{
  "id": "activity-visualization-critique",
  "level": "2",
  "url": "sec-visualization-principles.html#activity-visualization-critique",
  "type": "Activity",
  "number": "22",
  "title": "Visualization Critique and Improvement.",
  "body": " Visualization Critique and Improvement   In this activity, you will analyze and critique sample visualizations, then suggest improvements based on the principles we've discussed.  For each of the following visualization descriptions, identify potential issues and suggest specific improvements:  Visualization 1 : A 3D pie chart showing the percentage breakdown of a company's expenses across 8 categories.  Visualization 2 : A line chart showing monthly sales over two years, with no clear title, unlabeled axes, and rainbow-colored lines for different product categories.  Visualization 3 : A bar chart comparing the GDP of 20 countries, with the y-axis starting at 10 trillion dollars instead of zero.  For each visualization:    Identify at least three specific issues that make the visualization less effective    Suggest specific improvements to address each issue    Consider whether a different chart type would be more appropriate     "
},
{
  "id": "ex-visualization-principles",
  "level": "2",
  "url": "sec-visualization-principles.html#ex-visualization-principles",
  "type": "Checkpoint",
  "number": "93",
  "title": "Visualization Principles Application.",
  "body": " Visualization Principles Application   You've been asked to create a visualization showing monthly website traffic over the past year, broken down by traffic source (organic search, paid advertising, social media, direct, and referral).  Describe how you would design this visualization, addressing each of the following aspects:    What chart type would you choose and why?    How would you use color effectively?    What labels and annotations would you include?    How would you handle potential issues like overlapping lines or seasonal patterns?    What alternative visualization might you consider if the goal was to emphasize the proportion of traffic from each source rather than the total volume?      "
},
{
  "id": "sec-intro-ggplot2",
  "level": "1",
  "url": "sec-intro-ggplot2.html",
  "type": "Section",
  "number": "",
  "title": "Introduction to ggplot2",
  "body": " Introduction to ggplot2    Grammar of graphics concept  The grammar of graphics is a systematic approach to creating visualizations by breaking them down into semantic components. Developed by Leland Wilkinson, this framework provides a structured way to describe and construct visualizations.  In R, the ggplot2 package (created by Hadley Wickham) implements this grammar, allowing for a consistent and flexible approach to creating a wide range of visualizations.  The key components of the grammar of graphics include:    Data : The dataset being visualized    Aesthetics : Mappings from data variables to visual properties (position, color, size, shape, etc.)    Geometries : The visual elements used to represent data points (points, lines, bars, etc.)    Facets : Division of the plot into subplots based on categorical variables    Statistics : Statistical transformations applied to the data (counts, means, regressions, etc.)    Coordinates : The space in which data is mapped (Cartesian, polar, etc.)    Themes : Visual styling of non-data elements (background, grid lines, labels, etc.)    This layered approach allows for building complex visualizations by combining simple elements in a systematic way.   # Load required packages (in a real environment) # install.packages(\"ggplot2\") # library(ggplot2) # For our Web-R environment, we'll use a built-in dataset data(mtcars) # Let's examine the data structure head(mtcars) # Basic ggplot2 syntax demonstration # Step 1: Initialize a plot with data # Step 2: Map variables to aesthetics # Step 3: Add geometric elements # In a real R environment, you would use: # ggplot(mtcars, aes(x = wt, y = mpg)) + # geom_point() # In our limited environment, we'll create a similar plot using base R plot(mtcars$wt, mtcars$mpg, main = \"Car Weight vs. Fuel Efficiency\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles per Gallon\", pch = 19, col = \"blue\") # Add a regression line abline(lm(mpg ~ wt, data = mtcars), col = \"red\", lwd = 2) # Another example: Distribution of MPG hist(mtcars$mpg, main = \"Distribution of Fuel Efficiency\", xlab = \"Miles per Gallon\", col = \"lightblue\", breaks = 10) # In ggplot2, this would be: # ggplot(mtcars, aes(x = mpg)) + # geom_histogram(bins = 10, fill = \"lightblue\", color = \"black\") # Boxplot by cylinder count boxplot(mpg ~ factor(cyl), data = mtcars, main = \"Fuel Efficiency by Number of Cylinders\", xlab = \"Number of Cylinders\", ylab = \"Miles per Gallon\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # In ggplot2, this would be: # ggplot(mtcars, aes(x = factor(cyl), y = mpg, fill = factor(cyl))) + # geom_boxplot() + # scale_fill_manual(values = c(\"lightgreen\", \"lightblue\", \"lightpink\")) + # labs(title = \"Fuel Efficiency by Number of Cylinders\", # x = \"Number of Cylinders\", # y = \"Miles per Gallon\")    Grammar of Graphics Components   Match each ggplot2 component with its correct description:     ggplot(data, aes(x = var1, y = var2))  Initializes a plot and maps variables to aesthetic properties    geom_point()  Adds a scatter plot layer using points to represent observations    geom_smooth(method = \"lm\")  Adds a statistical model layer showing a linear trend line    facet_wrap(~ category)  Creates separate subplots for each unique value of a categorical variable    scale_color_manual(values = c(\"red\", \"blue\"))  Customizes the mapping between categorical values and colors    theme_minimal()  Changes the visual style of non-data plot elements to a simplified design        Creating basic plots in ggplot2  While we can't use ggplot2 directly in our Web-R environment, we'll learn the principles and syntax for creating basic plot types with ggplot2. These principles can be applied when you work in a full R environment.  The basic structure of a ggplot2 visualization follows this pattern:    Start with ggplot(data, aes(...)) to specify the data and aesthetic mappings    Add layers with geom_*() functions for different plot types    Customize with additional elements like labels, scales, and themes    Let's examine the code structure for common plot types:   Scatter Plot  Used to show relationship between two continuous variables  ggplot(data, aes(x = variable1, y = variable2)) + geom_point() + labs(title = \"Title\", x = \"X Label\", y = \"Y Label\")    Line Chart  Used to show trends over time or ordered categories  ggplot(data, aes(x = time_variable, y = value_variable)) + geom_line() + labs(title = \"Title\", x = \"Time\", y = \"Value\")    Bar Chart  Used to compare values across categories  ggplot(data, aes(x = category_variable, y = value_variable)) + geom_bar(stat = \"identity\") + labs(title = \"Title\", x = \"Category\", y = \"Value\")    Histogram  Used to show distribution of a continuous variable  ggplot(data, aes(x = continuous_variable)) + geom_histogram(bins = 30) + labs(title = \"Title\", x = \"Variable\", y = \"Count\")    Box Plot  Used to show distribution and summary statistics by group  ggplot(data, aes(x = category_variable, y = continuous_variable)) + geom_boxplot() + labs(title = \"Title\", x = \"Category\", y = \"Value\")    # Since we can't use ggplot2 directly in Web-R, # we'll create equivalents in base R # Load the built-in iris dataset data(iris) # Examine the data head(iris) summary(iris) # 1. Scatter Plot plot(iris$Sepal.Length, iris$Sepal.Width, main = \"Sepal Length vs. Width\", xlab = \"Sepal Length (cm)\", ylab = \"Sepal Width (cm)\", pch = 19, col = as.numeric(iris$Species)) # Add a legend legend(\"topright\", legend = levels(iris$Species), col = 1:3, pch = 19, title = \"Species\") # 2. Grouped Box Plot boxplot(Petal.Length ~ Species, data = iris, main = \"Petal Length by Species\", xlab = \"Species\", ylab = \"Petal Length (cm)\", col = c(\"lightpink\", \"lightblue\", \"lightgreen\")) # 3. Histogram hist(iris$Petal.Width, main = \"Distribution of Petal Width\", xlab = \"Petal Width (cm)\", col = \"lightblue\", breaks = 15) # 4. Multiple histograms (by group) # Create a layout with 3 rows and 1 column par(mfrow = c(3, 1)) # Create histograms for each species hist(iris$Petal.Length[iris$Species == \"setosa\"], main = \"Petal Length: Setosa\", xlab = \"Length (cm)\", col = \"lightpink\", xlim = c(1, 7)) hist(iris$Petal.Length[iris$Species == \"versicolor\"], main = \"Petal Length: Versicolor\", xlab = \"Length (cm)\", col = \"lightblue\", xlim = c(1, 7)) hist(iris$Petal.Length[iris$Species == \"virginica\"], main = \"Petal Length: Virginica\", xlab = \"Length (cm)\", col = \"lightgreen\", xlim = c(1, 7)) # Reset the layout par(mfrow = c(1, 1)) # 5. Scatterplot Matrix pairs(iris[, 1:4], main = \"Scatterplot Matrix of Iris Dataset\", pch = 19, col = as.numeric(iris$Species))    Plot Selection Exercise   For each of the following analytical questions, identify the most appropriate plot type and explain why it would be effective:     How does fuel efficiency (mpg) relate to car weight (wt) in the mtcars dataset?    A scatter plot would be most appropriate for this analysis because:   Both fuel efficiency (mpg) and car weight (wt) are continuous variables  We're interested in understanding their relationship or correlation  A scatter plot allows us to visualize the pattern of association (likely negative)  We can add a trend line to quantify the relationship  Individual data points represent different car models, which maintains the granularity of the data   This plot would effectively show whether heavier cars tend to have lower fuel efficiency, and how strong that relationship is.      How does the distribution of petal lengths differ among the three iris species?    A box plot would be most appropriate for this analysis because:   We're comparing the distribution of a continuous variable (petal length) across categories (species)  Box plots display key statistical properties (median, quartiles, range, outliers) in a compact form  They allow for easy visual comparison of distributions between groups  We can immediately see differences in central tendency, spread, and potential outliers  The visual design facilitates direct comparison between the three species   Alternative options could include violin plots (to show the full distribution shape) or grouped histograms, but box plots provide the most efficient summary for this comparison.      What is the monthly trend in website traffic over the past year?    A line chart would be most appropriate for this analysis because:   Time series data is best visualized with connected points to show continuity  Line charts emphasize trends, patterns, and changes over time  The x-axis represents time (months) in a natural sequential order  We can easily identify seasonal patterns, overall trends (increasing\/decreasing), and anomalies  Y-axis would show traffic volume, while x-axis shows the progression of months   This visualization would clearly show whether website traffic has been growing, declining, or following seasonal patterns throughout the year.        Exercise: Transform basic R plots into ggplot2   Transforming Plots to ggplot2   In this exercise, you will practice transforming basic R plots into their ggplot2 equivalents. While we can't directly run ggplot2 code in our Web-R environment, this will help you understand the syntax and structure for when you work in a full R environment.  For each of the following base R plots, write the equivalent ggplot2 code:   Plot 1: Scatter Plot  # Base R code plot(mtcars$wt, mtcars$mpg, main = \"Car Weight vs. Fuel Efficiency\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles per Gallon\", pch = 19, col = \"blue\")    Plot 2: Histogram  # Base R code hist(mtcars$mpg, main = \"Distribution of Fuel Efficiency\", xlab = \"Miles per Gallon\", col = \"lightblue\", breaks = 10)    Plot 3: Box Plot  # Base R code boxplot(mpg ~ factor(cyl), data = mtcars, main = \"Fuel Efficiency by Number of Cylinders\", xlab = \"Number of Cylinders\", ylab = \"Miles per Gallon\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\"))    Plot 4: Line Plot  # Base R code # Assume we have time series data in a data frame called 'ts_data' # with columns 'date' and 'value' plot(ts_data$date, ts_data$value, type = \"l\", main = \"Time Series Data\", xlab = \"Date\", ylab = \"Value\", col = \"red\")      ggplot2 Equivalents   Write ggplot2 code for each of the following base R plots:     Plot 1: Scatter Plot    ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point(color = \"blue\", size = 3) + labs(title = \"Car Weight vs. Fuel Efficiency\", x = \"Weight (1000 lbs)\", y = \"Miles per Gallon\") + theme_minimal()      Plot 2: Histogram    ggplot(mtcars, aes(x = mpg)) + geom_histogram(bins = 10, fill = \"lightblue\", color = \"black\") + labs(title = \"Distribution of Fuel Efficiency\", x = \"Miles per Gallon\", y = \"Count\") + theme_minimal()      Plot 3: Box Plot    ggplot(mtcars, aes(x = factor(cyl), y = mpg, fill = factor(cyl))) + geom_boxplot() + scale_fill_manual(values = c(\"lightgreen\", \"lightblue\", \"lightpink\")) + labs(title = \"Fuel Efficiency by Number of Cylinders\", x = \"Number of Cylinders\", y = \"Miles per Gallon\") + theme_minimal() + guides(fill = \"none\") # Remove the legend      Plot 4: Line Plot    ggplot(ts_data, aes(x = date, y = value)) + geom_line(color = \"red\", size = 1) + labs(title = \"Time Series Data\", x = \"Date\", y = \"Value\") + theme_minimal()      "
},
{
  "id": "subsec-ggplot2-intro-2",
  "level": "2",
  "url": "sec-intro-ggplot2.html#subsec-ggplot2-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "grammar of graphics "
},
{
  "id": "subsec-ggplot2-intro-5-1-1",
  "level": "2",
  "url": "sec-intro-ggplot2.html#subsec-ggplot2-intro-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data "
},
{
  "id": "subsec-ggplot2-intro-5-2-1",
  "level": "2",
  "url": "sec-intro-ggplot2.html#subsec-ggplot2-intro-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Aesthetics "
},
{
  "id": "subsec-ggplot2-intro-5-3-1",
  "level": "2",
  "url": "sec-intro-ggplot2.html#subsec-ggplot2-intro-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Geometries "
},
{
  "id": "subsec-ggplot2-intro-5-4-1",
  "level": "2",
  "url": "sec-intro-ggplot2.html#subsec-ggplot2-intro-5-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Facets "
},
{
  "id": "subsec-ggplot2-intro-5-5-1",
  "level": "2",
  "url": "sec-intro-ggplot2.html#subsec-ggplot2-intro-5-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Statistics "
},
{
  "id": "subsec-ggplot2-intro-5-6-1",
  "level": "2",
  "url": "sec-intro-ggplot2.html#subsec-ggplot2-intro-5-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coordinates "
},
{
  "id": "subsec-ggplot2-intro-5-7-1",
  "level": "2",
  "url": "sec-intro-ggplot2.html#subsec-ggplot2-intro-5-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Themes "
},
{
  "id": "ex-ggplot-components",
  "level": "2",
  "url": "sec-intro-ggplot2.html#ex-ggplot-components",
  "type": "Checkpoint",
  "number": "94",
  "title": "Grammar of Graphics Components.",
  "body": " Grammar of Graphics Components   Match each ggplot2 component with its correct description:     ggplot(data, aes(x = var1, y = var2))  Initializes a plot and maps variables to aesthetic properties    geom_point()  Adds a scatter plot layer using points to represent observations    geom_smooth(method = \"lm\")  Adds a statistical model layer showing a linear trend line    facet_wrap(~ category)  Creates separate subplots for each unique value of a categorical variable    scale_color_manual(values = c(\"red\", \"blue\"))  Customizes the mapping between categorical values and colors    theme_minimal()  Changes the visual style of non-data plot elements to a simplified design    "
},
{
  "id": "ex-plot-selection",
  "level": "2",
  "url": "sec-intro-ggplot2.html#ex-plot-selection",
  "type": "Checkpoint",
  "number": "95",
  "title": "Plot Selection Exercise.",
  "body": " Plot Selection Exercise   For each of the following analytical questions, identify the most appropriate plot type and explain why it would be effective:     How does fuel efficiency (mpg) relate to car weight (wt) in the mtcars dataset?    A scatter plot would be most appropriate for this analysis because:   Both fuel efficiency (mpg) and car weight (wt) are continuous variables  We're interested in understanding their relationship or correlation  A scatter plot allows us to visualize the pattern of association (likely negative)  We can add a trend line to quantify the relationship  Individual data points represent different car models, which maintains the granularity of the data   This plot would effectively show whether heavier cars tend to have lower fuel efficiency, and how strong that relationship is.      How does the distribution of petal lengths differ among the three iris species?    A box plot would be most appropriate for this analysis because:   We're comparing the distribution of a continuous variable (petal length) across categories (species)  Box plots display key statistical properties (median, quartiles, range, outliers) in a compact form  They allow for easy visual comparison of distributions between groups  We can immediately see differences in central tendency, spread, and potential outliers  The visual design facilitates direct comparison between the three species   Alternative options could include violin plots (to show the full distribution shape) or grouped histograms, but box plots provide the most efficient summary for this comparison.      What is the monthly trend in website traffic over the past year?    A line chart would be most appropriate for this analysis because:   Time series data is best visualized with connected points to show continuity  Line charts emphasize trends, patterns, and changes over time  The x-axis represents time (months) in a natural sequential order  We can easily identify seasonal patterns, overall trends (increasing\/decreasing), and anomalies  Y-axis would show traffic volume, while x-axis shows the progression of months   This visualization would clearly show whether website traffic has been growing, declining, or following seasonal patterns throughout the year.    "
},
{
  "id": "activity-transform-plots",
  "level": "2",
  "url": "sec-intro-ggplot2.html#activity-transform-plots",
  "type": "Activity",
  "number": "23",
  "title": "Transforming Plots to ggplot2.",
  "body": " Transforming Plots to ggplot2   In this exercise, you will practice transforming basic R plots into their ggplot2 equivalents. While we can't directly run ggplot2 code in our Web-R environment, this will help you understand the syntax and structure for when you work in a full R environment.  For each of the following base R plots, write the equivalent ggplot2 code:   Plot 1: Scatter Plot  # Base R code plot(mtcars$wt, mtcars$mpg, main = \"Car Weight vs. Fuel Efficiency\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles per Gallon\", pch = 19, col = \"blue\")    Plot 2: Histogram  # Base R code hist(mtcars$mpg, main = \"Distribution of Fuel Efficiency\", xlab = \"Miles per Gallon\", col = \"lightblue\", breaks = 10)    Plot 3: Box Plot  # Base R code boxplot(mpg ~ factor(cyl), data = mtcars, main = \"Fuel Efficiency by Number of Cylinders\", xlab = \"Number of Cylinders\", ylab = \"Miles per Gallon\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\"))    Plot 4: Line Plot  # Base R code # Assume we have time series data in a data frame called 'ts_data' # with columns 'date' and 'value' plot(ts_data$date, ts_data$value, type = \"l\", main = \"Time Series Data\", xlab = \"Date\", ylab = \"Value\", col = \"red\")    "
},
{
  "id": "ex-ggplot2-equivalents",
  "level": "2",
  "url": "sec-intro-ggplot2.html#ex-ggplot2-equivalents",
  "type": "Checkpoint",
  "number": "96",
  "title": "ggplot2 Equivalents.",
  "body": " ggplot2 Equivalents   Write ggplot2 code for each of the following base R plots:     Plot 1: Scatter Plot    ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point(color = \"blue\", size = 3) + labs(title = \"Car Weight vs. Fuel Efficiency\", x = \"Weight (1000 lbs)\", y = \"Miles per Gallon\") + theme_minimal()      Plot 2: Histogram    ggplot(mtcars, aes(x = mpg)) + geom_histogram(bins = 10, fill = \"lightblue\", color = \"black\") + labs(title = \"Distribution of Fuel Efficiency\", x = \"Miles per Gallon\", y = \"Count\") + theme_minimal()      Plot 3: Box Plot    ggplot(mtcars, aes(x = factor(cyl), y = mpg, fill = factor(cyl))) + geom_boxplot() + scale_fill_manual(values = c(\"lightgreen\", \"lightblue\", \"lightpink\")) + labs(title = \"Fuel Efficiency by Number of Cylinders\", x = \"Number of Cylinders\", y = \"Miles per Gallon\") + theme_minimal() + guides(fill = \"none\") # Remove the legend      Plot 4: Line Plot    ggplot(ts_data, aes(x = date, y = value)) + geom_line(color = \"red\", size = 1) + labs(title = \"Time Series Data\", x = \"Date\", y = \"Value\") + theme_minimal()    "
},
{
  "id": "sec-advanced-visualizations",
  "level": "1",
  "url": "sec-advanced-visualizations.html",
  "type": "Section",
  "number": "",
  "title": "Advanced Visualizations",
  "body": " Advanced Visualizations    Histograms, density plots, and bar charts  Visualizing the distribution of a single variable is fundamental in exploratory data analysis. There are several techniques for effectively visualizing both continuous and categorical variables.  For continuous variables , the main visualization types include:   Histograms  Histograms divide the data into bins and show the frequency or count of observations in each bin. They are useful for understanding the shape, center, and spread of a distribution.  Key considerations:   Bin width affects the appearance and interpretation  Can reveal modality, skewness, and potential outliers  Y-axis can show counts or density     Density Plots  Density plots show a smoothed version of the distribution, making it easier to identify the shape. They're particularly useful for comparing multiple distributions.  Key considerations:   Smoothing parameter affects the appearance  Can be overlaid with other density plots for comparison  Area under the curve equals 1     Box Plots  Box plots display the five-number summary (minimum, first quartile, median, third quartile, maximum) and highlight potential outliers. They're compact and show key distribution features.  Key considerations:   Shows central tendency, spread, and outliers  Facilitates comparison between groups  Less detailed than histograms about distribution shape    For categorical variables , the main visualization type is:   Bar Charts  Bar charts show the frequency or count of observations in each category. They're ideal for comparing values across discrete categories.  Key considerations:   Can be sorted by frequency for better interpretation  Categories can be reordered based on another variable  Horizontal orientation works well for long category labels     # Load datasets data(mtcars) data(iris) # Histogram example hist(mtcars$mpg, main = \"Distribution of Fuel Efficiency\", xlab = \"Miles Per Gallon\", col = \"lightblue\", breaks = 10) # Box plot example boxplot(mtcars$mpg, main = \"Box Plot of Fuel Efficiency\", ylab = \"Miles Per Gallon\", col = \"lightgreen\") # Density plot example (using base R) plot(density(mtcars$mpg), main = \"Density Plot of Fuel Efficiency\", xlab = \"Miles Per Gallon\", col = \"blue\", lwd = 2) # Filling the density curve polygon(density(mtcars$mpg), col = \"lightblue\", border = \"blue\") # Bar chart for a categorical variable # First, create a categorical variable from cyl cyl_factor <- factor(mtcars$cyl, levels = c(4, 6, 8), labels = c(\"4 cylinders\", \"6 cylinders\", \"8 cylinders\")) # Create a table of counts cyl_counts <- table(cyl_factor) # Bar chart barplot(cyl_counts, main = \"Number of Cars by Cylinder Count\", xlab = \"Cylinder Count\", ylab = \"Number of Cars\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # Comparing multiple distributions # Create separate density plots for each species plot(density(iris$Sepal.Length[iris$Species == \"setosa\"]), main = \"Sepal Length Distribution by Species\", xlab = \"Sepal Length (cm)\", ylim = c(0, 1.5), col = \"red\", lwd = 2) # Add the other species lines(density(iris$Sepal.Length[iris$Species == \"versicolor\"]), col = \"blue\", lwd = 2) lines(density(iris$Sepal.Length[iris$Species == \"virginica\"]), col = \"green\", lwd = 2) # Add a legend legend(\"topright\", legend = c(\"Setosa\", \"Versicolor\", \"Virginica\"), col = c(\"red\", \"blue\", \"green\"), lwd = 2) # Compare distributions with box plots boxplot(Sepal.Length ~ Species, data = iris, main = \"Sepal Length by Species\", xlab = \"Species\", ylab = \"Sepal Length (cm)\", col = c(\"lightpink\", \"lightblue\", \"lightgreen\"))    Distribution Visualization   For each of the following scenarios, identify the most appropriate visualization type and explain why:     You want to show the distribution of ages in a population, which ranges from 18 to 85 years old.    A histogram or density plot would be most appropriate for visualizing age distribution because:   Age is a continuous variable spanning a wide range (18-85 years)  A histogram would show the frequency of people in different age brackets, revealing the overall shape of the distribution (e.g., whether it's normal, skewed, bimodal)  A density plot would provide a smoother representation of the same information, which might be more interpretable if the sample size is large  These visualizations would reveal important features such as central tendency, spread, and any unusual patterns like clusters around certain ages   While a box plot could also be used, it would provide less detail about the actual distribution shape, which is often important when examining demographic variables like age.      You want to compare the income levels of five different occupational categories.    A box plot would be most appropriate for comparing income levels across occupational categories because:   It allows for comparing distributions of a continuous variable (income) across categories (occupations)  Box plots visually summarize key statistics (median, quartiles, range) that are relevant for income comparisons  Income data often contains outliers, which box plots clearly identify  The visualization makes it easy to compare central tendency (median) and spread (IQR) across the five occupational categories  The compact design allows easy side-by-side comparison even with limited space   Alternative approaches could include violin plots (for more detailed distribution comparison) or grouped\/overlaid density plots, but box plots provide the clearest summary for comparing income distributions across multiple categories.      You want to show the frequency of different blood types (A, B, AB, O) in a patient population.    A bar chart would be most appropriate for showing the frequency of blood types because:   Blood type is a categorical variable with distinct, non-ordinal categories (A, B, AB, O)  Bar charts effectively show counts or proportions for categorical data  The height of each bar provides a clear visual comparison of the relative frequency of each blood type  Labels can be clearly attached to each category  The visualization is intuitive and widely understood, even by audiences without statistical background   A pie chart could also be used since there are only four categories, but bar charts generally allow for more accurate visual comparison of values. If you wanted to further break down the data (such as by Rh factor: positive\/negative), a grouped bar chart would allow for that additional level of detail.        Customizing aesthetics and themes  Visual customization is essential for creating effective and appealing visualizations. Thoughtful customization can enhance readability, emphasize key patterns, and create a professional appearance.  Key aspects of visualization customization include:   Color Selection  Colors should be chosen deliberately to enhance understanding and accessibility:   Use color to highlight important data or distinguish categories  Consider color blindness (avoid red-green combinations)  Use sequential color schemes for ordered data (e.g., light to dark blue for low to high values)  Use diverging color schemes for data with a meaningful midpoint (e.g., blue-white-red for negative-zero-positive)  Use qualitative color schemes for categorical data (e.g., distinct colors for different categories)     Titles and Labels  Clear and informative text elements improve understanding:   Use descriptive titles that explain what the visualization shows  Label axes clearly with both the variable name and units  Include a subtitle or caption for additional context if needed  Consider direct labeling instead of or in addition to legends  Use consistent terminology throughout the visualization     Visual Elements  Adjust visual properties to enhance clarity and focus:   Control point size, line width, and transparency  Use appropriate fonts and font sizes  Consider the aspect ratio of the plot  Use grid lines and backgrounds judiciously  Add reference lines or annotations to highlight key values     Themes  Overall visual style can be customized through themes:   Control background colors, grid lines, fonts, and other non-data elements  Choose themes appropriate for the context (presentation, publication, dashboard)  Create consistent visual identity across multiple visualizations  Consider minimalist themes that emphasize the data     # Load dataset data(iris) # Basic customization in base R plots # Create a custom color palette my_colors <- c(\"#E69F00\", \"#56B4E9\", \"#009E73\") # Create a scatterplot with customization plot(iris$Sepal.Length, iris$Sepal.Width, main = \"Sepal Dimensions by Species\", xlab = \"Sepal Length (cm)\", ylab = \"Sepal Width (cm)\", pch = 19, # Solid circle points col = my_colors[iris$Species], # Custom colors by species cex = 1.2, # Slightly larger points font.main = 2, # Bold title family = \"serif\", # Font family bty = \"l\", # Box type - \"L\" shaped axes las = 1) # Horizontal axis labels # Add a customized legend legend(\"topright\", legend = levels(iris$Species), col = my_colors, pch = 19, pt.cex = 1.2, title = \"Species\", bg = \"white\", box.lty = 1, box.lwd = 1, box.col = \"gray80\", cex = 0.9) # Custom axes and grid # Create a plot with custom axes par(mar = c(5, 5, 4, 2)) # Increase margin for larger labels plot(iris$Petal.Length, iris$Petal.Width, main = \"Petal Dimensions by Species\", xlab = \"\", # We'll add custom labels ylab = \"\", pch = c(21, 22, 24)[iris$Species], # Different point shapes bg = my_colors[iris$Species], # Background colors col = \"black\", # Point borders cex = 1.3, # Point size axes = FALSE) # No default axes # Add custom axes axis(1, at = seq(1, 7, by = 1), labels = seq(1, 7, by = 1), lwd = 1.5, cex.axis = 0.9) axis(2, at = seq(0, 2.5, by = 0.5), labels = seq(0, 2.5, by = 0.5), lwd = 1.5, cex.axis = 0.9, las = 1) # Add grid lines grid(nx = 6, ny = 5, lty = 2, col = \"gray80\") # Add axis labels with more customization mtext(\"Petal Length (cm)\", side = 1, line = 3, cex = 1.2) mtext(\"Petal Width (cm)\", side = 2, line = 3, cex = 1.2, las = 0) # Add a legend legend(\"topleft\", legend = levels(iris$Species), pt.bg = my_colors, pch = c(21, 22, 24), pt.cex = 1.3, title = \"Species\", bg = \"white\", box.lty = 1, box.lwd = 1.5, cex = 0.9) # Add a box around the plot box(lwd = 1.5) # Add a subtitle mtext(\"Comparing Petal Dimensions Across Three Iris Species\", side = 3, line = 0.5, cex = 0.8) # Reset plotting parameters par(mar = c(5, 4, 4, 2) + 0.1) # Reset to default margins # Creating multiple plots with consistent styling par(mfrow = c(2, 2), mar = c(4, 4, 3, 1), # Reduced margins bg = \"white\", # White background col.main = \"black\", # Title color col.axis = \"darkgray\", # Axis color col.lab = \"black\", # Label color family = \"serif\") # Font family # Plot 1: Sepal Length Histogram hist(iris$Sepal.Length, main = \"Sepal Length\", xlab = \"Length (cm)\", col = \"#E69F00\", border = \"white\", breaks = 10) # Plot 2: Sepal Width Histogram hist(iris$Sepal.Width, main = \"Sepal Width\", xlab = \"Width (cm)\", col = \"#56B4E9\", border = \"white\", breaks = 10) # Plot 3: Petal Length Histogram hist(iris$Petal.Length, main = \"Petal Length\", xlab = \"Length (cm)\", col = \"#009E73\", border = \"white\", breaks = 10) # Plot 4: Petal Width Histogram hist(iris$Petal.Width, main = \"Petal Width\", xlab = \"Width (cm)\", col = \"#CC79A7\", border = \"white\", breaks = 10) # Reset to default settings par(mfrow = c(1, 1), mar = c(5, 4, 4, 2) + 0.1)    Visualization Makeover   Consider the following base plot code which creates a simple scatter plot:  plot(mtcars$wt, mtcars$mpg)  Describe how you would enhance this visualization to make it more informative and visually appealing. Include specific improvements for each of the following aspects:    Titles and labels    Point styling (color, shape, size)    Additional elements to enhance understanding (e.g., trend line, annotations)    Overall theme and aesthetics    How you would use color to add another dimension of information          Hands-on practice: Create polished single-variable plots   Creating Polished Plots   In this activity, you will create polished, publication-quality visualizations for single variables. While we'll use base R for this exercise, the principles apply to any visualization tool.  Choose one continuous variable and one categorical variable from the built-in datasets (mtcars, iris, etc.) and create polished visualizations for each:  For the continuous variable:    Create a histogram with the following enhancements:   Informative title and axis labels  Appropriate bin width  Pleasing color scheme  Added reference lines for mean and median  Annotations explaining key features     Create a boxplot for the same variable, grouped by another categorical variable, with similar enhancements    For the categorical variable:    Create a bar chart with the following enhancements:   Informative title and axis labels  Ordered bars (by frequency or another meaningful order)  Color scheme that highlights important categories  Value labels on the bars  Explanation of significance in a caption or annotation     Document your code and explain the customization choices you made.     # Example of a polished visualization for a continuous variable # We'll use the mpg variable from mtcars # Load data data(mtcars) # Calculate statistics for reference lines mean_mpg <- mean(mtcars$mpg) median_mpg <- median(mtcars$mpg) # Set up a pleasing color scheme hist_color <- \"#4292c6\" mean_color <- \"#de2d26\" median_color <- \"#31a354\" # Create a polished histogram hist(mtcars$mpg, main = \"Distribution of Fuel Efficiency in 1974 Cars\", xlab = \"Miles Per Gallon (MPG)\", ylab = \"Number of Cars\", col = hist_color, border = \"white\", breaks = 10, xlim = c(10, 35), cex.main = 1.2, cex.lab = 1.1) # Add reference lines for mean and median abline(v = mean_mpg, col = mean_color, lwd = 2, lty = 2) abline(v = median_mpg, col = median_color, lwd = 2, lty = 3) # Add a legend legend(\"topright\", legend = c(paste(\"Mean:\", round(mean_mpg, 1)), paste(\"Median:\", round(median_mpg, 1))), col = c(mean_color, median_color), lwd = 2, lty = c(2, 3), bg = \"white\", cex = 0.9) # Add annotations text(14, 7, \"Low efficiency\\nrange\", cex = 0.8) text(30, 7, \"High efficiency\\nrange\", cex = 0.8) # Add a meaningful caption mtext(\"Most cars in the dataset fall between 15-20 MPG, with a few high-efficiency outliers.\", side = 1, line = 4, cex = 0.8) # Example of a boxplot for the same variable, grouped by cylinder count # First, convert cylinders to a factor for better labels mtcars$cyl_f <- factor(mtcars$cyl, levels = c(4, 6, 8), labels = c(\"4-cylinder\", \"6-cylinder\", \"8-cylinder\")) # Create a custom color palette cyl_colors <- c(\"4-cylinder\" = \"#4daf4a\", \"6-cylinder\" = \"#377eb8\", \"8-cylinder\" = \"#e41a1c\") # Create a polished boxplot boxplot(mpg ~ cyl_f, data = mtcars, main = \"Fuel Efficiency by Engine Size\", xlab = \"Engine Type\", ylab = \"Miles Per Gallon (MPG)\", col = cyl_colors, border = \"gray30\", notch = TRUE, # Add notches for confidence intervals cex.main = 1.2, cex.lab = 1.1, cex.axis = 0.9, outpch = 16, # Solid circle for outliers outcol = \"gray30\") # Add a horizontal line for overall average abline(h = mean(mtcars$mpg), col = \"gray30\", lwd = 1.5, lty = 2) text(3.2, mean(mtcars$mpg) + 1, \"Overall Mean\", cex = 0.8) # Add annotations mtext(\"Notches indicate 95% confidence interval around median\", side = 3, line = 0.3, cex = 0.8) mtext(\"Data source: 1974 Motor Trend US magazine\", side = 1, line = 3, cex = 0.8) # Example of a polished bar chart for a categorical variable # We'll use the number of cars by cylinder count # Calculate the count of cars by cylinder cyl_counts <- table(mtcars$cyl) # Create a data frame for easier manipulation cyl_data <- data.frame( Cylinders = c(\"4-cylinder\", \"6-cylinder\", \"8-cylinder\"), Count = as.numeric(cyl_counts), Percentage = round(100 * as.numeric(cyl_counts) \/ sum(cyl_counts), 1) ) # Sort by count (descending) cyl_data <- cyl_data[order(-cyl_data$Count), ] # Create a polished bar chart barplot(cyl_data$Count, names.arg = cyl_data$Cylinders, main = \"Distribution of Cars by Engine Type\", xlab = \"Engine Type\", ylab = \"Number of Cars\", col = cyl_colors[cyl_data$Cylinders], border = \"white\", ylim = c(0, max(cyl_data$Count) * 1.2), # Make room for labels cex.main = 1.2, cex.lab = 1.1, cex.names = 0.9) # Add count labels on top of bars text(seq(0.7, by = 1.2, length.out = 3), cyl_data$Count + 0.8, paste0(cyl_data$Count, \" (\", cyl_data$Percentage, \"%)\"), cex = 0.9) # Add a caption mtext(\"8-cylinder engines were the most common in the 1974 dataset, reflecting the prevalence of large engines before fuel economy became a priority.\", side = 1, line = 4, cex = 0.8)    Visualization Critique   Examine the following R code and the visualization it creates. Identify three specific ways to improve the visualization and explain why these changes would make the chart more effective.  # Problematic visualization code sales <- c(120, 90, 115, 45, 170) months <- c(\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\") barplot(sales, names.arg = months, col = rainbow(5), main = \"DATA\", border = \"blue\")    Three key improvements for this visualization:  1. Improve the title and add axis labels   Issue : The title \"DATA\" is vague and uninformative. There are no axis labels to indicate what the values represent.  Improvement : Replace with a descriptive title like \"Monthly Sales: January-May 2025\" and add a y-axis label such as \"Sales ($ thousands)\" to clearly communicate what data is being shown.  Why it matters : Proper titles and labels are essential for viewers to understand what they're looking at without requiring additional explanation.   2. Use a more appropriate color scheme   Issue : The rainbow color scheme creates visual confusion by assigning unrelated colors to sequential months, suggesting categorical differences when the data is actually a time series.  Improvement : Use a single color for all bars (since months are part of a sequence) or a sequential color palette if highlighting a trend. Remove the blue borders which add visual noise.  Why it matters : Color should enhance understanding, not distract from it. Rainbow palettes are generally discouraged in data visualization as they can be hard to interpret and problematic for color-blind viewers.   3. Add value labels and context   Issue : The chart lacks context about the dramatic drop in April and subsequent rise in May. There are no exact values shown.  Improvement : Add value labels on top of each bar and include annotations explaining significant changes (e.g., \"April sales dropped due to warehouse closure\"). Consider adding a reference line showing the average sales.  Why it matters : Context and precise values help readers understand not just the pattern but the significance of the data, especially for unexpected values that might otherwise be misinterpreted.   Implementing these changes would transform this basic chart into a more professional, informative visualization that effectively communicates the sales trend.     "
},
{
  "id": "subsec-single-var-viz-3",
  "level": "2",
  "url": "sec-advanced-visualizations.html#subsec-single-var-viz-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "For continuous variables "
},
{
  "id": "subsec-single-var-viz-7",
  "level": "2",
  "url": "sec-advanced-visualizations.html#subsec-single-var-viz-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "For categorical variables "
},
{
  "id": "ex-distribution-viz",
  "level": "2",
  "url": "sec-advanced-visualizations.html#ex-distribution-viz",
  "type": "Checkpoint",
  "number": "97",
  "title": "Distribution Visualization.",
  "body": " Distribution Visualization   For each of the following scenarios, identify the most appropriate visualization type and explain why:     You want to show the distribution of ages in a population, which ranges from 18 to 85 years old.    A histogram or density plot would be most appropriate for visualizing age distribution because:   Age is a continuous variable spanning a wide range (18-85 years)  A histogram would show the frequency of people in different age brackets, revealing the overall shape of the distribution (e.g., whether it's normal, skewed, bimodal)  A density plot would provide a smoother representation of the same information, which might be more interpretable if the sample size is large  These visualizations would reveal important features such as central tendency, spread, and any unusual patterns like clusters around certain ages   While a box plot could also be used, it would provide less detail about the actual distribution shape, which is often important when examining demographic variables like age.      You want to compare the income levels of five different occupational categories.    A box plot would be most appropriate for comparing income levels across occupational categories because:   It allows for comparing distributions of a continuous variable (income) across categories (occupations)  Box plots visually summarize key statistics (median, quartiles, range) that are relevant for income comparisons  Income data often contains outliers, which box plots clearly identify  The visualization makes it easy to compare central tendency (median) and spread (IQR) across the five occupational categories  The compact design allows easy side-by-side comparison even with limited space   Alternative approaches could include violin plots (for more detailed distribution comparison) or grouped\/overlaid density plots, but box plots provide the clearest summary for comparing income distributions across multiple categories.      You want to show the frequency of different blood types (A, B, AB, O) in a patient population.    A bar chart would be most appropriate for showing the frequency of blood types because:   Blood type is a categorical variable with distinct, non-ordinal categories (A, B, AB, O)  Bar charts effectively show counts or proportions for categorical data  The height of each bar provides a clear visual comparison of the relative frequency of each blood type  Labels can be clearly attached to each category  The visualization is intuitive and widely understood, even by audiences without statistical background   A pie chart could also be used since there are only four categories, but bar charts generally allow for more accurate visual comparison of values. If you wanted to further break down the data (such as by Rh factor: positive\/negative), a grouped bar chart would allow for that additional level of detail.    "
},
{
  "id": "ex-visualization-makeover",
  "level": "2",
  "url": "sec-advanced-visualizations.html#ex-visualization-makeover",
  "type": "Checkpoint",
  "number": "98",
  "title": "Visualization Makeover.",
  "body": " Visualization Makeover   Consider the following base plot code which creates a simple scatter plot:  plot(mtcars$wt, mtcars$mpg)  Describe how you would enhance this visualization to make it more informative and visually appealing. Include specific improvements for each of the following aspects:    Titles and labels    Point styling (color, shape, size)    Additional elements to enhance understanding (e.g., trend line, annotations)    Overall theme and aesthetics    How you would use color to add another dimension of information      "
},
{
  "id": "activity-polished-plots",
  "level": "2",
  "url": "sec-advanced-visualizations.html#activity-polished-plots",
  "type": "Activity",
  "number": "24",
  "title": "Creating Polished Plots.",
  "body": " Creating Polished Plots   In this activity, you will create polished, publication-quality visualizations for single variables. While we'll use base R for this exercise, the principles apply to any visualization tool.  Choose one continuous variable and one categorical variable from the built-in datasets (mtcars, iris, etc.) and create polished visualizations for each:  For the continuous variable:    Create a histogram with the following enhancements:   Informative title and axis labels  Appropriate bin width  Pleasing color scheme  Added reference lines for mean and median  Annotations explaining key features     Create a boxplot for the same variable, grouped by another categorical variable, with similar enhancements    For the categorical variable:    Create a bar chart with the following enhancements:   Informative title and axis labels  Ordered bars (by frequency or another meaningful order)  Color scheme that highlights important categories  Value labels on the bars  Explanation of significance in a caption or annotation     Document your code and explain the customization choices you made.   "
},
{
  "id": "ex-visualization-critique",
  "level": "2",
  "url": "sec-advanced-visualizations.html#ex-visualization-critique",
  "type": "Checkpoint",
  "number": "99",
  "title": "Visualization Critique.",
  "body": " Visualization Critique   Examine the following R code and the visualization it creates. Identify three specific ways to improve the visualization and explain why these changes would make the chart more effective.  # Problematic visualization code sales <- c(120, 90, 115, 45, 170) months <- c(\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\") barplot(sales, names.arg = months, col = rainbow(5), main = \"DATA\", border = \"blue\")    Three key improvements for this visualization:  1. Improve the title and add axis labels   Issue : The title \"DATA\" is vague and uninformative. There are no axis labels to indicate what the values represent.  Improvement : Replace with a descriptive title like \"Monthly Sales: January-May 2025\" and add a y-axis label such as \"Sales ($ thousands)\" to clearly communicate what data is being shown.  Why it matters : Proper titles and labels are essential for viewers to understand what they're looking at without requiring additional explanation.   2. Use a more appropriate color scheme   Issue : The rainbow color scheme creates visual confusion by assigning unrelated colors to sequential months, suggesting categorical differences when the data is actually a time series.  Improvement : Use a single color for all bars (since months are part of a sequence) or a sequential color palette if highlighting a trend. Remove the blue borders which add visual noise.  Why it matters : Color should enhance understanding, not distract from it. Rainbow palettes are generally discouraged in data visualization as they can be hard to interpret and problematic for color-blind viewers.   3. Add value labels and context   Issue : The chart lacks context about the dramatic drop in April and subsequent rise in May. There are no exact values shown.  Improvement : Add value labels on top of each bar and include annotations explaining significant changes (e.g., \"April sales dropped due to warehouse closure\"). Consider adding a reference line showing the average sales.  Why it matters : Context and precise values help readers understand not just the pattern but the significance of the data, especially for unexpected values that might otherwise be misinterpreted.   Implementing these changes would transform this basic chart into a more professional, informative visualization that effectively communicates the sales trend.   "
},
{
  "id": "sec-relationships-viz",
  "level": "1",
  "url": "sec-relationships-viz.html",
  "type": "Section",
  "number": "",
  "title": "Relationships between variables",
  "body": " Relationships between variables    Scatter plots, line charts, and heatmaps  Visualizing relationships between variables is essential for identifying patterns, correlations, and potential causal connections in your data. Several plot types are particularly useful for exploring these relationships.   Scatter Plots  Scatter plots display the relationship between two continuous variables by placing each observation as a point on a two-dimensional plane.  Key features and enhancements:   Basic form: points positioned according to their x and y values  Add a trend line to visualize the overall relationship direction  Use color to represent a third categorical variable  Use point size to represent a third continuous variable  Add transparency when plotting many points to show density  Consider adding confidence intervals around trend lines  Add annotations to highlight interesting outliers or patterns     Line Charts  Line charts connect points with lines, emphasizing the continuity or progression between observations. They're especially useful for time series data.  Key features and enhancements:   Basic form: points connected by lines in sequence  Multiple lines can show different categories or series  Use line style (solid, dashed, dotted) to distinguish categories  Add markers at data points for more precision  Consider dual y-axes for variables with different scales (use cautiously)  Highlight important segments or anomalies  Add annotations for key events or turning points     Heatmaps  Heatmaps use color intensity to represent the value of a third variable across a grid defined by two categorical or binned continuous variables.  Key features and enhancements:   Basic form: a grid with cells colored according to their value  Commonly used for correlation matrices  Choose appropriate color scales (sequential, diverging)  Add dendrograms for hierarchical clustering  Include value labels in cells when appropriate  Order rows and columns meaningfully  Consider normalization for better comparison     # Load datasets data(mtcars) data(iris) # Basic scatter plot plot(mtcars$wt, mtcars$mpg, main = \"Car Weight vs. Fuel Efficiency\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\", pch = 19, col = \"darkblue\") # Add a trend line model <- lm(mpg ~ wt, data = mtcars) abline(model, col = \"red\", lwd = 2) # Add model equation and R-squared rsq <- round(summary(model)$r.squared, 2) eq <- paste0(\"mpg = \", round(coef(model)[1], 1), \" + (\", round(coef(model)[2], 1), \" × weight)\") legend(\"topright\", legend = c(eq, paste0(\"R² = \", rsq)), bty = \"n\") # No box around legend # Enhanced scatter plot with color for a third variable # Convert cylinders to a factor cyl_f <- as.factor(mtcars$cyl) # Create a color palette cyl_colors <- c(\"4\" = \"#4DAF4A\", \"6\" = \"#377EB8\", \"8\" = \"#E41A1C\") # Plot with colors by cylinder count plot(mtcars$wt, mtcars$mpg, main = \"Car Weight vs. Fuel Efficiency by Engine Size\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\", pch = 19, col = cyl_colors[cyl_f], cex = 1.2) # Add a legend legend(\"topright\", legend = c(\"4 cylinders\", \"6 cylinders\", \"8 cylinders\"), col = cyl_colors, pch = 19, bty = \"n\", title = \"Engine Type\") # Add separate trend lines for each cylinder group for(cyl in c(4, 6, 8)) { subset_data <- mtcars[mtcars$cyl == cyl, ] if(nrow(subset_data) > 2) { # Need at least 3 points for a meaningful trend model <- lm(mpg ~ wt, data = subset_data) abline(model, col = cyl_colors[as.character(cyl)], lwd = 2, lty = 2) } } # Create a line chart for a time series # Create a simple time series dataset months <- 1:12 temps <- c(35, 37, 45, 55, 65, 75, 82, 80, 72, 60, 48, 38) rainfall <- c(3.2, 2.8, 3.5, 3.9, 4.1, 3.7, 3.0, 2.9, 3.3, 3.2, 3.6, 3.1) # Plot temperature over months plot(months, temps, type = \"b\", # Both points and lines main = \"Monthly Temperature and Rainfall\", xlab = \"Month\", ylab = \"Temperature (°F)\", pch = 19, col = \"red\", xaxt = \"n\", # No x-axis labels yet ylim = c(30, 90)) # Set y limits # Add month names as x-axis labels month_abbr <- c(\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\") axis(1, at = months, labels = month_abbr, las = 2) # Add a second y-axis for rainfall par(new = TRUE) # Add a new plot on top plot(months, rainfall, type = \"b\", pch = 17, col = \"blue\", xlab = \"\", ylab = \"\", xaxt = \"n\", # No second x-axis yaxt = \"n\") # No second y-axis yet # Add the second y-axis axis(4, col = \"blue\", col.axis = \"blue\") mtext(\"Rainfall (inches)\", side = 4, line = 3, col = \"blue\") # Add a legend legend(\"topleft\", legend = c(\"Temperature\", \"Rainfall\"), col = c(\"red\", \"blue\"), pch = c(19, 17), lty = 1, bty = \"n\") # Create a simple correlation heatmap # Calculate the correlation matrix for iris measurements iris_cor <- cor(iris[, 1:4]) # Create a simple heatmap-like visualization # First, create a layout for the visualization layout_matrix <- matrix(c(1, 0, 2), nrow = 1) layout(layout_matrix, widths = c(10, 1, 2)) # Set margins par(mar = c(5, 5, 4, 1)) # Create a color palette for the correlation values col_palette <- colorRampPalette(c(\"#67001F\", \"#B2182B\", \"#D6604D\", \"#F4A582\", \"#FDDBC7\", \"#FFFFFF\", \"#D1E5F0\", \"#92C5DE\", \"#4393C3\", \"#2166AC\", \"#053061\"))(100) # Create a matrix of colors based on correlation values color_indices <- round((iris_cor + 1) * 49) + 1 colors_matrix <- matrix(col_palette[color_indices], nrow = 4) # Create an empty plot plot(0, 0, type = \"n\", xlim = c(0, 4), ylim = c(0, 4), xlab = \"\", ylab = \"\", xaxt = \"n\", yaxt = \"n\", main = \"Correlation Heatmap of Iris Measurements\") # Add variable names variable_names <- c(\"Sepal.Length\", \"Sepal.Width\", \"Petal.Length\", \"Petal.Width\") axis(1, at = 0.5:3.5, labels = variable_names, las = 2) axis(2, at = 3.5:0.5, labels = variable_names, las = 2) # Add colored cells for(i in 1:4) { for(j in 1:4) { rect(j-1, 4-i, j, 5-i, col = colors_matrix[i, j], border = \"white\") # Add correlation values text(j-0.5, 4.5-i, round(iris_cor[i, j], 2), col = ifelse(abs(iris_cor[i, j]) > 0.7, \"white\", \"black\")) } } # Create a color scale legend par(mar = c(5, 1, 4, 3)) plot(0, 0, type = \"n\", xlim = c(0, 1), ylim = c(-1, 1), xlab = \"\", ylab = \"\", xaxt = \"n\", yaxt = \"n\", bty = \"n\") for(i in 1:100) { y_bottom <- -1 + (i-1) * 0.02 y_top <- -1 + i * 0.02 rect(0, y_bottom, 1, y_top, col = col_palette[i], border = NA) } axis(4, at = seq(-1, 1, by = 0.5), las = 2) mtext(\"Correlation\", side = 4, line = 2) # Reset the layout layout(1) par(mar = c(5, 4, 4, 2) + 0.1) # Reset to default margins    Relationship Visualization Selection   For each of the following scenarios, identify the most appropriate plot type for visualizing the relationship and explain why:     You want to visualize how a company's stock price has changed over the past five years, including major company events and market trends.    A line chart would be most appropriate for visualizing stock price changes over time because:   It effectively shows the continuous nature of time series data  The connected points emphasize trends, patterns, and volatility over the five-year period  The x-axis can represent dates in chronological order  The y-axis can show the stock price values  Major company events and market trends can be annotated directly on the chart with vertical lines or text labels  You can easily add visual elements like a moving average line to show underlying trends  It allows viewers to quickly identify peaks, troughs, and periods of stability   Enhancements could include adding reference lines for important financial thresholds, color-coding different time periods (e.g., different fiscal years), and using dual axes to compare with market indices.      You want to examine the correlation between advertising spend and sales across different product categories.    A scatter plot would be most appropriate for examining the correlation between advertising spend and sales because:   It directly visualizes the relationship between two continuous variables (advertising spend and sales)  Each point can represent an observation (e.g., a specific campaign or time period)  The overall pattern reveals the strength and direction of the relationship  You can add trend lines to quantify the relationship through regression  Different product categories can be represented through color or shape, allowing for comparison of relationships across categories  Outliers and unusual cases become immediately visible  The density of points shows where most observations fall   Adding regression lines for each product category would help quantify the different advertising-to-sales relationships, and including confidence intervals around these lines would indicate the reliability of the trends. You could also add a third dimension using point size to represent another relevant variable like market size or profit margin.      You want to analyze the correlation matrix of multiple financial indicators (GDP growth, unemployment rate, inflation, interest rates, stock market returns) across several years.    A heatmap would be most appropriate for analyzing a correlation matrix of financial indicators because:   It efficiently visualizes the entire correlation matrix, showing relationships between all pairs of variables simultaneously  Color intensity provides an intuitive way to understand correlation strength and direction  The grid layout makes it easy to identify patterns, clusters, and outlying relationships  It works well for comparing multiple variables (the various financial indicators)  A diverging color palette (e.g., blue to red) can clearly show positive vs. negative correlations  The correlation values can be displayed directly in the cells  Hierarchical clustering can be added to group similar indicators   Enhancements could include ordering the indicators to highlight meaningful patterns, adding dendrograms to show relationship hierarchies, and using color scales that highlight specific threshold values of correlation (e.g., highlighting correlations above 0.7 or below -0.7).        Visualizing correlations and patterns  Identifying and visualizing correlations and patterns in your data is a critical step in data analysis. Several specialized techniques can help reveal these relationships more clearly.   Correlation Matrices  Correlation matrices show the pairwise correlations between multiple variables. They help identify which variables are strongly related to each other.  Visualization approaches:   Numeric tables with color highlighting  Heatmaps with color intensity representing correlation strength  Network graphs where strongly correlated variables are connected  Hierarchically clustered correlation matrices to show related groups     Scatterplot Matrices  Scatterplot matrices (sometimes called \"sploms\" or \"pairs plots\") show all pairwise relationships between multiple variables simultaneously.  Key features:   Grid of scatterplots showing each variable plotted against every other variable  Diagonal often shows distributions of individual variables  Can be enhanced with trend lines, correlation coefficients, or density plots  Color or shape can represent a categorical grouping variable     Bubble Charts  Bubble charts extend scatter plots by using point size to represent a third continuous variable.  Key features:   X and Y positions show two continuous variables  Point size represents a third continuous variable  Color can represent a fourth categorical variable  Useful for multivariate analysis     Contour Plots and Density Maps  Contour plots and density maps show the density or \"height\" of data points across a two-dimensional space.  Key features:   Useful for visualizing the concentration of data points  Reveals patterns and clusters in dense datasets  Similar to topographic maps with \"elevation\" showing data density  Can be overlaid on scatter plots to enhance them     # Load dataset data(mtcars) # Calculate correlation matrix cor_matrix <- cor(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"drat\", \"wt\", \"qsec\")]) # Round for display round(cor_matrix, 2) # Create a visual correlation matrix with colors # Define a function to create a colored correlation matrix cor_matrix_plot <- function(cormat, title=\"Correlation Matrix\") { # Create a blank plot plot(c(0, 1), c(0, 1), type = \"n\", frame.plot = FALSE, axes = FALSE, xlab = \"\", ylab = \"\", main = title) # Get the number of variables n <- nrow(cormat) # Define a color palette col_palette <- colorRampPalette(c(\"#67001F\", \"#B2182B\", \"#D6604D\", \"#F4A582\", \"#FDDBC7\", \"#FFFFFF\", \"#D1E5F0\", \"#92C5DE\", \"#4393C3\", \"#2166AC\", \"#053061\"))(100) # Get variable names var_names <- colnames(cormat) # Calculate cell positions cell_size <- 1\/n # Draw the cells for(i in 1:n) { for(j in 1:n) { # Calculate coordinates x1 <- (j-1) * cell_size x2 <- j * cell_size y1 <- 1 - i * cell_size y2 <- 1 - (i-1) * cell_size # Map correlation to color col_idx <- round((cormat[i, j] + 1) * 49) + 1 cell_col <- col_palette[col_idx] # Draw the cell rect(x1, y1, x2, y2, col = cell_col, border = \"white\") # Add the correlation value text_col <- ifelse(abs(cormat[i, j]) > 0.7, \"white\", \"black\") text(x1 + cell_size\/2, y1 + cell_size\/2, round(cormat[i, j], 2), col = text_col) } } # Add variable names for(i in 1:n) { # Variable names on the top text(i * cell_size - cell_size\/2, 1 + cell_size\/4, var_names[i], srt = 45, adj = c(1, 1), cex = 0.8) # Variable names on the left text(-cell_size\/4, 1 - i * cell_size + cell_size\/2, var_names[i], adj = c(1, 0.5), cex = 0.8) } } # Create a colored correlation matrix cor_matrix_plot(cor_matrix, \"Car Attributes Correlation Matrix\") # Scatterplot matrix (pairs plot) pairs(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"wt\")], main = \"Scatterplot Matrix of Car Attributes\", pch = 21, bg = ifelse(mtcars$cyl == 4, \"green3\", ifelse(mtcars$cyl == 6, \"blue3\", \"red3\")), cex = 1.2, upper.panel = NULL) # Only show lower panel for simplicity # Add correlation coefficients in the upper panel panel.cor <- function(x, y, digits = 2, cex.cor = 0.8, ...) { usr <- par(\"usr\") on.exit(par(usr)) par(usr = c(0, 1, 0, 1)) r <- round(cor(x, y), digits) txt <- paste0(\"r = \", r) text(0.5, 0.5, txt, cex = cex.cor) } # Improved scatterplot matrix with correlation coefficients pairs(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"wt\")], main = \"Scatterplot Matrix with Correlation Coefficients\", pch = 21, bg = ifelse(mtcars$cyl == 4, \"green3\", ifelse(mtcars$cyl == 6, \"blue3\", \"red3\")), cex = 1.2, lower.panel = panel.smooth, # Smoothed scatter with lowess line upper.panel = panel.cor) # Correlation coefficient # Bubble chart (scatter plot with size) # Create a bubble chart showing mpg vs. hp with weight as bubble size plot(mtcars$hp, mtcars$mpg, main = \"Car Performance Bubble Chart\", xlab = \"Horsepower\", ylab = \"Miles Per Gallon\", type = \"n\") # Empty plot to set up # Add bubbles symbols(mtcars$hp, mtcars$mpg, circles = sqrt(mtcars$wt)\/2, # Size proportional to weight inches = FALSE, fg = \"black\", bg = ifelse(mtcars$cyl == 4, \"#4DAF4A80\", ifelse(mtcars$cyl == 6, \"#377EB880\", \"#E41A1C80\")), add = TRUE) # Add a legend for cylinder count legend(\"topright\", legend = c(\"4 cylinders\", \"6 cylinders\", \"8 cylinders\"), pt.bg = c(\"#4DAF4A80\", \"#377EB880\", \"#E41A1C80\"), pt.cex = 2, pch = 21, title = \"Engine Type\") # Add a legend for bubble size legend(\"topleft\", legend = c(\"Light (2000 lbs)\", \"Medium (3000 lbs)\", \"Heavy (4000 lbs)\"), pt.cex = c(1, 1.5, 2), pch = 21, pt.bg = \"gray\", title = \"Car Weight\") # Contour plot \/ Density map # Create some sample data x <- rnorm(500, mean = 0, sd = 1) y <- rnorm(500, mean = 0, sd = 1) z <- x^2 + y^2 + rnorm(500, mean = 0, sd = 0.5) # Create a scatter plot first plot(x, y, main = \"Contour Plot Example\", xlab = \"X Variable\", ylab = \"Y Variable\", pch = 20, col = \"#00000020\") # Transparent points # Add contour lines contour(kde2d(x, y, n = 50), add = TRUE, col = \"blue\") # Create a filled contour plot (density map) # First, create a new plot for this example filled.contour(kde2d(x, y, n = 50), xlab = \"X Variable\", ylab = \"Y Variable\", main = \"Density Map Example\", color.palette = colorRampPalette(c(\"white\", \"blue\", \"red\", \"darkred\")))    Correlation Pattern Identification   Looking at the correlation matrix and scatterplot matrix for the mtcars dataset, answer the following questions:     Which variables show the strongest negative correlation with miles per gallon (mpg)?    Based on the correlation matrix for the mtcars dataset, the variables with the strongest negative correlations with miles per gallon (mpg) are:   Weight (wt) : Shows a very strong negative correlation (approximately -0.87). This indicates that heavier cars tend to have significantly lower fuel efficiency.  Displacement (disp) : Also shows a strong negative correlation (approximately -0.85). Larger engine displacement is strongly associated with lower miles per gallon.  Horsepower (hp) : Exhibits a strong negative correlation (approximately -0.78). Cars with more horsepower tend to have lower fuel efficiency.   These negative correlations make physical sense as heavier cars require more energy to move, and larger, more powerful engines generally consume more fuel. The scatterplot matrix visually confirms these relationships, showing clear downward trends in the plots of mpg versus these variables.      What patterns do you notice about the relationships between displacement (disp), horsepower (hp), and weight (wt)?    The relationships between displacement (disp), horsepower (hp), and weight (wt) show several clear patterns:   Strong positive correlations : All three variables are strongly positively correlated with each other:  disp and hp: correlation ≈ 0.79-0.90  disp and wt: correlation ≈ 0.89  hp and wt: correlation ≈ 0.66-0.70    Linear relationships : The scatterplots show generally linear relationships among these variables, particularly between displacement and weight.  Clustering by engine size : When colored by cylinder count, the points form distinct clusters in these relationships, with 4-cylinder cars having lower values for all three variables, and 8-cylinder cars having higher values.  Engineering constraints : These correlations reflect physical engineering relationships - larger engines (higher displacement) tend to produce more power (horsepower) and also weigh more. Additionally, cars designed to carry more weight generally need more powerful engines.   These relationships create a reinforcing effect on fuel efficiency: heavier cars need more powerful engines with larger displacement, and all three factors contribute to lower mpg.      How would you describe the relationship between quarter-mile time (qsec) and the other variables?    The quarter-mile time (qsec) shows an interesting pattern of relationships with other variables:   Positive correlation with mpg : qsec has a moderate positive correlation with miles per gallon (approximately 0.42-0.44). This indicates that cars with better fuel efficiency tend to have longer quarter-mile times (slower acceleration).  Negative correlation with performance variables : qsec shows negative correlations with:  Horsepower (hp): approximately -0.71  Displacement (disp): approximately -0.43  This makes intuitive sense as more powerful engines typically provide faster acceleration (lower quarter-mile times).  Weak relationship with weight : The correlation between qsec and weight is negative but relatively weak (around -0.17 to -0.25). This suggests that while heavier cars might be slightly faster in the quarter-mile, weight is not as strong a predictor of acceleration as horsepower.  Complex relationship with rear axle ratio (drat) : qsec shows a weak positive correlation with drat, suggesting that cars with higher rear axle ratios tend to have slightly slower acceleration, though this relationship isn't strong.   Overall, qsec represents a performance trade-off in these cars: vehicles optimized for fuel efficiency (higher mpg) tend to sacrifice acceleration performance (higher qsec), while high-performance vehicles with powerful engines have faster acceleration but lower fuel efficiency.        Activity: Create visualizations showing relationships in data   Relationship Visualization   In this activity, you will create visualizations that effectively show relationships between variables in a dataset. You will use the built-in iris dataset, which contains measurements of sepal length, sepal width, petal length, and petal width for three species of iris flowers.  Your task is to create the following visualizations:    Scatter Plot with Enhancements : Create a scatter plot showing the relationship between petal length and petal width, with the following enhancements:   Color points by species  Add a different shaped marker for each species  Include a trend line for the overall relationship  Add separate trend lines for each species  Include appropriate titles, labels, and a legend  Add text annotations highlighting interesting patterns     Multiple Relationship Visualization : Create a visualization that shows the relationships among all four measurement variables, using one of the following approaches:   A scatterplot matrix with enhanced features  A correlation matrix visualization  A creative alternative that shows multiple relationships simultaneously     Specialized Visualization : Create one of the following specialized relationship visualizations:   A bubble chart showing three variables  A heatmap of the correlation matrix  A line chart showing trends across the three species     For each visualization:   Document your code with comments explaining key decisions  Write a brief interpretation of the patterns or relationships you observe  Explain how your visualization choices enhance understanding of the data      # Example solution for the relationship visualization activity # Using the iris dataset # Load data data(iris) # 1. Enhanced Scatter Plot # ------------------------ # Create a scatter plot of petal dimensions plot(iris$Petal.Length, iris$Petal.Width, main = \"Relationship Between Petal Dimensions\\nAcross Iris Species\", xlab = \"Petal Length (cm)\", ylab = \"Petal Width (cm)\", type = \"n\") # Empty plot first to set up the space # Define colors and shapes for each species species_colors <- c(\"setosa\" = \"#E41A1C\", \"versicolor\" = \"#377EB8\", \"virginica\" = \"#4DAF4A\") species_shapes <- c(\"setosa\" = 16, # Solid circle \"versicolor\" = 17, # Solid triangle \"virginica\" = 15) # Solid square # Add points with different colors and shapes by species for (species in levels(iris$Species)) { subset_data <- iris[iris$Species == species, ] points(subset_data$Petal.Length, subset_data$Petal.Width, col = species_colors[species], pch = species_shapes[species], cex = 1.2) } # Add an overall trend line overall_model <- lm(Petal.Width ~ Petal.Length, data = iris) abline(overall_model, col = \"black\", lwd = 2, lty = 2) # Add trend lines for each species for (species in levels(iris$Species)) { subset_data <- iris[iris$Species == species, ] if (nrow(subset_data) > 2) { # Ensure enough data for a trend line species_model <- lm(Petal.Width ~ Petal.Length, data = subset_data) abline(species_model, col = species_colors[species], lwd = 2) } } # Add a legend legend(\"topleft\", legend = levels(iris$Species), col = unname(species_colors), pch = unname(species_shapes), title = \"Iris Species\", bty = \"n\", cex = 0.9) # Add annotations highlighting interesting patterns text(1.5, 0.3, \"Setosa forms\\na distinct cluster\", cex = 0.8) text(4.5, 1.5, \"Versicolor and Virginica\\nshow overlap but\\ndifferent slopes\", cex = 0.8) arrows(2.0, 0.3, 1.5, 0.2, length = 0.1, angle = 20) arrows(4.0, 1.5, 4.7, 1.7, length = 0.1, angle = 20) # Add R² value for the overall model r_squared <- round(summary(overall_model)$r.squared, 2) text(6.5, 0.5, paste(\"Overall R² =\", r_squared), cex = 0.9) # 2. Multiple Relationship Visualization # ------------------------------------- # Create an enhanced scatterplot matrix par(mar = c(4, 4, 3, 2)) # Adjust margins # Define custom panels panel.hist <- function(x, ...) { usr <- par(\"usr\") on.exit(par(usr)) par(usr = c(usr[1:2], 0, 1.5)) h <- hist(x, plot = FALSE) breaks <- h$breaks nB <- length(breaks) y <- h$counts y <- y\/max(y) rect(breaks[-nB], 0, breaks[-1], y, col = \"lightblue\", ...) } panel.cor <- function(x, y, digits = 2, prefix = \"\", cex.cor = 0.8, ...) { usr <- par(\"usr\"); on.exit(par(usr)) par(usr = c(0, 1, 0, 1)) r <- round(cor(x, y), digits) txt <- paste0(prefix, r) text(0.5, 0.5, txt, cex = cex.cor * abs(r) + 0.5) } panel.scatter <- function(x, y, ...) { points(x, y, col = species_colors[iris$Species], pch = species_shapes[iris$Species], cex = 0.8) } # Create the enhanced scatterplot matrix pairs(iris[, 1:4], main = \"Relationships Among Iris Measurements\", diag.panel = panel.hist, upper.panel = panel.cor, lower.panel = panel.scatter) # Add a legend to the plot par(xpd = TRUE) # Allow plotting outside the figure region legend(0.1, 0.05, legend = levels(iris$Species), col = unname(species_colors), pch = unname(species_shapes), horiz = TRUE, bty = \"n\", cex = 0.8) par(xpd = FALSE) # Reset to default # 3. Specialized Visualization - Bubble Chart # ----------------------------------------- # Create a bubble chart with 3 variables: # X-axis: Sepal.Length, Y-axis: Sepal.Width, Size: Petal.Length # Set up the plot plot(iris$Sepal.Length, iris$Sepal.Width, main = \"Iris Measurements: Sepal Dimensions and Petal Length\", xlab = \"Sepal Length (cm)\", ylab = \"Sepal Width (cm)\", type = \"n\", xlim = c(4, 8), ylim = c(1.5, 4.5)) # Add bubbles for each species for (species in levels(iris$Species)) { subset_data <- iris[iris$Species == species, ] # Size proportional to petal length symbols(subset_data$Sepal.Length, subset_data$Sepal.Width, circles = sqrt(subset_data$Petal.Length)\/2, inches = FALSE, bg = adjustcolor(species_colors[species], alpha.f = 0.7), fg = species_colors[species], add = TRUE) } # Add a legend for species legend(\"topright\", legend = levels(iris$Species), pt.bg = adjustcolor(unname(species_colors), alpha.f = 0.7), pt.cex = 2, pch = 21, title = \"Iris Species\") # Add a legend for bubble size legend(\"bottomright\", legend = c(\"Small Petal (1cm)\", \"Medium Petal (3cm)\", \"Large Petal (6cm)\"), pt.cex = c(0.5, 1.0, 1.5), pch = 21, pt.bg = \"gray80\", title = \"Petal Length\") # Add text annotations describing patterns text(5.0, 4.3, \"Setosa: Shorter petals, wider sepals\", cex = 0.8) text(7.0, 2.5, \"Virginica: Longer petals and sepals\", cex = 0.8) text(6.5, 3.4, \"Versicolor: Intermediate characteristics\", cex = 0.8) # Draw ellipses to highlight clusters library(car) # Note: This wouldn't work in Web-R but would work in a full R environment # Commented out as it requires the 'car' package # for (species in levels(iris$Species)) { # subset_data <- iris[iris$Species == species, ] # dataEllipse(subset_data$Sepal.Length, subset_data$Sepal.Width, # levels = 0.68, add = TRUE, plot.points = FALSE, # center.pch = NULL, col = species_colors[species], lwd = 2) # } # Add interpretation notes at the bottom mtext(\"Note: This visualization shows that Iris species can be distinguished using sepal dimensions,\", side = 1, line = 4, cex = 0.8) mtext(\"with petal length (bubble size) strongly correlated with species classification.\", side = 1, line = 5, cex = 0.8) # Reset plotting parameters par(mar = c(5, 4, 4, 2) + 0.1) # Reset to default margins    Visualization Interpretation   Based on the relationship visualizations you've created or observed, answer the following questions about the iris dataset:     What are the most significant patterns or relationships you can identify among the four measurement variables? Describe at least three specific observations.       How effective are the different visualization types in revealing relationships in this dataset? Which visualization provided the most insight and why?       If you were trying to develop a method to classify iris flowers by species based only on measurements, which variables would be most useful? Explain your reasoning based on the visualizations.       "
},
{
  "id": "ex-relationship-plots",
  "level": "2",
  "url": "sec-relationships-viz.html#ex-relationship-plots",
  "type": "Checkpoint",
  "number": "100",
  "title": "Relationship Visualization Selection.",
  "body": " Relationship Visualization Selection   For each of the following scenarios, identify the most appropriate plot type for visualizing the relationship and explain why:     You want to visualize how a company's stock price has changed over the past five years, including major company events and market trends.    A line chart would be most appropriate for visualizing stock price changes over time because:   It effectively shows the continuous nature of time series data  The connected points emphasize trends, patterns, and volatility over the five-year period  The x-axis can represent dates in chronological order  The y-axis can show the stock price values  Major company events and market trends can be annotated directly on the chart with vertical lines or text labels  You can easily add visual elements like a moving average line to show underlying trends  It allows viewers to quickly identify peaks, troughs, and periods of stability   Enhancements could include adding reference lines for important financial thresholds, color-coding different time periods (e.g., different fiscal years), and using dual axes to compare with market indices.      You want to examine the correlation between advertising spend and sales across different product categories.    A scatter plot would be most appropriate for examining the correlation between advertising spend and sales because:   It directly visualizes the relationship between two continuous variables (advertising spend and sales)  Each point can represent an observation (e.g., a specific campaign or time period)  The overall pattern reveals the strength and direction of the relationship  You can add trend lines to quantify the relationship through regression  Different product categories can be represented through color or shape, allowing for comparison of relationships across categories  Outliers and unusual cases become immediately visible  The density of points shows where most observations fall   Adding regression lines for each product category would help quantify the different advertising-to-sales relationships, and including confidence intervals around these lines would indicate the reliability of the trends. You could also add a third dimension using point size to represent another relevant variable like market size or profit margin.      You want to analyze the correlation matrix of multiple financial indicators (GDP growth, unemployment rate, inflation, interest rates, stock market returns) across several years.    A heatmap would be most appropriate for analyzing a correlation matrix of financial indicators because:   It efficiently visualizes the entire correlation matrix, showing relationships between all pairs of variables simultaneously  Color intensity provides an intuitive way to understand correlation strength and direction  The grid layout makes it easy to identify patterns, clusters, and outlying relationships  It works well for comparing multiple variables (the various financial indicators)  A diverging color palette (e.g., blue to red) can clearly show positive vs. negative correlations  The correlation values can be displayed directly in the cells  Hierarchical clustering can be added to group similar indicators   Enhancements could include ordering the indicators to highlight meaningful patterns, adding dendrograms to show relationship hierarchies, and using color scales that highlight specific threshold values of correlation (e.g., highlighting correlations above 0.7 or below -0.7).    "
},
{
  "id": "ex-correlation-patterns",
  "level": "2",
  "url": "sec-relationships-viz.html#ex-correlation-patterns",
  "type": "Checkpoint",
  "number": "101",
  "title": "Correlation Pattern Identification.",
  "body": " Correlation Pattern Identification   Looking at the correlation matrix and scatterplot matrix for the mtcars dataset, answer the following questions:     Which variables show the strongest negative correlation with miles per gallon (mpg)?    Based on the correlation matrix for the mtcars dataset, the variables with the strongest negative correlations with miles per gallon (mpg) are:   Weight (wt) : Shows a very strong negative correlation (approximately -0.87). This indicates that heavier cars tend to have significantly lower fuel efficiency.  Displacement (disp) : Also shows a strong negative correlation (approximately -0.85). Larger engine displacement is strongly associated with lower miles per gallon.  Horsepower (hp) : Exhibits a strong negative correlation (approximately -0.78). Cars with more horsepower tend to have lower fuel efficiency.   These negative correlations make physical sense as heavier cars require more energy to move, and larger, more powerful engines generally consume more fuel. The scatterplot matrix visually confirms these relationships, showing clear downward trends in the plots of mpg versus these variables.      What patterns do you notice about the relationships between displacement (disp), horsepower (hp), and weight (wt)?    The relationships between displacement (disp), horsepower (hp), and weight (wt) show several clear patterns:   Strong positive correlations : All three variables are strongly positively correlated with each other:  disp and hp: correlation ≈ 0.79-0.90  disp and wt: correlation ≈ 0.89  hp and wt: correlation ≈ 0.66-0.70    Linear relationships : The scatterplots show generally linear relationships among these variables, particularly between displacement and weight.  Clustering by engine size : When colored by cylinder count, the points form distinct clusters in these relationships, with 4-cylinder cars having lower values for all three variables, and 8-cylinder cars having higher values.  Engineering constraints : These correlations reflect physical engineering relationships - larger engines (higher displacement) tend to produce more power (horsepower) and also weigh more. Additionally, cars designed to carry more weight generally need more powerful engines.   These relationships create a reinforcing effect on fuel efficiency: heavier cars need more powerful engines with larger displacement, and all three factors contribute to lower mpg.      How would you describe the relationship between quarter-mile time (qsec) and the other variables?    The quarter-mile time (qsec) shows an interesting pattern of relationships with other variables:   Positive correlation with mpg : qsec has a moderate positive correlation with miles per gallon (approximately 0.42-0.44). This indicates that cars with better fuel efficiency tend to have longer quarter-mile times (slower acceleration).  Negative correlation with performance variables : qsec shows negative correlations with:  Horsepower (hp): approximately -0.71  Displacement (disp): approximately -0.43  This makes intuitive sense as more powerful engines typically provide faster acceleration (lower quarter-mile times).  Weak relationship with weight : The correlation between qsec and weight is negative but relatively weak (around -0.17 to -0.25). This suggests that while heavier cars might be slightly faster in the quarter-mile, weight is not as strong a predictor of acceleration as horsepower.  Complex relationship with rear axle ratio (drat) : qsec shows a weak positive correlation with drat, suggesting that cars with higher rear axle ratios tend to have slightly slower acceleration, though this relationship isn't strong.   Overall, qsec represents a performance trade-off in these cars: vehicles optimized for fuel efficiency (higher mpg) tend to sacrifice acceleration performance (higher qsec), while high-performance vehicles with powerful engines have faster acceleration but lower fuel efficiency.    "
},
{
  "id": "activity-relationship-visualization",
  "level": "2",
  "url": "sec-relationships-viz.html#activity-relationship-visualization",
  "type": "Activity",
  "number": "25",
  "title": "Relationship Visualization.",
  "body": " Relationship Visualization   In this activity, you will create visualizations that effectively show relationships between variables in a dataset. You will use the built-in iris dataset, which contains measurements of sepal length, sepal width, petal length, and petal width for three species of iris flowers.  Your task is to create the following visualizations:    Scatter Plot with Enhancements : Create a scatter plot showing the relationship between petal length and petal width, with the following enhancements:   Color points by species  Add a different shaped marker for each species  Include a trend line for the overall relationship  Add separate trend lines for each species  Include appropriate titles, labels, and a legend  Add text annotations highlighting interesting patterns     Multiple Relationship Visualization : Create a visualization that shows the relationships among all four measurement variables, using one of the following approaches:   A scatterplot matrix with enhanced features  A correlation matrix visualization  A creative alternative that shows multiple relationships simultaneously     Specialized Visualization : Create one of the following specialized relationship visualizations:   A bubble chart showing three variables  A heatmap of the correlation matrix  A line chart showing trends across the three species     For each visualization:   Document your code with comments explaining key decisions  Write a brief interpretation of the patterns or relationships you observe  Explain how your visualization choices enhance understanding of the data    "
},
{
  "id": "ex-viz-interpretation",
  "level": "2",
  "url": "sec-relationships-viz.html#ex-viz-interpretation",
  "type": "Checkpoint",
  "number": "102",
  "title": "Visualization Interpretation.",
  "body": " Visualization Interpretation   Based on the relationship visualizations you've created or observed, answer the following questions about the iris dataset:     What are the most significant patterns or relationships you can identify among the four measurement variables? Describe at least three specific observations.       How effective are the different visualization types in revealing relationships in this dataset? Which visualization provided the most insight and why?       If you were trying to develop a method to classify iris flowers by species based only on measurements, which variables would be most useful? Explain your reasoning based on the visualizations.     "
},
{
  "id": "sec-statistical-analysis",
  "level": "1",
  "url": "sec-statistical-analysis.html",
  "type": "Section",
  "number": "",
  "title": "Statistical Analysis",
  "body": " Statistical Analysis    Measures of center and spread  Descriptive statistics provide a concise summary of the main characteristics of a dataset. They help us understand the central tendency, variability, and distribution of our data.   Measures of Central Tendency  These statistics describe the \"typical\" or \"central\" values in a dataset:    Mean : The arithmetic average of all values, calculated as the sum of values divided by the number of values. Useful for normally distributed data but sensitive to outliers.  In R: mean(x)    Median : The middle value when data is arranged in order. Half the values are above the median and half are below. Less sensitive to outliers than the mean.  In R: median(x)    Mode : The most frequently occurring value. Useful for categorical data but can also be applied to continuous data.  In R (no built-in function): Calculate using frequency tables or density estimation      Measures of Spread (Dispersion)  These statistics describe how values are distributed or how much they vary from the central tendency:    Range : The difference between the maximum and minimum values. Simple but only uses two values, so sensitive to outliers.  In R: max(x) - min(x) or range(x) (returns min and max)    Variance : The average of squared differences from the mean. Measures the spread but is in squared units of the original data.  In R: var(x)    Standard Deviation : The square root of the variance. Represents the typical distance from the mean in the original units.  In R: sd(x)    Interquartile Range (IQR) : The difference between the third quartile (75th percentile) and first quartile (25th percentile). Robust to outliers.  In R: IQR(x)    Quantiles and Percentiles : Values that divide the data into equal portions. Common quantiles include quartiles (dividing into four parts) and percentiles (dividing into 100 parts).  In R: quantile(x) (default: 0%, 25%, 50%, 75%, 100%)      # Descriptive statistics examples in R # Load the built-in datasets data(mtcars) data(iris) # Basic descriptive statistics for a single variable # Miles per gallon from mtcars dataset mpg <- mtcars$mpg # Measures of central tendency mean_mpg <- mean(mpg) median_mpg <- median(mpg) # Mode (R doesn't have a built-in function) # One approach is to use the value with highest density density_mpg <- density(mpg) mode_mpg <- density_mpg$x[which.max(density_mpg$y)] # Print results cat(\"Mean MPG:\", mean_mpg, \"\\n\") cat(\"Median MPG:\", median_mpg, \"\\n\") cat(\"Approximate Mode MPG:\", round(mode_mpg, 2), \"\\n\") # Measures of spread range_mpg <- range(mpg) var_mpg <- var(mpg) sd_mpg <- sd(mpg) iqr_mpg <- IQR(mpg) quantiles_mpg <- quantile(mpg) deciles_mpg <- quantile(mpg, probs = seq(0, 1, 0.1)) # Print results cat(\"\\nRange: [\", range_mpg[1], \",\", range_mpg[2], \"] (width:\", range_mpg[2] - range_mpg[1], \")\\n\") cat(\"Variance:\", var_mpg, \"\\n\") cat(\"Standard Deviation:\", sd_mpg, \"\\n\") cat(\"Interquartile Range:\", iqr_mpg, \"\\n\") cat(\"Quartiles (0%, 25%, 50%, 75%, 100%):\\n\") print(quantiles_mpg) cat(\"Deciles (0%, 10%, 20%, ..., 100%):\\n\") print(deciles_mpg) # The summary() function provides a quick overview cat(\"\\nSummary statistics:\\n\") summary(mpg) # Descriptive statistics by group # Compare sepal length across iris species cat(\"\\nSepal Length by Species:\\n\") aggregate(Sepal.Length ~ Species, data = iris, FUN = mean) aggregate(Sepal.Length ~ Species, data = iris, FUN = median) aggregate(Sepal.Length ~ Species, data = iris, FUN = sd) # Multiple statistics at once cat(\"\\nMultiple statistics at once:\\n\") aggregate(Sepal.Length ~ Species, data = iris, FUN = function(x) c(mean = mean(x), median = median(x), sd = sd(x), n = length(x))) # Comprehensive descriptive statistics for multiple variables # First, create a function to calculate multiple statistics descriptive_stats <- function(x) { # Check if the input is numeric if (!is.numeric(x)) { return(c(n = length(x), n_missing = sum(is.na(x)), n_unique = length(unique(x)))) } # For numeric variables c(n = length(x), n_missing = sum(is.na(x)), mean = mean(x, na.rm = TRUE), median = median(x, na.rm = TRUE), min = min(x, na.rm = TRUE), max = max(x, na.rm = TRUE), range = max(x, na.rm = TRUE) - min(x, na.rm = TRUE), sd = sd(x, na.rm = TRUE), var = var(x, na.rm = TRUE), cv = sd(x, na.rm = TRUE) \/ mean(x, na.rm = TRUE), skew = (mean(x, na.rm = TRUE) - median(x, na.rm = TRUE)) \/ sd(x, na.rm = TRUE), q1 = quantile(x, 0.25, na.rm = TRUE), q3 = quantile(x, 0.75, na.rm = TRUE), iqr = IQR(x, na.rm = TRUE)) } # Apply to all numeric columns in mtcars stats_mtcars <- sapply(mtcars, descriptive_stats) # Transpose for better display t(stats_mtcars[c(\"n\", \"mean\", \"median\", \"min\", \"max\", \"sd\", \"cv\"), ]) # Apply to iris variables grouped by species cat(\"\\nSepal Length Statistics by Species:\\n\") by(iris$Sepal.Length, iris$Species, descriptive_stats) # Creating a custom summary function custom_summary <- function(x) { # Five number summary plus mean and standard deviation c(min = min(x), q1 = quantile(x, 0.25), median = median(x), mean = mean(x), q3 = quantile(x, 0.75), max = max(x), sd = sd(x), n = length(x)) } # Apply to all numeric variables in iris sapply(iris[, 1:4], custom_summary) # Visualizing descriptive statistics # Boxplot shows the five-number summary visually boxplot(Sepal.Length ~ Species, data = iris, main = \"Sepal Length by Species\", xlab = \"Species\", ylab = \"Sepal Length (cm)\", col = c(\"lightpink\", \"lightblue\", \"lightgreen\")) # Add the mean to the boxplot (shown as a point) means <- aggregate(Sepal.Length ~ Species, data = iris, FUN = mean) points(1:3, means$Sepal.Length, pch = 18, col = \"red\", cex = 1.5) # A more comprehensive comparison of central tendency and spread par(mfrow = c(1, 2)) # Boxplot for distribution and five-number summary boxplot(mpg ~ factor(cyl), data = mtcars, main = \"MPG by Cylinder Count\", xlab = \"Number of Cylinders\", ylab = \"Miles Per Gallon\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # Bar plot for means with error bars for standard deviation cyl_means <- aggregate(mpg ~ cyl, data = mtcars, FUN = mean) cyl_sds <- aggregate(mpg ~ cyl, data = mtcars, FUN = sd) cyl_counts <- aggregate(mpg ~ cyl, data = mtcars, FUN = length) # Create bar plot bar_positions <- barplot(cyl_means$mpg, names.arg = cyl_means$cyl, main = \"Mean MPG by Cylinder Count\", xlab = \"Number of Cylinders\", ylab = \"Miles Per Gallon (Mean)\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\"), ylim = c(0, max(cyl_means$mpg + cyl_sds$mpg) * 1.1)) # Add error bars (±1 standard deviation) arrows(bar_positions, cyl_means$mpg - cyl_sds$mpg, bar_positions, cyl_means$mpg + cyl_sds$mpg, angle = 90, code = 3, length = 0.1) # Add sample size text(bar_positions, cyl_means$mpg + cyl_sds$mpg + 1, paste(\"n =\", cyl_counts$mpg), cex = 0.8) # Reset to default plotting parameters par(mfrow = c(1, 1))    Descriptive Statistics Practice   Calculate and interpret the following descriptive statistics for the Petal.Length variable in the iris dataset:     Calculate the mean, median, and standard deviation. What do these values tell you about the distribution of petal lengths?    mean(iris$Petal.Length) # Result: 3.758 median(iris$Petal.Length) # Result: 4.35 sd(iris$Petal.Length) # Result: 1.7653  These statistics reveal key insights about the petal length distribution:   The mean (3.758 cm) is notably lower than the median (4.35 cm), creating a negative skew (skewness ≈ -0.335)  This indicates a distribution with more flowers having longer petals, but with some shorter-petaled flowers pulling the mean down  The standard deviation (1.7653 cm) is relatively large compared to the mean, showing considerable variability in petal length  The coefficient of variation (sd\/mean ≈ 0.47) indicates high dispersion, suggesting the presence of distinct groups within the data   These findings align with what we know about the iris dataset - it contains three species with Setosa having notably shorter petals than Versicolor and Virginica, creating a multimodal distribution rather than a normal one.      Calculate the petal length statistics (mean, median, and standard deviation) for each species separately. What patterns do you observe?    aggregate(Petal.Length ~ Species, data = iris, FUN = function(x) c(mean = mean(x), median = median(x), sd = sd(x))) # Results: # Species mean median sd # setosa 1.462 1.50 0.1737 # versicolor 4.260 4.35 0.4699 # virginica 5.552 5.55 0.5519  These species-specific statistics reveal striking patterns:   Clear separation between species: Each species has distinctly different petal lengths with minimal overlap  Setosa: Very short petals (mean 1.462 cm) with minimal variation (sd 0.1737 cm), making it highly distinguishable  Versicolor: Intermediate petal length (mean 4.260 cm) with moderate variation (sd 0.4699 cm)  Virginica: Longest petals (mean 5.552 cm) with slightly greater variation (sd 0.5519 cm)  Within-species distributions appear normal: For each species, the mean and median are very close, suggesting symmetrical distributions within each group  Increasing variability with length: The standard deviation increases with increasing petal length across species   This explains the negative skew in the overall distribution - it's actually a mixture of three separate, relatively normal distributions with the Setosa group far removed from the others.        Distributions and outliers  Understanding the distribution of your data and identifying outliers are crucial steps in statistical analysis. They help you choose appropriate analytical methods and identify potential data quality issues or interesting anomalies.   Common Distribution Types  Several distribution patterns are frequently encountered in data analysis:    Normal Distribution : Symmetric bell-shaped curve; mean, median, and mode are equal. Common in many natural phenomena and forms the basis for many statistical methods.    Skewed Distributions : Asymmetric with a longer tail on one side:  Right-skewed (positively skewed): Longer tail on the right, mean > median  Left-skewed (negatively skewed): Longer tail on the left, mean < median      Bimodal\/Multimodal Distributions : Two or more peaks, suggesting multiple subgroups or processes in the data.    Uniform Distribution : Equal probability across all values within a range.    Exponential Distribution : Values decrease exponentially from a starting point; common in time-to-event data.      Assessing Distributions  Several methods help analyze the distribution of your data:    Visual Methods :  Histograms and density plots show the overall shape  Q-Q plots compare the distribution to a theoretical normal distribution  Box plots show the five-number summary and highlight potential outliers      Numerical Methods :  Comparison of mean and median (for skewness)  Skewness and kurtosis statistics  Normality tests (e.g., Shapiro-Wilk test)        Identifying and Handling Outliers  Outliers are values that differ significantly from other observations and may influence statistical analyses.  Methods for identifying outliers:    Visual inspection using box plots, scatter plots, or histograms    Z-scores : Standardized values, with |z| > 3 often considered outliers for normally distributed data    IQR method : Values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR are potential outliers    Modified Z-scores : Based on median absolute deviation, more robust for skewed data    Statistical tests such as Grubbs' test or Dixon's Q test    Options for handling outliers:    Investigate the cause of outliers (measurement error, data entry error, or a genuine extreme value)    Retain outliers if they represent valid observations    Remove outliers if they are errors or will severely impact analysis (with clear documentation)    Transform the data (e.g., log transformation) to reduce the impact of outliers    Use robust statistical methods that are less sensitive to outliers    Winsorize extreme values by replacing them with less extreme values (e.g., the 5th or 95th percentile)      # Analyzing distributions and outliers in R # Load necessary data data(mtcars) data(iris) # Create some example distributions # Normal distribution set.seed(123) normal_data <- rnorm(1000, mean = 50, sd = 10) # Right-skewed distribution right_skewed <- exp(rnorm(1000, mean = 1, sd = 0.5)) # Left-skewed distribution left_skewed <- 100 - exp(rnorm(1000, mean = 1, sd = 0.5)) # Bimodal distribution bimodal <- c(rnorm(500, mean = 40, sd = 5), rnorm(500, mean = 70, sd = 5)) # Uniform distribution uniform <- runif(1000, min = 0, max = 100) # Create a function to plot distributions plot_distribution <- function(data, title) { # Set up a layout with 2 rows and 2 columns par(mfrow = c(2, 2)) # Histogram hist(data, main = paste(\"Histogram of\", title), xlab = \"Value\", col = \"lightblue\", border = \"white\", breaks = 30) # Density plot plot(density(data), main = paste(\"Density Plot of\", title), xlab = \"Value\", ylab = \"Density\", col = \"blue\", lwd = 2) # Add vertical lines for mean and median abline(v = mean(data), col = \"red\", lwd = 2, lty = 1) abline(v = median(data), col = \"green\", lwd = 2, lty = 2) legend(\"topright\", legend = c(\"Density\", \"Mean\", \"Median\"), col = c(\"blue\", \"red\", \"green\"), lwd = 2, lty = c(1, 1, 2), bty = \"n\") # Boxplot boxplot(data, main = paste(\"Boxplot of\", title), ylab = \"Value\", col = \"lightblue\") # Q-Q plot (comparing to normal distribution) qqnorm(data, main = paste(\"Q-Q Plot of\", title)) qqline(data, col = \"red\", lwd = 2) # Reset plotting parameters par(mfrow = c(1, 1)) # Calculate and print summary statistics cat(\"\\nSummary Statistics for\", title, \"Distribution:\\n\") cat(\"Mean:\", mean(data), \"\\n\") cat(\"Median:\", median(data), \"\\n\") cat(\"Standard Deviation:\", sd(data), \"\\n\") cat(\"Skewness:\", (mean(data) - median(data)) \/ sd(data), \"\\n\") cat(\"Range:\", range(data), \"\\n\") cat(\"IQR:\", IQR(data), \"\\n\") # Perform Shapiro-Wilk test for normality sw_test <- shapiro.test(data) cat(\"Shapiro-Wilk normality test p-value:\", sw_test$p.value, \"\\n\") cat(\"Interpretation: \", ifelse(sw_test$p.value < 0.05, \"Reject normality\", \"Cannot reject normality\"), \"\\n\\n\") } # Plot and analyze each distribution plot_distribution(normal_data, \"Normal\") plot_distribution(right_skewed, \"Right-Skewed\") plot_distribution(left_skewed, \"Left-Skewed\") plot_distribution(bimodal, \"Bimodal\") plot_distribution(uniform, \"Uniform\") # Compare distributions visually par(mfrow = c(1, 1)) plot(density(normal_data), main = \"Comparison of Different Distributions\", xlab = \"Value\", ylab = \"Density\", col = \"black\", lwd = 2, xlim = c(0, 100), ylim = c(0, 0.08)) lines(density(right_skewed), col = \"red\", lwd = 2) lines(density(left_skewed), col = \"blue\", lwd = 2) lines(density(bimodal), col = \"green\", lwd = 2) lines(density(uniform), col = \"purple\", lwd = 2) legend(\"topright\", legend = c(\"Normal\", \"Right-Skewed\", \"Left-Skewed\", \"Bimodal\", \"Uniform\"), col = c(\"black\", \"red\", \"blue\", \"green\", \"purple\"), lwd = 2, bty = \"n\") # Outlier Detection Techniques # Create a dataset with outliers set.seed(456) data_with_outliers <- c(rnorm(95, mean = 50, sd = 10), c(5, 10, 95, 100, 120)) # Adding 5 outliers # Method 1: Visualize with boxplot boxplot(data_with_outliers, main = \"Boxplot for Outlier Detection\", ylab = \"Value\", col = \"lightblue\") # Method 2: Z-score method z_scores <- (data_with_outliers - mean(data_with_outliers)) \/ sd(data_with_outliers) outliers_z <- data_with_outliers[abs(z_scores) > 3] cat(\"Outliers detected using Z-score method (|z| > 3):\\n\") print(outliers_z) # Method 3: IQR method Q1 <- quantile(data_with_outliers, 0.25) Q3 <- quantile(data_with_outliers, 0.75) IQR_value <- Q3 - Q1 lower_bound <- Q1 - 1.5 * IQR_value upper_bound <- Q3 + 1.5 * IQR_value outliers_iqr <- data_with_outliers[data_with_outliers < lower_bound | data_with_outliers > upper_bound] cat(\"\\nOutliers detected using IQR method (outside Q1-1.5*IQR to Q3+1.5*IQR):\\n\") print(outliers_iqr) # Visualize the outlier detection methods hist(data_with_outliers, main = \"Histogram with Outlier Boundaries\", xlab = \"Value\", col = \"lightblue\", breaks = 30) # Add vertical lines for Z-score boundaries z_lower <- mean(data_with_outliers) - 3 * sd(data_with_outliers) z_upper <- mean(data_with_outliers) + 3 * sd(data_with_outliers) abline(v = z_lower, col = \"red\", lwd = 2, lty = 2) abline(v = z_upper, col = \"red\", lwd = 2, lty = 2) # Add vertical lines for IQR boundaries abline(v = lower_bound, col = \"blue\", lwd = 2, lty = 3) abline(v = upper_bound, col = \"blue\", lwd = 2, lty = 3) # Add a legend legend(\"topright\", legend = c(\"Z-score boundaries (±3 SD)\", \"IQR boundaries (1.5 IQR)\"), col = c(\"red\", \"blue\"), lwd = 2, lty = c(2, 3), bty = \"n\") # Compare the effect of outliers on mean and median cat(\"\\nEffect of outliers on central tendency measures:\\n\") cat(\"Original data with outliers:\\n\") cat(\" Mean:\", mean(data_with_outliers), \"\\n\") cat(\" Median:\", median(data_with_outliers), \"\\n\") # Remove outliers and recalculate data_no_outliers <- data_with_outliers[!(data_with_outliers %in% outliers_iqr)] cat(\"After removing outliers (IQR method):\\n\") cat(\" Mean:\", mean(data_no_outliers), \"\\n\") cat(\" Median:\", median(data_no_outliers), \"\\n\") cat(\" Difference in mean:\", mean(data_with_outliers) - mean(data_no_outliers), \"\\n\") cat(\" Difference in median:\", median(data_with_outliers) - median(data_no_outliers), \"\\n\") # Demonstrate Winsorization (replacing outliers with percentile values) # 5th percentile and 95th percentile p05 <- quantile(data_with_outliers, 0.05) p95 <- quantile(data_with_outliers, 0.95) # Winsorize the data data_winsorized <- data_with_outliers data_winsorized[data_winsorized < p05] <- p05 data_winsorized[data_winsorized > p95] <- p95 cat(\"\\nAfter Winsorizing (5th to 95th percentile):\\n\") cat(\" Mean:\", mean(data_winsorized), \"\\n\") cat(\" Median:\", median(data_winsorized), \"\\n\") # Compare the different handling methods visually par(mfrow = c(3, 1)) # Original data with outliers boxplot(data_with_outliers, main = \"Original Data with Outliers\", ylab = \"Value\", col = \"lightcoral\") # Data with outliers removed boxplot(data_no_outliers, main = \"Data with Outliers Removed\", ylab = \"Value\", col = \"lightblue\") # Winsorized data boxplot(data_winsorized, main = \"Winsorized Data (5th to 95th percentile)\", ylab = \"Value\", col = \"lightgreen\") # Reset plotting parameters par(mfrow = c(1, 1)) # Real-world example: Detecting outliers in mtcars data # Let's analyze MPG mpg <- mtcars$mpg # Create a boxplot boxplot(mpg ~ factor(mtcars$cyl), main = \"MPG by Cylinder Count\", xlab = \"Number of Cylinders\", ylab = \"Miles Per Gallon\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # Detect outliers by group using IQR method detect_outliers_by_group <- function(data, group_var, var_name) { # Split the data by group groups <- split(data[[var_name]], data[[group_var]]) # Detect outliers in each group outliers_by_group <- list() for (group_name in names(groups)) { values <- groups[[group_name]] Q1 <- quantile(values, 0.25) Q3 <- quantile(values, 0.75) IQR_value <- Q3 - Q1 lower_bound <- Q1 - 1.5 * IQR_value upper_bound <- Q3 + 1.5 * IQR_value # Find outliers outlier_values <- values[values < lower_bound | values > upper_bound] if (length(outlier_values) > 0) { # Find the row indices of outliers outlier_indices <- which(data[[group_var]] == group_name & (data[[var_name]] < lower_bound | data[[var_name]] > upper_bound)) outliers_by_group[[group_name]] <- list( indices = outlier_indices, values = outlier_values, bounds = c(lower = lower_bound, upper = upper_bound) ) } } return(outliers_by_group) } # Detect outliers in MPG by cylinder group mpg_outliers <- detect_outliers_by_group(mtcars, \"cyl\", \"mpg\") # Print the results cat(\"\\nOutliers in MPG by Cylinder Group:\\n\") for (cyl in names(mpg_outliers)) { if (length(mpg_outliers[[cyl]]$values) > 0) { cat(\"Cylinder group\", cyl, \":\\n\") cat(\" Number of outliers:\", length(mpg_outliers[[cyl]]$values), \"\\n\") cat(\" Outlier values:\", mpg_outliers[[cyl]]$values, \"\\n\") cat(\" Bounds: [\", mpg_outliers[[cyl]]$bounds[\"lower\"], \",\", mpg_outliers[[cyl]]$bounds[\"upper\"], \"]\\n\") cat(\" Car models:\", rownames(mtcars)[mpg_outliers[[cyl]]$indices], \"\\n\\n\") } else { cat(\"Cylinder group\", cyl, \": No outliers detected\\n\") } }    Distribution Analysis   Analyze the distribution of the petal width variable in the iris dataset, addressing the following questions:     Based on visual inspection and descriptive statistics, what type of distribution does petal width follow? Explain your reasoning.    The petal width distribution in the iris dataset shows clear characteristics of a bimodal (or potentially trimodal) distribution:   Visual inspection of a histogram or density plot reveals distinct peaks rather than a single bell curve  Descriptive statistics show that while the overall mean is approximately 1.20 cm and the median is 1.30 cm, these central tendency measures are not representative of the actual data distribution  The distribution fails normality tests (e.g., Shapiro-Wilk) with p-values well below 0.05  The relatively large standard deviation (approximately 0.76 cm) compared to the mean indicates high variability  There's a notable gap in the frequency distribution around 0.6-1.0 cm   This multimodal pattern reflects the dataset's composition of three distinct iris species with different petal width characteristics:  Setosa: narrow petals, clustering around 0.2-0.3 cm  Versicolor: medium petals, clustering around 1.2-1.3 cm  Virginica: wider petals, clustering around 1.8-2.0 cm    This is a classic example of how combining distinct subpopulations creates a multimodal distribution, making overall measures of central tendency potentially misleading without considering the subgroup structure.      Are there any outliers in the petal width measurements? If so, identify them and discuss whether they should be removed or retained for analysis.    When analyzing the iris dataset's petal width for outliers:  Initial analysis across all species:   Using the IQR method (Q1 - 1.5*IQR to Q3 + 1.5*IQR) on the full dataset might identify some values as statistical outliers  However, this approach is problematic because we're dealing with a multimodal distribution representing three distinct species   Species-specific analysis:   When examining each species separately, very few or no outliers are detected  For Setosa: The petal widths are tightly clustered around 0.2-0.3 cm with minimal variation  For Versicolor: Measurements are generally between 1.0-1.5 cm with no extreme values  For Virginica: Measurements typically range from 1.4-2.3 cm, possibly with 1-2 mild outliers   Recommendation:   Any outliers identified should be retained for analysis because:   They appear to be valid biological measurements, not errors  They represent natural variation within species  The sample size per species is relatively small (50 each), making each observation valuable  These measurements are important for understanding the full range of morphological variation     The key insight is that proper outlier detection requires considering the underlying structure of the data. In this case, analyzing by species provides a more appropriate context for identifying true outliers versus natural group differences.        Exercise: Statistical summary of datasets   Comprehensive Statistical Analysis   In this activity, you will perform a comprehensive statistical analysis of the built-in mtcars dataset, focusing on fuel efficiency (mpg) and its relationship with other car attributes.  Your task is to:    Perform a descriptive statistical analysis of the mpg variable:   Calculate measures of central tendency (mean, median, mode)  Calculate measures of dispersion (range, variance, standard deviation, IQR)  Determine the distribution shape (visually and using skewness\/kurtosis)  Identify any potential outliers     Analyze how mpg varies across different categorical variables:   Number of cylinders (cyl)  Transmission type (am: 0 = automatic, 1 = manual)  V\/S (vs: 0 = V-shaped, 1 = straight engine)     Examine the relationship between mpg and other continuous variables:   Weight (wt)  Horsepower (hp)  Displacement (disp)     Create appropriate visualizations to support your analysis    Write a brief summary of your findings, including the most significant factors influencing fuel efficiency    Document your code with comments and explain your analytical choices.     # Comprehensive Statistical Analysis of the mtcars dataset # Focus on fuel efficiency (mpg) # Load the data data(mtcars) # Add row names as a column for easier filtering mtcars$car_name <- rownames(mtcars) # 1. Descriptive statistical analysis of mpg # ----------------------------------------- # Basic summary statistics mpg_summary <- summary(mtcars$mpg) print(mpg_summary) # Calculate additional statistics mpg_stats <- c( n = length(mtcars$mpg), mean = mean(mtcars$mpg), median = median(mtcars$mpg), sd = sd(mtcars$mpg), var = var(mtcars$mpg), min = min(mtcars$mpg), max = max(mtcars$mpg), range = max(mtcars$mpg) - min(mtcars$mpg), IQR = IQR(mtcars$mpg), q1 = quantile(mtcars$mpg, 0.25), q3 = quantile(mtcars$mpg, 0.75) ) # Calculate approximate skewness skewness_approx <- (mean(mtcars$mpg) - median(mtcars$mpg)) \/ sd(mtcars$mpg) mpg_stats[\"skewness_approx\"] <- skewness_approx # Print the statistics print(mpg_stats) # Visualize the distribution of mpg par(mfrow = c(2, 2)) # Histogram hist(mtcars$mpg, main = \"Distribution of Fuel Efficiency\", xlab = \"Miles Per Gallon\", col = \"lightblue\", breaks = 10) # Density plot plot(density(mtcars$mpg), main = \"Density Plot of MPG\", xlab = \"Miles Per Gallon\", col = \"blue\", lwd = 2) abline(v = mean(mtcars$mpg), col = \"red\", lwd = 2, lty = 2) abline(v = median(mtcars$mpg), col = \"green\", lwd = 2, lty = 3) legend(\"topright\", legend = c(\"Density\", \"Mean\", \"Median\"), col = c(\"blue\", \"red\", \"green\"), lwd = 2, lty = c(1, 2, 3), bty = \"n\") # Boxplot boxplot(mtcars$mpg, main = \"Boxplot of MPG\", ylab = \"Miles Per Gallon\", col = \"lightblue\") # Q-Q plot qqnorm(mtcars$mpg, main = \"Q-Q Plot of MPG\") qqline(mtcars$mpg, col = \"red\") # Reset plot layout par(mfrow = c(1, 1)) # Check for outliers using the IQR method q1 <- quantile(mtcars$mpg, 0.25) q3 <- quantile(mtcars$mpg, 0.75) iqr <- q3 - q1 lower_bound <- q1 - 1.5 * iqr upper_bound <- q3 + 1.5 * iqr # Identify outliers mpg_outliers <- mtcars[mtcars$mpg < lower_bound | mtcars$mpg > upper_bound, ] if(nrow(mpg_outliers) > 0) { cat(\"\\nPotential MPG outliers:\\n\") print(mpg_outliers[, c(\"car_name\", \"mpg\")]) } else { cat(\"\\nNo MPG outliers detected using the IQR method.\\n\") } # 2. Analyze how mpg varies across different categorical variables # -------------------------------------------------------------- # Convert factors for better analysis and plotting mtcars$cyl_f <- as.factor(mtcars$cyl) mtcars$am_f <- factor(mtcars$am, labels = c(\"Automatic\", \"Manual\")) mtcars$vs_f <- factor(mtcars$vs, labels = c(\"V-shaped\", \"Straight\")) # Function to calculate statistics by group group_stats <- function(data, group_var, value_var) { stats <- aggregate(data[[value_var]] ~ data[[group_var]], FUN = function(x) c(n = length(x), mean = mean(x), median = median(x), sd = sd(x), min = min(x), max = max(x))) return(stats) } # MPG by number of cylinders mpg_by_cyl <- group_stats(mtcars, \"cyl_f\", \"mpg\") colnames(mpg_by_cyl) <- c(\"Cylinders\", \"n\", \"Mean\", \"Median\", \"SD\", \"Min\", \"Max\") cat(\"\\nMPG statistics by number of cylinders:\\n\") print(mpg_by_cyl) # MPG by transmission type mpg_by_am <- group_stats(mtcars, \"am_f\", \"mpg\") colnames(mpg_by_am) <- c(\"Transmission\", \"n\", \"Mean\", \"Median\", \"SD\", \"Min\", \"Max\") cat(\"\\nMPG statistics by transmission type:\\n\") print(mpg_by_am) # MPG by engine shape mpg_by_vs <- group_stats(mtcars, \"vs_f\", \"mpg\") colnames(mpg_by_vs) <- c(\"Engine Shape\", \"n\", \"Mean\", \"Median\", \"SD\", \"Min\", \"Max\") cat(\"\\nMPG statistics by engine shape:\\n\") print(mpg_by_vs) # Visualize MPG by categorical variables par(mfrow = c(1, 3)) # MPG by cylinder count boxplot(mpg ~ cyl_f, data = mtcars, main = \"MPG by Number of Cylinders\", xlab = \"Number of Cylinders\", ylab = \"Miles Per Gallon\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # MPG by transmission type boxplot(mpg ~ am_f, data = mtcars, main = \"MPG by Transmission Type\", xlab = \"Transmission\", ylab = \"Miles Per Gallon\", col = c(\"lightblue\", \"lightgreen\")) # MPG by engine shape boxplot(mpg ~ vs_f, data = mtcars, main = \"MPG by Engine Shape\", xlab = \"Engine Shape\", ylab = \"Miles Per Gallon\", col = c(\"lightpink\", \"lightblue\")) # Reset plot layout par(mfrow = c(1, 1)) # 3. Examine the relationship between mpg and continuous variables # -------------------------------------------------------------- # Calculate correlations cor_vars <- c(\"mpg\", \"wt\", \"hp\", \"disp\") cor_matrix <- cor(mtcars[, cor_vars]) cat(\"\\nCorrelation matrix:\\n\") print(round(cor_matrix, 3)) # Visualize relationships with scatter plots par(mfrow = c(2, 2)) # MPG vs. Weight plot(mtcars$wt, mtcars$mpg, main = \"MPG vs. Weight\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\", pch = 19, col = \"darkblue\") # Add regression line abline(lm(mpg ~ wt, data = mtcars), col = \"red\", lwd = 2) # Add correlation coefficient text(4, 30, paste(\"r =\", round(cor(mtcars$mpg, mtcars$wt), 2)), pos = 4) # MPG vs. Horsepower plot(mtcars$hp, mtcars$mpg, main = \"MPG vs. Horsepower\", xlab = \"Horsepower\", ylab = \"Miles Per Gallon\", pch = 19, col = \"darkgreen\") # Add regression line abline(lm(mpg ~ hp, data = mtcars), col = \"red\", lwd = 2) # Add correlation coefficient text(250, 30, paste(\"r =\", round(cor(mtcars$mpg, mtcars$hp), 2)), pos = 4) # MPG vs. Displacement plot(mtcars$disp, mtcars$mpg, main = \"MPG vs. Displacement\", xlab = \"Displacement (cu. in.)\", ylab = \"Miles Per Gallon\", pch = 19, col = \"darkred\") # Add regression line abline(lm(mpg ~ disp, data = mtcars), col = \"blue\", lwd = 2) # Add correlation coefficient text(350, 30, paste(\"r =\", round(cor(mtcars$mpg, mtcars$disp), 2)), pos = 4) # MPG vs. all three variables (bubble chart) # Weight on x-axis, MPG on y-axis, bubble size proportional to horsepower, color by cylinder plot(mtcars$wt, mtcars$mpg, type = \"n\", # Empty plot main = \"MPG vs. Weight, Horsepower, and Cylinders\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\") # Define colors for cylinders cyl_colors <- c(\"4\" = \"green3\", \"6\" = \"blue3\", \"8\" = \"red3\") # Add bubbles symbols(mtcars$wt, mtcars$mpg, circles = sqrt(mtcars$hp)\/10, # Size proportional to horsepower inches = FALSE, bg = cyl_colors[as.character(mtcars$cyl)], fg = \"black\", add = TRUE) # Add a legend legend(\"topright\", legend = c(\"4 cylinders\", \"6 cylinders\", \"8 cylinders\"), pt.bg = cyl_colors, pt.cex = 2, pch = 21, title = \"Cylinder Count\") # Reset plot layout par(mfrow = c(1, 1)) # 5. Summary of findings # -------------------- cat(\"\\n========================================================\\n\") cat(\"SUMMARY OF FINDINGS: FACTORS INFLUENCING FUEL EFFICIENCY\\n\") cat(\"========================================================\\n\\n\") cat(\"1. Overall MPG Distribution:\\n\") cat(\" - Average fuel efficiency: \", round(mean(mtcars$mpg), 1), \" MPG\\n\") cat(\" - Range: \", min(mtcars$mpg), \" to \", max(mtcars$mpg), \" MPG\\n\") cat(\" - Distribution appears slightly right-skewed (more cars with lower MPG)\\n\\n\") cat(\"2. Key Categorical Factors:\\n\") cat(\" - Number of cylinders has a strong impact on MPG:\\n\") cat(\" * 4-cylinder cars average \", round(mpg_by_cyl[1, \"Mean\"], 1), \" MPG\\n\") cat(\" * 6-cylinder cars average \", round(mpg_by_cyl[2, \"Mean\"], 1), \" MPG\\n\") cat(\" * 8-cylinder cars average \", round(mpg_by_cyl[3, \"Mean\"], 1), \" MPG\\n\\n\") cat(\" - Transmission type shows a significant difference:\\n\") cat(\" * Manual transmission cars average \", round(mpg_by_am[2, \"Mean\"], 1), \" MPG\\n\") cat(\" * Automatic transmission cars average \", round(mpg_by_am[1, \"Mean\"], 1), \" MPG\\n\\n\") cat(\" - Engine shape also correlates with efficiency:\\n\") cat(\" * Straight engines average \", round(mpg_by_vs[2, \"Mean\"], 1), \" MPG\\n\") cat(\" * V-shaped engines average \", round(mpg_by_vs[1, \"Mean\"], 1), \" MPG\\n\\n\") cat(\"3. Key Continuous Factors:\\n\") cat(\" - Weight has the strongest negative correlation with MPG (r = \", round(cor(mtcars$mpg, mtcars$wt), 2), \")\\n\") cat(\" - Displacement also strongly negatively correlates with MPG (r = \", round(cor(mtcars$mpg, mtcars$disp), 2), \")\\n\") cat(\" - Horsepower shows a significant negative correlation with MPG (r = \", round(cor(mtcars$mpg, mtcars$hp), 2), \")\\n\\n\") cat(\"4. Multivariate Relationships:\\n\") cat(\" - The bubble chart reveals that cars with:\\n\") cat(\" * Lower weight, lower horsepower, and fewer cylinders tend to have the highest MPG\\n\") cat(\" * Higher weight, higher horsepower, and more cylinders tend to have the lowest MPG\\n\\n\") cat(\"5. Conclusions:\\n\") cat(\" - Weight appears to be the most influential factor affecting fuel efficiency\\n\") cat(\" - Engine characteristics (cylinders, displacement, shape) also play significant roles\\n\") cat(\" - Manual transmission cars tend to be more fuel-efficient than automatics\\n\") cat(\" - The data suggests trade-offs between performance (horsepower) and efficiency (MPG)\\n\")    Statistical Interpretation   Based on the comprehensive statistical analysis of the mtcars dataset, answer the following questions:     What are the three most influential factors affecting fuel efficiency (mpg) in this dataset? Provide specific statistical evidence to support your answer.       Is manual transmission associated with better fuel efficiency than automatic transmission? Analyze the data to provide a nuanced answer that considers potential confounding factors.       Based on the statistical analysis, what characteristics would you expect a car with high fuel efficiency (>25 mpg) to have? Support your answer with specific data from the analysis.       "
},
{
  "id": "subsec-descriptive-stats-3-3-1-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-descriptive-stats-3-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mean "
},
{
  "id": "subsec-descriptive-stats-3-3-2-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-descriptive-stats-3-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Median "
},
{
  "id": "subsec-descriptive-stats-3-3-3-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-descriptive-stats-3-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mode "
},
{
  "id": "subsec-descriptive-stats-4-3-1-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-descriptive-stats-4-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Range "
},
{
  "id": "subsec-descriptive-stats-4-3-2-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-descriptive-stats-4-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Variance "
},
{
  "id": "subsec-descriptive-stats-4-3-3-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-descriptive-stats-4-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Standard Deviation "
},
{
  "id": "subsec-descriptive-stats-4-3-4-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-descriptive-stats-4-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Interquartile Range (IQR) "
},
{
  "id": "subsec-descriptive-stats-4-3-5-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-descriptive-stats-4-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quantiles and Percentiles "
},
{
  "id": "ex-descriptive-stats",
  "level": "2",
  "url": "sec-statistical-analysis.html#ex-descriptive-stats",
  "type": "Checkpoint",
  "number": "103",
  "title": "Descriptive Statistics Practice.",
  "body": " Descriptive Statistics Practice   Calculate and interpret the following descriptive statistics for the Petal.Length variable in the iris dataset:     Calculate the mean, median, and standard deviation. What do these values tell you about the distribution of petal lengths?    mean(iris$Petal.Length) # Result: 3.758 median(iris$Petal.Length) # Result: 4.35 sd(iris$Petal.Length) # Result: 1.7653  These statistics reveal key insights about the petal length distribution:   The mean (3.758 cm) is notably lower than the median (4.35 cm), creating a negative skew (skewness ≈ -0.335)  This indicates a distribution with more flowers having longer petals, but with some shorter-petaled flowers pulling the mean down  The standard deviation (1.7653 cm) is relatively large compared to the mean, showing considerable variability in petal length  The coefficient of variation (sd\/mean ≈ 0.47) indicates high dispersion, suggesting the presence of distinct groups within the data   These findings align with what we know about the iris dataset - it contains three species with Setosa having notably shorter petals than Versicolor and Virginica, creating a multimodal distribution rather than a normal one.      Calculate the petal length statistics (mean, median, and standard deviation) for each species separately. What patterns do you observe?    aggregate(Petal.Length ~ Species, data = iris, FUN = function(x) c(mean = mean(x), median = median(x), sd = sd(x))) # Results: # Species mean median sd # setosa 1.462 1.50 0.1737 # versicolor 4.260 4.35 0.4699 # virginica 5.552 5.55 0.5519  These species-specific statistics reveal striking patterns:   Clear separation between species: Each species has distinctly different petal lengths with minimal overlap  Setosa: Very short petals (mean 1.462 cm) with minimal variation (sd 0.1737 cm), making it highly distinguishable  Versicolor: Intermediate petal length (mean 4.260 cm) with moderate variation (sd 0.4699 cm)  Virginica: Longest petals (mean 5.552 cm) with slightly greater variation (sd 0.5519 cm)  Within-species distributions appear normal: For each species, the mean and median are very close, suggesting symmetrical distributions within each group  Increasing variability with length: The standard deviation increases with increasing petal length across species   This explains the negative skew in the overall distribution - it's actually a mixture of three separate, relatively normal distributions with the Setosa group far removed from the others.    "
},
{
  "id": "subsec-distributions-outliers-3-3-1-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-3-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Normal Distribution "
},
{
  "id": "subsec-distributions-outliers-3-3-2-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-3-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Skewed Distributions "
},
{
  "id": "subsec-distributions-outliers-3-3-3-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-3-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bimodal\/Multimodal Distributions "
},
{
  "id": "subsec-distributions-outliers-3-3-4-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-3-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Uniform Distribution "
},
{
  "id": "subsec-distributions-outliers-3-3-5-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-3-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exponential Distribution "
},
{
  "id": "subsec-distributions-outliers-4-3-1-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-4-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Visual Methods "
},
{
  "id": "subsec-distributions-outliers-4-3-2-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-4-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Numerical Methods "
},
{
  "id": "subsec-distributions-outliers-5-4-1-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Visual inspection "
},
{
  "id": "subsec-distributions-outliers-5-4-2-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Z-scores "
},
{
  "id": "subsec-distributions-outliers-5-4-3-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "IQR method "
},
{
  "id": "subsec-distributions-outliers-5-4-4-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Modified Z-scores "
},
{
  "id": "subsec-distributions-outliers-5-4-5-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-4-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Statistical tests "
},
{
  "id": "subsec-distributions-outliers-5-6-1-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Investigate "
},
{
  "id": "subsec-distributions-outliers-5-6-2-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Retain "
},
{
  "id": "subsec-distributions-outliers-5-6-3-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-6-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Remove "
},
{
  "id": "subsec-distributions-outliers-5-6-4-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-6-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transform "
},
{
  "id": "subsec-distributions-outliers-5-6-5-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-6-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use robust statistical methods "
},
{
  "id": "subsec-distributions-outliers-5-6-6-1",
  "level": "2",
  "url": "sec-statistical-analysis.html#subsec-distributions-outliers-5-6-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Winsorize "
},
{
  "id": "ex-distribution-analysis",
  "level": "2",
  "url": "sec-statistical-analysis.html#ex-distribution-analysis",
  "type": "Checkpoint",
  "number": "104",
  "title": "Distribution Analysis.",
  "body": " Distribution Analysis   Analyze the distribution of the petal width variable in the iris dataset, addressing the following questions:     Based on visual inspection and descriptive statistics, what type of distribution does petal width follow? Explain your reasoning.    The petal width distribution in the iris dataset shows clear characteristics of a bimodal (or potentially trimodal) distribution:   Visual inspection of a histogram or density plot reveals distinct peaks rather than a single bell curve  Descriptive statistics show that while the overall mean is approximately 1.20 cm and the median is 1.30 cm, these central tendency measures are not representative of the actual data distribution  The distribution fails normality tests (e.g., Shapiro-Wilk) with p-values well below 0.05  The relatively large standard deviation (approximately 0.76 cm) compared to the mean indicates high variability  There's a notable gap in the frequency distribution around 0.6-1.0 cm   This multimodal pattern reflects the dataset's composition of three distinct iris species with different petal width characteristics:  Setosa: narrow petals, clustering around 0.2-0.3 cm  Versicolor: medium petals, clustering around 1.2-1.3 cm  Virginica: wider petals, clustering around 1.8-2.0 cm    This is a classic example of how combining distinct subpopulations creates a multimodal distribution, making overall measures of central tendency potentially misleading without considering the subgroup structure.      Are there any outliers in the petal width measurements? If so, identify them and discuss whether they should be removed or retained for analysis.    When analyzing the iris dataset's petal width for outliers:  Initial analysis across all species:   Using the IQR method (Q1 - 1.5*IQR to Q3 + 1.5*IQR) on the full dataset might identify some values as statistical outliers  However, this approach is problematic because we're dealing with a multimodal distribution representing three distinct species   Species-specific analysis:   When examining each species separately, very few or no outliers are detected  For Setosa: The petal widths are tightly clustered around 0.2-0.3 cm with minimal variation  For Versicolor: Measurements are generally between 1.0-1.5 cm with no extreme values  For Virginica: Measurements typically range from 1.4-2.3 cm, possibly with 1-2 mild outliers   Recommendation:   Any outliers identified should be retained for analysis because:   They appear to be valid biological measurements, not errors  They represent natural variation within species  The sample size per species is relatively small (50 each), making each observation valuable  These measurements are important for understanding the full range of morphological variation     The key insight is that proper outlier detection requires considering the underlying structure of the data. In this case, analyzing by species provides a more appropriate context for identifying true outliers versus natural group differences.    "
},
{
  "id": "activity-stat-summary",
  "level": "2",
  "url": "sec-statistical-analysis.html#activity-stat-summary",
  "type": "Activity",
  "number": "26",
  "title": "Comprehensive Statistical Analysis.",
  "body": " Comprehensive Statistical Analysis   In this activity, you will perform a comprehensive statistical analysis of the built-in mtcars dataset, focusing on fuel efficiency (mpg) and its relationship with other car attributes.  Your task is to:    Perform a descriptive statistical analysis of the mpg variable:   Calculate measures of central tendency (mean, median, mode)  Calculate measures of dispersion (range, variance, standard deviation, IQR)  Determine the distribution shape (visually and using skewness\/kurtosis)  Identify any potential outliers     Analyze how mpg varies across different categorical variables:   Number of cylinders (cyl)  Transmission type (am: 0 = automatic, 1 = manual)  V\/S (vs: 0 = V-shaped, 1 = straight engine)     Examine the relationship between mpg and other continuous variables:   Weight (wt)  Horsepower (hp)  Displacement (disp)     Create appropriate visualizations to support your analysis    Write a brief summary of your findings, including the most significant factors influencing fuel efficiency    Document your code with comments and explain your analytical choices.   "
},
{
  "id": "ex-statistical-interpretation",
  "level": "2",
  "url": "sec-statistical-analysis.html#ex-statistical-interpretation",
  "type": "Checkpoint",
  "number": "105",
  "title": "Statistical Interpretation.",
  "body": " Statistical Interpretation   Based on the comprehensive statistical analysis of the mtcars dataset, answer the following questions:     What are the three most influential factors affecting fuel efficiency (mpg) in this dataset? Provide specific statistical evidence to support your answer.       Is manual transmission associated with better fuel efficiency than automatic transmission? Analyze the data to provide a nuanced answer that considers potential confounding factors.       Based on the statistical analysis, what characteristics would you expect a car with high fuel efficiency (>25 mpg) to have? Support your answer with specific data from the analysis.     "
},
{
  "id": "sec-statistical-testing",
  "level": "1",
  "url": "sec-statistical-testing.html",
  "type": "Section",
  "number": "",
  "title": "Introduction to statistical testing",
  "body": " Introduction to statistical testing    Confidence intervals  Confidence intervals provide a range of plausible values for a population parameter based on sample data. They help quantify the uncertainty in statistical estimates and are a fundamental tool in inferential statistics.   Basic Concept  A confidence interval consists of:    A point estimate (typically a sample statistic like the mean)    A margin of error (which depends on the desired confidence level and the sample's variability)    The general form is: Point Estimate ± Margin of Error    Confidence Level  The confidence level (commonly 95%, but also 90%, 99%, etc.) indicates the reliability of the interval:    A 95% confidence interval means that if we were to take many samples and construct a confidence interval from each sample, about 95% of these intervals would contain the true population parameter.    Higher confidence levels result in wider intervals (more certainty but less precision).    Lower confidence levels result in narrower intervals (less certainty but more precision).      Calculating Confidence Intervals  For a population mean with a large sample or known population standard deviation:  CI = x̄ ± z × (σ\/√n)  where:    x̄ is the sample mean    z is the critical value from the standard normal distribution (e.g., 1.96 for 95% confidence)    σ is the population standard deviation (or sample standard deviation s for large samples)    n is the sample size    For a population mean with a small sample and unknown population standard deviation:  CI = x̄ ± t × (s\/√n)  where t is the critical value from the t-distribution with n-1 degrees of freedom.    Interpreting Confidence Intervals  Common interpretations include:    We are [confidence level]% confident that the true population parameter falls within this interval.    If we were to repeat this sampling process many times, [confidence level]% of the resulting intervals would contain the true parameter.    Note: The confidence interval does NOT indicate the probability that the parameter falls within the interval, as the parameter is fixed (not random).    # Confidence Interval Examples in R # Set a seed for reproducibility set.seed(123) # Generate a sample from a normal distribution population_mean <- 100 population_sd <- 15 sample_size <- 30 sample_data <- rnorm(sample_size, mean = population_mean, sd = population_sd) # Calculate sample statistics sample_mean <- mean(sample_data) sample_sd <- sd(sample_data) standard_error <- sample_sd \/ sqrt(sample_size) # Print sample statistics cat(\"Sample size:\", sample_size, \"\\n\") cat(\"Sample mean:\", round(sample_mean, 2), \"\\n\") cat(\"Sample standard deviation:\", round(sample_sd, 2), \"\\n\") cat(\"Standard error of the mean:\", round(standard_error, 2), \"\\n\") # Calculate 95% confidence interval using t-distribution # (appropriate for small samples with unknown population standard deviation) alpha <- 0.05 # For a 95% confidence level degrees_of_freedom <- sample_size - 1 t_critical <- qt(1 - alpha\/2, df = degrees_of_freedom) margin_of_error <- t_critical * standard_error lower_bound <- sample_mean - margin_of_error upper_bound <- sample_mean + margin_of_error # Print 95% confidence interval cat(\"\\n95% Confidence Interval for the Mean:\\n\") cat(\"t-critical value:\", round(t_critical, 4), \"\\n\") cat(\"Margin of error:\", round(margin_of_error, 2), \"\\n\") cat(\"Lower bound:\", round(lower_bound, 2), \"\\n\") cat(\"Upper bound:\", round(upper_bound, 2), \"\\n\") cat(\"Interval: [\", round(lower_bound, 2), \", \", round(upper_bound, 2), \"]\\n\") # Check if the true population mean falls within our confidence interval if (population_mean >= lower_bound && population_mean <= upper_bound) { cat(\"The true population mean (\", population_mean, \") falls within the confidence interval.\\n\") } else { cat(\"The true population mean (\", population_mean, \") does not fall within the confidence interval.\\n\") } # Using built-in R function t.test() to calculate confidence interval t_test_result <- t.test(sample_data, conf.level = 0.95) ci_from_t_test <- t_test_result$conf.int cat(\"\\nConfidence Interval using t.test() function:\\n\") cat(\"Lower bound:\", round(ci_from_t_test[1], 2), \"\\n\") cat(\"Upper bound:\", round(ci_from_t_test[2], 2), \"\\n\") # Calculate confidence intervals for different confidence levels confidence_levels <- c(0.90, 0.95, 0.99) cat(\"\\nComparing Confidence Intervals for Different Confidence Levels:\\n\") for (conf_level in confidence_levels) { t_critical <- qt(1 - (1 - conf_level)\/2, df = degrees_of_freedom) margin_of_error <- t_critical * standard_error lower_bound <- sample_mean - margin_of_error upper_bound <- sample_mean + margin_of_error cat(conf_level * 100, \"% CI: [\", round(lower_bound, 2), \", \", round(upper_bound, 2), \"] (Width: \", round(upper_bound - lower_bound, 2), \")\\n\") } # Visualize confidence intervals for different confidence levels # Create a simple plot plot(1, sample_mean, xlim = c(0.5, 1.5), ylim = c(sample_mean - 4*standard_error, sample_mean + 4*standard_error), xlab = \"\", ylab = \"Sample Mean\", main = \"Confidence Intervals for Different Confidence Levels\", xaxt = \"n\", # No x-axis pch = 19) # Add a horizontal line for the true population mean abline(h = population_mean, col = \"red\", lty = 2) # Add confidence intervals colors <- c(\"blue\", \"green\", \"purple\") i <- 1 for (conf_level in confidence_levels) { t_critical <- qt(1 - (1 - conf_level)\/2, df = degrees_of_freedom) margin_of_error <- t_critical * standard_error lower_bound <- sample_mean - margin_of_error upper_bound <- sample_mean + margin_of_error segments(1, lower_bound, 1, upper_bound, col = colors[i], lwd = 3) i <- i + 1 } # Add a legend legend(\"topright\", legend = paste0(confidence_levels * 100, \"% CI\"), col = colors, lwd = 3, bty = \"n\") # Add a note about the true population mean text(0.7, population_mean, \"True Population Mean\", col = \"red\", pos = 4) # Effect of sample size on confidence interval width # We'll calculate 95% confidence intervals for different sample sizes sample_sizes <- c(10, 30, 100, 300, 1000) ci_widths <- numeric(length(sample_sizes)) cat(\"\\nEffect of Sample Size on 95% Confidence Interval Width:\\n\") for (i in 1:length(sample_sizes)) { n <- sample_sizes[i] # Generate a larger sample than we need, then take subsets of different sizes if (i == 1) { large_sample <- rnorm(1000, mean = population_mean, sd = population_sd) } # Take a subset of the required size current_sample <- large_sample[1:n] # Calculate sample statistics current_mean <- mean(current_sample) current_sd <- sd(current_sample) current_se <- current_sd \/ sqrt(n) # Calculate confidence interval current_t <- qt(0.975, df = n - 1) current_margin <- current_t * current_se current_lower <- current_mean - current_margin current_upper <- current_mean + current_margin # Store the width ci_widths[i] <- current_upper - current_lower cat(\"Sample size \", n, \": CI = [\", round(current_lower, 2), \", \", round(current_upper, 2), \"] (Width: \", round(ci_widths[i], 2), \")\\n\") } # Plot the relationship between sample size and CI width plot(sample_sizes, ci_widths, type = \"b\", log = \"x\", # Use log scale for x-axis xlab = \"Sample Size (log scale)\", ylab = \"Confidence Interval Width\", main = \"Effect of Sample Size on CI Width\", col = \"blue\", pch = 19, lwd = 2) # Add a reference line showing the 1\/sqrt(n) relationship # Scale it to match the first point for visual comparison scaling_factor <- ci_widths[1] * sqrt(sample_sizes[1]) theoretical_widths <- scaling_factor \/ sqrt(sample_sizes) lines(sample_sizes, theoretical_widths, col = \"red\", lty = 2, lwd = 2) # Add a legend legend(\"topright\", legend = c(\"Actual CI Width\", \"Theoretical 1\/sqrt(n) Relationship\"), col = c(\"blue\", \"red\"), lty = c(1, 2), lwd = 2, pch = c(19, NA), bty = \"n\") # Real-world example: Confidence interval for mpg in the mtcars dataset data(mtcars) # Calculate the 95% confidence interval for the mean mpg mpg_test <- t.test(mtcars$mpg, conf.level = 0.95) mpg_ci <- mpg_test$conf.int cat(\"\\nReal-world Example: 95% Confidence Interval for Mean MPG in mtcars dataset:\\n\") cat(\"Sample mean:\", round(mean(mtcars$mpg), 2), \"\\n\") cat(\"95% CI: [\", round(mpg_ci[1], 2), \", \", round(mpg_ci[2], 2), \"]\\n\") cat(\"Interpretation: We are 95% confident that the true average MPG for the population\\n\") cat(\"of cars represented by this sample is between\", round(mpg_ci[1], 2), \"and\", round(mpg_ci[2], 2), \"mpg.\\n\") # Calculate confidence intervals for mpg by cylinder count cat(\"\\nConfidence Intervals for MPG by Number of Cylinders:\\n\") # Convert cylinders to a factor mtcars$cyl_f <- as.factor(mtcars$cyl) # For each cylinder group for (cyl in levels(mtcars$cyl_f)) { mpg_subset <- mtcars$mpg[mtcars$cyl == cyl] cyl_test <- t.test(mpg_subset, conf.level = 0.95) cyl_ci <- cyl_test$conf.int cat(cyl, \"cylinders (n =\", length(mpg_subset), \"):\\n\") cat(\" Mean MPG:\", round(mean(mpg_subset), 2), \"\\n\") cat(\" 95% CI: [\", round(cyl_ci[1], 2), \", \", round(cyl_ci[2], 2), \"]\\n\") } # Visualize confidence intervals for mpg by cylinder count # Calculate means and confidence intervals cyl_levels <- sort(unique(mtcars$cyl)) cyl_means <- numeric(length(cyl_levels)) cyl_lower <- numeric(length(cyl_levels)) cyl_upper <- numeric(length(cyl_levels)) for (i in 1:length(cyl_levels)) { cyl <- cyl_levels[i] mpg_subset <- mtcars$mpg[mtcars$cyl == cyl] cyl_means[i] <- mean(mpg_subset) cyl_test <- t.test(mpg_subset, conf.level = 0.95) cyl_lower[i] <- cyl_test$conf.int[1] cyl_upper[i] <- cyl_test$conf.int[2] } # Plot the means with confidence intervals plot(cyl_levels, cyl_means, type = \"p\", xlab = \"Number of Cylinders\", ylab = \"Miles Per Gallon\", main = \"Mean MPG by Cylinder Count with 95% Confidence Intervals\", ylim = c(min(cyl_lower) - 1, max(cyl_upper) + 1), pch = 19, col = \"blue\", xaxt = \"n\") # Turn off x-axis labels # Add custom x-axis labels axis(1, at = cyl_levels) # Add confidence intervals as error bars arrows(cyl_levels, cyl_lower, cyl_levels, cyl_upper, angle = 90, code = 3, length = 0.1, col = \"blue\", lwd = 2) # Add sample size for each group for (i in 1:length(cyl_levels)) { cyl <- cyl_levels[i] n <- sum(mtcars$cyl == cyl) text(cyl, cyl_lower[i] - 0.8, paste(\"n =\", n), cex = 0.8) } # Add another perspective - compare with boxplots boxplot(mpg ~ cyl, data = mtcars, main = \"MPG Distribution by Cylinder Count\", xlab = \"Number of Cylinders\", ylab = \"Miles Per Gallon\", col = \"lightblue\") # Add the means and confidence intervals to the boxplot points(1:length(cyl_levels), cyl_means, pch = 19, col = \"red\") for (i in 1:length(cyl_levels)) { arrows(i, cyl_lower[i], i, cyl_upper[i], angle = 90, code = 3, length = 0.1, col = \"red\", lwd = 2) } # Add a legend legend(\"topright\", legend = c(\"Mean\", \"95% CI\"), col = c(\"red\", \"red\"), pch = c(19, NA), lwd = c(NA, 2), bty = \"n\")    Confidence Interval Interpretation   A researcher measures the hemoglobin levels (in g\/dL) in a sample of 40 adult women and calculates a 95% confidence interval of [12.3, 13.7] for the population mean.     What is the correct interpretation of this confidence interval?    The correct interpretation of the 95% confidence interval [12.3, 13.7] for hemoglobin levels is:  We are 95% confident that the true population mean hemoglobin level for adult women is between 12.3 and 13.7 g\/dL.  This means that if we were to take many different samples of 40 adult women and construct 95% confidence intervals using the same method, approximately 95% of those intervals would contain the true population mean hemoglobin level.  The confidence interval provides a range of plausible values for the unknown population parameter (mean hemoglobin level) based on the sample data. It reflects the precision and uncertainty in our estimate due to sampling variability.  It's important to note what this does not mean:   It does not mean there's a 95% probability that the true mean is between 12.3 and 13.7 g\/dL. The true population mean is fixed (not random), while the confidence interval is random (varies with different samples).  It does not mean that 95% of individual women's hemoglobin levels fall within this range. The interval represents plausible values for the mean , not for individual measurements.       If the researcher wants to reduce the width of the confidence interval while maintaining the same confidence level (95%), what could they do?    To reduce the width of the confidence interval while maintaining the same 95% confidence level, the researcher could:   Increase the sample size : This is the most effective approach. The width of a confidence interval is proportional to 1\/√n, where n is the sample size. By increasing the sample from 40 to 160 women, the researcher could reduce the interval width by half (since √160 = 2 × √40).  Reduce the variability in measurements : The width of the confidence interval is directly proportional to the standard deviation of the sample. The researcher could:  Use more precise measuring instruments to reduce measurement error  Control for confounding variables that contribute to variability (e.g., standardizing the time of day when samples are collected)  Use a more homogeneous sample population (though this would limit generalizability)    Use a more efficient sampling design : Techniques like stratified sampling can sometimes yield more precise estimates than simple random sampling for the same sample size.  Apply statistical techniques that reduce variance, such as:  Using paired designs where appropriate  Including relevant covariates in the analysis (e.g., ANCOVA instead of ANOVA)  Using ratio or regression estimators if auxiliary information is available     Among these options, increasing the sample size is typically the most straightforward and reliable approach, though it may be constrained by practical limitations such as cost, time, and participant availability.        Linear regression basics  Linear regression is a fundamental statistical technique used to model the relationship between a dependent variable and one or more independent variables. It assumes a linear relationship between the variables and is widely used for prediction and understanding variable relationships.   Simple Linear Regression  Simple linear regression models the relationship between two variables:  y = β₀ + β₁x + ε  where:    y is the dependent (outcome) variable    x is the independent (predictor) variable    β₀ is the y-intercept (value of y when x = 0)    β₁ is the slope (change in y for a one-unit change in x)    ε is the error term (random variation not explained by the model)      Multiple Linear Regression  Multiple linear regression extends the model to include multiple independent variables:  y = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ + ε  where p is the number of independent variables.    Key Concepts in Linear Regression    Least Squares Estimation : The method used to find the line that minimizes the sum of squared differences between observed and predicted values.    Coefficient of Determination (R²) : Measures the proportion of variance in the dependent variable explained by the independent variable(s). Ranges from 0 to 1, with higher values indicating better fit.    Adjusted R² : A modified version of R² that adjusts for the number of predictors, making it more suitable for comparing models with different numbers of variables.    Residuals : The differences between observed and predicted values, used to assess model fit and check assumptions.    Standard Error : Measures the variability of the coefficient estimates, used for hypothesis testing and confidence intervals.    t-statistic and p-value : Used to test whether a coefficient is significantly different from zero.      Assumptions of Linear Regression    Linearity : The relationship between the independent and dependent variables is linear.    Independence : The observations are independent of each other.    Homoscedasticity : The variance of the errors is constant across all levels of the independent variables.    Normality : The errors are normally distributed.    No multicollinearity (for multiple regression): The independent variables are not highly correlated with each other.      # Linear Regression Examples in R # Load necessary data data(mtcars) # Simple Linear Regression: MPG vs. Weight # Fit the model model1 <- lm(mpg ~ wt, data = mtcars) # Display the model summary summary(model1) # Extract key components coefficients <- coef(model1) intercept <- coefficients[1] slope <- coefficients[2] cat(\"Simple Linear Regression: MPG vs. Weight\\n\") cat(\"Equation: MPG =\", round(intercept, 2), \"+\", round(slope, 2), \"× Weight\\n\") cat(\"Interpretation: For each additional 1,000 lbs of weight,\\n\") cat(\" MPG decreases by approximately\", abs(round(slope, 2)), \"units.\\n\\n\") # R-squared and adjusted R-squared r_squared <- summary(model1)$r.squared adj_r_squared <- summary(model1)$adj.r.squared cat(\"R-squared:\", round(r_squared, 3), \"\\n\") cat(\"Adjusted R-squared:\", round(adj_r_squared, 3), \"\\n\") cat(\"Interpretation: About\", round(r_squared * 100), \"% of the variation in MPG\\n\") cat(\" can be explained by the weight of the car.\\n\\n\") # Confidence intervals for coefficients conf_intervals <- confint(model1, level = 0.95) cat(\"95% Confidence Intervals for Coefficients:\\n\") print(round(conf_intervals, 3)) # Plot the data with the regression line plot(mtcars$wt, mtcars$mpg, main = \"MPG vs. Weight with Regression Line\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\", pch = 19, col = \"blue\") # Add the regression line abline(model1, col = \"red\", lwd = 2) # Add equation and R-squared to the plot text(4, 30, paste(\"MPG =\", round(intercept, 2), \"+\", round(slope, 2), \"× Weight\"), pos = 4) text(4, 28, paste(\"R² =\", round(r_squared, 3)), pos = 4) # Add confidence bands for the regression line # First, create a sequence of weight values weight_seq <- seq(min(mtcars$wt), max(mtcars$wt), length.out = 100) # Predict MPG for these weights with confidence intervals predictions <- predict(model1, newdata = data.frame(wt = weight_seq), interval = \"confidence\", level = 0.95) # Add the confidence bands lines(weight_seq, predictions[, \"lwr\"], col = \"blue\", lty = 2) lines(weight_seq, predictions[, \"upr\"], col = \"blue\", lty = 2) # Add a legend legend(\"topright\", legend = c(\"Data\", \"Regression Line\", \"95% Confidence Bands\"), col = c(\"blue\", \"red\", \"blue\"), pch = c(19, NA, NA), lty = c(NA, 1, 2), lwd = c(NA, 2, 1), bty = \"n\") # Residual Analysis residuals <- residuals(model1) fitted_values <- fitted(model1) # Create residual plots par(mfrow = c(2, 2)) # Residuals vs. Fitted Values plot(fitted_values, residuals, main = \"Residuals vs. Fitted Values\", xlab = \"Fitted Values\", ylab = \"Residuals\", pch = 19, col = \"blue\") abline(h = 0, col = \"red\", lwd = 2, lty = 2) # Normal Q-Q Plot of Residuals qqnorm(residuals, main = \"Normal Q-Q Plot of Residuals\") qqline(residuals, col = \"red\", lwd = 2) # Scale-Location Plot (sqrt of standardized residuals vs. fitted values) plot(fitted_values, sqrt(abs(residuals\/sd(residuals))), main = \"Scale-Location Plot\", xlab = \"Fitted Values\", ylab = \"Sqrt of Standardized Residuals\", pch = 19, col = \"blue\") lines(lowess(fitted_values, sqrt(abs(residuals\/sd(residuals)))), col = \"red\", lwd = 2) # Residuals vs. Leverage plot(hatvalues(model1), residuals, main = \"Residuals vs. Leverage\", xlab = \"Leverage\", ylab = \"Residuals\", pch = 19, col = \"blue\") abline(h = 0, col = \"red\", lwd = 2, lty = 2) # Reset plotting parameters par(mfrow = c(1, 1)) # Multiple Linear Regression: MPG vs. Weight and Horsepower # Fit the model model2 <- lm(mpg ~ wt + hp, data = mtcars) # Display the model summary summary(model2) # Extract key components coefficients2 <- coef(model2) intercept2 <- coefficients2[1] wt_coef <- coefficients2[2] hp_coef <- coefficients2[3] cat(\"\\nMultiple Linear Regression: MPG vs. Weight and Horsepower\\n\") cat(\"Equation: MPG =\", round(intercept2, 2), \"+\", round(wt_coef, 2), \"× Weight +\", round(hp_coef, 2), \"× Horsepower\\n\") cat(\"Interpretation:\\n\") cat(\"- For each additional 1,000 lbs of weight, MPG decreases by approximately\", abs(round(wt_coef, 2)), \"units, holding horsepower constant.\\n\") cat(\"- For each additional horsepower, MPG decreases by approximately\", abs(round(hp_coef, 2)), \"units, holding weight constant.\\n\\n\") # R-squared and adjusted R-squared r_squared2 <- summary(model2)$r.squared adj_r_squared2 <- summary(model2)$adj.r.squared cat(\"R-squared:\", round(r_squared2, 3), \"\\n\") cat(\"Adjusted R-squared:\", round(adj_r_squared2, 3), \"\\n\") cat(\"Interpretation: About\", round(r_squared2 * 100), \"% of the variation in MPG\\n\") cat(\" can be explained by weight and horsepower together.\\n\\n\") # Confidence intervals for coefficients conf_intervals2 <- confint(model2, level = 0.95) cat(\"95% Confidence Intervals for Coefficients:\\n\") print(round(conf_intervals2, 3)) # Model comparison cat(\"\\nModel Comparison: Simple vs. Multiple Regression\\n\") anova_result <- anova(model1, model2) print(anova_result) cat(\"\\nInterpretation: The p-value in the ANOVA table indicates whether adding horsepower\\n\") cat(\"significantly improves the model compared to using weight alone.\\n\") cat(\"A small p-value (< 0.05) suggests that the multiple regression model is preferable.\\n\\n\") # Create a 3D visualization of the multiple regression model # (In a normal R environment, you would use packages like 'plotly' or 'rgl') # Here, we'll create a 2D visualization with color for the third dimension # Create a grid of weight and horsepower values weight_grid <- seq(min(mtcars$wt), max(mtcars$wt), length.out = 30) hp_grid <- seq(min(mtcars$hp), max(mtcars$hp), length.out = 30) grid_data <- expand.grid(wt = weight_grid, hp = hp_grid) # Predict MPG for each combination grid_data$mpg_pred <- predict(model2, newdata = grid_data) # Create a scatter plot with contour lines # Plot the actual data points plot(mtcars$wt, mtcars$hp, main = \"Multiple Regression: MPG as a Function of Weight and Horsepower\", xlab = \"Weight (1000 lbs)\", ylab = \"Horsepower\", pch = 19, col = \"blue\", cex = mtcars$mpg \/ 10) # Size proportional to actual MPG # Add contour lines for predicted MPG contour(weight_grid, hp_grid, matrix(grid_data$mpg_pred, nrow = length(weight_grid)), add = TRUE, levels = seq(10, 35, by = 5), col = \"red\", lwd = 2, labcex = 0.8) # Add a legend legend(\"topright\", legend = c(\"Car (size proportional to MPG)\", \"MPG contour lines\"), col = c(\"blue\", \"red\"), pch = c(19, NA), lty = c(NA, 1), lwd = c(NA, 2), bty = \"n\") # Check for multicollinearity cat(\"\\nChecking for Multicollinearity:\\n\") cat(\"Correlation between Weight and Horsepower:\", round(cor(mtcars$wt, mtcars$hp), 3), \"\\n\") if(abs(cor(mtcars$wt, mtcars$hp)) > 0.7) { cat(\"Note: The high correlation between weight and horsepower indicates\\n\") cat(\"potential multicollinearity, which could affect the stability and\\n\") cat(\"interpretation of the regression coefficients.\\n\\n\") } # Calculate Variance Inflation Factor (VIF) manually # VIF = 1\/(1-R²), where R² is from regressing the predictor on other predictors wt_on_hp_model <- lm(wt ~ hp, data = mtcars) hp_on_wt_model <- lm(hp ~ wt, data = mtcars) wt_vif <- 1 \/ (1 - summary(wt_on_hp_model)$r.squared) hp_vif <- 1 \/ (1 - summary(hp_on_wt_model)$r.squared) cat(\"Variance Inflation Factors (VIF):\\n\") cat(\"- Weight:\", round(wt_vif, 2), \"\\n\") cat(\"- Horsepower:\", round(hp_vif, 2), \"\\n\") cat(\"VIF values greater than 5-10 indicate problematic multicollinearity.\\n\\n\") # Reset plotting parameters par(mfrow = c(1, 1)) # Summary of linear regression analysis cat(\"\\nSummary of Linear Regression Analysis:\\n\") cat(\"------------------------------------\\n\\n\") cat(\"Linear regression is a powerful and interpretable modeling technique that allows us\\n\") cat(\"to understand and quantify relationships between variables. In our analysis of the\\n\") cat(\"mtcars dataset, we found that both car weight and horsepower are significant\\n\") cat(\"predictors of fuel efficiency (MPG).\\n\\n\") cat(\"The simple linear regression model using only weight explained\", round(r_squared * 100), \"% of the\\n\") cat(\"variation in MPG, while the multiple regression model including both weight and\\n\") cat(\"horsepower explained\", round(r_squared2 * 100), \"% of the variation.\\n\\n\") cat(\"The multiple regression analysis revealed that, holding other factors constant:\\n\") cat(\"1. Each additional 1,000 lbs of weight is associated with a\", abs(round(wt_coef, 2)), \"MPG decrease\\n\") cat(\"2. Each additional horsepower is associated with a\", abs(round(hp_coef, 2)), \"MPG decrease\\n\\n\") cat(\"These findings can help car manufacturers understand the trade-offs between\\n\") cat(\"performance characteristics and fuel efficiency. For example, reducing vehicle\\n\") cat(\"weight appears to be an effective strategy for improving MPG.\\n\\n\") cat(\"However, it's important to note that our analysis has limitations. The mtcars\\n\") cat(\"dataset is relatively small (32 observations) and from the 1970s, so the\\n\") cat(\"relationships may not fully apply to modern vehicles with advanced technologies.\\n\") cat(\"Additionally, we should be cautious about causal interpretation, as other factors\\n\") cat(\"not included in our model might influence both our predictors and MPG.\\n\\n\") cat(\"Further analysis could explore additional predictor variables, interaction effects,\\n\") cat(\"and non-linear relationships to build a more comprehensive model of fuel efficiency.\\n\")    Multiple Regression Analysis   Based on the multiple regression model explored above, answer the following questions:     How does the relationship between weight and MPG change when horsepower is added to the model? Compare the coefficients from the simple and multiple regression models and explain the differences.    When horsepower is added to the regression model, the relationship between weight and MPG typically changes in the following ways:  In the simple regression model (MPG ~ weight), the weight coefficient reflects both the direct effect of weight on MPG and the indirect effect through weight's correlation with horsepower. This is because the simple model doesn't account for the fact that heavier cars typically have more powerful engines.  In the multiple regression model (MPG ~ weight + horsepower), the weight coefficient represents the estimated effect of weight on MPG while holding horsepower constant. This provides a more nuanced understanding of each factor's unique contribution.  The weight coefficient usually decreases in magnitude when horsepower is added to the model. This indicates that part of the apparent effect of weight on MPG in the simple model was actually due to the correlation between weight and horsepower. By including both variables, we can separate their individual effects.  For example, if the weight coefficient changes from -5.0 in the simple model to -3.5 in the multiple model, this suggests that about 1.5 units of the apparent weight effect was actually attributable to horsepower differences.  This change in coefficients highlights the importance of considering multiple factors simultaneously when analyzing complex relationships, as simpler models may overestimate the impact of individual variables due to unaccounted correlations.      A new sports car has a weight of 2,800 lbs and 320 horsepower. Using the multiple regression model, predict the MPG for this car and construct a 95% prediction interval. Interpret the results and discuss any limitations of this prediction.    To predict the MPG for a new sports car with a weight of 2,800 lbs and 320 horsepower, we would substitute these values into our multiple regression equation:  Predicted MPG = β₀ + β₁(weight) + β₂(horsepower)  For example, if our equation is MPG = 37.23 - 3.88(weight) - 0.03(horsepower), the prediction would be:  Predicted MPG = 37.23 - 3.88(2.8) - 0.03(320) = 37.23 - 10.86 - 9.6 = 16.77 MPG  A 95% prediction interval might be [13.2, 20.3] MPG, indicating we're 95% confident that the actual MPG of this specific car would fall within this range.  Interpretation: This prediction suggests the sports car would achieve moderate fuel efficiency, which is expected given its relatively light weight but high horsepower. The width of the prediction interval reflects uncertainty in our estimate due to natural variability in MPG even among similar cars.  Limitations:   The prediction involves extrapolation if 320 horsepower is beyond the range of the training data, which reduces reliability  The model doesn't account for other relevant factors such as aerodynamics, transmission type, or engine technology  Sports cars may have specific design features not represented in the general car population used to build the model  The dataset (mtcars) is from the 1970s, so relationships may differ for modern vehicles with advanced technologies  The prediction assumes a linear relationship between predictors and MPG, which may not hold at extreme values   For more accurate predictions, it would be beneficial to use more recent data specific to similar sports cars and include additional relevant predictors.       Hypothesis testing basics  Hypothesis testing is a fundamental statistical method used to make inferences about populations based on sample data. It provides a framework for deciding whether experimental or observational data support a particular claim about a population parameter.   The Hypothesis Testing Framework  The general process of hypothesis testing follows these steps:    State the null hypothesis (H₀) and alternative hypothesis (H₁ or Hₐ)    Choose a significance level (α) - commonly 0.05    Collect data and calculate a test statistic    Calculate the p-value or compare the test statistic to critical values    Make a decision: reject or fail to reject the null hypothesis    Interpret the results in the context of the original question      Key Concepts in Hypothesis Testing    Null Hypothesis (H₀) : A statement of no effect, no difference, or no relationship. It's the default position that is assumed to be true until evidence suggests otherwise.    Alternative Hypothesis (H₁ or Hₐ) : A statement that contradicts the null hypothesis and represents what the researcher is trying to establish.    Significance Level (α) : The threshold probability for rejecting the null hypothesis, typically set at 0.05 (5%). It represents the risk of making a Type I error.    p-value : The probability of obtaining a test statistic at least as extreme as the one observed, assuming the null hypothesis is true. A smaller p-value indicates stronger evidence against the null hypothesis.    Type I Error : Rejecting a true null hypothesis (false positive).    Type II Error : Failing to reject a false null hypothesis (false negative).    Power : The probability of correctly rejecting a false null hypothesis. Power increases with sample size and effect size.      Common Hypothesis Tests    t-test : Used to compare means.  One-sample t-test: Compares a sample mean to a known population mean.  Independent samples t-test: Compares means of two independent groups.  Paired samples t-test: Compares means of two related groups (before\/after, matched pairs).      ANOVA (Analysis of Variance) : Extends the t-test to compare means across more than two groups.    Chi-Square Test : Used to test relationships between categorical variables.    Correlation Test : Tests the significance of a correlation coefficient.    Non-parametric Tests : Used when data do not meet the assumptions of parametric tests (e.g., Mann-Whitney U, Wilcoxon rank-sum).      # Hypothesis Testing Examples in R # Set a seed for reproducibility set.seed(123) # Example 1: One-sample t-test # Suppose we want to test if the mean mpg of cars is different from 20 mpg data(mtcars) # Perform the one-sample t-test t_test_one_sample <- t.test(mtcars$mpg, mu = 20) # Display the results cat(\"One-sample t-test:\\n\") print(t_test_one_sample) # Explain the results cat(\"\\nInterpretation:\\n\") if (t_test_one_sample$p.value < 0.05) { cat(\"The p-value (\", round(t_test_one_sample$p.value, 4), \") is less than 0.05, so we reject the null hypothesis.\\n\") cat(\"There is sufficient evidence to conclude that the mean MPG is different from 20.\\n\") } else { cat(\"The p-value (\", round(t_test_one_sample$p.value, 4), \") is greater than 0.05, so we fail to reject the null hypothesis.\\n\") cat(\"There is insufficient evidence to conclude that the mean MPG is different from 20.\\n\") } # Example 2: Two-sample t-test (independent samples) # Compare MPG between automatic and manual transmission cars automatic <- mtcars$mpg[mtcars$am == 0] manual <- mtcars$mpg[mtcars$am == 1] # Perform the two-sample t-test t_test_two_sample <- t.test(manual, automatic) # Display the results cat(\"\\nTwo-sample t-test (Manual vs Automatic Transmission):\\n\") print(t_test_two_sample) # Visualization of the two groups boxplot(mpg ~ am, data = mtcars, main = \"MPG by Transmission Type\", xlab = \"Transmission (0 = Automatic, 1 = Manual)\", ylab = \"Miles Per Gallon\", col = c(\"lightblue\", \"lightgreen\")) # Add the means to the boxplot points(c(1, 2), c(mean(automatic), mean(manual)), pch = 19, col = \"red\") # Example 3: Paired t-test # Let's simulate before-after measurements set.seed(456) before_treatment <- rnorm(20, mean = 10, sd = 2) after_treatment <- before_treatment + rnorm(20, mean = 1.5, sd = 1) # Effect of +1.5 with some noise # Perform the paired t-test t_test_paired <- t.test(after_treatment, before_treatment, paired = TRUE) # Display the results cat(\"\\nPaired t-test (After vs Before Treatment):\\n\") print(t_test_paired) # Visualization of the paired data plot(1:20, before_treatment, type = \"p\", col = \"blue\", pch = 19, ylim = c(min(c(before_treatment, after_treatment)) - 1, max(c(before_treatment, after_treatment)) + 1), xlab = \"Subject\", ylab = \"Measurement\", main = \"Before-After Treatment Comparison\") points(1:20, after_treatment, col = \"red\", pch = 19) legend(\"topleft\", legend = c(\"Before\", \"After\"), col = c(\"blue\", \"red\"), pch = 19) # Connect the paired points with lines for (i in 1:20) { segments(i, before_treatment[i], i, after_treatment[i], col = \"gray\") } # Example 4: Chi-square test of independence # Create a contingency table (example: gender vs. preference) gender <- factor(c(rep(\"Male\", 50), rep(\"Female\", 50))) preference <- factor(c(rep(\"Option A\", 30), rep(\"Option B\", 20), rep(\"Option A\", 20), rep(\"Option B\", 30))) # Create a contingency table contingency_table <- table(gender, preference) print(contingency_table) # Perform the chi-square test chi_sq_test <- chisq.test(contingency_table) # Display the results cat(\"\\nChi-square test of independence:\\n\") print(chi_sq_test) # Visualize the contingency table barplot(contingency_table, beside = TRUE, legend = TRUE, main = \"Preference by Gender\", xlab = \"Preference\", ylab = \"Count\", col = c(\"lightblue\", \"lightpink\")) # Example 5: Correlation test # Test if there's a significant correlation between weight and MPG cor_test <- cor.test(mtcars$wt, mtcars$mpg) # Display the results cat(\"\\nCorrelation test (Weight vs MPG):\\n\") print(cor_test) # Visualize the relationship plot(mtcars$wt, mtcars$mpg, main = \"Weight vs. MPG with Correlation Results\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\", pch = 19, col = \"blue\") # Add the regression line abline(lm(mpg ~ wt, data = mtcars), col = \"red\", lwd = 2) # Add the correlation value to the plot text(4, 30, paste(\"r =\", round(cor_test$estimate, 2), \"\\np-value =\", round(cor_test$p.value, 5)), pos = 4)    Hypothesis Testing Practice   Answer the following questions about hypothesis testing:     A researcher wants to test if a new teaching method improves student test scores. The average test score with the traditional method is 75. After implementing the new method with 40 students, the mean score is 78 with a standard deviation of 8. Does the new method significantly improve test scores at α = 0.05?    To determine if the new teaching method significantly improves test scores, we need to conduct a one-sample t-test.  Step 1: State the hypotheses  H₀: μ ≤ 75 (The new method does not improve scores)  H₁: μ > 75 (The new method improves scores)    Step 2: Calculate the test statistic (t)  Sample mean (x̄) = 78  Population mean under H₀ (μ₀) = 75  Sample standard deviation (s) = 8  Sample size (n) = 40  t = (x̄ - μ₀)\/(s\/√n) = (78 - 75)\/(8\/√40) = 3\/1.265 = 2.37    Step 3: Find the critical value  For a one-tailed test with α = 0.05 and df = 39  Critical t-value = 1.685    Step 4: Make a decision  Since the calculated t-value (2.37) exceeds the critical value (1.685), we reject the null hypothesis    Conclusion: There is statistically significant evidence (t(39) = 2.37, p < 0.05) that the new teaching method improves student test scores compared to the traditional method.      Explain the difference between statistical significance and practical significance in hypothesis testing, and why it's important to consider both when interpreting results.    Statistical Significance refers to the likelihood that an observed effect occurred by chance. A result is statistically significant when the p-value is less than the predetermined significance level (typically α = 0.05), indicating that the observed effect is unlikely to have occurred randomly.  Practical Significance refers to the real-world importance or meaningfulness of an effect, regardless of its statistical significance. It considers whether the magnitude of the effect is large enough to be relevant in practical applications.  Key Differences:   Focus: Statistical significance focuses on probability and reliability of findings; practical significance focuses on magnitude and real-world impact  Influenced by: Statistical significance is heavily influenced by sample size; practical significance is not  Measurement: Statistical significance is measured by p-values; practical significance often evaluated using effect sizes (e.g., Cohen's d, R²)    Importance of Considering Both:   With large sample sizes, even tiny, inconsequential differences can become statistically significant  A statistically significant result might have such a small effect size that it's not worth implementing in practice  Conversely, a result might not reach statistical significance due to small sample size but could have a large effect size suggesting practical importance  Considering both provides a more complete understanding of research findings and their applications  Helps prevent making important decisions based solely on p-values, which has been criticized in the \"p-value crisis\" in science  Allows for better cost-benefit analysis when implementing interventions or changes based on research findings    A comprehensive approach to hypothesis testing should always consider both statistical significance (Is the effect real?) and practical significance (Does the effect matter?), especially when making recommendations based on data analysis.        ANOVA basics  Analysis of Variance (ANOVA) is a statistical method used to compare means across three or more groups. It extends the t-test concept to situations with multiple groups, helping to determine if there are any statistically significant differences between the means of independent groups.   Basic Concepts of ANOVA  ANOVA works by analyzing the variance in the data and partitioning it into different sources:    Between-Group Variance : Variation due to differences between group means (treatment effect)    Within-Group Variance : Variation due to differences within each group (error or residual variance)    The F-statistic is then calculated as the ratio of between-group variance to within-group variance. A large F-value suggests that the between-group variance is more significant than what would be expected by chance, indicating differences between group means.    Types of ANOVA    One-Way ANOVA : Analyzes the effect of a single factor (independent variable) on a continuous outcome.    Two-Way ANOVA : Examines the effect of two factors simultaneously, including their interaction.    Repeated Measures ANOVA : Used when the same subjects are measured multiple times (like in before-after designs).    MANOVA (Multivariate ANOVA) : Extends ANOVA to cases with multiple dependent variables.    ANCOVA (Analysis of Covariance) : Incorporates continuous control variables (covariates) into the ANOVA model.      ANOVA Assumptions  For valid ANOVA results, several assumptions should be met:    Independence : Observations are independent of each other.    Normality : The data within each group are normally distributed.    Homogeneity of Variance : The variance is similar across all groups (homoscedasticity).      Post-hoc Tests  ANOVA tells us if there are significant differences among groups, but it doesn't tell us which specific groups differ from each other. Post-hoc tests are used to make pairwise comparisons after a significant ANOVA result:    Tukey's HSD (Honestly Significant Difference) : Controls the family-wise error rate and is commonly used for all pairwise comparisons.    Bonferroni Correction : A conservative approach that adjusts the significance level by dividing it by the number of comparisons.    Scheffe's Method : A flexible but conservative test that allows for complex comparisons.    Dunnett's Test : Used when comparing multiple groups to a single control group.      # ANOVA Examples in R # Load necessary data data(iris) data(mtcars) # Example 1: One-Way ANOVA # Compare sepal lengths across three iris species one_way_anova <- aov(Sepal.Length ~ Species, data = iris) # Display the ANOVA summary cat(\"One-Way ANOVA: Comparing Sepal Length Across Iris Species\\n\") print(summary(one_way_anova)) # Visualize the data boxplot(Sepal.Length ~ Species, data = iris, main = \"Sepal Length by Species\", xlab = \"Species\", ylab = \"Sepal Length (cm)\", col = c(\"lightpink\", \"lightblue\", \"lightgreen\")) # Add the means to the boxplot species_means <- tapply(iris$Sepal.Length, iris$Species, mean) points(1:3, species_means, pch = 19, col = \"red\", cex = 1.2) # Post-hoc analysis: Tukey's HSD test cat(\"\\nTukey's HSD Test for Multiple Comparisons:\\n\") tukey_result <- TukeyHSD(one_way_anova) print(tukey_result) # Plot the Tukey HSD results plot(tukey_result, las = 1) # Example 2: Two-Way ANOVA # We'll use the mtcars dataset to examine the effects of # number of cylinders (cyl) and transmission type (am) on mpg # First, ensure the factors are properly formatted mtcars$cyl_f <- as.factor(mtcars$cyl) mtcars$am_f <- as.factor(mtcars$am) levels(mtcars$am_f) <- c(\"Automatic\", \"Manual\") # Perform the Two-Way ANOVA two_way_anova <- aov(mpg ~ cyl_f * am_f, data = mtcars) # Display the ANOVA summary cat(\"\\nTwo-Way ANOVA: Effect of Cylinders and Transmission on MPG\\n\") print(summary(two_way_anova)) # Create an interaction plot interaction.plot(mtcars$cyl_f, mtcars$am_f, mtcars$mpg, legend = TRUE, type = \"b\", col = c(\"red\", \"blue\"), pch = c(19, 21), main = \"Interaction Plot: Cylinders × Transmission on MPG\", xlab = \"Number of Cylinders\", ylab = \"Mean Miles Per Gallon\", trace.label = \"Transmission Type\") # Creating a more detailed visualization with boxplots par(mfrow = c(1, 1)) boxplot(mpg ~ am_f * cyl_f, data = mtcars, col = c(\"lightpink\", \"lightblue\"), main = \"MPG by Transmission Type and Number of Cylinders\", xlab = \"Transmission Type and Cylinders\", ylab = \"Miles Per Gallon\") # Check ANOVA assumptions # 1. Normality of residuals par(mfrow = c(2, 2)) plot(one_way_anova) par(mfrow = c(1, 1)) # 2. Homogeneity of variances - Levene's test install.packages(\"car\") # If not already installed library(car) leveneTest(Sepal.Length ~ Species, data = iris) # Non-parametric alternative to ANOVA # Kruskal-Wallis test (when ANOVA assumptions are violated) kruskal_result <- kruskal.test(Sepal.Length ~ Species, data = iris) cat(\"\\nKruskal-Wallis Test (Non-parametric alternative to ANOVA):\\n\") print(kruskal_result) # Effect Size for ANOVA # Eta-squared calculation # Eta-squared = SSbetween \/ SStotal anova_summary <- summary(one_way_anova) ss_between <- anova_summary[[1]][\"Species\", \"Sum Sq\"] ss_total <- ss_between + anova_summary[[1]][\"Residuals\", \"Sum Sq\"] eta_squared <- ss_between \/ ss_total cat(\"\\nEffect Size (Eta-squared):\", round(eta_squared, 3), \"\\n\") cat(\"Interpretation: Approximately\", round(eta_squared * 100), \"% of the variance\\n\") cat(\"in sepal length can be attributed to species differences.\\n\") # Create a means plot with error bars species_means <- tapply(iris$Sepal.Length, iris$Species, mean) species_se <- tapply(iris$Sepal.Length, iris$Species, function(x) sd(x)\/sqrt(length(x))) # Create a bar plot of means bar_positions <- barplot(species_means, col = c(\"lightpink\", \"lightblue\", \"lightgreen\"), main = \"Mean Sepal Length by Species with 95% CI\", xlab = \"Species\", ylab = \"Mean Sepal Length (cm)\", ylim = c(0, max(species_means) + 3 * max(species_se))) # Add error bars (95% confidence intervals) arrows(bar_positions, species_means - 1.96 * species_se, bar_positions, species_means + 1.96 * species_se, code = 3, angle = 90, length = 0.1) # Add sample size text(bar_positions, 0.5, paste(\"n =\", tapply(iris$Sepal.Length, iris$Species, length)), cex = 0.8) # Add post-hoc test results text(1, species_means[1] + 1.96 * species_se[1] + 0.2, \"a\", cex = 1.2) text(2, species_means[2] + 1.96 * species_se[2] + 0.2, \"b\", cex = 1.2) text(3, species_means[3] + 1.96 * species_se[3] + 0.2, \"c\", cex = 1.2) # Add a note explaining the letters text(2, max(species_means) + 3 * max(species_se) - 0.5, \"Different letters indicate\\nsignificantly different means\\n(Tukey HSD, p < 0.05)\", cex = 0.8)    ANOVA Practice   Analyze and interpret the following ANOVA scenarios:     Researchers want to compare the effectiveness of three different fertilizers (A, B, and C) on plant growth. They randomly assign 30 plants to three groups (10 plants per fertilizer) and measure plant height (in cm) after four weeks. The ANOVA results show F(2, 27) = 5.32, p = 0.011. Interpret these results and explain what follow-up analyses should be conducted.    Interpretation of ANOVA Results:  The ANOVA results (F(2, 27) = 5.32, p = 0.011) indicate that there is a statistically significant difference in plant height among the three fertilizer groups. The p-value (0.011) is less than the conventional significance level of 0.05, which means we can reject the null hypothesis that all fertilizers produce the same mean plant height.  Key components of the results:   F(2, 27) indicates that there are 2 degrees of freedom for the fertilizer (between groups) and 27 degrees of freedom for the error (within groups)  The F-value of 5.32 represents the ratio of between-group variance to within-group variance  p = 0.011 indicates that there is only a 1.1% chance of observing differences this large or larger if all fertilizers had identical effects   Follow-up analyses needed:    Post-hoc tests: Since ANOVA only tells us that there is a significant difference somewhere among the groups but doesn't specify which groups differ from each other, we should conduct post-hoc tests. Tukey's HSD (Honestly Significant Difference) would be appropriate here to perform all pairwise comparisons while controlling for the family-wise error rate.    Effect size calculation: Calculate eta-squared or partial eta-squared to determine the magnitude of the fertilizer effect. This would tell us what percentage of the variance in plant height is explained by the fertilizer type.    Visual representation: Create boxplots or means plots with confidence intervals to visualize the differences between fertilizer groups.    Assumption checking: Verify that ANOVA assumptions are met by examining:  Normality of residuals (using Q-Q plots or Shapiro-Wilk test)  Homogeneity of variance (using Levene's test)  Independence of observations      These follow-up analyses would provide a comprehensive understanding of how the fertilizers differ in their effectiveness and the practical significance of these differences.      Explain the difference between one-way ANOVA and two-way ANOVA, including when you would use each and the additional insights provided by two-way ANOVA.    One-Way ANOVA vs. Two-Way ANOVA  One-Way ANOVA:   Purpose: Examines the effect of a single categorical independent variable (factor) on a continuous dependent variable  Structure: Compares means across three or more groups\/levels of one factor  Example: Comparing student test scores across three different teaching methods  When to use:   When you're interested in the effect of just one factor  When your experimental design manipulates only one variable  When you want to know if any differences exist between several groups    Statistical model: Y = μ + α i + ε  Output: Single F-statistic and p-value for the main effect of the factor   Two-Way ANOVA:   Purpose: Examines the effects of two categorical independent variables and their interaction on a continuous dependent variable  Structure: Analyzes data categorized along two dimensions simultaneously  Example: Comparing student test scores across three teaching methods AND two different times of day  When to use:   When your design includes two factors that might affect the outcome  When you suspect that the effect of one factor may depend on the level of another factor (interaction)  When you want to increase statistical power by accounting for more sources of variation    Statistical model: Y = μ + α i + β j + (αβ) ij + ε  Output: F-statistics and p-values for:  Main effect of factor A  Main effect of factor B  Interaction effect between factors A and B     Additional Insights from Two-Way ANOVA:    Interaction Effects: The most valuable insight from two-way ANOVA is the ability to detect interaction effects, where the impact of one factor depends on the level of the other factor. This reveals complex relationships that one-way ANOVA cannot identify.    More Comprehensive Model: Two-way ANOVA provides a more complete picture of what influences the dependent variable by examining multiple factors simultaneously.    Increased Statistical Power: By accounting for variation due to a second factor, two-way ANOVA can reduce error variance, potentially making it easier to detect the effect of the primary factor of interest.    More Efficient Design: Two-way ANOVA allows for testing multiple hypotheses in a single experiment, which is more efficient than conducting separate one-way ANOVAs.    Control for Confounding: The second factor can act as a control variable, helping to account for variation that might otherwise mask the effect of the primary factor.    In summary, while one-way ANOVA is suitable for simpler designs focusing on a single factor, two-way ANOVA offers a more nuanced analysis that can reveal complex patterns and relationships between variables that would be missed in separate one-way analyses.        Advanced Analysis and Final Project Work    Building simple predictive models  Predictive modeling is a powerful technique for forecasting outcomes based on historical data. In this section, we will explore the fundamentals of building simple predictive models in R, focusing on practical implementation and interpretation.   Predictive Modeling Workflow  The typical workflow for developing predictive models includes:    Problem Definition : Clearly define what you want to predict and why    Data Preparation : Collect, clean, and preprocess the data    Data Splitting : Divide data into training and test sets    Model Selection : Choose appropriate modeling techniques    Model Training : Fit models to the training data    Model Evaluation : Assess performance on test data    Model Deployment : Implement the model for making predictions      Common Predictive Models  Several types of models are useful for different prediction tasks:    Linear Regression : Predicts continuous outcomes based on one or more predictor variables    Logistic Regression : Predicts binary outcomes (e.g., yes\/no, success\/failure)    Decision Trees : Splits data into branches based on feature values to make predictions    Random Forests : Combines multiple decision trees to improve prediction accuracy    Support Vector Machines : Finds optimal boundaries to separate different classes    Neural Networks : Models complex patterns using interconnected layers of nodes      Model Evaluation Metrics  Different metrics are used to evaluate model performance depending on the prediction task:    For Regression Models :  Mean Squared Error (MSE): Average of squared differences between predicted and actual values  Root Mean Squared Error (RMSE): Square root of MSE, in the same units as the target variable  Mean Absolute Error (MAE): Average of absolute differences between predicted and actual values  R-squared: Proportion of variance in the dependent variable explained by the model      For Classification Models :  Accuracy: Proportion of correct predictions  Precision: Proportion of true positives among positive predictions  Recall: Proportion of true positives that are correctly identified  F1 Score: Harmonic mean of precision and recall  ROC Curve and AUC: Visualization and measure of classification performance        # Predictive Modeling Examples in R # Set a seed for reproducibility set.seed(123) # Load necessary data data(mtcars) # Data preparation # Let's predict mpg using weight and horsepower # First, standardize the predictor variables mtcars$wt_std <- scale(mtcars$wt) mtcars$hp_std <- scale(mtcars$hp) # Data splitting (70% training, 30% testing) train_indices <- sample(1:nrow(mtcars), size = round(0.7 * nrow(mtcars))) train_data <- mtcars[train_indices, ] test_data <- mtcars[-train_indices, ] cat(\"Data split into training (\", nrow(train_data), \" observations) and test (\", nrow(test_data), \" observations) sets.\\n\\n\") # 1. Linear Regression Model # -------------------------- cat(\"1. LINEAR REGRESSION MODEL\\n\") cat(\"-------------------------\\n\\n\") # Train the model on the training data lm_model <- lm(mpg ~ wt_std + hp_std, data = train_data) summary(lm_model) # Make predictions on the test data lm_predictions <- predict(lm_model, newdata = test_data) # Evaluate the model performance lm_mse <- mean((test_data$mpg - lm_predictions)^2) lm_rmse <- sqrt(lm_mse) lm_mae <- mean(abs(test_data$mpg - lm_predictions)) lm_r2 <- 1 - sum((test_data$mpg - lm_predictions)^2) \/ sum((test_data$mpg - mean(test_data$mpg))^2) cat(\"Model Performance on Test Data:\\n\") cat(\"Mean Squared Error (MSE):\", round(lm_mse, 3), \"\\n\") cat(\"Root Mean Squared Error (RMSE):\", round(lm_rmse, 3), \"\\n\") cat(\"Mean Absolute Error (MAE):\", round(lm_mae, 3), \"\\n\") cat(\"R-squared:\", round(lm_r2, 3), \"\\n\\n\") # Visualize actual vs. predicted values plot(test_data$mpg, lm_predictions, main = \"Actual vs. Predicted MPG\", xlab = \"Actual MPG\", ylab = \"Predicted MPG\", pch = 19, col = \"blue\") abline(0, 1, col = \"red\", lwd = 2) # Perfect prediction line legend(\"topleft\", legend = c(\"Predictions\", \"Perfect Prediction Line\"), col = c(\"blue\", \"red\"), pch = c(19, NA), lty = c(NA, 1), lwd = c(NA, 2), bty = \"n\") # Add prediction intervals to understand uncertainty # Let's create a data frame with a range of weight values and average horsepower new_data <- data.frame( wt = seq(min(mtcars$wt), max(mtcars$wt), length.out = 100), hp = mean(mtcars$hp) ) # Standardize the predictors to match training new_data$wt_std <- (new_data$wt - mean(mtcars$wt)) \/ sd(mtcars$wt) new_data$hp_std <- (new_data$hp - mean(mtcars$hp)) \/ sd(mtcars$hp) # Generate predictions with prediction intervals prediction_intervals <- predict(lm_model, newdata = new_data, interval = \"prediction\", level = 0.95) # Plot the predictions with intervals plot(mtcars$wt, mtcars$mpg, main = \"MPG vs. Weight with Prediction Intervals\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\", pch = 19, col = \"gray\", cex = 0.8) # Add the prediction line lines(new_data$wt, prediction_intervals[, \"fit\"], col = \"blue\", lwd = 2) # Add the prediction intervals lines(new_data$wt, prediction_intervals[, \"lwr\"], col = \"red\", lty = 2) lines(new_data$wt, prediction_intervals[, \"upr\"], col = \"red\", lty = 2) # Add a legend legend(\"topright\", legend = c(\"Data\", \"Predicted MPG\", \"95% Prediction Interval\"), col = c(\"gray\", \"blue\", \"red\"), pch = c(19, NA, NA), lty = c(NA, 1, 2), lwd = c(NA, 2, 1), bty = \"n\") # 2. Decision Tree Model # --------------------- cat(\"\\n2. DECISION TREE MODEL\\n\") cat(\"--------------------\\n\\n\") # Note: Since we can't install additional packages in the web environment, # we'll demonstrate the concept using simulated behavior cat(\"In a full R environment, you would use the 'rpart' package to build a decision tree:\\n\\n\") cat(\"library(rpart)\\n\") cat(\"tree_model <- rpart(mpg ~ wt + hp, data = train_data, method = 'anova')\\n\") cat(\"tree_predictions <- predict(tree_model, newdata = test_data)\\n\\n\") # Simulate a decision tree prediction # This is a simplified model, not a real tree simulate_tree_prediction <- function(wt, hp) { if (wt < 3) { if (hp < 100) { return(28) } else { return(22) } } else { if (hp < 175) { return(18) } else { return(14) } } } # Apply the simulated prediction to test data tree_predictions <- numeric(nrow(test_data)) for (i in 1:nrow(test_data)) { tree_predictions[i] <- simulate_tree_prediction(test_data$wt[i], test_data$hp[i]) } # Evaluate the simulated tree model tree_mse <- mean((test_data$mpg - tree_predictions)^2) tree_rmse <- sqrt(tree_mse) tree_mae <- mean(abs(test_data$mpg - tree_predictions)) tree_r2 <- 1 - sum((test_data$mpg - tree_predictions)^2) \/ sum((test_data$mpg - mean(test_data$mpg))^2) cat(\"Simulated Decision Tree Performance on Test Data:\\n\") cat(\"Mean Squared Error (MSE):\", round(tree_mse, 3), \"\\n\") cat(\"Root Mean Squared Error (RMSE):\", round(tree_rmse, 3), \"\\n\") cat(\"Mean Absolute Error (MAE):\", round(tree_mae, 3), \"\\n\") cat(\"R-squared:\", round(tree_r2, 3), \"\\n\\n\") # Visualize simulated tree regions # Create a grid of weight and horsepower values wt_grid <- seq(min(mtcars$wt), max(mtcars$wt), length.out = 50) hp_grid <- seq(min(mtcars$hp), max(mtcars$hp), length.out = 50) grid_data <- expand.grid(wt = wt_grid, hp = hp_grid) # Apply the simulated tree model to the grid grid_predictions <- numeric(nrow(grid_data)) for (i in 1:nrow(grid_data)) { grid_predictions[i] <- simulate_tree_prediction(grid_data$wt[i], grid_data$hp[i]) } # Plot the decision regions # Create a color palette for the predictions pred_colors <- heat.colors(10)[cut(grid_predictions, breaks = 10, include.lowest = TRUE)] plot(grid_data$wt, grid_data$hp, col = pred_colors, pch = 15, cex = 0.5, main = \"Simulated Decision Tree Regions\", xlab = \"Weight (1000 lbs)\", ylab = \"Horsepower\") # Add the actual data points points(mtcars$wt, mtcars$hp, col = \"black\", bg = heat.colors(10)[cut(mtcars$mpg, breaks = 10, include.lowest = TRUE)], pch = 21, cex = 1.5) # 3. Model Comparison # ------------------ cat(\"\\n3. MODEL COMPARISON\\n\") cat(\"------------------\\n\\n\") cat(\"Comparing Linear Regression and Simulated Decision Tree:\\n\\n\") cat(\" Linear Regression Decision Tree (Simulated)\\n\") cat(\"Mean Squared Error \", sprintf(\"%-20.3f\", lm_mse), tree_mse, \"\\n\") cat(\"Root Mean Sq Error \", sprintf(\"%-20.3f\", lm_rmse), tree_rmse, \"\\n\") cat(\"Mean Absolute Error \", sprintf(\"%-20.3f\", lm_mae), tree_mae, \"\\n\") cat(\"R-squared \", sprintf(\"%-20.3f\", lm_r2), tree_r2, \"\\n\\n\") # Plot both models' predictions side by side par(mfrow = c(1, 2)) # Linear regression predictions plot(test_data$mpg, lm_predictions, main = \"Linear Regression\", xlab = \"Actual MPG\", ylab = \"Predicted MPG\", pch = 19, col = \"blue\", xlim = c(min(test_data$mpg), max(test_data$mpg)), ylim = c(min(test_data$mpg), max(test_data$mpg))) abline(0, 1, col = \"red\", lwd = 2) # Perfect prediction line # Decision tree predictions plot(test_data$mpg, tree_predictions, main = \"Decision Tree (Simulated)\", xlab = \"Actual MPG\", ylab = \"Predicted MPG\", pch = 19, col = \"green\", xlim = c(min(test_data$mpg), max(test_data$mpg)), ylim = c(min(test_data$mpg), max(test_data$mpg))) abline(0, 1, col = \"red\", lwd = 2) # Perfect prediction line # Reset the plotting layout par(mfrow = c(1, 1)) # 4. Making Predictions with the Model # ----------------------------------- cat(\"\\n4. MAKING PREDICTIONS WITH THE MODEL\\n\") cat(\"-----------------------------------\\n\\n\") cat(\"Let's use our linear regression model to make predictions for new cars:\\n\\n\") # Create a few example cars new_cars <- data.frame( car_name = c(\"Compact Sedan\", \"Sports Car\", \"SUV\", \"Electric Sedan\"), wt = c(2.2, 3.4, 4.2, 2.8), hp = c(120, 300, 210, 240) ) # Standardize the variables using the same means and standard deviations from the original data new_cars$wt_std <- (new_cars$wt - mean(mtcars$wt)) \/ sd(mtcars$wt) new_cars$hp_std <- (new_cars$hp - mean(mtcars$hp)) \/ sd(mtcars$hp) # Make predictions new_cars$predicted_mpg <- predict(lm_model, newdata = new_cars) # Display the predictions cat(\"Predictions for new cars:\\n\") print(new_cars[, c(\"car_name\", \"wt\", \"hp\", \"predicted_mpg\")]) cat(\"\\nInterpretation of predicted MPG values:\\n\") for (i in 1:nrow(new_cars)) { cat(\"- The\", new_cars$car_name[i], \"with weight of\", new_cars$wt[i], \"thousand lbs and\", new_cars$hp[i], \"horsepower is predicted to have\", round(new_cars$predicted_mpg[i], 1), \"MPG.\\n\") } # Calculate prediction intervals for the new predictions prediction_intervals_new <- predict(lm_model, newdata = new_cars, interval = \"prediction\", level = 0.95) cat(\"\\nPredictions with 95% prediction intervals:\\n\") print(cbind(new_cars[, c(\"car_name\")], round(prediction_intervals_new, 1))) cat(\"\\nInterpretation of prediction intervals:\\n\") cat(\"For example, we're 95% confident that the actual MPG for the Electric Sedan\\n\") cat(\"will be between\", round(prediction_intervals_new[4, \"lwr\"], 1), \"and\", round(prediction_intervals_new[4, \"upr\"], 1), \"MPG.\\n\\n\") cat(\"The wide prediction intervals reflect uncertainty in the model and natural\\n\") cat(\"variability in fuel efficiency even among cars with the same characteristics.\\n\\n\") # 5. Key considerations in predictive modeling # ------------------------------------------ cat(\"\\n5. KEY CONSIDERATIONS IN PREDICTIVE MODELING\\n\") cat(\"------------------------------------------\\n\\n\") cat(\"When building and using predictive models, remember these important points:\\n\\n\") cat(\"1. Model Selection: Choose the simplest model that adequately explains the data.\\n\") cat(\" Our linear regression model may be preferable to more complex models if the\\n\") cat(\" performance is similar, due to its interpretability and simplicity.\\n\\n\") cat(\"2. Overfitting vs. Underfitting: Complex models might perform well on training\\n\") cat(\" data but fail to generalize to new data (overfitting). Simple models might\\n\") cat(\" miss important patterns (underfitting).\\n\\n\") cat(\"3. Feature Engineering: Creating new features or transforming existing ones\\n\") cat(\" can significantly improve model performance. For example, we might consider\\n\") cat(\" adding an interaction term (wt × hp) to our model.\\n\\n\") cat(\"4. Cross-Validation: Instead of a single train-test split, k-fold cross-validation\\n\") cat(\" provides a more robust assessment of model performance, especially with small datasets.\\n\\n\") cat(\"5. Model Interpretability: Simpler models like linear regression offer clearer\\n\") cat(\" insights into how features affect the outcome, which can be valuable for\\n\") cat(\" decision-making and communication.\\n\\n\") cat(\"6. Prediction Uncertainty: Always communicate the uncertainty in predictions,\\n\") cat(\" using prediction intervals or similar measures.\\n\\n\") cat(\"7. Data Quality: The quality of predictions depends heavily on the quality,\\n\") cat(\" representativeness, and completeness of the training data.\\n\\n\")    Predictive Modeling Practice   Apply your knowledge of predictive modeling to address the following questions:     A researcher wants to predict student exam scores based on hours studied and previous GPA. They collected data from 100 students and want to build a linear regression model. What steps should they follow to build and validate their model? What metrics should they use to evaluate its performance?    Steps to Build and Validate a Linear Regression Model for Predicting Exam Scores:    Data Preparation   Check for missing values and outliers in hours studied, GPA, and exam scores  Explore data distributions with histograms and scatter plots  Check correlations between predictors (hours studied and GPA) and the outcome (exam scores)  Consider transformations if relationships appear non-linear  Standardize variables if they're on different scales     Data Splitting   Split the data into training (e.g., 70-80%) and testing (e.g., 20-30%) sets  Use random sampling but ensure both sets represent the full range of student characteristics  Alternatively, use k-fold cross-validation (typically 5-10 folds) for more robust validation     Model Building   Build the linear regression model: ExamScore = β₀ + β₁(HoursStudied) + β₂(GPA) + ε  Fit the model using the training data  Examine coefficient values and significance  Consider interaction terms (e.g., HoursStudied × GPA) if theoretically justified     Model Diagnostics   Check linearity assumption using residual plots  Verify homoscedasticity (constant variance of residuals)  Check normality of residuals using Q-Q plots or statistical tests  Look for influential points or outliers using leverage and Cook's distance     Model Validation   Apply the model to the test dataset  Compare predicted vs. actual exam scores  Calculate performance metrics (see below)  If using cross-validation, average results across all folds     Model Refinement   Consider alternative models (e.g., with transformed variables or additional predictors)  Compare models using appropriate criteria  Select the final model based on both statistical performance and interpretability     Interpretation and Reporting   Interpret coefficient values (e.g., \"One additional hour of studying is associated with an increase of X points in exam score, holding GPA constant\")  Generate confidence intervals for coefficients  Create prediction intervals for new observations  Communicate limitations of the model     Performance Metrics to Evaluate the Model:    R-squared (R²) : Proportion of variance in exam scores explained by the model. Higher values (closer to 1) indicate better fit, but this should not be the only criterion.    Adjusted R-squared : Modification of R² that adjusts for the number of predictors. Useful when comparing models with different numbers of variables.    Root Mean Square Error (RMSE) : Square root of the average squared differences between predicted and actual exam scores. Lower values indicate better fit. This metric is in the same units as the exam scores, making it interpretable.    Mean Absolute Error (MAE) : Average of absolute differences between predicted and actual exam scores. Like RMSE, lower values indicate better fit, and it's in the same units as the outcome.    Prediction Accuracy within Ranges : Percentage of predictions within ±5 or ±10 points of actual scores (or other relevant thresholds).    Training vs. Test Performance Comparison : Similar performance on both sets suggests good generalizability; much better performance on training data suggests overfitting.    By following these steps and evaluating the model using multiple metrics, the researcher can develop a reliable predictive model for exam scores and understand its strengths and limitations.      Compare and contrast linear regression and decision trees as predictive modeling approaches. Under what circumstances would you recommend using one over the other?    Comparison of Linear Regression and Decision Trees     Aspect  Linear Regression  Decision Trees    Underlying Assumption  Assumes linear relationship between predictors and outcome  No assumption of linearity; can capture non-linear relationships    Model Structure  Single equation with coefficients  Hierarchical structure with nodes and branches    Handling Interactions  Must be explicitly defined by the analyst  Automatically captures interactions through tree structure    Interpretability  Highly interpretable; coefficients show direction and magnitude of effect  Moderately interpretable; decision rules can be followed    Outlier Sensitivity  Sensitive to outliers  Relatively robust to outliers    Handling Categorical Variables  Requires dummy coding  Natively handles categorical variables    Handling Missing Data  Cannot directly handle missing data  Can work with missing data using surrogate splits    Computational Complexity  Low; computationally efficient  Moderate to high, depending on tree depth and dataset size    Risk of Overfitting  Lower risk of overfitting  Higher risk of overfitting, especially with deep trees     When to Use Linear Regression:   Known Linear Relationships: When theory or exploratory analysis suggests a linear relationship between predictors and outcome  Inference Priority: When understanding the magnitude and direction of each predictor's effect is the primary goal  Small Sample Size: When working with limited data where complex models might overfit  Normally Distributed Data: When the assumptions of linear regression (linearity, normality, homoscedasticity) are reasonably satisfied  Extrapolation Needs: When predictions beyond the range of training data are required (though caution is still needed)  Simple Deployment: When a straightforward mathematical formula is preferred for implementation  Academic\/Scientific Context: When statistically sound confidence intervals and hypothesis tests are required   When to Use Decision Trees:   Complex, Non-linear Relationships: When relationships between variables are not linear and may involve thresholds or interactions  Mixed Data Types: When working with a mix of numerical and categorical predictors  Missing Data: When the dataset contains missing values that cannot be easily imputed  Outliers Present: When the data contains extreme values that would disproportionately influence linear models  Rule-based Understanding: When the goal is to develop a set of decision rules (e.g., \"if X > 10 and Y < 5, then predict Z\")  No Distributional Assumptions: When data violates the assumptions required for linear regression  Feature Importance Analysis: When identifying the most influential predictors is important  Segmentation Goals: When dividing the population into distinct groups is valuable   Hybrid Approaches and Considerations:  In many real-world scenarios, a combination or comparison of both approaches may be optimal:   Start with linear regression as a baseline and compare performance with decision trees  Use decision trees for feature selection or to identify potential interaction terms, then incorporate these insights into a linear model  Consider ensemble methods like random forests (multiple decision trees) for improved prediction accuracy while maintaining many decision tree advantages  For time-series or spatial data, specialized versions of these models or entirely different approaches may be necessary   The final choice should consider the specific dataset characteristics, research or business objectives, interpretability requirements, and computational constraints.        Interpreting model results  Coming soon...    "
},
{
  "id": "ex-ci-interpretation",
  "level": "2",
  "url": "sec-statistical-testing.html#ex-ci-interpretation",
  "type": "Checkpoint",
  "number": "106",
  "title": "Confidence Interval Interpretation.",
  "body": " Confidence Interval Interpretation   A researcher measures the hemoglobin levels (in g\/dL) in a sample of 40 adult women and calculates a 95% confidence interval of [12.3, 13.7] for the population mean.     What is the correct interpretation of this confidence interval?    The correct interpretation of the 95% confidence interval [12.3, 13.7] for hemoglobin levels is:  We are 95% confident that the true population mean hemoglobin level for adult women is between 12.3 and 13.7 g\/dL.  This means that if we were to take many different samples of 40 adult women and construct 95% confidence intervals using the same method, approximately 95% of those intervals would contain the true population mean hemoglobin level.  The confidence interval provides a range of plausible values for the unknown population parameter (mean hemoglobin level) based on the sample data. It reflects the precision and uncertainty in our estimate due to sampling variability.  It's important to note what this does not mean:   It does not mean there's a 95% probability that the true mean is between 12.3 and 13.7 g\/dL. The true population mean is fixed (not random), while the confidence interval is random (varies with different samples).  It does not mean that 95% of individual women's hemoglobin levels fall within this range. The interval represents plausible values for the mean , not for individual measurements.       If the researcher wants to reduce the width of the confidence interval while maintaining the same confidence level (95%), what could they do?    To reduce the width of the confidence interval while maintaining the same 95% confidence level, the researcher could:   Increase the sample size : This is the most effective approach. The width of a confidence interval is proportional to 1\/√n, where n is the sample size. By increasing the sample from 40 to 160 women, the researcher could reduce the interval width by half (since √160 = 2 × √40).  Reduce the variability in measurements : The width of the confidence interval is directly proportional to the standard deviation of the sample. The researcher could:  Use more precise measuring instruments to reduce measurement error  Control for confounding variables that contribute to variability (e.g., standardizing the time of day when samples are collected)  Use a more homogeneous sample population (though this would limit generalizability)    Use a more efficient sampling design : Techniques like stratified sampling can sometimes yield more precise estimates than simple random sampling for the same sample size.  Apply statistical techniques that reduce variance, such as:  Using paired designs where appropriate  Including relevant covariates in the analysis (e.g., ANCOVA instead of ANOVA)  Using ratio or regression estimators if auxiliary information is available     Among these options, increasing the sample size is typically the most straightforward and reliable approach, though it may be constrained by practical limitations such as cost, time, and participant availability.    "
},
{
  "id": "subsec-linear-regression-5-2-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-5-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Least Squares Estimation "
},
{
  "id": "subsec-linear-regression-5-2-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-5-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coefficient of Determination (R²) "
},
{
  "id": "subsec-linear-regression-5-2-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-5-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adjusted R² "
},
{
  "id": "subsec-linear-regression-5-2-4-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-5-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Residuals "
},
{
  "id": "subsec-linear-regression-5-2-5-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-5-2-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Standard Error "
},
{
  "id": "subsec-linear-regression-5-2-6-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-5-2-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "t-statistic and p-value "
},
{
  "id": "subsec-linear-regression-6-2-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-6-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linearity "
},
{
  "id": "subsec-linear-regression-6-2-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-6-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Independence "
},
{
  "id": "subsec-linear-regression-6-2-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-6-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Homoscedasticity "
},
{
  "id": "subsec-linear-regression-6-2-4-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-6-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Normality "
},
{
  "id": "subsec-linear-regression-6-2-5-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-linear-regression-6-2-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "No multicollinearity "
},
{
  "id": "ex-multi-regression",
  "level": "2",
  "url": "sec-statistical-testing.html#ex-multi-regression",
  "type": "Checkpoint",
  "number": "107",
  "title": "Multiple Regression Analysis.",
  "body": " Multiple Regression Analysis   Based on the multiple regression model explored above, answer the following questions:     How does the relationship between weight and MPG change when horsepower is added to the model? Compare the coefficients from the simple and multiple regression models and explain the differences.    When horsepower is added to the regression model, the relationship between weight and MPG typically changes in the following ways:  In the simple regression model (MPG ~ weight), the weight coefficient reflects both the direct effect of weight on MPG and the indirect effect through weight's correlation with horsepower. This is because the simple model doesn't account for the fact that heavier cars typically have more powerful engines.  In the multiple regression model (MPG ~ weight + horsepower), the weight coefficient represents the estimated effect of weight on MPG while holding horsepower constant. This provides a more nuanced understanding of each factor's unique contribution.  The weight coefficient usually decreases in magnitude when horsepower is added to the model. This indicates that part of the apparent effect of weight on MPG in the simple model was actually due to the correlation between weight and horsepower. By including both variables, we can separate their individual effects.  For example, if the weight coefficient changes from -5.0 in the simple model to -3.5 in the multiple model, this suggests that about 1.5 units of the apparent weight effect was actually attributable to horsepower differences.  This change in coefficients highlights the importance of considering multiple factors simultaneously when analyzing complex relationships, as simpler models may overestimate the impact of individual variables due to unaccounted correlations.      A new sports car has a weight of 2,800 lbs and 320 horsepower. Using the multiple regression model, predict the MPG for this car and construct a 95% prediction interval. Interpret the results and discuss any limitations of this prediction.    To predict the MPG for a new sports car with a weight of 2,800 lbs and 320 horsepower, we would substitute these values into our multiple regression equation:  Predicted MPG = β₀ + β₁(weight) + β₂(horsepower)  For example, if our equation is MPG = 37.23 - 3.88(weight) - 0.03(horsepower), the prediction would be:  Predicted MPG = 37.23 - 3.88(2.8) - 0.03(320) = 37.23 - 10.86 - 9.6 = 16.77 MPG  A 95% prediction interval might be [13.2, 20.3] MPG, indicating we're 95% confident that the actual MPG of this specific car would fall within this range.  Interpretation: This prediction suggests the sports car would achieve moderate fuel efficiency, which is expected given its relatively light weight but high horsepower. The width of the prediction interval reflects uncertainty in our estimate due to natural variability in MPG even among similar cars.  Limitations:   The prediction involves extrapolation if 320 horsepower is beyond the range of the training data, which reduces reliability  The model doesn't account for other relevant factors such as aerodynamics, transmission type, or engine technology  Sports cars may have specific design features not represented in the general car population used to build the model  The dataset (mtcars) is from the 1970s, so relationships may differ for modern vehicles with advanced technologies  The prediction assumes a linear relationship between predictors and MPG, which may not hold at extreme values   For more accurate predictions, it would be beneficial to use more recent data specific to similar sports cars and include additional relevant predictors.    "
},
{
  "id": "subsec-hypothesis-testing-4-2-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-4-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Null Hypothesis (H₀) "
},
{
  "id": "subsec-hypothesis-testing-4-2-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-4-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Alternative Hypothesis (H₁ or Hₐ) "
},
{
  "id": "subsec-hypothesis-testing-4-2-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-4-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Significance Level (α) "
},
{
  "id": "subsec-hypothesis-testing-4-2-4-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-4-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "p-value "
},
{
  "id": "subsec-hypothesis-testing-4-2-5-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-4-2-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Type I Error "
},
{
  "id": "subsec-hypothesis-testing-4-2-6-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-4-2-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Type II Error "
},
{
  "id": "subsec-hypothesis-testing-4-2-7-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-4-2-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Power "
},
{
  "id": "subsec-hypothesis-testing-5-2-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-5-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "t-test "
},
{
  "id": "subsec-hypothesis-testing-5-2-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-5-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ANOVA (Analysis of Variance) "
},
{
  "id": "subsec-hypothesis-testing-5-2-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-5-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Chi-Square Test "
},
{
  "id": "subsec-hypothesis-testing-5-2-4-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-5-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Correlation Test "
},
{
  "id": "subsec-hypothesis-testing-5-2-5-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-hypothesis-testing-5-2-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Non-parametric Tests "
},
{
  "id": "ex-hypothesis-testing",
  "level": "2",
  "url": "sec-statistical-testing.html#ex-hypothesis-testing",
  "type": "Checkpoint",
  "number": "108",
  "title": "Hypothesis Testing Practice.",
  "body": " Hypothesis Testing Practice   Answer the following questions about hypothesis testing:     A researcher wants to test if a new teaching method improves student test scores. The average test score with the traditional method is 75. After implementing the new method with 40 students, the mean score is 78 with a standard deviation of 8. Does the new method significantly improve test scores at α = 0.05?    To determine if the new teaching method significantly improves test scores, we need to conduct a one-sample t-test.  Step 1: State the hypotheses  H₀: μ ≤ 75 (The new method does not improve scores)  H₁: μ > 75 (The new method improves scores)    Step 2: Calculate the test statistic (t)  Sample mean (x̄) = 78  Population mean under H₀ (μ₀) = 75  Sample standard deviation (s) = 8  Sample size (n) = 40  t = (x̄ - μ₀)\/(s\/√n) = (78 - 75)\/(8\/√40) = 3\/1.265 = 2.37    Step 3: Find the critical value  For a one-tailed test with α = 0.05 and df = 39  Critical t-value = 1.685    Step 4: Make a decision  Since the calculated t-value (2.37) exceeds the critical value (1.685), we reject the null hypothesis    Conclusion: There is statistically significant evidence (t(39) = 2.37, p < 0.05) that the new teaching method improves student test scores compared to the traditional method.      Explain the difference between statistical significance and practical significance in hypothesis testing, and why it's important to consider both when interpreting results.    Statistical Significance refers to the likelihood that an observed effect occurred by chance. A result is statistically significant when the p-value is less than the predetermined significance level (typically α = 0.05), indicating that the observed effect is unlikely to have occurred randomly.  Practical Significance refers to the real-world importance or meaningfulness of an effect, regardless of its statistical significance. It considers whether the magnitude of the effect is large enough to be relevant in practical applications.  Key Differences:   Focus: Statistical significance focuses on probability and reliability of findings; practical significance focuses on magnitude and real-world impact  Influenced by: Statistical significance is heavily influenced by sample size; practical significance is not  Measurement: Statistical significance is measured by p-values; practical significance often evaluated using effect sizes (e.g., Cohen's d, R²)    Importance of Considering Both:   With large sample sizes, even tiny, inconsequential differences can become statistically significant  A statistically significant result might have such a small effect size that it's not worth implementing in practice  Conversely, a result might not reach statistical significance due to small sample size but could have a large effect size suggesting practical importance  Considering both provides a more complete understanding of research findings and their applications  Helps prevent making important decisions based solely on p-values, which has been criticized in the \"p-value crisis\" in science  Allows for better cost-benefit analysis when implementing interventions or changes based on research findings    A comprehensive approach to hypothesis testing should always consider both statistical significance (Is the effect real?) and practical significance (Does the effect matter?), especially when making recommendations based on data analysis.    "
},
{
  "id": "sec-anova-basics-3-3-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-3-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Between-Group Variance "
},
{
  "id": "sec-anova-basics-3-3-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-3-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Within-Group Variance "
},
{
  "id": "sec-anova-basics-4-2-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-4-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "One-Way ANOVA "
},
{
  "id": "sec-anova-basics-4-2-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-4-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Two-Way ANOVA "
},
{
  "id": "sec-anova-basics-4-2-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-4-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Repeated Measures ANOVA "
},
{
  "id": "sec-anova-basics-4-2-4-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-4-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "MANOVA (Multivariate ANOVA) "
},
{
  "id": "sec-anova-basics-4-2-5-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-4-2-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ANCOVA (Analysis of Covariance) "
},
{
  "id": "sec-anova-basics-5-3-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-5-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Independence "
},
{
  "id": "sec-anova-basics-5-3-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-5-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Normality "
},
{
  "id": "sec-anova-basics-5-3-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-5-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Homogeneity of Variance "
},
{
  "id": "sec-anova-basics-6-3-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-6-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tukey's HSD (Honestly Significant Difference) "
},
{
  "id": "sec-anova-basics-6-3-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-6-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bonferroni Correction "
},
{
  "id": "sec-anova-basics-6-3-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-6-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scheffe's Method "
},
{
  "id": "sec-anova-basics-6-3-4-1",
  "level": "2",
  "url": "sec-statistical-testing.html#sec-anova-basics-6-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dunnett's Test "
},
{
  "id": "ex-anova-practice",
  "level": "2",
  "url": "sec-statistical-testing.html#ex-anova-practice",
  "type": "Checkpoint",
  "number": "109",
  "title": "ANOVA Practice.",
  "body": " ANOVA Practice   Analyze and interpret the following ANOVA scenarios:     Researchers want to compare the effectiveness of three different fertilizers (A, B, and C) on plant growth. They randomly assign 30 plants to three groups (10 plants per fertilizer) and measure plant height (in cm) after four weeks. The ANOVA results show F(2, 27) = 5.32, p = 0.011. Interpret these results and explain what follow-up analyses should be conducted.    Interpretation of ANOVA Results:  The ANOVA results (F(2, 27) = 5.32, p = 0.011) indicate that there is a statistically significant difference in plant height among the three fertilizer groups. The p-value (0.011) is less than the conventional significance level of 0.05, which means we can reject the null hypothesis that all fertilizers produce the same mean plant height.  Key components of the results:   F(2, 27) indicates that there are 2 degrees of freedom for the fertilizer (between groups) and 27 degrees of freedom for the error (within groups)  The F-value of 5.32 represents the ratio of between-group variance to within-group variance  p = 0.011 indicates that there is only a 1.1% chance of observing differences this large or larger if all fertilizers had identical effects   Follow-up analyses needed:    Post-hoc tests: Since ANOVA only tells us that there is a significant difference somewhere among the groups but doesn't specify which groups differ from each other, we should conduct post-hoc tests. Tukey's HSD (Honestly Significant Difference) would be appropriate here to perform all pairwise comparisons while controlling for the family-wise error rate.    Effect size calculation: Calculate eta-squared or partial eta-squared to determine the magnitude of the fertilizer effect. This would tell us what percentage of the variance in plant height is explained by the fertilizer type.    Visual representation: Create boxplots or means plots with confidence intervals to visualize the differences between fertilizer groups.    Assumption checking: Verify that ANOVA assumptions are met by examining:  Normality of residuals (using Q-Q plots or Shapiro-Wilk test)  Homogeneity of variance (using Levene's test)  Independence of observations      These follow-up analyses would provide a comprehensive understanding of how the fertilizers differ in their effectiveness and the practical significance of these differences.      Explain the difference between one-way ANOVA and two-way ANOVA, including when you would use each and the additional insights provided by two-way ANOVA.    One-Way ANOVA vs. Two-Way ANOVA  One-Way ANOVA:   Purpose: Examines the effect of a single categorical independent variable (factor) on a continuous dependent variable  Structure: Compares means across three or more groups\/levels of one factor  Example: Comparing student test scores across three different teaching methods  When to use:   When you're interested in the effect of just one factor  When your experimental design manipulates only one variable  When you want to know if any differences exist between several groups    Statistical model: Y = μ + α i + ε  Output: Single F-statistic and p-value for the main effect of the factor   Two-Way ANOVA:   Purpose: Examines the effects of two categorical independent variables and their interaction on a continuous dependent variable  Structure: Analyzes data categorized along two dimensions simultaneously  Example: Comparing student test scores across three teaching methods AND two different times of day  When to use:   When your design includes two factors that might affect the outcome  When you suspect that the effect of one factor may depend on the level of another factor (interaction)  When you want to increase statistical power by accounting for more sources of variation    Statistical model: Y = μ + α i + β j + (αβ) ij + ε  Output: F-statistics and p-values for:  Main effect of factor A  Main effect of factor B  Interaction effect between factors A and B     Additional Insights from Two-Way ANOVA:    Interaction Effects: The most valuable insight from two-way ANOVA is the ability to detect interaction effects, where the impact of one factor depends on the level of the other factor. This reveals complex relationships that one-way ANOVA cannot identify.    More Comprehensive Model: Two-way ANOVA provides a more complete picture of what influences the dependent variable by examining multiple factors simultaneously.    Increased Statistical Power: By accounting for variation due to a second factor, two-way ANOVA can reduce error variance, potentially making it easier to detect the effect of the primary factor of interest.    More Efficient Design: Two-way ANOVA allows for testing multiple hypotheses in a single experiment, which is more efficient than conducting separate one-way ANOVAs.    Control for Confounding: The second factor can act as a control variable, helping to account for variation that might otherwise mask the effect of the primary factor.    In summary, while one-way ANOVA is suitable for simpler designs focusing on a single factor, two-way ANOVA offers a more nuanced analysis that can reveal complex patterns and relationships between variables that would be missed in separate one-way analyses.    "
},
{
  "id": "subsec-prediction-modeling-3-3-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-3-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem Definition "
},
{
  "id": "subsec-prediction-modeling-3-3-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-3-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data Preparation "
},
{
  "id": "subsec-prediction-modeling-3-3-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-3-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data Splitting "
},
{
  "id": "subsec-prediction-modeling-3-3-4-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-3-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Model Selection "
},
{
  "id": "subsec-prediction-modeling-3-3-5-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-3-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Model Training "
},
{
  "id": "subsec-prediction-modeling-3-3-6-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-3-3-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Model Evaluation "
},
{
  "id": "subsec-prediction-modeling-3-3-7-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-3-3-7-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Model Deployment "
},
{
  "id": "subsec-prediction-modeling-4-3-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-4-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear Regression "
},
{
  "id": "subsec-prediction-modeling-4-3-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-4-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Logistic Regression "
},
{
  "id": "subsec-prediction-modeling-4-3-3-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-4-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Decision Trees "
},
{
  "id": "subsec-prediction-modeling-4-3-4-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-4-3-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Random Forests "
},
{
  "id": "subsec-prediction-modeling-4-3-5-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-4-3-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Support Vector Machines "
},
{
  "id": "subsec-prediction-modeling-4-3-6-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-4-3-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Neural Networks "
},
{
  "id": "subsec-prediction-modeling-5-3-1-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-5-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "For Regression Models "
},
{
  "id": "subsec-prediction-modeling-5-3-2-1",
  "level": "2",
  "url": "sec-statistical-testing.html#subsec-prediction-modeling-5-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "For Classification Models "
},
{
  "id": "ex-predictive-modeling",
  "level": "2",
  "url": "sec-statistical-testing.html#ex-predictive-modeling",
  "type": "Checkpoint",
  "number": "110",
  "title": "Predictive Modeling Practice.",
  "body": " Predictive Modeling Practice   Apply your knowledge of predictive modeling to address the following questions:     A researcher wants to predict student exam scores based on hours studied and previous GPA. They collected data from 100 students and want to build a linear regression model. What steps should they follow to build and validate their model? What metrics should they use to evaluate its performance?    Steps to Build and Validate a Linear Regression Model for Predicting Exam Scores:    Data Preparation   Check for missing values and outliers in hours studied, GPA, and exam scores  Explore data distributions with histograms and scatter plots  Check correlations between predictors (hours studied and GPA) and the outcome (exam scores)  Consider transformations if relationships appear non-linear  Standardize variables if they're on different scales     Data Splitting   Split the data into training (e.g., 70-80%) and testing (e.g., 20-30%) sets  Use random sampling but ensure both sets represent the full range of student characteristics  Alternatively, use k-fold cross-validation (typically 5-10 folds) for more robust validation     Model Building   Build the linear regression model: ExamScore = β₀ + β₁(HoursStudied) + β₂(GPA) + ε  Fit the model using the training data  Examine coefficient values and significance  Consider interaction terms (e.g., HoursStudied × GPA) if theoretically justified     Model Diagnostics   Check linearity assumption using residual plots  Verify homoscedasticity (constant variance of residuals)  Check normality of residuals using Q-Q plots or statistical tests  Look for influential points or outliers using leverage and Cook's distance     Model Validation   Apply the model to the test dataset  Compare predicted vs. actual exam scores  Calculate performance metrics (see below)  If using cross-validation, average results across all folds     Model Refinement   Consider alternative models (e.g., with transformed variables or additional predictors)  Compare models using appropriate criteria  Select the final model based on both statistical performance and interpretability     Interpretation and Reporting   Interpret coefficient values (e.g., \"One additional hour of studying is associated with an increase of X points in exam score, holding GPA constant\")  Generate confidence intervals for coefficients  Create prediction intervals for new observations  Communicate limitations of the model     Performance Metrics to Evaluate the Model:    R-squared (R²) : Proportion of variance in exam scores explained by the model. Higher values (closer to 1) indicate better fit, but this should not be the only criterion.    Adjusted R-squared : Modification of R² that adjusts for the number of predictors. Useful when comparing models with different numbers of variables.    Root Mean Square Error (RMSE) : Square root of the average squared differences between predicted and actual exam scores. Lower values indicate better fit. This metric is in the same units as the exam scores, making it interpretable.    Mean Absolute Error (MAE) : Average of absolute differences between predicted and actual exam scores. Like RMSE, lower values indicate better fit, and it's in the same units as the outcome.    Prediction Accuracy within Ranges : Percentage of predictions within ±5 or ±10 points of actual scores (or other relevant thresholds).    Training vs. Test Performance Comparison : Similar performance on both sets suggests good generalizability; much better performance on training data suggests overfitting.    By following these steps and evaluating the model using multiple metrics, the researcher can develop a reliable predictive model for exam scores and understand its strengths and limitations.      Compare and contrast linear regression and decision trees as predictive modeling approaches. Under what circumstances would you recommend using one over the other?    Comparison of Linear Regression and Decision Trees     Aspect  Linear Regression  Decision Trees    Underlying Assumption  Assumes linear relationship between predictors and outcome  No assumption of linearity; can capture non-linear relationships    Model Structure  Single equation with coefficients  Hierarchical structure with nodes and branches    Handling Interactions  Must be explicitly defined by the analyst  Automatically captures interactions through tree structure    Interpretability  Highly interpretable; coefficients show direction and magnitude of effect  Moderately interpretable; decision rules can be followed    Outlier Sensitivity  Sensitive to outliers  Relatively robust to outliers    Handling Categorical Variables  Requires dummy coding  Natively handles categorical variables    Handling Missing Data  Cannot directly handle missing data  Can work with missing data using surrogate splits    Computational Complexity  Low; computationally efficient  Moderate to high, depending on tree depth and dataset size    Risk of Overfitting  Lower risk of overfitting  Higher risk of overfitting, especially with deep trees     When to Use Linear Regression:   Known Linear Relationships: When theory or exploratory analysis suggests a linear relationship between predictors and outcome  Inference Priority: When understanding the magnitude and direction of each predictor's effect is the primary goal  Small Sample Size: When working with limited data where complex models might overfit  Normally Distributed Data: When the assumptions of linear regression (linearity, normality, homoscedasticity) are reasonably satisfied  Extrapolation Needs: When predictions beyond the range of training data are required (though caution is still needed)  Simple Deployment: When a straightforward mathematical formula is preferred for implementation  Academic\/Scientific Context: When statistically sound confidence intervals and hypothesis tests are required   When to Use Decision Trees:   Complex, Non-linear Relationships: When relationships between variables are not linear and may involve thresholds or interactions  Mixed Data Types: When working with a mix of numerical and categorical predictors  Missing Data: When the dataset contains missing values that cannot be easily imputed  Outliers Present: When the data contains extreme values that would disproportionately influence linear models  Rule-based Understanding: When the goal is to develop a set of decision rules (e.g., \"if X > 10 and Y < 5, then predict Z\")  No Distributional Assumptions: When data violates the assumptions required for linear regression  Feature Importance Analysis: When identifying the most influential predictors is important  Segmentation Goals: When dividing the population into distinct groups is valuable   Hybrid Approaches and Considerations:  In many real-world scenarios, a combination or comparison of both approaches may be optimal:   Start with linear regression as a baseline and compare performance with decision trees  Use decision trees for feature selection or to identify potential interaction terms, then incorporate these insights into a linear model  Consider ensemble methods like random forests (multiple decision trees) for improved prediction accuracy while maintaining many decision tree advantages  For time-series or spatial data, specialized versions of these models or entirely different approaches may be necessary   The final choice should consider the specific dataset characteristics, research or business objectives, interpretability requirements, and computational constraints.    "
},
{
  "id": "ch-advanced-analysis",
  "level": "1",
  "url": "ch-advanced-analysis.html",
  "type": "Chapter",
  "number": "",
  "title": "Advanced Analysis and Final Project Work",
  "body": " Advanced Analysis and Final Project Work   This unit covers advanced analysis techniques and preparation for the final project.    "
},
{
  "id": "sec-personal-data-tracking",
  "level": "1",
  "url": "sec-personal-data-tracking.html",
  "type": "Section",
  "number": "",
  "title": "Project 1: Gleaning Insights from Personal Data",
  "body": " Project 1: Gleaning Insights from Personal Data  In this course-long mini-project, you'll collect and analyze your own personal data to gain hands-on experience with data science concepts, and maybe learn something new about yourself!   For this project, you will:    Select a personal data tracking topic (e.g., screen time, physical activity, study habits, spending, etc.)    Design a data collection methodology and tracking system    Consistently collect data over the course duration    Periodically analyze the data using techniques learned in class    Present insights and findings at the end of the course     Project milestones and check-ins will occur regularly throughout the course:    Week 2 : Topic brainstorm and selection    Week 3 : Design your tracking system and begin data collection    Week 6 : Initial data review and methodology refinement    Week 9 : Mid-project check-in and preliminary analysis    Week 12 : Final analysis and presentation preparation              Week 2: Project Brainstorm   Take a few minutes to brainstorm potential topics for your personal data tracking project. Consider:    What aspects of your daily life are you curious about?    What behaviors or patterns might you want to understand better?    What data would be practical for you to collect consistently?    What potential insights might be valuable to you?    List at least three potential tracking topics and briefly explain why each interests you.         Week 3: Designing your Data Collection  The success of this project relies heavily on gathering the correct data. Think about what you are studying. For example, I'm interested to see if there are any trends in my perceived stress level each day. To measure this, I will need to ask myself how stressed I felt each day and write it down. I should do this at the same time, probably the end, of every day and make sure I record that level with the date. This is just the first step, I need a way to organize this data so that I can analyze it. In this section, you will need to think about how you would like to both collect and organize your data. Because I know I will want to work with my data, I will want to move it from the notepad (or note section on my phone) to maybe a Google sheet, like the one below:   Example spreadsheet for project data collection   Write a paragraph explaining how you plan to do this and submit it to your teacher.        Week 6: Initial Data Review  To make sure things are going well, you will analyze the personal data you've been tracking so far and be given the chance to refine your data collection or methodology, if needed.  Analysis steps include:    Organize and clean your collected data    Perform basic statistical analysis (e.g., averages, ranges, patterns)    Create visualizations to illustrate key insights    Identify limitations and potential biases in your data    Draw preliminary conclusions based on your analysis    As I've been collecting data on my stress level, I run the code from our first check-in and notice an interesting pattern in my data, do you notice it?   Example stress level data graph, looking to identify any patterns   Maybe you notice that it is trending upwards, but there is something deeper...  I'm noticing that my stress level seems to cycle up and down, why is that? This is why programming is so powerful in data analysis. If I run the following code, I might start to tease out some patterns about what days of the week my stress levels are higher or lower. What do you notice now?   Your mini-project presentation should include:    A brief description of what data you collected and why    Your data collection methodology    Key findings from your analysis    Visualizations to illustrate patterns or insights you've found    Limitations of your data and analysis    Potential next steps or questions for future investigation    "
},
{
  "id": "sec-personal-data-tracking-5-1-1",
  "level": "2",
  "url": "sec-personal-data-tracking.html#sec-personal-data-tracking-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 2 "
},
{
  "id": "sec-personal-data-tracking-5-2-1",
  "level": "2",
  "url": "sec-personal-data-tracking.html#sec-personal-data-tracking-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 3 "
},
{
  "id": "sec-personal-data-tracking-5-3-1",
  "level": "2",
  "url": "sec-personal-data-tracking.html#sec-personal-data-tracking-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 6 "
},
{
  "id": "sec-personal-data-tracking-5-4-1",
  "level": "2",
  "url": "sec-personal-data-tracking.html#sec-personal-data-tracking-5-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 9 "
},
{
  "id": "sec-personal-data-tracking-5-5-1",
  "level": "2",
  "url": "sec-personal-data-tracking.html#sec-personal-data-tracking-5-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 12 "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
