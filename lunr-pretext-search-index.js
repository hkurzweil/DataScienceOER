var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-intro-to-data",
  "level": "1",
  "url": "sec-intro-to-data.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Data",
  "body": " Introduction to Data    What is Data Science and its Applications?  Data science combines multiple disciplines to extract meaningful insights from data. It incorporates elements of statistics, computer science, domain expertise, and critical thinking to interpret complex datasets.  The field has grown exponentially as organizations recognize the value of data-driven decision making across sectors including healthcare, finance, technology, and marketing.    Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.      A healthcare provider uses patient data to predict which individuals might be at risk for specific conditions, allowing for early intervention and preventive care.      Knowledge Check: Data Science Applications   Which of the following is NOT typically considered an application of data science?      Predictive maintenance for industrial equipment    This is a common application of data science, using sensor data to predict when equipment might fail.      Manual data entry into spreadsheets    Correct! While data entry is important for data collection, it's not considered a data science application itself.      Customer segmentation for targeted marketing    This is a common data science application in marketing analytics.      Fraud detection in financial transactions    This is a major application of data science in the financial sector.      Data science applications continue to expand as technology evolves. From improving healthcare outcomes to optimizing supply chains, the impact of data-driven decision making touches virtually every industry.     Explore how data shapes our daily lives  Data has become integral to our daily experiences, often in ways we don't notice. From personalized recommendations on streaming platforms to traffic routing in navigation apps, data analytics influences countless aspects of modern life.  Consider these common examples of data science in daily life:    Recommendation systems on streaming and e-commerce platforms    Weather forecasting applications    Personalized health insights from wearable devices    Traffic optimization in navigation apps    Fraud detection systems for financial transactions     Data Around You   Take a moment to reflect on your digital activities in the past 24 hours. List three examples where you've interacted with systems that likely used data science to customize or improve your experience.      Match Data Types to Real-World Examples   Match each data-driven system to the primary type of data it collects:     Weather forecasting app  Atmospheric sensor data    Music streaming service  Listening habits and preferences    Fitness tracker  Biometric and activity data    E-commerce website  Browsing and purchase history     The ubiquity of data in our lives raises important questions about privacy, security, and the ethical use of information. As we become more data-driven as a society, understanding these implications becomes increasingly important.     Set up Web-R accounts and platform familiarization  In this course, we'll use Web-R as our primary platform for data analysis. Web-R provides a cloud-based environment for R programming that eliminates the need for local installation.   Setting Up Your Web-R Account  Follow these steps to create and configure your Web-R account:    Navigate to the Web-R platform (link provided in your course materials)    Click \"Create Account\" and enter your academic email address    Complete the verification process via the email sent to you    Log in and customize your workspace settings      Web-R interface overview   Screenshot of the Web-R interface showing the main components: script editor (top left), console (bottom left), environment\/history (top right), and files\/plots\/packages\/help (bottom right).    The Web-R environment consists of several key components:    Script Editor : Where you write and edit your R code    Console : Where code is executed and results are displayed    Environment Pane : Shows variables and objects in memory    Output Pane : Displays plots, files, packages, and help documentation     # Your first R commands # Create a simple variable x <- 10 # Print the value print(x) # Perform a simple calculation y <- x * 2 print(y) # Create a simple vector numbers <- c(5, 10, 15, 20, 25) # Calculate the mean mean(numbers)     Web-R Interface Identification   Identify the four main panels in the Web-R interface and their functions:    Look at the figure above for reference.    The four main panels are:    Script Editor (top left): Where you write and edit your R code    Console (bottom left): Where code is executed and results are displayed    Environment\/History (top right): Shows variables in memory and command history    Files\/Plots\/Packages\/Help (bottom right): Tabbed panel for file navigation, viewing plots, managing packages, and accessing help documentation       "
},
{
  "id": "def-data-science",
  "level": "2",
  "url": "sec-intro-to-data.html#def-data-science",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.   "
},
{
  "id": "subsec-what-is-data-science-5",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-what-is-data-science-5",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  A healthcare provider uses patient data to predict which individuals might be at risk for specific conditions, allowing for early intervention and preventive care.   "
},
{
  "id": "ex-data-science-applications",
  "level": "2",
  "url": "sec-intro-to-data.html#ex-data-science-applications",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "Knowledge Check: Data Science Applications.",
  "body": " Knowledge Check: Data Science Applications   Which of the following is NOT typically considered an application of data science?      Predictive maintenance for industrial equipment    This is a common application of data science, using sensor data to predict when equipment might fail.      Manual data entry into spreadsheets    Correct! While data entry is important for data collection, it's not considered a data science application itself.      Customer segmentation for targeted marketing    This is a common data science application in marketing analytics.      Fraud detection in financial transactions    This is a major application of data science in the financial sector.     "
},
{
  "id": "subsec-data-daily-lives-5",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-data-daily-lives-5",
  "type": "Exploration",
  "number": "1.1.1",
  "title": "Data Around You.",
  "body": " Data Around You   Take a moment to reflect on your digital activities in the past 24 hours. List three examples where you've interacted with systems that likely used data science to customize or improve your experience.   "
},
{
  "id": "ex-matching-data-examples",
  "level": "2",
  "url": "sec-intro-to-data.html#ex-matching-data-examples",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "Match Data Types to Real-World Examples.",
  "body": " Match Data Types to Real-World Examples   Match each data-driven system to the primary type of data it collects:     Weather forecasting app  Atmospheric sensor data    Music streaming service  Listening habits and preferences    Fitness tracker  Biometric and activity data    E-commerce website  Browsing and purchase history    "
},
{
  "id": "tech-web-r",
  "level": "2",
  "url": "sec-intro-to-data.html#tech-web-r",
  "type": "Technology",
  "number": "1.1.5",
  "title": "Setting Up Your Web-R Account.",
  "body": " Setting Up Your Web-R Account  Follow these steps to create and configure your Web-R account:    Navigate to the Web-R platform (link provided in your course materials)    Click \"Create Account\" and enter your academic email address    Complete the verification process via the email sent to you    Log in and customize your workspace settings    "
},
{
  "id": "fig-web-r-interface",
  "level": "2",
  "url": "sec-intro-to-data.html#fig-web-r-interface",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " Web-R interface overview   Screenshot of the Web-R interface showing the main components: script editor (top left), console (bottom left), environment\/history (top right), and files\/plots\/packages\/help (bottom right).   "
},
{
  "id": "subsec-web-r-setup-6-1-1",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-web-r-setup-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Script Editor "
},
{
  "id": "subsec-web-r-setup-6-2-1",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-web-r-setup-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Console "
},
{
  "id": "subsec-web-r-setup-6-3-1",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-web-r-setup-6-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Environment Pane "
},
{
  "id": "subsec-web-r-setup-6-4-1",
  "level": "2",
  "url": "sec-intro-to-data.html#subsec-web-r-setup-6-4-1",
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
  "number": "1.1.7",
  "title": "Web-R Interface Identification.",
  "body": " Web-R Interface Identification   Identify the four main panels in the Web-R interface and their functions:    Look at the figure above for reference.    The four main panels are:    Script Editor (top left): Where you write and edit your R code    Console (bottom left): Where code is executed and results are displayed    Environment\/History (top right): Shows variables in memory and command history    Files\/Plots\/Packages\/Help (bottom right): Tabbed panel for file navigation, viewing plots, managing packages, and accessing help documentation     "
},
{
  "id": "sec-types-of-data",
  "level": "1",
  "url": "sec-types-of-data.html",
  "type": "Section",
  "number": "1.2",
  "title": "Types of data and their characteristics",
  "body": " Types of data and their characteristics    Qualitative vs. quantitative data  Data can be broadly categorized into two main types: qualitative and quantitative. Understanding the difference is crucial for selecting appropriate analysis methods.    Qualitative data represents descriptive information that can be observed but not measured numerically. It includes categories, attributes, labels, or other descriptive properties.      Quantitative data represents numerical measurements or counts that can be expressed as numbers and analyzed mathematically.     Comparison of Qualitative and Quantitative Data    Aspect  Qualitative Data  Quantitative Data    Nature  Descriptive  Numerical    Examples  Color, gender, opinion  Height, weight, temperature    Analysis Methods  Thematic, content analysis  Statistical analysis    Data Collection  Interviews, observations  Experiments, surveys with numeric responses     Quantitative data can be further divided into:    Discrete data : Counts or whole numbers (e.g., number of students in a class)    Continuous data : Measurements that can take any value within a range (e.g., height, weight, time)    Qualitative data can be categorized as:    Nominal : Categories with no inherent order (e.g., colors, gender)    Ordinal : Categories with a meaningful order (e.g., education level, satisfaction ratings)      Sort the Data Types   Classify each of the following as either qualitative or quantitative data:     Student's favorite color  Qualitative    Temperature in degrees Celsius  Quantitative    Number of students in a class  Quantitative    Brand of smartphone  Qualitative    Customer satisfaction rating (1-5 stars)  Quantitative    Blood type  Qualitative        Structured vs. unstructured data  Another important distinction in data science is between structured and unstructured data, which affects how we store, process, and analyze information.    Structured data is organized in a predefined format, typically arranged in rows and columns, making it easily searchable and analyzable using traditional database techniques.      Unstructured data lacks a predefined organization or format, making it more challenging to process using conventional methods. Examples include text documents, social media posts, images, and videos.     Structured vs. Unstructured Data    Structured Data Example   A spreadsheet showing neatly organized data in rows and columns     Unstructured Data Example   Various unorganized data formats including text documents, images, and audio files      Between these two extremes is semi-structured data , which contains some organizational properties but doesn't conform to the strict structure of a relational database. Examples include JSON and XML files.   Examples of Data Structure Types   Structured data : Customer database with columns for name, address, purchase history  Semi-structured data : JSON file containing customer reviews with varying fields  Unstructured data : Collection of video testimonials from customers      Identify Data Structure Types   Identify whether each of the following is typically structured or unstructured data:      A CSV file containing customer purchase history    Correct! CSV files are organized in rows and columns, making them structured data.      A collection of customer reviews written as free text    Free text reviews are unstructured data as they don't follow a predefined format.      A relational database of product inventory    Correct! Relational databases are a classic example of structured data.      A folder of surveillance camera footage    Video footage is unstructured data as it doesn't have a predefined organizational format.         Activity: Identifying data types in real-world examples   Data Type Scavenger Hunt   For this activity, you'll examine various real-world datasets and identify the types of data they contain.  Instructions:    Form small groups of 2-3 students    Access the provided sample datasets in your Web-R workspace    For each dataset, identify:    Whether it contains primarily qualitative or quantitative data    Whether it is structured or unstructured    At least three specific variables and their data types      Record your findings in the provided worksheet    Be prepared to share your analysis with the class      Remember that some datasets might contain multiple types of data. Focus on identifying the characteristics of each variable.     # Load a sample dataset data(mtcars) # Examine the structure str(mtcars) # Summary statistics summary(mtcars) # First few rows head(mtcars)    Reflection Question   After examining the mtcars dataset above, answer the following questions:    What type of data (qualitative\/quantitative) is mostly represented in this dataset?    Is this dataset structured or unstructured? Explain why.    Identify two variables that might be useful for predicting a car's fuel efficiency (mpg). Explain your reasoning.       "
},
{
  "id": "def-qualitative-data",
  "level": "2",
  "url": "sec-types-of-data.html#def-qualitative-data",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Qualitative data represents descriptive information that can be observed but not measured numerically. It includes categories, attributes, labels, or other descriptive properties.   "
},
{
  "id": "def-quantitative-data",
  "level": "2",
  "url": "sec-types-of-data.html#def-quantitative-data",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  Quantitative data represents numerical measurements or counts that can be expressed as numbers and analyzed mathematically.   "
},
{
  "id": "table-qual-quant-comparison",
  "level": "2",
  "url": "sec-types-of-data.html#table-qual-quant-comparison",
  "type": "Table",
  "number": "1.2.3",
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
  "number": "1.2.4",
  "title": "Sort the Data Types.",
  "body": " Sort the Data Types   Classify each of the following as either qualitative or quantitative data:     Student's favorite color  Qualitative    Temperature in degrees Celsius  Quantitative    Number of students in a class  Quantitative    Brand of smartphone  Qualitative    Customer satisfaction rating (1-5 stars)  Quantitative    Blood type  Qualitative    "
},
{
  "id": "def-structured-data",
  "level": "2",
  "url": "sec-types-of-data.html#def-structured-data",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  Structured data is organized in a predefined format, typically arranged in rows and columns, making it easily searchable and analyzable using traditional database techniques.   "
},
{
  "id": "def-unstructured-data",
  "level": "2",
  "url": "sec-types-of-data.html#def-unstructured-data",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "  Unstructured data lacks a predefined organization or format, making it more challenging to process using conventional methods. Examples include text documents, social media posts, images, and videos.   "
},
{
  "id": "fig-data-structure-types",
  "level": "2",
  "url": "sec-types-of-data.html#fig-data-structure-types",
  "type": "Figure",
  "number": "1.2.7",
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
  "number": "1.2.8",
  "title": "Examples of Data Structure Types.",
  "body": " Examples of Data Structure Types   Structured data : Customer database with columns for name, address, purchase history  Semi-structured data : JSON file containing customer reviews with varying fields  Unstructured data : Collection of video testimonials from customers   "
},
{
  "id": "ex-structured-unstructured",
  "level": "2",
  "url": "sec-types-of-data.html#ex-structured-unstructured",
  "type": "Checkpoint",
  "number": "1.2.9",
  "title": "Identify Data Structure Types.",
  "body": " Identify Data Structure Types   Identify whether each of the following is typically structured or unstructured data:      A CSV file containing customer purchase history    Correct! CSV files are organized in rows and columns, making them structured data.      A collection of customer reviews written as free text    Free text reviews are unstructured data as they don't follow a predefined format.      A relational database of product inventory    Correct! Relational databases are a classic example of structured data.      A folder of surveillance camera footage    Video footage is unstructured data as it doesn't have a predefined organizational format.     "
},
{
  "id": "activity-data-types",
  "level": "2",
  "url": "sec-types-of-data.html#activity-data-types",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Data Type Scavenger Hunt.",
  "body": " Data Type Scavenger Hunt   For this activity, you'll examine various real-world datasets and identify the types of data they contain.  Instructions:    Form small groups of 2-3 students    Access the provided sample datasets in your Web-R workspace    For each dataset, identify:    Whether it contains primarily qualitative or quantitative data    Whether it is structured or unstructured    At least three specific variables and their data types      Record your findings in the provided worksheet    Be prepared to share your analysis with the class      Remember that some datasets might contain multiple types of data. Focus on identifying the characteristics of each variable.   "
},
{
  "id": "ex-data-types-reflection",
  "level": "2",
  "url": "sec-types-of-data.html#ex-data-types-reflection",
  "type": "Checkpoint",
  "number": "1.2.10",
  "title": "Reflection Question.",
  "body": " Reflection Question   After examining the mtcars dataset above, answer the following questions:    What type of data (qualitative\/quantitative) is mostly represented in this dataset?    Is this dataset structured or unstructured? Explain why.    Identify two variables that might be useful for predicting a car's fuel efficiency (mpg). Explain your reasoning.     "
},
{
  "id": "sec-data-collection",
  "level": "1",
  "url": "sec-data-collection.html",
  "type": "Section",
  "number": "1.3",
  "title": "Data Collection and Sources",
  "body": " Data Collection and Sources    How data is collected and by whom  Data collection is the process of gathering and measuring information on variables of interest in a systematic way. The methods used and the entities involved in collection significantly impact data quality and usability.  Common data collection methods include:    Surveys and questionnaires : Structured sets of questions presented to respondents    Interviews : One-on-one or group discussions to gather in-depth information    Observations : Direct recording of behaviors, events, or patterns    Sensors and IoT devices : Automated collection of environmental or activity data    Web scraping : Extraction of data from websites    Transaction records : Data generated during business operations     Match the Method   Match each data collection scenario with the most appropriate method:     A researcher recording the number of people entering a store each hour  Observation    A device measuring room temperature every 15 minutes  Sensors and IoT devices    A marketer gathering customer feedback on a new product  Surveys and questionnaires    A program collecting product prices from various online retailers  Web scraping        Organizations that collect data and their motivations  Various entities collect data for different purposes, each with their own motivations and objectives:    Businesses : Collect customer data to improve products, target marketing, and increase profitability    Government agencies : Gather data for policy making, public service provision, and regulatory purposes    Academic institutions : Collect data for research and knowledge advancement    Healthcare providers : Maintain patient records for treatment planning and health management    Non-profit organizations : Gather data to support advocacy, service delivery, and impact measurement     Data Collection Motivations   A retail company collects purchase transaction data to:    Optimize inventory levels    Develop targeted marketing campaigns    Identify cross-selling opportunities    Predict consumer trends       Identify Organizational Motivations   For each organization type, identify their most likely primary motivation for collecting data:      A social media company primarily collects user interaction data to:   Sell targeted advertising     A government census bureau primarily collects population data to:   Allocate resources and representation     A university primarily collects student performance data to:   Improve educational outcomes and institutional effectiveness     A healthcare provider primarily collects patient health history to:   Provide appropriate and effective treatment        Introduction to the DIKW pyramid  The DIKW (Data, Information, Knowledge, Wisdom) pyramid is a conceptual framework that illustrates the hierarchical relationships between different levels of understanding and insight.   The DIKW Pyramid   A pyramid showing the hierarchical progression from Data at the bottom, followed by Information, Knowledge, and Wisdom at the top.    The four levels of the pyramid are:    Data : Raw facts and figures without context or interpretation (e.g., a list of numbers)      Information : Data that has been processed, organized, or structured to provide meaning and context (e.g., those numbers organized into a table with labels)      Knowledge : Information that has been analyzed, interpreted, and understood, allowing for its application (e.g., recognizing patterns in the table)      Wisdom : The ability to apply knowledge effectively, make sound judgments, and take appropriate actions based on understanding and experience (e.g., making informed decisions based on the patterns)     DIKW in Practice   Data : 98.6, 101.2, 97.9, 100.4, 99.1  Information : Patient temperature readings over five days: 98.6°F, 101.2°F, 97.9°F, 100.4°F, 99.1°F  Knowledge : The patient had a fever that peaked on day 2 and has been gradually subsiding  Wisdom : Based on the pattern of decreasing fever and other symptoms, the treatment is working and should be continued     Identify DIKW Levels   Classify each of the following examples according to its level in the DIKW pyramid:     A spreadsheet showing raw sales figures: $10,435, $12,893, $9,260...  Data    A monthly sales report comparing current performance to targets and historical trends  Information    Understanding that sales increase during certain seasons and with specific marketing campaigns  Knowledge    Developing a strategic plan to optimize marketing spending and inventory based on sales patterns  Wisdom        Discussion: Ethics of data collection  The collection and use of data raise important ethical considerations, particularly regarding privacy, consent, and potential biases. Key ethical principles include:    Informed consent : Ensuring individuals understand what data is being collected and how it will be used    Data minimization : Collecting only the data necessary for the stated purpose    Privacy protection : Implementing measures to safeguard personal information    Transparency : Being open about data collection practices and purposes    Fairness : Ensuring data collection methods don't disadvantage or discriminate against particular groups     Ethical Case Study   Consider the following scenario:  A social media company has collected extensive data on users' browsing habits, post interactions, and private messages. They plan to use this data to develop a psychological profile of each user for targeted advertising. They included this in their terms of service, which users accepted when joining the platform.  Discuss the following questions:    Is this data collection ethically justified? Why or why not?    Does inclusion in the terms of service constitute proper informed consent?    What potential harms could arise from this data use?    What alternative approaches might better balance business needs with ethical considerations?       Ethical Principles in Action   For each scenario, identify which ethical principle(s) is being violated or upheld:      A retail store tracks customers by their cell phone signals without notification.    This violates informed consent and transparency principles, as customers are unaware their movements are being tracked.      A research study collects only anonymous demographic information necessary for their analysis.    This upholds the data minimization principle by collecting only what's necessary for the stated purpose.      A company stores customer credit card details in an unencrypted database.    This violates privacy protection principles, as sensitive financial information is not being adequately safeguarded.      A website explains clearly how cookies will be used before asking for permission.    This upholds informed consent and transparency principles by clearly explaining data practices before collection.       "
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
  "number": "1.3.1",
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
  "number": "1.3.2",
  "title": "Data Collection Motivations.",
  "body": " Data Collection Motivations   A retail company collects purchase transaction data to:    Optimize inventory levels    Develop targeted marketing campaigns    Identify cross-selling opportunities    Predict consumer trends     "
},
{
  "id": "ex-org-motivations",
  "level": "2",
  "url": "sec-data-collection.html#ex-org-motivations",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Identify Organizational Motivations.",
  "body": " Identify Organizational Motivations   For each organization type, identify their most likely primary motivation for collecting data:      A social media company primarily collects user interaction data to:   Sell targeted advertising     A government census bureau primarily collects population data to:   Allocate resources and representation     A university primarily collects student performance data to:   Improve educational outcomes and institutional effectiveness     A healthcare provider primarily collects patient health history to:   Provide appropriate and effective treatment    "
},
{
  "id": "fig-dikw-pyramid",
  "level": "2",
  "url": "sec-data-collection.html#fig-dikw-pyramid",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " The DIKW Pyramid   A pyramid showing the hierarchical progression from Data at the bottom, followed by Information, Knowledge, and Wisdom at the top.   "
},
{
  "id": "def-data-dikw",
  "level": "2",
  "url": "sec-data-collection.html#def-data-dikw",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": "  Data : Raw facts and figures without context or interpretation (e.g., a list of numbers)   "
},
{
  "id": "def-information-dikw",
  "level": "2",
  "url": "sec-data-collection.html#def-information-dikw",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  Information : Data that has been processed, organized, or structured to provide meaning and context (e.g., those numbers organized into a table with labels)   "
},
{
  "id": "def-knowledge-dikw",
  "level": "2",
  "url": "sec-data-collection.html#def-knowledge-dikw",
  "type": "Definition",
  "number": "1.3.7",
  "title": "",
  "body": "  Knowledge : Information that has been analyzed, interpreted, and understood, allowing for its application (e.g., recognizing patterns in the table)   "
},
{
  "id": "def-wisdom-dikw",
  "level": "2",
  "url": "sec-data-collection.html#def-wisdom-dikw",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "  Wisdom : The ability to apply knowledge effectively, make sound judgments, and take appropriate actions based on understanding and experience (e.g., making informed decisions based on the patterns)   "
},
{
  "id": "subsec-dikw-pyramid-9",
  "level": "2",
  "url": "sec-data-collection.html#subsec-dikw-pyramid-9",
  "type": "Example",
  "number": "1.3.9",
  "title": "DIKW in Practice.",
  "body": " DIKW in Practice   Data : 98.6, 101.2, 97.9, 100.4, 99.1  Information : Patient temperature readings over five days: 98.6°F, 101.2°F, 97.9°F, 100.4°F, 99.1°F  Knowledge : The patient had a fever that peaked on day 2 and has been gradually subsiding  Wisdom : Based on the pattern of decreasing fever and other symptoms, the treatment is working and should be continued   "
},
{
  "id": "ex-dikw-levels",
  "level": "2",
  "url": "sec-data-collection.html#ex-dikw-levels",
  "type": "Checkpoint",
  "number": "1.3.10",
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
  "number": "1.3.1",
  "title": "Ethical Case Study.",
  "body": " Ethical Case Study   Consider the following scenario:  A social media company has collected extensive data on users' browsing habits, post interactions, and private messages. They plan to use this data to develop a psychological profile of each user for targeted advertising. They included this in their terms of service, which users accepted when joining the platform.  Discuss the following questions:    Is this data collection ethically justified? Why or why not?    Does inclusion in the terms of service constitute proper informed consent?    What potential harms could arise from this data use?    What alternative approaches might better balance business needs with ethical considerations?     "
},
{
  "id": "ex-ethical-principles",
  "level": "2",
  "url": "sec-data-collection.html#ex-ethical-principles",
  "type": "Checkpoint",
  "number": "1.3.11",
  "title": "Ethical Principles in Action.",
  "body": " Ethical Principles in Action   For each scenario, identify which ethical principle(s) is being violated or upheld:      A retail store tracks customers by their cell phone signals without notification.    This violates informed consent and transparency principles, as customers are unaware their movements are being tracked.      A research study collects only anonymous demographic information necessary for their analysis.    This upholds the data minimization principle by collecting only what's necessary for the stated purpose.      A company stores customer credit card details in an unencrypted database.    This violates privacy protection principles, as sensitive financial information is not being adequately safeguarded.      A website explains clearly how cookies will be used before asking for permission.    This upholds informed consent and transparency principles by clearly explaining data practices before collection.     "
},
{
  "id": "sec-data-sources",
  "level": "1",
  "url": "sec-data-sources.html",
  "type": "Section",
  "number": "1.4",
  "title": "Primary vs. secondary data sources",
  "body": " Primary vs. secondary data sources    Distinguishing between data sources  In data science, it's important to understand the origin of your data and how it was collected. Data sources are typically classified as either primary or secondary.    Primary data is information collected directly by the researcher for a specific purpose. The researcher controls the collection process, design, and methods.      Secondary data is information collected by someone else for another purpose and reused by the researcher. It may have been processed or analyzed before becoming available.     Comparison of Primary and Secondary Data Sources    Characteristic  Primary Data  Secondary Data    Collection  Collected firsthand by the researcher  Collected by someone else    Purpose  Designed for specific research objectives  Originally collected for different purposes    Time  More time-consuming to collect  Often immediately available    Cost  Usually more expensive  Generally less expensive or free    Control  High control over methods and quality  Limited or no control over methods    Examples  Surveys, experiments, interviews  Census data, academic publications, company reports      Primary vs. Secondary Data Examples   Primary data example : A researcher designs and conducts a survey to gather information about consumer preferences for a new product.  Secondary data example : A researcher analyzes existing customer review data from an e-commerce website to understand consumer preferences.     Identify Data Source Types   Classify each of the following as either a primary or secondary data source:     Conducting focus groups with potential customers  Primary data    Analyzing government census statistics  Secondary data    Tracking website user behavior with analytics tools  Primary data    Using historical stock market data from a financial database  Secondary data    Setting up sensors to monitor traffic patterns  Primary data    Reviewing academic journal articles for a literature review  Secondary data        Reliability and validity of different sources  When evaluating data sources, it's essential to consider their reliability and validity to ensure the quality of your analysis and conclusions.    Reliability refers to the consistency and stability of a data source. A reliable source produces similar results under consistent conditions when measurements are repeated.      Validity refers to how accurately a data source measures what it claims to measure. Valid data truly represents the concept or phenomenon being studied.    Factors affecting the reliability and validity of data sources include:    Methodology : How the data was collected    Sample size and selection : Whether the sample is representative and adequate    Measurement instruments : The quality and calibration of tools used    Data processing methods : How raw data was cleaned, aggregated, or transformed    Source reputation : The credibility of the organization or individuals who collected the data    Potential biases : Systematic errors in collection or reporting    Recency : How recently the data was collected     Evaluating Data Source Quality   Consider a research study on consumer spending habits:  High reliability and validity : A large-scale, randomized survey conducted by a reputable market research firm using validated questionnaires, with transparent methodology and a representative sample  Low reliability and validity : An online poll on a niche website with a small, self-selected sample of respondents, using ambiguous questions and no controls for duplicate submissions     Evaluate Data Source Quality   For each scenario, identify at least two factors that might affect the reliability or validity of the data source:    Consider who collected the data, how it was collected, and for what purpose.     A survey about political opinions conducted via landline phones only    Sample bias (excludes those without landlines, who tend to be younger)  Response bias (people with strong political opinions may be more likely to participate)      Customer satisfaction data collected by a company through product registration cards    Sample bias (only customers who complete registration cards)  Timing bias (feedback collected immediately after purchase, before long-term use)      Health statistics reported by a country with limited healthcare infrastructure    Coverage bias (data may only reflect populations with healthcare access)  Measurement inconsistency (limited diagnostic capabilities may affect accuracy)        Mini-project introduction: Personal data tracking exercise  In this course-long mini-project, you'll collect and analyze your own personal data to gain hands-on experience with data science concepts.   Personal Data Tracking Project   For this project, you will:    Select a personal data tracking topic (e.g., screen time, physical activity, study habits, spending, etc.)    Design a data collection methodology and tracking system    Consistently collect data over the course duration    Periodically analyze the data using techniques learned in class    Present insights and findings at the end of the course      Project milestones and check-ins will occur throughout the course:    Week 2-4 : Topic selection and tracking system design    Week 6 : Initial data review and methodology refinement    Week 9 : Mid-project check-in and preliminary analysis    Week 12 : Final analysis and presentation preparation     Personal Data Tracking Brainstorm   Take a few minutes to brainstorm potential topics for your personal data tracking project. Consider:    What aspects of your daily life are you curious about?    What behaviors or patterns might you want to understand better?    What data would be practical for you to collect consistently?    What potential insights might be valuable to you?    List at least three potential tracking topics and briefly explain why each interests you.     Match Data Collection Methods   Match each personal tracking topic with the most appropriate data collection method:     Sleep patterns  Mobile app or wearable device    Mood fluctuations  Daily journal or rating scale    Spending habits  Expense tracking app or spreadsheet    Study productivity  Time tracking tool or timer    Nutrition intake  Food diary or photo log      "
},
{
  "id": "def-primary-data",
  "level": "2",
  "url": "sec-data-sources.html#def-primary-data",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  Primary data is information collected directly by the researcher for a specific purpose. The researcher controls the collection process, design, and methods.   "
},
{
  "id": "def-secondary-data",
  "level": "2",
  "url": "sec-data-sources.html#def-secondary-data",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "  Secondary data is information collected by someone else for another purpose and reused by the researcher. It may have been processed or analyzed before becoming available.   "
},
{
  "id": "table-primary-secondary-comparison",
  "level": "2",
  "url": "sec-data-sources.html#table-primary-secondary-comparison",
  "type": "Table",
  "number": "1.4.3",
  "title": "Comparison of Primary and Secondary Data Sources",
  "body": " Comparison of Primary and Secondary Data Sources    Characteristic  Primary Data  Secondary Data    Collection  Collected firsthand by the researcher  Collected by someone else    Purpose  Designed for specific research objectives  Originally collected for different purposes    Time  More time-consuming to collect  Often immediately available    Cost  Usually more expensive  Generally less expensive or free    Control  High control over methods and quality  Limited or no control over methods    Examples  Surveys, experiments, interviews  Census data, academic publications, company reports    "
},
{
  "id": "subsec-primary-secondary-data-6",
  "level": "2",
  "url": "sec-data-sources.html#subsec-primary-secondary-data-6",
  "type": "Example",
  "number": "1.4.4",
  "title": "Primary vs. Secondary Data Examples.",
  "body": " Primary vs. Secondary Data Examples   Primary data example : A researcher designs and conducts a survey to gather information about consumer preferences for a new product.  Secondary data example : A researcher analyzes existing customer review data from an e-commerce website to understand consumer preferences.   "
},
{
  "id": "ex-identify-data-sources",
  "level": "2",
  "url": "sec-data-sources.html#ex-identify-data-sources",
  "type": "Checkpoint",
  "number": "1.4.5",
  "title": "Identify Data Source Types.",
  "body": " Identify Data Source Types   Classify each of the following as either a primary or secondary data source:     Conducting focus groups with potential customers  Primary data    Analyzing government census statistics  Secondary data    Tracking website user behavior with analytics tools  Primary data    Using historical stock market data from a financial database  Secondary data    Setting up sensors to monitor traffic patterns  Primary data    Reviewing academic journal articles for a literature review  Secondary data    "
},
{
  "id": "def-reliability",
  "level": "2",
  "url": "sec-data-sources.html#def-reliability",
  "type": "Definition",
  "number": "1.4.6",
  "title": "",
  "body": "  Reliability refers to the consistency and stability of a data source. A reliable source produces similar results under consistent conditions when measurements are repeated.   "
},
{
  "id": "def-validity",
  "level": "2",
  "url": "sec-data-sources.html#def-validity",
  "type": "Definition",
  "number": "1.4.7",
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
  "number": "1.4.8",
  "title": "Evaluating Data Source Quality.",
  "body": " Evaluating Data Source Quality   Consider a research study on consumer spending habits:  High reliability and validity : A large-scale, randomized survey conducted by a reputable market research firm using validated questionnaires, with transparent methodology and a representative sample  Low reliability and validity : An online poll on a niche website with a small, self-selected sample of respondents, using ambiguous questions and no controls for duplicate submissions   "
},
{
  "id": "ex-source-evaluation",
  "level": "2",
  "url": "sec-data-sources.html#ex-source-evaluation",
  "type": "Checkpoint",
  "number": "1.4.9",
  "title": "Evaluate Data Source Quality.",
  "body": " Evaluate Data Source Quality   For each scenario, identify at least two factors that might affect the reliability or validity of the data source:    Consider who collected the data, how it was collected, and for what purpose.     A survey about political opinions conducted via landline phones only    Sample bias (excludes those without landlines, who tend to be younger)  Response bias (people with strong political opinions may be more likely to participate)      Customer satisfaction data collected by a company through product registration cards    Sample bias (only customers who complete registration cards)  Timing bias (feedback collected immediately after purchase, before long-term use)      Health statistics reported by a country with limited healthcare infrastructure    Coverage bias (data may only reflect populations with healthcare access)  Measurement inconsistency (limited diagnostic capabilities may affect accuracy)    "
},
{
  "id": "proj-personal-data-tracking",
  "level": "2",
  "url": "sec-data-sources.html#proj-personal-data-tracking",
  "type": "Project",
  "number": "1.4.1",
  "title": "Personal Data Tracking Project.",
  "body": " Personal Data Tracking Project   For this project, you will:    Select a personal data tracking topic (e.g., screen time, physical activity, study habits, spending, etc.)    Design a data collection methodology and tracking system    Consistently collect data over the course duration    Periodically analyze the data using techniques learned in class    Present insights and findings at the end of the course     "
},
{
  "id": "subsec-personal-data-tracking-5-1-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-personal-data-tracking-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 2-4 "
},
{
  "id": "subsec-personal-data-tracking-5-2-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-personal-data-tracking-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 6 "
},
{
  "id": "subsec-personal-data-tracking-5-3-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-personal-data-tracking-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 9 "
},
{
  "id": "subsec-personal-data-tracking-5-4-1",
  "level": "2",
  "url": "sec-data-sources.html#subsec-personal-data-tracking-5-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Week 12 "
},
{
  "id": "exp-tracking-brainstorm",
  "level": "2",
  "url": "sec-data-sources.html#exp-tracking-brainstorm",
  "type": "Exploration",
  "number": "1.4.2",
  "title": "Personal Data Tracking Brainstorm.",
  "body": " Personal Data Tracking Brainstorm   Take a few minutes to brainstorm potential topics for your personal data tracking project. Consider:    What aspects of your daily life are you curious about?    What behaviors or patterns might you want to understand better?    What data would be practical for you to collect consistently?    What potential insights might be valuable to you?    List at least three potential tracking topics and briefly explain why each interests you.   "
},
{
  "id": "ex-tracking-methods",
  "level": "2",
  "url": "sec-data-sources.html#ex-tracking-methods",
  "type": "Checkpoint",
  "number": "1.4.10",
  "title": "Match Data Collection Methods.",
  "body": " Match Data Collection Methods   Match each personal tracking topic with the most appropriate data collection method:     Sleep patterns  Mobile app or wearable device    Mood fluctuations  Daily journal or rating scale    Spending habits  Expense tracking app or spreadsheet    Study productivity  Time tracking tool or timer    Nutrition intake  Food diary or photo log    "
},
{
  "id": "sec-data-quality",
  "level": "1",
  "url": "sec-data-quality.html",
  "type": "Section",
  "number": "1.5",
  "title": "Data Quality and Evaluation",
  "body": " Data Quality and Evaluation    Evaluating dataset quality  The quality of your data directly impacts the reliability of your analysis and conclusions. Evaluating dataset quality is a critical step in the data science workflow.  Key dimensions of data quality include:    Accuracy : The degree to which data correctly reflects the real world    Completeness : The extent to which required data is available    Consistency : The absence of contradictions within the data    Timeliness : How current the data is relative to needs    Precision : The level of detail in the data    Relevance : How applicable the data is to the specific analysis needs     Data Quality Issues   Consider a customer database with the following issues:    Accuracy issue : Some customer addresses are incorrectly formatted or contain typos    Completeness issue : 15% of customer records are missing email addresses    Consistency issue : The same customer appears multiple times with slightly different information    Timeliness issue : Contact information hasn't been updated in over three years         The 5Vs framework: Volume, Velocity, Variety, Veracity, Value  The 5Vs framework is a useful model for evaluating the characteristics and challenges of datasets, particularly in the context of big data.    Volume refers to the size of the dataset. Big data typically involves datasets too large to be processed by traditional database systems.      Velocity refers to the speed at which data is generated, collected, and processed. High-velocity data streams require real-time or near-real-time processing.      Variety refers to the diversity of data types and sources. Modern datasets often combine structured, semi-structured, and unstructured data.      Veracity refers to the reliability and trustworthiness of the data. It addresses concerns about data accuracy, completeness, and potential biases.      Value refers to the usefulness and applicability of the data for generating insights and informing decisions.     The 5Vs of Big Data   A diagram showing the five Vs of big data: Volume, Velocity, Variety, Veracity, and Value, with icons representing each concept.     Identify the 5Vs   Match each scenario with the most relevant \"V\" from the 5Vs framework:     A social media platform processes 500 million tweets per day  Volume    A financial system must detect fraud attempts in milliseconds  Velocity    A retailer combines purchase records, website clicks, and customer service interactions  Variety    Researchers are concerned about sampling bias in their survey data  Veracity    A company evaluates whether collecting certain data will improve business outcomes  Value        Identifying biases in datasets  Biases in datasets can lead to skewed analysis, inaccurate predictions, and potentially harmful decisions. Identifying and addressing these biases is a critical responsibility in data science.  Common types of biases include:    Selection bias : When the data does not represent the population it's intended to analyze    Sampling bias : When certain members of the intended population are more likely to be included than others    Measurement bias : When the method of data collection systematically distorts the data    Confirmation bias : When data is collected or interpreted to confirm preexisting beliefs    Survivorship bias : When analysis focuses only on data that \"survived\" some selection process    Reporting bias : When only certain outcomes or observations are reported     Dataset Biases in Practice   Selection bias example : A survey about internet usage conducted exclusively online will miss people with limited or no internet access.  Measurement bias example : A health study that relies on self-reported exercise levels may be skewed by respondents overestimating their activity.  Survivorship bias example : Analyzing only successful startups while ignoring failed ones will give an incomplete picture of success factors.     Identify Dataset Biases   For each scenario, identify the most likely type of bias:      A study on work-life balance surveys employees during business hours at their workplace   Selection bias   This is selection bias because it only captures employees who are at work during business hours, missing those who work different shifts or are absent.      A product rating system only prompts for feedback from customers who completed a purchase   Sampling bias   This is sampling bias because it excludes potential customers who decided not to purchase, perhaps due to negative impressions.      A researcher examining the durability of products only analyzes items that are returned under warranty   Survivorship bias   This is survivorship bias because it only examines failed products that were returned, missing both successful products and those that failed but weren't returned.      A study finds that taller people earn more on average, but doesn't account for gender differences   Measurement bias   This is measurement bias because the relationship between height and income may be confounded by gender, as men are typically taller and often earn more due to gender-based pay disparities.         Activity: Apply 5Vs to evaluate sample datasets   Dataset Evaluation with the 5Vs Framework   In this activity, you will apply the 5Vs framework to evaluate different sample datasets.  Instructions:    Form small groups of 2-3 students    Each group will be assigned one of the following datasets:    Twitter sentiment data during a major sporting event    Hospital patient records from a regional healthcare system    Real-time sensor data from manufacturing equipment    Customer transaction history from an e-commerce platform      For your assigned dataset, assess each of the 5Vs:    Volume: How large is the dataset likely to be?    Velocity: At what rate is new data generated?    Variety: What different types of data are included?    Veracity: What quality issues or biases might be present?    Value: What insights or applications could this data support?      Create a brief presentation of your evaluation    Share your findings with the class       # Load a dataset with quality issues data(airquality) # Check the structure str(airquality) # Summary to identify potential quality issues summary(airquality) # Count missing values in each column sapply(airquality, function(x) sum(is.na(x))) # Visualize missing data patterns image(is.na(airquality), main=\"Missing Values in Air Quality Dataset\", ylab=\"Observations\", xlab=\"Variables\", col=c(\"green\", \"red\"))    Apply the 5Vs Framework   Based on the airquality dataset examined above, evaluate each dimension of the 5Vs framework:      "
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
  "number": "1.5.1",
  "title": "Data Quality Issues.",
  "body": " Data Quality Issues   Consider a customer database with the following issues:    Accuracy issue : Some customer addresses are incorrectly formatted or contain typos    Completeness issue : 15% of customer records are missing email addresses    Consistency issue : The same customer appears multiple times with slightly different information    Timeliness issue : Contact information hasn't been updated in over three years     "
},
{
  "id": "def-volume",
  "level": "2",
  "url": "sec-data-quality.html#def-volume",
  "type": "Definition",
  "number": "1.5.2",
  "title": "",
  "body": "  Volume refers to the size of the dataset. Big data typically involves datasets too large to be processed by traditional database systems.   "
},
{
  "id": "def-velocity",
  "level": "2",
  "url": "sec-data-quality.html#def-velocity",
  "type": "Definition",
  "number": "1.5.3",
  "title": "",
  "body": "  Velocity refers to the speed at which data is generated, collected, and processed. High-velocity data streams require real-time or near-real-time processing.   "
},
{
  "id": "def-variety",
  "level": "2",
  "url": "sec-data-quality.html#def-variety",
  "type": "Definition",
  "number": "1.5.4",
  "title": "",
  "body": "  Variety refers to the diversity of data types and sources. Modern datasets often combine structured, semi-structured, and unstructured data.   "
},
{
  "id": "def-veracity",
  "level": "2",
  "url": "sec-data-quality.html#def-veracity",
  "type": "Definition",
  "number": "1.5.5",
  "title": "",
  "body": "  Veracity refers to the reliability and trustworthiness of the data. It addresses concerns about data accuracy, completeness, and potential biases.   "
},
{
  "id": "def-value",
  "level": "2",
  "url": "sec-data-quality.html#def-value",
  "type": "Definition",
  "number": "1.5.6",
  "title": "",
  "body": "  Value refers to the usefulness and applicability of the data for generating insights and informing decisions.   "
},
{
  "id": "fig-5vs-framework",
  "level": "2",
  "url": "sec-data-quality.html#fig-5vs-framework",
  "type": "Figure",
  "number": "1.5.7",
  "title": "",
  "body": " The 5Vs of Big Data   A diagram showing the five Vs of big data: Volume, Velocity, Variety, Veracity, and Value, with icons representing each concept.   "
},
{
  "id": "ex-identify-5vs",
  "level": "2",
  "url": "sec-data-quality.html#ex-identify-5vs",
  "type": "Checkpoint",
  "number": "1.5.8",
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
  "number": "1.5.9",
  "title": "Dataset Biases in Practice.",
  "body": " Dataset Biases in Practice   Selection bias example : A survey about internet usage conducted exclusively online will miss people with limited or no internet access.  Measurement bias example : A health study that relies on self-reported exercise levels may be skewed by respondents overestimating their activity.  Survivorship bias example : Analyzing only successful startups while ignoring failed ones will give an incomplete picture of success factors.   "
},
{
  "id": "ex-identify-biases",
  "level": "2",
  "url": "sec-data-quality.html#ex-identify-biases",
  "type": "Checkpoint",
  "number": "1.5.10",
  "title": "Identify Dataset Biases.",
  "body": " Identify Dataset Biases   For each scenario, identify the most likely type of bias:      A study on work-life balance surveys employees during business hours at their workplace   Selection bias   This is selection bias because it only captures employees who are at work during business hours, missing those who work different shifts or are absent.      A product rating system only prompts for feedback from customers who completed a purchase   Sampling bias   This is sampling bias because it excludes potential customers who decided not to purchase, perhaps due to negative impressions.      A researcher examining the durability of products only analyzes items that are returned under warranty   Survivorship bias   This is survivorship bias because it only examines failed products that were returned, missing both successful products and those that failed but weren't returned.      A study finds that taller people earn more on average, but doesn't account for gender differences   Measurement bias   This is measurement bias because the relationship between height and income may be confounded by gender, as men are typically taller and often earn more due to gender-based pay disparities.     "
},
{
  "id": "activity-evaluate-5vs",
  "level": "2",
  "url": "sec-data-quality.html#activity-evaluate-5vs",
  "type": "Activity",
  "number": "1.5.1",
  "title": "Dataset Evaluation with the 5Vs Framework.",
  "body": " Dataset Evaluation with the 5Vs Framework   In this activity, you will apply the 5Vs framework to evaluate different sample datasets.  Instructions:    Form small groups of 2-3 students    Each group will be assigned one of the following datasets:    Twitter sentiment data during a major sporting event    Hospital patient records from a regional healthcare system    Real-time sensor data from manufacturing equipment    Customer transaction history from an e-commerce platform      For your assigned dataset, assess each of the 5Vs:    Volume: How large is the dataset likely to be?    Velocity: At what rate is new data generated?    Variety: What different types of data are included?    Veracity: What quality issues or biases might be present?    Value: What insights or applications could this data support?      Create a brief presentation of your evaluation    Share your findings with the class     "
},
{
  "id": "ex-5vs-application",
  "level": "2",
  "url": "sec-data-quality.html#ex-5vs-application",
  "type": "Checkpoint",
  "number": "1.5.11",
  "title": "Apply the 5Vs Framework.",
  "body": " Apply the 5Vs Framework   Based on the airquality dataset examined above, evaluate each dimension of the 5Vs framework:    "
},
{
  "id": "sec-data-decision-making",
  "level": "1",
  "url": "sec-data-decision-making.html",
  "type": "Section",
  "number": "1.6",
  "title": "Data and decision-making",
  "body": " Data and decision-making    How data informs decisions at different levels  Data-driven decision making is the practice of using data analysis to inform choices at various organizational levels. The application of data varies from strategic to operational decisions.  Decision levels typically include:    Strategic decisions : Long-term, high-impact choices about organizational direction and priorities (e.g., entering new markets, major investments)    Tactical decisions : Medium-term choices about resource allocation and implementation of strategic goals (e.g., marketing campaign planning, quarterly budget adjustments)    Operational decisions : Day-to-day choices about process execution and immediate responses (e.g., inventory management, customer service responses)    Individual decisions : Personal choices made by individuals based on available data (e.g., consumer purchase decisions, health choices)     Data-Driven Decisions Across Levels   In a retail business:  Strategic level : Using market trend data to decide which new product categories to develop  Tactical level : Analyzing seasonal sales patterns to plan inventory purchases for the upcoming quarter  Operational level : Using real-time sales data to adjust staffing levels for the next day  Individual level : A store manager using performance metrics to provide feedback to employees     Match Decision Levels   Match each data-driven decision scenario to its appropriate level:     A company analyzes global economic forecasts to decide on a five-year expansion plan  Strategic    A marketing team uses A\/B testing results to refine a campaign for the next month  Tactical    A warehouse manager uses hourly tracking data to prioritize shipping orders  Operational    A consumer reviews product ratings and price comparisons before making a purchase  Individual        Case studies of data-driven decision making  Examining real-world examples of data-driven decision making helps illustrate best practices and potential pitfalls.   Netflix Content Recommendations   Netflix uses viewer data to inform both strategic content acquisition decisions and personalized recommendations:    Collects detailed viewing behavior data (what users watch, when they pause, when they stop watching)    Analyzes viewing patterns to identify audience preferences and trends    Uses insights to inform original content development (e.g., \"House of Cards\" was commissioned partly based on data showing audience interest in political dramas and Kevin Spacey films)    Develops sophisticated recommendation algorithms to personalize each user's experience    Continually tests and refines recommendation systems to improve user engagement      Key success factors:    Integration of data across strategic and operational decisions    Combination of algorithmic recommendations with human judgment    Substantial investment in data infrastructure and analytics capability    Continuous learning and adaptation based on results       Target's Predictive Analytics   Target's pregnancy prediction model demonstrates both the power and potential concerns of predictive analytics:    Developed a model to identify customers who were likely pregnant based on purchase patterns    Used this information to send targeted marketing for baby-related products    In a famous incident, the model correctly identified a teenage girl as pregnant before her father knew, leading to privacy concerns    Subsequently adjusted their approach to be less transparent about their targeting methods      Key lessons:    Predictive analytics can reveal sensitive insights people may not want exposed    Technical capability should be balanced with ethical considerations    Transparency and privacy must be carefully balanced in data-driven marketing    Even accurate predictions can create negative reactions if they violate perceived privacy boundaries       Case Study Analysis   Consider the case studies presented above and answer the following questions:    What are the key differences in how Netflix and Target used data for decision-making?    What ethical considerations arose in each case, and how might they have been addressed differently?    How did each organization balance automated data analysis with human judgment?    What lessons can other organizations learn from these examples about effective data-driven decision making?         Mini-project check-in: Personal data tracking discussion  This session provides an opportunity to review progress on your personal data tracking mini-project.   Personal Data Tracking Reflection   Take a few minutes to reflect on your data tracking experience so far:    What data are you tracking and how are you collecting it?    What challenges have you encountered in consistent data collection?    What initial patterns or insights have you observed?    How might you improve your data collection methodology?    What questions do you hope to answer with your collected data?       # Example code for personal data analysis # Replace with your own data and analysis as appropriate # Create a simple sample dataset similar to what you might collect dates <- seq(as.Date(\"2025-04-01\"), as.Date(\"2025-04-14\"), by=\"days\") values <- c(45, 52, 48, 60, 65, 57, 50, 63, 58, 70, 55, 62, 59, 68) # Create a data frame tracking_data <- data.frame( date = dates, value = values ) # Print the data print(tracking_data) # Simple visualization plot(tracking_data$date, tracking_data$value, type = \"b\", main = \"Personal Tracking Data\", xlab = \"Date\", ylab = \"Value\") # Basic statistics summary(tracking_data$value) # Identify trends model <- lm(value ~ as.numeric(date), data = tracking_data) summary(model)    Improve Your Data Collection   Based on our discussion and what you've learned about data quality, identify:    Two specific ways you could improve the quality of your personal data collection    One potential bias in your current collection methodology and how you might address it    One additional variable you could track that might provide valuable context or insights        "
},
{
  "id": "subsec-data-decision-levels-4-1-1",
  "level": "2",
  "url": "sec-data-decision-making.html#subsec-data-decision-levels-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Strategic decisions "
},
{
  "id": "subsec-data-decision-levels-4-2-1",
  "level": "2",
  "url": "sec-data-decision-making.html#subsec-data-decision-levels-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tactical decisions "
},
{
  "id": "subsec-data-decision-levels-4-3-1",
  "level": "2",
  "url": "sec-data-decision-making.html#subsec-data-decision-levels-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Operational decisions "
},
{
  "id": "subsec-data-decision-levels-4-4-1",
  "level": "2",
  "url": "sec-data-decision-making.html#subsec-data-decision-levels-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Individual decisions "
},
{
  "id": "subsec-data-decision-levels-5",
  "level": "2",
  "url": "sec-data-decision-making.html#subsec-data-decision-levels-5",
  "type": "Example",
  "number": "1.6.1",
  "title": "Data-Driven Decisions Across Levels.",
  "body": " Data-Driven Decisions Across Levels   In a retail business:  Strategic level : Using market trend data to decide which new product categories to develop  Tactical level : Analyzing seasonal sales patterns to plan inventory purchases for the upcoming quarter  Operational level : Using real-time sales data to adjust staffing levels for the next day  Individual level : A store manager using performance metrics to provide feedback to employees   "
},
{
  "id": "ex-decision-levels",
  "level": "2",
  "url": "sec-data-decision-making.html#ex-decision-levels",
  "type": "Checkpoint",
  "number": "1.6.2",
  "title": "Match Decision Levels.",
  "body": " Match Decision Levels   Match each data-driven decision scenario to its appropriate level:     A company analyzes global economic forecasts to decide on a five-year expansion plan  Strategic    A marketing team uses A\/B testing results to refine a campaign for the next month  Tactical    A warehouse manager uses hourly tracking data to prioritize shipping orders  Operational    A consumer reviews product ratings and price comparisons before making a purchase  Individual    "
},
{
  "id": "ex-case-study-analysis",
  "level": "2",
  "url": "sec-data-decision-making.html#ex-case-study-analysis",
  "type": "Checkpoint",
  "number": "1.6.3",
  "title": "Case Study Analysis.",
  "body": " Case Study Analysis   Consider the case studies presented above and answer the following questions:    What are the key differences in how Netflix and Target used data for decision-making?    What ethical considerations arose in each case, and how might they have been addressed differently?    How did each organization balance automated data analysis with human judgment?    What lessons can other organizations learn from these examples about effective data-driven decision making?     "
},
{
  "id": "exp-tracking-progress",
  "level": "2",
  "url": "sec-data-decision-making.html#exp-tracking-progress",
  "type": "Exploration",
  "number": "1.6.1",
  "title": "Personal Data Tracking Reflection.",
  "body": " Personal Data Tracking Reflection   Take a few minutes to reflect on your data tracking experience so far:    What data are you tracking and how are you collecting it?    What challenges have you encountered in consistent data collection?    What initial patterns or insights have you observed?    How might you improve your data collection methodology?    What questions do you hope to answer with your collected data?     "
},
{
  "id": "ex-tracking-improvement",
  "level": "2",
  "url": "sec-data-decision-making.html#ex-tracking-improvement",
  "type": "Checkpoint",
  "number": "1.6.4",
  "title": "Improve Your Data Collection.",
  "body": " Improve Your Data Collection   Based on our discussion and what you've learned about data quality, identify:    Two specific ways you could improve the quality of your personal data collection    One potential bias in your current collection methodology and how you might address it    One additional variable you could track that might provide valuable context or insights      "
},
{
  "id": "sec-data-impact",
  "level": "1",
  "url": "sec-data-impact.html",
  "type": "Section",
  "number": "1.7",
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
  "number": "1.7.1",
  "title": "Data Impact Examples.",
  "body": " Data Impact Examples   Reinforcing inequity : A hiring algorithm trained on historical data learns to prefer candidates from prestigious universities, perpetuating existing socioeconomic advantages  Promoting equity : Public health data analysis identifies underserved communities and informs targeted resource allocation to address healthcare disparities   "
},
{
  "id": "exp-data-impact-society",
  "level": "2",
  "url": "sec-data-impact.html#exp-data-impact-society",
  "type": "Exploration",
  "number": "1.7.1",
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
  "number": "1.7.2",
  "title": "Analyze Bias Scenarios.",
  "body": " Analyze Bias Scenarios   For each scenario, identify whether the data approach is more likely to perpetuate or mitigate bias, and explain why:     A loan approval algorithm is trained on historical lending decisions without considering whether those decisions were fair    Perpetuates bias: This approach risks encoding any historical discrimination in lending practices into the new algorithm. If certain groups were unfairly denied loans in the past, the algorithm will learn to continue this pattern.      A healthcare researcher intentionally oversamples underrepresented populations to ensure sufficient data for accurate predictions across all groups    Mitigates bias: This approach addresses the common problem of insufficient data for minority populations, which often leads to less accurate models for these groups. Oversampling helps ensure the model works well for everyone.      A company removes names from job applications before review but continues to prioritize candidates from certain universities    Perpetuates bias: While removing names may reduce some direct bias, university attendance often correlates with socioeconomic status, race, and other protected attributes. Using university as a proxy maintains systemic advantages for privileged groups.    "
},
{
  "id": "ex-case-comparison",
  "level": "2",
  "url": "sec-data-impact.html#ex-case-comparison",
  "type": "Checkpoint",
  "number": "1.7.3",
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
  "number": "1.7.2",
  "title": "Ethical Framework Discussion.",
  "body": " Ethical Framework Discussion   In small groups, develop a simple ethical framework that data scientists could use to guide their work. Consider:    What key questions should data scientists ask themselves at each stage of a project?    What principles should guide decisions about data collection, analysis, and use?    How should potential harms be identified and weighed against benefits?    What stakeholders should be considered and potentially consulted?    What processes might help ensure ethical considerations are not overlooked?    Prepare to share your framework with the class.   "
},
{
  "id": "ex-responsible-practices",
  "level": "2",
  "url": "sec-data-impact.html#ex-responsible-practices",
  "type": "Checkpoint",
  "number": "1.7.4",
  "title": "Apply Responsible Data Practices.",
  "body": " Apply Responsible Data Practices   For the following scenario, identify at least three specific responsible data practices that should be implemented:  A healthcare app collects user data including physical activity, sleep patterns, heart rate, location, and dietary habits. The company plans to use this data to provide personalized health recommendations and potentially share insights with research partners and health insurance companies.    "
},
{
  "id": "sec-unit-project",
  "level": "1",
  "url": "sec-unit-project.html",
  "type": "Section",
  "number": "1.8",
  "title": "Unit 1 Project Work",
  "body": " Unit 1 Project Work    Mini-project completion: Personal data tracking analysis  In this session, you will analyze the personal data you've been tracking throughout Unit 1 and prepare a presentation of your findings.  Analysis steps include:    Organize and clean your collected data    Perform basic statistical analysis (e.g., averages, ranges, patterns)    Create visualizations to illustrate key insights    Identify limitations and potential biases in your data    Draw preliminary conclusions based on your analysis    Prepare a brief presentation of your findings     # Template for personal data analysis # Replace this with your actual data analysis code # Sample data - replace with your own dates <- seq(as.Date(\"2025-04-01\"), as.Date(\"2025-04-28\"), by=\"days\") # Create a simple dataset with a trend and some randomness set.seed(123) # For reproducibility base_values <- seq(50, 70, length.out = length(dates)) random_variation <- rnorm(length(dates), mean = 0, sd = 5) weekend_effect <- ifelse(weekdays(dates) %in% c(\"Saturday\", \"Sunday\"), 10, 0) values <- base_values + random_variation + weekend_effect # Create a data frame tracking_data <- data.frame( date = dates, day_of_week = weekdays(dates), value = values ) # Basic summary statistics summary(tracking_data$value) # Calculate daily averages daily_avg <- aggregate(value ~ day_of_week, data = tracking_data, mean) daily_avg <- daily_avg[order(daily_avg$value), ] daily_avg # Plot time series plot(tracking_data$date, tracking_data$value, type = \"l\", main = \"Personal Tracking Data Over Time\", xlab = \"Date\", ylab = \"Value\", col = \"blue\") points(tracking_data$date, tracking_data$value, pch = 16, col = \"blue\") # Create a boxplot by day of week boxplot(value ~ day_of_week, data = tracking_data, main = \"Values by Day of Week\", xlab = \"Day of Week\", ylab = \"Value\", col = \"lightblue\") # Check for trend over time model <- lm(value ~ as.numeric(date), data = tracking_data) summary(model) # Add trend line to the time series plot plot(tracking_data$date, tracking_data$value, type = \"l\", main = \"Personal Tracking Data with Trend Line\", xlab = \"Date\", ylab = \"Value\", col = \"blue\") points(tracking_data$date, tracking_data$value, pch = 16, col = \"blue\") abline(model, col = \"red\", lwd = 2) # Calculate correlation with day of the week (numeric 1-7) tracking_data$day_num <- as.numeric(format(tracking_data$date, \"%u\")) cor.test(tracking_data$day_num, tracking_data$value)   Your mini-project presentation should include:    A brief description of what data you collected and why    Your data collection methodology    Key findings from your analysis    Visualizations to illustrate patterns or insights    Limitations of your data and analysis    Potential next steps or questions for future investigation       Group presentations of findings  In this part of the session, each student or group will present their personal data tracking analysis to the class.  Presentation guidelines:    Each presentation should be 3-5 minutes    Focus on your most interesting or surprising findings    Include at least one visualization    Discuss one challenge you encountered and how you addressed it    Be prepared to answer 1-2 questions from classmates    While listening to other presentations, consider:    What similarities or differences do you notice in findings across different tracking topics?    What data collection or analysis approaches could you adapt for your own project?    What questions or suggestions might help your classmates extend their analysis?       Reflection on data's role in students' lives  This final activity encourages reflection on how data shapes your lives and your relationship with data after completing Unit 1.   Data in Your Life Reflection   After completing this unit and your personal data tracking project, reflect on the following questions:    How has your awareness of data in your daily life changed since beginning this course?    What surprised you most about your own data in the tracking project?    How might you use data more intentionally in your personal or professional decision-making?    What concerns or questions do you have about how others might be using data related to your activities?    What aspects of data science are you most interested in exploring further in the upcoming units?       Data Literacy Self-Assessment   Rate your current level of confidence in the following data literacy skills on a scale of 1-5 (1 = Not confident at all, 5 = Very confident):      Distinguishing between different types of data (qualitative\/quantitative, structured\/unstructured)      Evaluating the quality and reliability of data sources      Identifying potential biases in data collection and analysis      Creating basic visualizations to represent data      Using data to inform personal or academic decisions      Understanding ethical implications of data collection and use      As we conclude Unit 1, take a moment to review the key concepts we've covered:    The fundamentals of data science and its applications    Different types and characteristics of data    How data is collected and by whom    Evaluating data quality and sources    Data's role in decision-making    Ethical considerations and societal impacts of data    In Unit 2, we'll build on these foundational concepts by developing computational skills with Web-R to work with data more effectively.   "
},
{
  "id": "exp-data-role-reflection",
  "level": "2",
  "url": "sec-unit-project.html#exp-data-role-reflection",
  "type": "Exploration",
  "number": "1.8.1",
  "title": "Data in Your Life Reflection.",
  "body": " Data in Your Life Reflection   After completing this unit and your personal data tracking project, reflect on the following questions:    How has your awareness of data in your daily life changed since beginning this course?    What surprised you most about your own data in the tracking project?    How might you use data more intentionally in your personal or professional decision-making?    What concerns or questions do you have about how others might be using data related to your activities?    What aspects of data science are you most interested in exploring further in the upcoming units?     "
},
{
  "id": "ex-data-literacy",
  "level": "2",
  "url": "sec-unit-project.html#ex-data-literacy",
  "type": "Checkpoint",
  "number": "1.8.1",
  "title": "Data Literacy Self-Assessment.",
  "body": " Data Literacy Self-Assessment   Rate your current level of confidence in the following data literacy skills on a scale of 1-5 (1 = Not confident at all, 5 = Very confident):      Distinguishing between different types of data (qualitative\/quantitative, structured\/unstructured)      Evaluating the quality and reliability of data sources      Identifying potential biases in data collection and analysis      Creating basic visualizations to represent data      Using data to inform personal or academic decisions      Understanding ethical implications of data collection and use     "
},
{
  "id": "sec-intro-to-web-r",
  "level": "1",
  "url": "sec-intro-to-web-r.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Web-R",
  "body": " Introduction to Web-R    R environment overview and basic syntax  R is a powerful programming language and environment specifically designed for statistical computing and data analysis. Web-R provides browser-based access to R without requiring local installation.  Key components of the R environment include:    Console : Where commands are entered and executed    Script Editor : For writing and saving R code files    Environment : Shows variables and objects in memory    Packages : Extensions that add functionality to base R    Help : Documentation and assistance for R functions    R syntax fundamentals:    Case sensitivity: R distinguishes between uppercase and lowercase letters    Assignment: Use <- to assign values to variables (though = also works)    Comments: Begin with # and are not executed    Function calls: function_name(arg1, arg2)    Indexing: Use square brackets [] to access elements     # This is a comment - R ignores everything after the # symbol # Basic arithmetic operations 2 + 3 # Addition 10 - 4 # Subtraction 5 * 6 # Multiplication 20 \/ 4 # Division 2^3 # Exponentiation 10 %% 3 # Modulo (remainder) # Variable assignment x <- 10 # Assign the value 10 to variable x y <- 5 # Assign the value 5 to variable y # Perform operations with variables x + y x * y x \/ y # Creating a more complex expression result <- (x + y) * 2 result # Boolean operations x > y # Greater than x < y # Less than x == y # Equal to x != y # Not equal to # Getting help # Uncomment to run: # ?mean # Opens help for the mean function    R Syntax Practice   Identify any syntax errors in the following R code and explain how to fix them:     X <- 15  y <- 3  result = x \/ Y    There are two errors:   Case sensitivity issue: X is used in line 1 but x (lowercase) is used in line 3  Case sensitivity issue: Y (uppercase) is used in line 3 but y (lowercase) is defined in line 2   Corrected code:  X <- 15 y <- 3 result = X \/ y  Or for more consistent style:  x <- 15 y <- 3 result <- x \/ y      value1 <- 10  value2 <- 5  mean(value1, value2)    The error is in the usage of the mean() function, which expects a vector, not separate arguments.  Corrected code:  value1 <- 10 value2 <- 5 mean(c(value1, value2))  The c() function combines values into a vector, which is the proper input for mean() .        Variables, data types, and basic operations  R supports various data types for different kinds of information:   Common R Data Types    Data Type  Description  Example    Numeric  Real numbers  42.5    Integer  Whole numbers  42L (the L specifies integer)    Character  Text strings  \"Hello\" or 'World'    Logical  Boolean values  TRUE or FALSE    Factor  Categorical variables  factor(c(\"small\", \"medium\", \"large\"))    Date  Calendar dates  as.Date(\"2025-05-10\")     Key operations and functions for working with variables include:    Type checking : class() , typeof() , is.numeric() , is.character() , etc.    Type conversion : as.numeric() , as.character() , as.factor() , etc.    Variable information : length() , str() , summary()    Mathematical operations : + , - , * , \/ , ^ , %% (modulo), %\/% (integer division)    Logical operations : == , != , < , > , <= , >= , & (and), | (or), ! (not)     # Creating variables of different data types # Numeric num_var <- 42.5 class(num_var) # Integer int_var <- 42L # The L suffix specifies integer class(int_var) # Character char_var <- \"Hello, R!\" class(char_var) # Logical log_var <- TRUE class(log_var) # Creating a factor (categorical variable) sizes <- factor(c(\"small\", \"medium\", \"large\", \"medium\", \"small\")) class(sizes) levels(sizes) # Get the unique categories # Date date_var <- as.Date(\"2025-05-10\") class(date_var) # Type conversion examples # Character to numeric char_num <- \"42.5\" as.numeric(char_num) # Numeric to character num_char <- 42.5 as.character(num_char) # Logical operations x <- 10 y <- 5 x > y # Is x greater than y? x == 2*y # Is x equal to 2 times y? (x > 5) and (y < 10) # Both conditions must be TRUE (x > 15) | (y < 10) # At least one condition must be TRUE    Data Types Practice   For each of the following R expressions, predict what data type the result will be:     42 \/ 7  numeric    \"42\" + 8  error (can't add a number to a character string)    as.numeric(\"42\") + 8  numeric    10 > 5  logical    c(\"red\", \"green\", \"blue\")  character vector    as.Date(\"2025-01-01\") + 30  Date        Hands-on practice: Simple calculations and variable assignments  Let's practice some fundamental R operations through hands-on exercises.   Basic R Calculations   Work through the following exercises in Web-R:    Calculate the area of a circle with radius 5 (remember: area = π × r²)    Convert a temperature of 75°F to Celsius using the formula: C = (F - 32) × 5\/9    Calculate the average of the following five numbers: 18, 24, 32, 21, 15    Determine whether the average you calculated is greater than 20       # Exercise 1: Calculate the area of a circle with radius 5 radius <- 5 # Insert your code here # Exercise 2: Convert 75°F to Celsius fahrenheit <- 75 # Insert your code here # Exercise 3: Calculate the average of five numbers numbers <- c(18, 24, 32, 21, 15) # Insert your code here # Exercise 4: Determine if the average is greater than 20 # Insert your code here    # Exercise 1: Calculate the area of a circle with radius 5 radius <- 5 area <- pi * radius^2 area # Exercise 2: Convert 75°F to Celsius fahrenheit <- 75 celsius <- (fahrenheit - 32) * 5\/9 celsius # Exercise 3: Calculate the average of five numbers numbers <- c(18, 24, 32, 21, 15) avg <- mean(numbers) avg # Exercise 4: Determine if the average is greater than 20 avg > 20    Debugging Practice   The following R code contains several errors. Find and fix all the errors to make the code run correctly:  # Calculate the final price of an item with tax item_price = 29.99 tax_rate = 0.08 # Calculate tax amount tax_amount <- item_price x tax_rate # Calculate final price final_price <- item_price + tax_Amount # Check if the price is below budget budget <- 35 is_affordable = final price < Budget # Print results print(\"Tax amount:\" tax_amount) print(\"Final price:\" final_price) print(\"Affordable?\", is_affordable)    # Calculate the final price of an item with tax item_price <- 29.99 # Changed = to <- for consistency tax_rate <- 0.08 # Calculate tax amount tax_amount <- item_price * tax_rate # Changed 'x' to '*' # Calculate final price final_price <- item_price + tax_amount # Fixed capitalization of tax_amount # Check if the price is below budget budget <- 35 is_affordable <- final_price < budget # Added space and fixed capitalization # Print results print(paste(\"Tax amount:\", tax_amount)) # Added paste function print(paste(\"Final price:\", final_price)) # Added paste function print(paste(\"Affordable?\", is_affordable)) # Added paste function     "
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
  "id": "ex-r-syntax",
  "level": "2",
  "url": "sec-intro-to-web-r.html#ex-r-syntax",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "R Syntax Practice.",
  "body": " R Syntax Practice   Identify any syntax errors in the following R code and explain how to fix them:     X <- 15  y <- 3  result = x \/ Y    There are two errors:   Case sensitivity issue: X is used in line 1 but x (lowercase) is used in line 3  Case sensitivity issue: Y (uppercase) is used in line 3 but y (lowercase) is defined in line 2   Corrected code:  X <- 15 y <- 3 result = X \/ y  Or for more consistent style:  x <- 15 y <- 3 result <- x \/ y      value1 <- 10  value2 <- 5  mean(value1, value2)    The error is in the usage of the mean() function, which expects a vector, not separate arguments.  Corrected code:  value1 <- 10 value2 <- 5 mean(c(value1, value2))  The c() function combines values into a vector, which is the proper input for mean() .    "
},
{
  "id": "table-r-data-types",
  "level": "2",
  "url": "sec-intro-to-web-r.html#table-r-data-types",
  "type": "Table",
  "number": "2.1.2",
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
  "number": "2.1.3",
  "title": "Data Types Practice.",
  "body": " Data Types Practice   For each of the following R expressions, predict what data type the result will be:     42 \/ 7  numeric    \"42\" + 8  error (can't add a number to a character string)    as.numeric(\"42\") + 8  numeric    10 > 5  logical    c(\"red\", \"green\", \"blue\")  character vector    as.Date(\"2025-01-01\") + 30  Date    "
},
{
  "id": "activity-basic-calculations",
  "level": "2",
  "url": "sec-intro-to-web-r.html#activity-basic-calculations",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Basic R Calculations.",
  "body": " Basic R Calculations   Work through the following exercises in Web-R:    Calculate the area of a circle with radius 5 (remember: area = π × r²)    Convert a temperature of 75°F to Celsius using the formula: C = (F - 32) × 5\/9    Calculate the average of the following five numbers: 18, 24, 32, 21, 15    Determine whether the average you calculated is greater than 20     "
},
{
  "id": "ex-debugging-practice",
  "level": "2",
  "url": "sec-intro-to-web-r.html#ex-debugging-practice",
  "type": "Checkpoint",
  "number": "2.1.4",
  "title": "Debugging Practice.",
  "body": " Debugging Practice   The following R code contains several errors. Find and fix all the errors to make the code run correctly:  # Calculate the final price of an item with tax item_price = 29.99 tax_rate = 0.08 # Calculate tax amount tax_amount <- item_price x tax_rate # Calculate final price final_price <- item_price + tax_Amount # Check if the price is below budget budget <- 35 is_affordable = final price < Budget # Print results print(\"Tax amount:\" tax_amount) print(\"Final price:\" final_price) print(\"Affordable?\", is_affordable)    # Calculate the final price of an item with tax item_price <- 29.99 # Changed = to <- for consistency tax_rate <- 0.08 # Calculate tax amount tax_amount <- item_price * tax_rate # Changed 'x' to '*' # Calculate final price final_price <- item_price + tax_amount # Fixed capitalization of tax_amount # Check if the price is below budget budget <- 35 is_affordable <- final_price < budget # Added space and fixed capitalization # Print results print(paste(\"Tax amount:\", tax_amount)) # Added paste function print(paste(\"Final price:\", final_price)) # Added paste function print(paste(\"Affordable?\", is_affordable)) # Added paste function   "
},
{
  "id": "sec-data-structures",
  "level": "1",
  "url": "sec-data-structures.html",
  "type": "Section",
  "number": "2.2",
  "title": "Working with data structures",
  "body": " Working with data structures    Vectors, lists, and data frames  R provides several data structures for organizing and manipulating data:    A vector is a one-dimensional collection of elements of the same data type. Vectors are created using the c() function.      A list is a flexible collection that can contain elements of different data types, including other lists. Lists are created using the list() function.      A data frame is a two-dimensional table-like structure where each column can contain a different data type. Data frames are the most common structure for datasets in R.      A matrix is a two-dimensional collection of elements of the same data type, organized in rows and columns.     # Vectors # Creating vectors numeric_vector <- c(1, 2, 3, 4, 5) character_vector <- c(\"red\", \"green\", \"blue\") logical_vector <- c(TRUE, FALSE, TRUE, TRUE) # Vector operations numeric_vector + 10 # Add 10 to each element numeric_vector * 2 # Multiply each element by 2 # Vector indexing numeric_vector[3] # Access the third element character_vector[c(1, 3)] # Access first and third elements logical_vector[logical_vector] # Use logical indexing # Lists # Creating a list my_list <- list( numbers = c(1, 2, 3), text = \"Hello, R!\", logical = c(TRUE, FALSE), nested = list(a = 1, b = 2) ) # Accessing list elements my_list$numbers # By name my_list[[1]] # By position (returns the element) my_list[1] # By position (returns a sublist) my_list$nested$a # Accessing nested elements # Data Frames # Creating a data frame student_df <- data.frame( name = c(\"Alice\", \"Bob\", \"Charlie\", \"Diana\"), age = c(21, 22, 20, 23), gpa = c(3.8, 3.2, 3.9, 3.5), international = c(FALSE, FALSE, TRUE, TRUE) ) # Examining a data frame student_df # Print the data frame str(student_df) # Structure of the data frame summary(student_df) # Summary statistics # Accessing data frame elements student_df$name # Access a column by name student_df[, 2] # Access a column by position student_df[3, ] # Access a row student_df[2, 3] # Access a specific element # Matrices # Creating a matrix my_matrix <- matrix(1:12, nrow = 3, ncol = 4) my_matrix # Matrix operations my_matrix * 2 t(my_matrix) # Transpose    Data Structures Practice   Match each R code example with the appropriate data structure it creates:     c(45, 67, 23, 89)  Vector    list(name = \"John\", scores = c(85, 92, 78))  List    data.frame(id = 1:3, name = c(\"A\", \"B\", \"C\"))  Data Frame    matrix(1:9, nrow = 3)  Matrix        Creating and manipulating basic data structures  Let's explore common operations for creating and manipulating data structures in R.  Vector operations:    Creating sequences : 1:10 , seq(1, 10, by = 2) , rep(1, 5)    Vector arithmetic : v1 + v2 , v1 * v2 (element-wise operations)    Vector functions : length() , sum() , mean() , max() , min()    Subsetting : v[3] , v[1:3] , v[v > 5] , v[-2] (exclude element)    Data frame operations:    Creating : data.frame() , as.data.frame()    Selecting columns : df$column , df[, \"column\"] , df[, 1]    Selecting rows : df[1:5, ] , df[df$x > 10, ]    Adding columns : df$new_col <- values , cbind(df, new_col = values)    Adding rows : rbind(df, new_row)    Information functions : nrow() , ncol() , dim() , names() , str() , summary()     # Vector creation and manipulation # Creating sequences seq1 <- 1:10 # Integer sequence seq1 seq2 <- seq(0, 1, by = 0.1) # Sequence with specific increment seq2 seq3 <- rep(c(\"A\", \"B\"), times = 3) # Repeating values seq3 # Vector functions numbers <- c(15, 8, 23, 42, 7) length(numbers) # Number of elements sum(numbers) # Sum of elements mean(numbers) # Average max(numbers) # Maximum value min(numbers) # Minimum value sort(numbers) # Sort in ascending order # Vector subsetting numbers[3] # Third element numbers[c(1, 4)] # First and fourth elements numbers[numbers > 20] # Elements greater than 20 numbers[-2] # All except the second element # Data frame manipulation # Create a sample data frame students <- data.frame( id = 1:5, name = c(\"Alice\", \"Bob\", \"Charlie\", \"Diana\", \"Elijah\"), score = c(85, 92, 78, 90, 88), passed = c(TRUE, TRUE, TRUE, TRUE, TRUE) ) # Viewing the data frame students # Basic information dim(students) # Dimensions (rows, columns) nrow(students) # Number of rows ncol(students) # Number of columns names(students) # Column names str(students) # Structure summary(students) # Summary statistics # Selecting columns students$name # Name column students[, \"score\"] # Score column students[, 3] # Third column students[, c(2, 3)] # Second and third columns # Selecting rows students[2, ] # Second row students[1:3, ] # First three rows students[students$score >= 90, ] # Rows where score is at least 90 # Adding a new column students$grade <- c(\"B\", \"A\", \"C\", \"A\", \"B\") students # Adding a calculated column students$normalized <- students$score \/ max(students$score) * 100 students # Creating a new row new_student <- data.frame( id = 6, name = \"Fiona\", score = 95, passed = TRUE, grade = \"A\", normalized = 95 \/ max(students$score) * 100 ) # Adding the new row students <- rbind(students, new_student) students    Data Structure Manipulation   Complete the following tasks:     Create a vector containing the first 5 even numbers (2, 4, 6, 8, 10). Then calculate their sum and average.    # Create the vector even_numbers <- c(2, 4, 6, 8, 10) # Or using a sequence even_numbers <- seq(2, 10, by = 2) # Calculate sum sum(even_numbers) # Output: 30 # Calculate average mean(even_numbers) # Output: 6      Create a data frame with 3 columns: 'country' (character), 'population' (numeric in millions), and 'area' (numeric in thousand square km) for 4 countries of your choice. Then add a new column called 'density' that calculates population per square km (population \/ area).    # Create the data frame countries <- data.frame( country = c(\"Canada\", \"Japan\", \"Brazil\", \"Germany\"), population = c(38, 126, 212, 83), # in millions area = c(9985, 378, 8516, 357) # in thousand square km ) # Add density column (population per square km) countries$density <- countries$population \/ countries$area # View the result countries        Exercise: Building and transforming data structures   Building a Student Dataset   In this exercise, you will create and manipulate a dataset of student information.  Instructions:    Create a data frame containing information for 5 students with the following columns:   student_id (numeric)  name (character)  age (numeric)  major (character)  gpa (numeric)     Add a new column called 'year' indicating the year of study (1, 2, 3, or 4) for each student    Add a new column called 'honors' that contains TRUE for students with GPA ≥ 3.5 and FALSE otherwise    Create a subset of the data frame that includes only honors students    Calculate and display the average GPA for each major       # Step 1: Create the student data frame # Your code here # Step 2: Add a 'year' column # Your code here # Step 3: Add an 'honors' column # Your code here # Step 4: Create a subset of honors students # Your code here # Step 5: Calculate average GPA by major # Your code here    # Step 1: Create the student data frame students <- data.frame( student_id = 1:5, name = c(\"Alex\", \"Beatrice\", \"Carlos\", \"Diana\", \"Eli\"), age = c(19, 20, 21, 19, 22), major = c(\"Computer Science\", \"Biology\", \"Computer Science\", \"Mathematics\", \"Biology\"), gpa = c(3.7, 3.4, 3.2, 3.9, 3.6) ) # Display the data frame students # Step 2: Add a 'year' column students$year <- c(2, 3, 4, 1, 4) students # Step 3: Add an 'honors' column students$honors <- students$gpa >= 3.5 students # Step 4: Create a subset of honors students honors_students <- students[students$honors, ] honors_students # Step 5: Calculate average GPA by major # Using aggregate function avg_gpa_by_major <- aggregate(gpa ~ major, data = students, FUN = mean) avg_gpa_by_major    Challenge Task   Using the student dataset from the exercise above, complete the following tasks:    Find the student with the highest GPA    Calculate the percentage of students who are on the honors list    Create a new column called 'age_group' that categorizes students as 'Under 20', '20-21', or '22+' based on their age      # Find the student with the highest GPA top_student <- students[which.max(students$gpa), ] top_student # Calculate percentage of honors students percent_honors <- mean(students$honors) * 100 percent_honors # Create age_group column students$age_group <- cut(students$age, breaks = c(0, 20, 22, Inf), labels = c(\"Under 20\", \"20-21\", \"22+\")) students     "
},
{
  "id": "def-vector",
  "level": "2",
  "url": "sec-data-structures.html#def-vector",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  A vector is a one-dimensional collection of elements of the same data type. Vectors are created using the c() function.   "
},
{
  "id": "def-list",
  "level": "2",
  "url": "sec-data-structures.html#def-list",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  A list is a flexible collection that can contain elements of different data types, including other lists. Lists are created using the list() function.   "
},
{
  "id": "def-dataframe",
  "level": "2",
  "url": "sec-data-structures.html#def-dataframe",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "  A data frame is a two-dimensional table-like structure where each column can contain a different data type. Data frames are the most common structure for datasets in R.   "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sec-data-structures.html#def-matrix",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  A matrix is a two-dimensional collection of elements of the same data type, organized in rows and columns.   "
},
{
  "id": "ex-data-structures",
  "level": "2",
  "url": "sec-data-structures.html#ex-data-structures",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "Data Structures Practice.",
  "body": " Data Structures Practice   Match each R code example with the appropriate data structure it creates:     c(45, 67, 23, 89)  Vector    list(name = \"John\", scores = c(85, 92, 78))  List    data.frame(id = 1:3, name = c(\"A\", \"B\", \"C\"))  Data Frame    matrix(1:9, nrow = 3)  Matrix    "
},
{
  "id": "subsec-manipulating-structures-4-1-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Creating sequences "
},
{
  "id": "subsec-manipulating-structures-4-2-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector arithmetic "
},
{
  "id": "subsec-manipulating-structures-4-3-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vector functions "
},
{
  "id": "subsec-manipulating-structures-4-4-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-4-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Subsetting "
},
{
  "id": "subsec-manipulating-structures-6-1-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Creating "
},
{
  "id": "subsec-manipulating-structures-6-2-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Selecting columns "
},
{
  "id": "subsec-manipulating-structures-6-3-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-6-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Selecting rows "
},
{
  "id": "subsec-manipulating-structures-6-4-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-6-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adding columns "
},
{
  "id": "subsec-manipulating-structures-6-5-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-6-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adding rows "
},
{
  "id": "subsec-manipulating-structures-6-6-1",
  "level": "2",
  "url": "sec-data-structures.html#subsec-manipulating-structures-6-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Information functions "
},
{
  "id": "ex-manipulation",
  "level": "2",
  "url": "sec-data-structures.html#ex-manipulation",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "Data Structure Manipulation.",
  "body": " Data Structure Manipulation   Complete the following tasks:     Create a vector containing the first 5 even numbers (2, 4, 6, 8, 10). Then calculate their sum and average.    # Create the vector even_numbers <- c(2, 4, 6, 8, 10) # Or using a sequence even_numbers <- seq(2, 10, by = 2) # Calculate sum sum(even_numbers) # Output: 30 # Calculate average mean(even_numbers) # Output: 6      Create a data frame with 3 columns: 'country' (character), 'population' (numeric in millions), and 'area' (numeric in thousand square km) for 4 countries of your choice. Then add a new column called 'density' that calculates population per square km (population \/ area).    # Create the data frame countries <- data.frame( country = c(\"Canada\", \"Japan\", \"Brazil\", \"Germany\"), population = c(38, 126, 212, 83), # in millions area = c(9985, 378, 8516, 357) # in thousand square km ) # Add density column (population per square km) countries$density <- countries$population \/ countries$area # View the result countries    "
},
{
  "id": "activity-build-dataset",
  "level": "2",
  "url": "sec-data-structures.html#activity-build-dataset",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Building a Student Dataset.",
  "body": " Building a Student Dataset   In this exercise, you will create and manipulate a dataset of student information.  Instructions:    Create a data frame containing information for 5 students with the following columns:   student_id (numeric)  name (character)  age (numeric)  major (character)  gpa (numeric)     Add a new column called 'year' indicating the year of study (1, 2, 3, or 4) for each student    Add a new column called 'honors' that contains TRUE for students with GPA ≥ 3.5 and FALSE otherwise    Create a subset of the data frame that includes only honors students    Calculate and display the average GPA for each major     "
},
{
  "id": "ex-challenge-task",
  "level": "2",
  "url": "sec-data-structures.html#ex-challenge-task",
  "type": "Checkpoint",
  "number": "2.2.7",
  "title": "Challenge Task.",
  "body": " Challenge Task   Using the student dataset from the exercise above, complete the following tasks:    Find the student with the highest GPA    Calculate the percentage of students who are on the honors list    Create a new column called 'age_group' that categorizes students as 'Under 20', '20-21', or '22+' based on their age      # Find the student with the highest GPA top_student <- students[which.max(students$gpa), ] top_student # Calculate percentage of honors students percent_honors <- mean(students$honors) * 100 percent_honors # Create age_group column students$age_group <- cut(students$age, breaks = c(0, 20, 22, Inf), labels = c(\"Under 20\", \"20-21\", \"22+\")) students   "
},
{
  "id": "sec-data-import",
  "level": "1",
  "url": "sec-data-import.html",
  "type": "Section",
  "number": "2.3",
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
  "number": "2.3.1",
  "title": "Data Import Practice.",
  "body": " Data Import Practice   Answer the following questions about data import in R:      Which parameter would you set to ensure empty strings are treated as missing values?   na.strings = \"\"     Which function would you use to import an Excel file?   read.csv()   read.csv() is for CSV files. For Excel files, you would use read_excel() from the readxl package.      What is the default behavior of read.csv() regarding the first row of data?   It treats the first row as column headers (header = TRUE)     How would you check the number of missing values in each column of a data frame called 'df'?   colSums(is.na(df))    "
},
{
  "id": "table-inspection-functions",
  "level": "2",
  "url": "sec-data-import.html#table-inspection-functions",
  "type": "Table",
  "number": "2.3.2",
  "title": "Common Data Inspection Functions",
  "body": " Common Data Inspection Functions    Function  Description    head()  Display the first few rows (default: 6)    tail()  Display the last few rows (default: 6)    View()  Open data in a spreadsheet-like viewer (not available in Web-R)    str()  Display the structure, including data types of each column    summary()  Generate summary statistics for each column    dim()  Show dimensions (rows, columns)    names()  List column names    glimpse()  From dplyr package; similar to str() but more readable    class()  Show the class of an object    table()  Create frequency tables of categorical variables    "
},
{
  "id": "ex-inspection-matching",
  "level": "2",
  "url": "sec-data-import.html#ex-inspection-matching",
  "type": "Checkpoint",
  "number": "2.3.3",
  "title": "Match Inspection Functions.",
  "body": " Match Inspection Functions   Match each data inspection task with the most appropriate R function:     Check how many rows and columns are in a dataset  dim()    Get a quick overview of the data types in each column  str()    Calculate basic statistics like mean, median, min, and max for numerical columns  summary()    Count how many observations fall into each category of a variable  table()    Check for missing values in a dataset  is.na()    "
},
{
  "id": "activity-import-explore",
  "level": "2",
  "url": "sec-data-import.html#activity-import-explore",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Dataset Exploration.",
  "body": " Dataset Exploration   In this activity, you will import and explore a built-in dataset to practice your data inspection skills.  Instructions:    Load the mtcars dataset using data(mtcars)    Perform a comprehensive exploration of the dataset using the inspection functions you've learned    Answer the following questions:    How many rows and columns are in the dataset?    What are the variables (column names) in the dataset?    What is the average miles per gallon (mpg) in the dataset?    Which car has the highest horsepower (hp)?    How many cars have 4 cylinders (cyl)?    Is there a relationship between miles per gallon (mpg) and weight (wt)?       "
},
{
  "id": "ex-dataset-questions",
  "level": "2",
  "url": "sec-data-import.html#ex-dataset-questions",
  "type": "Checkpoint",
  "number": "2.3.4",
  "title": "Dataset Analysis Questions.",
  "body": " Dataset Analysis Questions   Based on the mtcars dataset exploration, answer the following questions:     What does the correlation between mpg and weight tell you about their relationship?    The correlation between mpg and weight is strongly negative (around -0.87), indicating that as the weight of a car increases, its fuel efficiency (mpg) tends to decrease significantly. This is an expected relationship as heavier cars generally require more energy to move, resulting in lower fuel efficiency.      What other variables in the dataset might be related to mpg? How would you investigate these relationships?    Other variables likely related to mpg include:   cyl (number of cylinders): More cylinders typically means lower fuel efficiency  hp (horsepower): Higher horsepower often corresponds to lower mpg  disp (displacement): Larger engines generally consume more fuel  am (transmission type): Manual transmissions might be more fuel-efficient   To investigate these relationships, I would:   Calculate correlations between mpg and each variable  Create scatterplots for continuous variables  Create boxplots for categorical variables (like cyl and am)  Run multiple regression analysis to identify which factors have the strongest influence on mpg     "
},
{
  "id": "sec-data-exploration",
  "level": "1",
  "url": "sec-data-exploration.html",
  "type": "Section",
  "number": "2.4",
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
  "number": "2.4.1",
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
  "number": "2.4.2",
  "title": "Data Visualization Tasks.",
  "body": " Data Visualization Tasks   Using the iris dataset, create the following visualizations:     Create a histogram of Petal.Length with an appropriate title, labels, and coloring.    hist(iris$Petal.Length, main = \"Distribution of Petal Length\", xlab = \"Petal Length (cm)\", ylab = \"Frequency\", col = \"lightgreen\", breaks = 12)      Create a scatter plot of Petal.Length (x-axis) vs. Petal.Width (y-axis), with points colored by Species.    plot(iris$Petal.Length, iris$Petal.Width, main = \"Petal Length vs. Petal Width by Species\", xlab = \"Petal Length (cm)\", ylab = \"Petal Width (cm)\", pch = 19, col = as.numeric(iris$Species)) legend(\"topleft\", legend = levels(iris$Species), col = 1:3, pch = 19, title = \"Species\")    "
},
{
  "id": "activity-exploratory-analysis",
  "level": "2",
  "url": "sec-data-exploration.html#activity-exploratory-analysis",
  "type": "Activity",
  "number": "2.4.1",
  "title": "Comprehensive Exploratory Data Analysis.",
  "body": " Comprehensive Exploratory Data Analysis   In this exercise, you will conduct a comprehensive exploratory data analysis (EDA) of the ToothGrowth dataset, which shows the effect of Vitamin C on tooth growth in guinea pigs.  Instructions:    Load the ToothGrowth dataset using data(ToothGrowth)    Perform a thorough exploration of the dataset structure and summary statistics    Create appropriate visualizations to understand:    The distribution of tooth length    The relationship between dose and tooth length    The effect of supplement type on tooth length    The combined effect of dose and supplement type      Document your findings and insights from the analysis     "
},
{
  "id": "ex-eda-interpretation",
  "level": "2",
  "url": "sec-data-exploration.html#ex-eda-interpretation",
  "type": "Checkpoint",
  "number": "2.4.3",
  "title": "EDA Interpretation Questions.",
  "body": " EDA Interpretation Questions   Based on the exploratory analysis of the ToothGrowth dataset, answer the following questions:     What appears to be the relationship between vitamin C dose and tooth growth?    There is a clear positive relationship between vitamin C dose and tooth growth. As the dose increases from 0.5 mg to 1.0 mg to 2.0 mg, the average tooth length consistently increases as well. This suggests that higher doses of vitamin C promote greater tooth growth in guinea pigs, regardless of the delivery method (supplement type).      How does the effectiveness of the two supplement types (OJ and VC) compare at different doses?    The effectiveness of the two supplements varies by dose:   At the lowest dose (0.5 mg), orange juice (OJ) appears significantly more effective than ascorbic acid (VC) for promoting tooth growth  At the medium dose (1.0 mg), orange juice still shows a noticeable advantage over ascorbic acid  At the highest dose (2.0 mg), the difference between the two supplements becomes minimal, with both achieving similar tooth growth results   This suggests that orange juice might be a more efficient delivery method for vitamin C at lower doses, but this advantage disappears at higher concentrations.      What additional analyses or visualizations might help further explore this dataset?    Additional analyses and visualizations that could provide further insights include:   Statistical tests (such as t-tests or ANOVA) to determine if the observed differences between groups are statistically significant  A linear regression model to quantify the relationship between dose and tooth length, potentially including an interaction term between dose and supplement type  Density plots for each combination of supplement type and dose to better visualize the distribution of tooth lengths in each group  Residual plots to check for any patterns or outliers that might influence the conclusions  If additional variables were available (such as guinea pig age, weight, or sex), including these in the analysis to control for potential confounding factors     "
},
{
  "id": "sec-data-transformation",
  "level": "1",
  "url": "sec-data-transformation.html",
  "type": "Section",
  "number": "2.5",
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
  "number": "2.5.1",
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
  "number": "2.5.2",
  "title": "Subsetting Practice.",
  "body": " Subsetting Practice   Using the mtcars dataset, complete the following subsetting tasks:     Create a random sample of 8 cars from the dataset.    # Load dataset data(mtcars) # Set seed for reproducibility set.seed(123) # Sample 8 random cars car_sample <- mtcars[sample(nrow(mtcars), 8), ] car_sample      Find the car with the best fuel efficiency (highest mpg) and the car with the most horsepower (hp).    # Find the car with the highest mpg most_efficient_index <- which.max(mtcars$mpg) most_efficient_car <- mtcars[most_efficient_index, ] rownames(most_efficient_car) # Toyota Corolla # Find the car with the most horsepower most_powerful_index <- which.max(mtcars$hp) most_powerful_car <- mtcars[most_powerful_index, ] rownames(most_powerful_car) # Maserati Bora    "
},
{
  "id": "activity-meaningful-subsets",
  "level": "2",
  "url": "sec-data-transformation.html#activity-meaningful-subsets",
  "type": "Activity",
  "number": "2.5.1",
  "title": "Extracting Insights from Data Subsets.",
  "body": " Extracting Insights from Data Subsets   In this activity, you will extract and analyze meaningful subsets from the mpg dataset (from the ggplot2 package, but we'll provide a version).  The mpg dataset contains fuel economy data for 38 popular car models from 1999 to 2008, including variables such as manufacturer, model, year, engine displacement, number of cylinders, transmission type, and fuel economy ratings.  Instructions:    Create the mpg dataset using the code provided    Extract and analyze the following subsets:    All compact cars (class = \"compact\")    All cars manufactured by Toyota    All 4-cylinder cars with highway fuel economy (hwy) greater than 30 mpg    Compare the average city fuel economy (cty) for cars with 4, 6, and 8 cylinders    Create a random sample of 15 cars and calculate their average fuel economy      For each subset, create appropriate summary statistics and visualizations    Document your findings and insights from each subset     "
},
{
  "id": "ex-mpg-insights",
  "level": "2",
  "url": "sec-data-transformation.html#ex-mpg-insights",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "Dataset Analysis Insights.",
  "body": " Dataset Analysis Insights   Based on the exploratory analysis of the mpg dataset, answer the following questions:     Why might car manufacturers continue to produce vehicles with more cylinders despite their lower fuel efficiency?    Car manufacturers continue to produce vehicles with more cylinders despite lower fuel efficiency because:   Higher cylinder engines typically provide more power and torque, which is necessary for larger vehicles like trucks and SUVs that need to haul heavy loads or tow trailers  Many consumers prioritize performance, acceleration, and driving experience over fuel economy  Vehicles with more cylinders often serve different market segments (luxury, performance, utility) where fuel efficiency is not the primary concern  Some applications require the additional power that comes with more cylinders, such as off-road driving or commercial use   The data shows that as cylinders increase, fuel economy decreases significantly, but this represents a design trade-off rather than a simple deficiency. For many use cases, the benefits of additional power outweigh the costs of reduced efficiency.      What patterns do you observe regarding the relationship between engine displacement, number of cylinders, and fuel economy?    The analysis reveals several clear patterns regarding engine displacement, cylinders, and fuel economy:   There is a strong negative correlation between engine displacement and fuel economy - as displacement increases, both city and highway MPG decrease  The number of cylinders is directly related to engine displacement - vehicles with more cylinders typically have larger displacement engines  4-cylinder engines show the best fuel economy, followed by 6-cylinder engines, with 8-cylinder engines being the least efficient  Within the same cylinder count, smaller displacement engines tend to be more fuel-efficient than larger ones  Efficient 4-cylinder cars (highway MPG > 30) almost exclusively have displacement below 2.5 liters  The relationship appears to be non-linear - the MPG penalty for going from 4 to 6 cylinders is less severe than going from 6 to 8 cylinders   These patterns reflect the fundamental engineering trade-offs in internal combustion engines, where greater displacement and more cylinders typically result in more power but reduced efficiency due to increased friction, weight, and fuel consumption.    "
},
{
  "id": "sec-creating-transforming-variables",
  "level": "1",
  "url": "sec-creating-transforming-variables.html",
  "type": "Section",
  "number": "2.6",
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
  "number": "2.6.1",
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
  "number": "2.6.2",
  "title": "Data Reshaping Practice.",
  "body": " Data Reshaping Practice   For each of the following scenarios, determine whether the data should be in wide or long format, and explain why:     Creating a line plot showing the trend of stock prices for multiple companies over time    Long format would be most appropriate for this scenario.  Reasons:   Most plotting functions in R (especially ggplot2) work better with long-format data for this type of visualization  In long format, each row would represent a single observation: one company's stock price on a specific date  The data would have columns for: date, company name, and stock price  This structure allows for easily grouping by company and creating lines for each company over time  It also simplifies adding visual attributes like different colors for each company   In contrast, wide format (with each company as a separate column) would make the plotting more difficult and would require reshaping before visualization.      Running a correlation analysis between different test scores (math, science, english) for a group of students    Wide format would be most appropriate for this scenario.  Reasons:   Correlation analysis typically compares variables (columns) to each other  In wide format, each row would represent one student, with separate columns for math score, science score, and English score  Functions like cor() in R expect data in wide format, where each variable to be correlated is a separate column  This structure allows for directly calculating the correlation matrix between all test scores  Wide format is also more convenient for calculating descriptive statistics for each subject   Using long format (with a single \"score\" column and a \"subject\" column) would require reshaping the data before performing the correlation analysis.    "
},
{
  "id": "activity-dataset-transformation",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#activity-dataset-transformation",
  "type": "Activity",
  "number": "2.6.1",
  "title": "Dataset Transformation for Mid-Term Project.",
  "body": " Dataset Transformation for Mid-Term Project   In this activity, you will work with partners to prepare a dataset for your mid-term project. The goal is to apply the data transformation techniques you've learned to clean, reshape, and enhance a dataset for analysis.  Instructions:    Form groups of 2-3 students    Choose one of the following datasets:    The built-in airquality dataset (daily air quality measurements in New York, 1973)    The built-in mtcars dataset (fuel consumption and design characteristics for car models)    The built-in ChickWeight dataset (weight versus age of chicks on different diets)      Perform the following transformations on your chosen dataset:    Clean any missing or problematic values    Create at least three new derived variables based on the existing data    Reshape the data as needed for your planned analysis    Create appropriate categorical variables using binning    Standardize or normalize numerical variables if appropriate      Document your transformations and explain the reasoning behind each step    Prepare a brief presentation of your transformed dataset and the insights it enables     "
},
{
  "id": "ex-transformation-explanation",
  "level": "2",
  "url": "sec-creating-transforming-variables.html#ex-transformation-explanation",
  "type": "Checkpoint",
  "number": "2.6.3",
  "title": "Transformation Explanation.",
  "body": " Transformation Explanation   For each of the following data transformations in the example above, explain why it might be useful for analysis:     Creating the Heat Index variable    Creating the Heat Index variable is useful for analysis because:   It combines temperature and wind data to create a measure of perceived temperature or thermal comfort  This derived variable can be more relevant for understanding how weather conditions actually feel to humans than raw temperature alone  It might correlate better with certain health outcomes or behavioral patterns than either temperature or wind speed individually  It can be used to study how perceived temperature (rather than actual temperature) affects air quality metrics like ozone levels  Creating composite indices like this often provides more intuitive and interpretable measures for analysis and visualization   While the implementation in the example is simplified, it demonstrates how multiple variables can be combined to create more meaningful metrics for specific analytical purposes.      Categorizing Ozone levels into \"Good\", \"Moderate\", \"Unhealthy for Sensitive Groups\", and \"Unhealthy\"    Categorizing Ozone levels is valuable for analysis because:   It transforms a continuous numerical variable into meaningful categories that align with established air quality standards and health guidelines  These categories have direct practical implications for public health recommendations and actions  It simplifies communication of results to non-technical audiences, as descriptive categories like \"Good\" or \"Unhealthy\" are more intuitive than raw numerical values  It facilitates certain types of analyses, such as contingency tables, chi-square tests, or categorical visualizations  It can reveal non-linear relationships that might be obscured when using the continuous variable (e.g., certain effects might only appear at \"Unhealthy\" levels)  It allows for comparisons with official air quality reporting formats, which typically use similar category systems   This transformation bridges the gap between raw scientific measurements and meaningful health-related interpretations, making the data more useful for both analysis and decision-making.    "
},
{
  "id": "sec-working-with-web-data",
  "level": "1",
  "url": "sec-working-with-web-data.html",
  "type": "Section",
  "number": "2.7",
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
  "number": "2.7.1",
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
  "number": "2.7.2",
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
  "number": "2.7.3",
  "title": "API Usage.",
  "body": " API Usage   Consider a scenario where you need to analyze weather data for 100 cities over a period of one year. What challenges might you face when using a weather API for this purpose, and how would you address them?    When analyzing weather data for 100 cities over one year using a weather API, several challenges would arise:  1. Rate Limiting and API Quotas:   Challenge : Most weather APIs impose rate limits (e.g., 1000 calls\/day or 60 calls\/minute)  Solution : Implement throttling to stay within limits (pause between requests), batch requests where possible, and spread data collection over multiple days   2. Data Volume Management:   Challenge : 100 cities × 365 days = 36,500 requests, potentially generating gigabytes of data  Solution : Create an efficient storage structure (database or optimized files), implement incremental processing, and consider data compression techniques   3. Cost Considerations:   Challenge : Many weather APIs charge for high-volume usage  Solution : Compare pricing plans across providers, consider historical bulk data purchases instead of individual requests, and optimize query structure to minimize calls   4. Handling Missing or Erroneous Data:   Challenge : API outages, missing weather stations, or corrupted records  Solution : Implement robust error handling, data validation checks, imputation strategies for missing values, and possibly use multiple data sources for validation   5. API Changes or Deprecation:   Challenge : APIs may change structure or endpoints during a year-long project  Solution : Build an abstraction layer between API and analysis code, monitor for API announcements, and design for easy adaptation   6. Consistency in Data Collection:   Challenge : Ensuring consistent timing and parameters across all requests  Solution : Develop automated scripts with logging, implement data quality checks, and standardize request parameters   7. Time Zone Management:   Challenge : Cities across different time zones complicating temporal analysis  Solution : Store timestamps in UTC with time zone information, and implement time zone conversion functions for analysis   An effective implementation would involve creating a robust data pipeline with error handling, rate limiting, logging, and storage optimization, potentially running on a scheduled basis to collect data incrementally.   "
},
{
  "id": "activity-web-data-project",
  "level": "2",
  "url": "sec-working-with-web-data.html#activity-web-data-project",
  "type": "Activity",
  "number": "2.7.1",
  "title": "Web Data Analysis Project.",
  "body": " Web Data Analysis Project   In this activity, you will work with your partner to design and plan a data analysis project that utilizes web data. Since we can't make actual API calls in Web-R, the implementation will be simulated, but the planning process will follow real-world practices.  Instructions:    Work with a partner to select one of the following project scenarios:    Analyzing weather patterns and their relationship with energy consumption    Tracking stock prices and financial news sentiment for selected companies    Analyzing social media trends around specific topics or events    Comparing economic indicators across different regions or countries    Analyzing public health data in relation to environmental factors      For your chosen scenario, design a data collection and analysis plan that includes:    The specific research question(s) you want to answer    The APIs or web data sources you would use    The data collection strategy (frequency, scope, parameters)    The data storage approach    The data transformations and analyses you would perform    The expected insights and how they would be presented      Create a rough pseudocode or flowchart outlining the steps in your data pipeline    Identify potential challenges and how you would address them    Design a sample visualization that you would create with the collected data     "
},
{
  "id": "ex-project-planning",
  "level": "2",
  "url": "sec-working-with-web-data.html#ex-project-planning",
  "type": "Checkpoint",
  "number": "2.7.4",
  "title": "Project Planning.",
  "body": " Project Planning   For the \"Tracking stock prices and financial news sentiment\" project scenario, answer the following questions:     What specific APIs or web data sources would you need to access, and what type of data would each provide?    For tracking stock prices and financial news sentiment, we would need the following APIs and data sources:    Financial Market Data APIs:   Alpha Vantage or Yahoo Finance API - Provides historical and real-time stock price data, including opening\/closing prices, high\/low prices, trading volume, and technical indicators  FRED API (Federal Reserve Economic Data) - Offers macroeconomic indicators that might influence stock performance, such as interest rates, GDP growth, and inflation metrics  IEX Cloud - Provides company fundamentals, financial metrics, and real-time market data     News and Sentiment APIs:   News API - Delivers financial news articles from multiple sources, including publication dates, headlines, and content  AYLIEN News API or Google News API - Provides targeted news coverage about specific companies or sectors  Sentiment Analysis APIs (TextBlob, IBM Watson, Microsoft Azure) - Offers pre-built sentiment scoring of text content     Social Media APIs:   Twitter API - Provides access to tweets mentioning target companies or financial keywords  Reddit API - Allows access to financial discussion forums like r\/wallstreetbets, r\/investing, etc.     SEC Filing APIs:   SEC EDGAR API - Provides access to company filings and financial disclosures     These data sources would collectively provide a comprehensive view of both market performance metrics and the sentiment surrounding target companies, enabling analysis of correlations between news sentiment and stock price movements.      What data transformations would you need to perform to prepare the collected data for analysis, and what challenges might you encounter?    Several data transformations would be necessary for this project, along with potential challenges:  Data Transformations:    Time Series Alignment   Synchronize news timestamps with stock market data (accounting for market hours vs. 24\/7 news)  Create time-lagged variables to assess delayed impact of news on stock prices  Resampling data to consistent intervals (hourly, daily, etc.)     Text Processing and Sentiment Analysis   Convert raw news text to numerical sentiment scores  Perform named entity recognition to identify mentioned companies  Extract relevant keywords and categorize news by topic  Aggregate multiple news items into composite sentiment indicators     Financial Data Transformations   Calculate derived metrics (returns, volatility, moving averages)  Normalize price data across different stocks  Create categorical variables for market conditions (bull\/bear)  Adjust for stock splits, dividends, and other corporate actions     Feature Engineering   Create composite indicators combining sentiment and price data  Develop sector-specific variables to account for industry trends  Engineer seasonality features (day-of-week effects, month effects)     Potential Challenges:    Temporal Relationship Complexity   Determining the optimal time window for news impact on stock prices  Distinguishing causation from correlation in news-price relationships  Handling news that breaks outside market hours     Data Quality Issues   Dealing with inaccurate or misleading news reports  Managing duplicate news items across different sources  Handling missing data during market closures or API outages     Sentiment Analysis Limitations   Financial text often contains nuanced language that basic sentiment models struggle with  Sarcasm, figures of speech, and industry jargon may confuse automated sentiment analysis  News headlines may have different sentiment than full articles     Scale and Performance Issues   Processing large volumes of news text efficiently  Managing high-frequency financial data  Optimizing storage and retrieval for time-series analysis     Addressing these challenges would require an iterative approach to data transformation, careful validation of sentiment analysis results, and potentially the development of finance-specific text analysis models.    "
},
{
  "id": "sec-mid-term-project",
  "level": "1",
  "url": "sec-mid-term-project.html",
  "type": "Section",
  "number": "2.8",
  "title": "Mid-Term Project Topic",
  "body": " Mid-Term Project Topic    Mid-term project work session  This session is dedicated to providing in-class time for you to work on your mid-term projects. You'll have the opportunity to apply the data science concepts and techniques you've learned so far to a practical project.   Mid-Term Project: Data Analysis and Visualization   For your mid-term project, you will work in pairs to analyze a dataset of your choice. The project will involve data import, exploration, transformation, and visualization to extract meaningful insights.  Project requirements:    Select and import a dataset of interest    You may use a built-in R dataset, a publicly available dataset, or data from an API    The dataset should be of reasonable size and complexity to allow for meaningful analysis      Perform data preparation and transformation    Clean and handle any missing or problematic data    Create derived variables that enhance your analysis    Reshape or aggregate data as needed      Conduct exploratory data analysis    Generate appropriate summary statistics    Create visualizations to understand data distributions and relationships    Identify interesting patterns or trends      Develop at least four different types of visualizations    The visualizations should effectively communicate key insights    Each visualization should serve a specific analytical purpose    Include proper titles, labels, and other elements for clarity      Document your process and findings    Include comments in your code explaining key steps    Provide written explanations of your approach and discoveries    Address any challenges you encountered and how you resolved them      Deliverables:    R script or R Markdown document containing your code and documentation    Brief presentation (5-7 minutes) showcasing your key findings and visualizations    Short written report summarizing your project (2-3 pages)      During this work session, you should:    Finalize your dataset selection    Begin data import and initial exploration    Discuss with your partner the key questions you want to answer    Create a project plan outlining the tasks and timeline    Consult with the instructor about any questions or challenges     # Mid-Term Project Template # Names: [Your Names Here] # Date: [Date] # 1. Data Import and Initial Exploration # ====================================== # Load necessary packages # install.packages(\"package_name\") # If needed # library(package_name) # Import the dataset # data <- read.csv(\"your_file.csv\") # For CSV files # OR use a built-in dataset data(mtcars) # Example using built-in dataset # Explore the structure of the data str(mtcars) # View the first few rows head(mtcars) # Summary statistics summary(mtcars) # Check for missing values any(is.na(mtcars)) # 2. Data Cleaning and Transformation # ================================== # Handle missing values (if any) # Example: Replace missing values with the mean # data$column[is.na(data$column)] <- mean(data$column, na.rm = TRUE) # Create derived variables mtcars$efficiency <- mtcars$mpg \/ mtcars$wt # Create categorical variables mtcars$weight_category <- cut(mtcars$wt, breaks = c(0, 2.5, 3.5, Inf), labels = c(\"Light\", \"Medium\", \"Heavy\")) # 3. Exploratory Data Analysis # =========================== # Distribution of a numerical variable hist(mtcars$mpg, main = \"Distribution of MPG\", xlab = \"Miles Per Gallon\", col = \"lightblue\") # Relationship between two numerical variables plot(mtcars$wt, mtcars$mpg, main = \"Weight vs. MPG\", xlab = \"Weight (1000 lbs)\", ylab = \"Miles Per Gallon\", pch = 19, col = \"darkblue\") # Add a regression line abline(lm(mpg ~ wt, data = mtcars), col = \"red\", lwd = 2) # Boxplot of a numerical variable by a categorical variable boxplot(mpg ~ cyl, data = mtcars, main = \"MPG by Number of Cylinders\", xlab = \"Number of Cylinders\", ylab = \"Miles Per Gallon\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # 4. Advanced Visualizations # ========================= # Scatter plot matrix pairs(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"wt\")], main = \"Scatter Plot Matrix\", pch = 19, col = \"darkblue\") # Multiple plots in one figure par(mfrow = c(2, 2)) # Plot 1: Histogram hist(mtcars$mpg, main = \"MPG Distribution\", xlab = \"Miles Per Gallon\", col = \"lightblue\") # Plot 2: Boxplot boxplot(mpg ~ cyl, data = mtcars, main = \"MPG by Cylinders\", xlab = \"Cylinders\", ylab = \"MPG\", col = c(\"lightgreen\", \"lightblue\", \"lightpink\")) # Plot 3: Scatter plot plot(mtcars$wt, mtcars$mpg, main = \"Weight vs. MPG\", xlab = \"Weight\", ylab = \"MPG\", pch = 19, col = \"darkblue\") # Plot 4: Bar plot barplot(table(mtcars$cyl), main = \"Cylinder Count\", xlab = \"Number of Cylinders\", ylab = \"Count\", col = c(\"red\", \"green\", \"blue\")) # Reset plotting window par(mfrow = c(1, 1)) # 5. Key Findings and Insights # =========================== # Calculate correlation between variables cor_matrix <- cor(mtcars[, c(\"mpg\", \"disp\", \"hp\", \"wt\", \"qsec\")]) round(cor_matrix, 2) # Linear regression model model <- lm(mpg ~ wt + hp, data = mtcars) summary(model) # Group comparisons aggregate(mpg ~ cyl, data = mtcars, FUN = mean) # Efficiency analysis aggregate(efficiency ~ weight_category, data = mtcars, FUN = mean) # 6. Documentation of Findings # =========================== # Key Finding 1: [Description of finding] # Key Finding 2: [Description of finding] # Key Finding 3: [Description of finding] # Challenges and Solutions: # [Describe any challenges you encountered and how you resolved them] # Conclusions: # [Summarize your main conclusions from the analysis]    Project Planning   Complete the following project planning template for your mid-term project:  Title: [Your Project Title]  Team Members: [Names]  Dataset: [Name and brief description of your chosen dataset]  Research Questions: [List 2-3 specific questions you aim to answer with your analysis]  Project Tasks and Timeline:   Data acquisition and exploration: [Date]  Data cleaning and transformation: [Date]  Exploratory analysis and visualization: [Date]  Advanced analysis and key findings: [Date]  Documentation and presentation preparation: [Date]   Planned Visualizations: [Describe at least 4 types of visualizations you plan to create]  Expected Challenges: [Identify potential challenges and how you plan to address them]  Division of Responsibilities: [How will you divide the work between team members?]        Instructor and peer consultations  During this session, you'll have the opportunity to consult with the instructor and your peers about your mid-term project. This collaborative environment will help you refine your approach and address any questions or challenges.  Consultation guidelines:    Be prepared to briefly describe your project and the specific aspects you need help with    Listen actively to suggestions and be open to constructive feedback    Take notes on the advice you receive    When providing feedback to peers, be specific, constructive, and respectful     Peer Consultation Exercise   Form groups of four (two project pairs) and conduct a structured peer consultation session following these steps:    Project Overview (2 minutes per pair)    Briefly present your project topic, dataset, and research questions      Progress Update (2 minutes per pair)    Share what you've accomplished so far and your next steps      Challenges Discussion (3 minutes per pair)    Describe specific challenges or questions you're facing      Feedback Exchange (5 minutes per pair)    The other pair provides suggestions, ideas, and constructive feedback      Action Planning (3 minutes per pair)    Based on the feedback received, update your project plan         Consultation Reflection   After completing the peer consultation exercise, reflect on the following questions:    What were the most valuable insights or suggestions you received during the consultation?    How will you incorporate this feedback into your project?    What specific changes will you make to your project plan based on the consultation?    What did you learn from reviewing your peers' projects that could be helpful for your own work?          Progress check-ins  Regular progress check-ins are essential for keeping your project on track. This section provides a structured format for documenting your progress and planning your next steps.   Mid-Term Project Progress Check-In   Complete the following progress check-in form to document your project status and plan your next steps:  Project Title: [Your Project Title]  Team Members: [Names]  Date: [Current Date]  1. Accomplished Since Last Check-In:    [Task 1 completed]    [Task 2 completed]    [Task 3 completed]    2. Current Status:    Data collection: [Complete\/In progress\/Not started]    Data cleaning: [Complete\/In progress\/Not started]    Exploratory analysis: [Complete\/In progress\/Not started]    Visualization development: [Complete\/In progress\/Not started]    Documentation: [Complete\/In progress\/Not started]    3. Challenges and Solutions:    Challenge 1: [Description]  Solution: [How you addressed it or plan to address it]    Challenge 2: [Description]  Solution: [How you addressed it or plan to address it]    4. Next Steps:    [Task 1 to complete] - Responsible: [Name] - Deadline: [Date]    [Task 2 to complete] - Responsible: [Name] - Deadline: [Date]    [Task 3 to complete] - Responsible: [Name] - Deadline: [Date]    5. Questions for Instructor or Peers:    [Question 1]    [Question 2]       Project Milestone Checklist   Use the following checklist to track your progress on key project milestones:      We have selected an appropriate dataset for our analysis      We have formulated clear research questions      We have successfully imported and examined the raw data      We have cleaned the data and handled any missing or problematic values      We have created appropriate derived variables to enhance our analysis      We have conducted initial exploratory data analysis      We have created at least two different types of visualizations      We have identified preliminary insights or patterns in the data      We have documented our code with appropriate comments      We have started drafting our project report       "
},
{
  "id": "activity-mid-term-project",
  "level": "2",
  "url": "sec-mid-term-project.html#activity-mid-term-project",
  "type": "Activity",
  "number": "2.8.1",
  "title": "Mid-Term Project: Data Analysis and Visualization.",
  "body": " Mid-Term Project: Data Analysis and Visualization   For your mid-term project, you will work in pairs to analyze a dataset of your choice. The project will involve data import, exploration, transformation, and visualization to extract meaningful insights.  Project requirements:    Select and import a dataset of interest    You may use a built-in R dataset, a publicly available dataset, or data from an API    The dataset should be of reasonable size and complexity to allow for meaningful analysis      Perform data preparation and transformation    Clean and handle any missing or problematic data    Create derived variables that enhance your analysis    Reshape or aggregate data as needed      Conduct exploratory data analysis    Generate appropriate summary statistics    Create visualizations to understand data distributions and relationships    Identify interesting patterns or trends      Develop at least four different types of visualizations    The visualizations should effectively communicate key insights    Each visualization should serve a specific analytical purpose    Include proper titles, labels, and other elements for clarity      Document your process and findings    Include comments in your code explaining key steps    Provide written explanations of your approach and discoveries    Address any challenges you encountered and how you resolved them      Deliverables:    R script or R Markdown document containing your code and documentation    Brief presentation (5-7 minutes) showcasing your key findings and visualizations    Short written report summarizing your project (2-3 pages)     "
},
{
  "id": "ex-project-planning-template",
  "level": "2",
  "url": "sec-mid-term-project.html#ex-project-planning-template",
  "type": "Checkpoint",
  "number": "2.8.1",
  "title": "Project Planning.",
  "body": " Project Planning   Complete the following project planning template for your mid-term project:  Title: [Your Project Title]  Team Members: [Names]  Dataset: [Name and brief description of your chosen dataset]  Research Questions: [List 2-3 specific questions you aim to answer with your analysis]  Project Tasks and Timeline:   Data acquisition and exploration: [Date]  Data cleaning and transformation: [Date]  Exploratory analysis and visualization: [Date]  Advanced analysis and key findings: [Date]  Documentation and presentation preparation: [Date]   Planned Visualizations: [Describe at least 4 types of visualizations you plan to create]  Expected Challenges: [Identify potential challenges and how you plan to address them]  Division of Responsibilities: [How will you divide the work between team members?]    "
},
{
  "id": "activity-peer-consultation",
  "level": "2",
  "url": "sec-mid-term-project.html#activity-peer-consultation",
  "type": "Activity",
  "number": "2.8.2",
  "title": "Peer Consultation Exercise.",
  "body": " Peer Consultation Exercise   Form groups of four (two project pairs) and conduct a structured peer consultation session following these steps:    Project Overview (2 minutes per pair)    Briefly present your project topic, dataset, and research questions      Progress Update (2 minutes per pair)    Share what you've accomplished so far and your next steps      Challenges Discussion (3 minutes per pair)    Describe specific challenges or questions you're facing      Feedback Exchange (5 minutes per pair)    The other pair provides suggestions, ideas, and constructive feedback      Action Planning (3 minutes per pair)    Based on the feedback received, update your project plan       "
},
{
  "id": "ex-consultation-reflection",
  "level": "2",
  "url": "sec-mid-term-project.html#ex-consultation-reflection",
  "type": "Checkpoint",
  "number": "2.8.2",
  "title": "Consultation Reflection.",
  "body": " Consultation Reflection   After completing the peer consultation exercise, reflect on the following questions:    What were the most valuable insights or suggestions you received during the consultation?    How will you incorporate this feedback into your project?    What specific changes will you make to your project plan based on the consultation?    What did you learn from reviewing your peers' projects that could be helpful for your own work?      "
},
{
  "id": "activity-progress-checkin",
  "level": "2",
  "url": "sec-mid-term-project.html#activity-progress-checkin",
  "type": "Activity",
  "number": "2.8.3",
  "title": "Mid-Term Project Progress Check-In.",
  "body": " Mid-Term Project Progress Check-In   Complete the following progress check-in form to document your project status and plan your next steps:  Project Title: [Your Project Title]  Team Members: [Names]  Date: [Current Date]  1. Accomplished Since Last Check-In:    [Task 1 completed]    [Task 2 completed]    [Task 3 completed]    2. Current Status:    Data collection: [Complete\/In progress\/Not started]    Data cleaning: [Complete\/In progress\/Not started]    Exploratory analysis: [Complete\/In progress\/Not started]    Visualization development: [Complete\/In progress\/Not started]    Documentation: [Complete\/In progress\/Not started]    3. Challenges and Solutions:    Challenge 1: [Description]  Solution: [How you addressed it or plan to address it]    Challenge 2: [Description]  Solution: [How you addressed it or plan to address it]    4. Next Steps:    [Task 1 to complete] - Responsible: [Name] - Deadline: [Date]    [Task 2 to complete] - Responsible: [Name] - Deadline: [Date]    [Task 3 to complete] - Responsible: [Name] - Deadline: [Date]    5. Questions for Instructor or Peers:    [Question 1]    [Question 2]     "
},
{
  "id": "ex-project-milestone-checklist",
  "level": "2",
  "url": "sec-mid-term-project.html#ex-project-milestone-checklist",
  "type": "Checkpoint",
  "number": "2.8.3",
  "title": "Project Milestone Checklist.",
  "body": " Project Milestone Checklist   Use the following checklist to track your progress on key project milestones:      We have selected an appropriate dataset for our analysis      We have formulated clear research questions      We have successfully imported and examined the raw data      We have cleaned the data and handled any missing or problematic values      We have created appropriate derived variables to enhance our analysis      We have conducted initial exploratory data analysis      We have created at least two different types of visualizations      We have identified preliminary insights or patterns in the data      We have documented our code with appropriate comments      We have started drafting our project report     "
},
{
  "id": "sec-mid-term-presentations",
  "level": "1",
  "url": "sec-mid-term-presentations.html",
  "type": "Section",
  "number": "2.9",
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
  "number": "2.9.1",
  "title": "Presentation Outline.",
  "body": " Presentation Outline   Create an outline for your mid-term project presentation using the following template:  Title Slide: [Project Title], [Team Members]  Introduction:    Dataset: [Brief description of your dataset]    Research questions: [List your main research questions]    Methods:    Data acquisition: [How you obtained the data]    Data cleaning: [Key cleaning steps]    Analysis approach: [Main analytical techniques]    Results (for each visualization):    Visualization 1: [Description and key finding]    Visualization 2: [Description and key finding]    Visualization 3: [Description and key finding]    Visualization 4: [Description and key finding]    Conclusions:    Key finding 1: [Brief description]    Key finding 2: [Brief description]    Limitations: [Brief description]    Future Work:    Potential extension: [Brief description]    New questions: [Brief description]      "
},
{
  "id": "activity-peer-feedback",
  "level": "2",
  "url": "sec-mid-term-presentations.html#activity-peer-feedback",
  "type": "Activity",
  "number": "2.9.1",
  "title": "Peer Presentation Feedback.",
  "body": " Peer Presentation Feedback   For each presentation, complete the following peer feedback form:  Presenters: [Names]  Project Title: [Title]  What aspects of the project were most effective or interesting?  [Your response]  What visualizations were particularly insightful?  [Your response]  What questions do you have about their analysis or findings?  [Your response]  What suggestions do you have for improving or extending their analysis?  [Your response]  One thing you learned or found valuable from this presentation:  [Your response]   "
},
{
  "id": "ex-presentation-reflection",
  "level": "2",
  "url": "sec-mid-term-presentations.html#ex-presentation-reflection",
  "type": "Checkpoint",
  "number": "2.9.2",
  "title": "Presentation Reflection.",
  "body": " Presentation Reflection   After completing your presentation, reflect on the following questions:    What aspects of your presentation do you think were most effective?    What would you do differently if you were to give this presentation again?    What was the most valuable feedback you received from your peers or instructor?    How will you incorporate this feedback into your future data science projects or presentations?      "
},
{
  "id": "activity-class-discussion",
  "level": "2",
  "url": "sec-mid-term-presentations.html#activity-class-discussion",
  "type": "Activity",
  "number": "2.9.2",
  "title": "Class Discussion: Project Insights.",
  "body": " Class Discussion: Project Insights   After all presentations have been completed, participate in a class discussion addressing the following questions:    What common challenges did most groups face in their data analysis?    What visualization techniques were particularly effective across projects?    What surprising or unexpected findings emerged from the various analyses?    What data transformation techniques proved most useful across different projects?    How might the insights from these projects be applied in real-world scenarios?    What additional skills or techniques would be beneficial to learn for future data science projects?     "
},
{
  "id": "ex-learning-reflection",
  "level": "2",
  "url": "sec-mid-term-presentations.html#ex-learning-reflection",
  "type": "Checkpoint",
  "number": "2.9.3",
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
  "number": "2.9.3",
  "title": "Computational Technique Inventory.",
  "body": " Computational Technique Inventory   Create a personal inventory of the computational techniques you've learned and applied in this course so far. For each technique, rate your confidence level on a scale of 1-5 (1 = Novice, 5 = Proficient) and note how you've applied it in your project work.     Technique  Confidence (1-5)  How I've Applied It  Areas for Improvement    Basic R syntax  [Rating]  [Application]  [Improvement]    Data import  [Rating]  [Application]  [Improvement]    Data cleaning  [Rating]  [Application]  [Improvement]    Data exploration  [Rating]  [Application]  [Improvement]    Data visualization  [Rating]  [Application]  [Improvement]    Data transformation  [Rating]  [Application]  [Improvement]    Working with web data  [Rating]  [Application]  [Improvement]    Documentation and commenting  [Rating]  [Application]  [Improvement]    Problem-solving approaches  [Rating]  [Application]  [Improvement]      "
},
{
  "id": "ex-course-midpoint-reflection",
  "level": "2",
  "url": "sec-mid-term-presentations.html#ex-course-midpoint-reflection",
  "type": "Checkpoint",
  "number": "2.9.5",
  "title": "Course Midpoint Reflection.",
  "body": " Course Midpoint Reflection   As we reach the midpoint of the course, reflect on your overall learning experience:    How has your perception of data science changed since the beginning of the course?    What has been the most valuable skill or concept you've learned so far?    What aspects of data science are you most excited to explore in the second half of the course?    What specific goals do you have for your data science learning in the remaining units?    How do you plan to continue developing your computational skills beyond this course?      "
},
{
  "id": "ch-data-analysis",
  "level": "1",
  "url": "ch-data-analysis.html",
  "type": "Chapter",
  "number": "3",
  "title": "Data Analysis and Visualization with Web-R",
  "body": " Data Analysis and Visualization with Web-R   This unit introduces techniques for analyzing and visualizing data using Web-R.    "
},
{
  "id": "ch-advanced-analysis",
  "level": "1",
  "url": "ch-advanced-analysis.html",
  "type": "Chapter",
  "number": "4",
  "title": "Advanced Analysis and Final Project Work",
  "body": " Advanced Analysis and Final Project Work   This unit covers advanced analysis techniques and preparation for the final project.    "
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
