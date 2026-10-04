"""Builds meagan-swenson-cv.pdf from the content below.

The text mirrors index.html, so when the site's content changes, update it here too and rerun:

    pip install reportlab
    python cv/build_cv.py
"""
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import Color
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether

HERE = Path(__file__).resolve().parent
OUT = str(HERE.parent / "meagan-swenson-cv.pdf")
PHOTO = str(HERE / "photo.png")

NAVY = Color(.062745, .137255, .227451)
BLUE = Color(.231373, .560784, .878431)
DBLUE = Color(.164706, .427451, .709804)
GRAY = Color(.290196, .352941, .423529)
LIGHT = Color(.811765, .839216, .87451)

W, H = A4
LM = 18 * mm
TM = 16 * mm
BM = 18 * mm

name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=NAVY)
title = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=11.5, leading=15, textColor=DBLUE)
contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=9, leading=13, textColor=GRAY)
h2 = ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=NAVY, spaceBefore=7, keepWithNext=1)
body = ParagraphStyle("body", fontName="Helvetica", fontSize=9.4, leading=13, textColor=NAVY)
job = ParagraphStyle("job", fontName="Helvetica-Bold", fontSize=10.5, leading=13.5, textColor=NAVY, spaceBefore=4)
meta = ParagraphStyle("meta", fontName="Helvetica", fontSize=9, leading=12.5, textColor=GRAY, spaceAfter=3)
sub = ParagraphStyle("sub", fontName="Helvetica-Bold", fontSize=9.5, leading=13, textColor=NAVY, spaceBefore=1, spaceAfter=1)
bul = ParagraphStyle("bul", fontName="Helvetica", fontSize=9.2, leading=12.6, textColor=NAVY,
                     leftIndent=10, bulletIndent=0, bulletFontName="ZapfDingbats", bulletFontSize=7,
                     bulletColor=DBLUE)
skill = ParagraphStyle("skill", fontName="Helvetica", fontSize=9.2, leading=12.8, textColor=NAVY, spaceAfter=3)


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def section(t):
    rule = HRFlowable(width="100%", thickness=1.6, color=BLUE, lineCap="round", spaceBefore=2, spaceAfter=5)
    rule.keepWithNext = 1
    return [Paragraph(t, h2), rule]


def bullets(items, lead=None):
    out = []
    for it in items:
        if isinstance(it, tuple):
            txt = f"<b>{esc(it[0])}:</b> {esc(it[1])}"
        else:
            txt = esc(it)
        out.append(Paragraph(txt, bul, bulletText="\u25cf"))
    out.append(Spacer(1, 5))
    return out


def job_block(t, m, items, projects):
    story = [KeepTogether([Paragraph(esc(t), job), Paragraph(esc(m), meta)] + bullets(items[:1])[:1])]
    story += bullets(items[1:])
    if projects:
        story.append(KeepTogether([Paragraph("Key Projects", sub)] + bullets(projects[:1])[:1]))
        story += bullets(projects[1:])
    return story


def on_page(c, doc):
    c.saveState()
    if doc.page == 1:
        c.drawImage(PHOTO, 459.2126, 717.1654, 85.03937, 85.03937, mask="auto")
    c.setFillColor(BLUE)
    c.rect(0, H - 5, W, 5, stroke=0, fill=1)
    c.setFont("Helvetica", 8)
    c.setFillColor(GRAY)
    c.drawRightString(W - LM - 6, 10 * mm, f"Meagan Swenson – CV – page {doc.page}")
    c.restoreState()


story = []
story += [
    Paragraph("Meagan Swenson", name),
    Paragraph("Full-Stack Developer", title),
    Paragraph('Amsterdam, Netherlands | <a href="mailto:swens2005@yahoo.com">swens2005@yahoo.com</a> | '
              '<a href="tel:+31627355891">+31 6 27 35 58 91</a><br/>'
              '<a href="https://www.linkedin.com/in/meagan-swenson">linkedin.com/in/meagan-swenson</a> | '
              '<a href="https://codelaunch.nl/">codelaunch.nl</a>', contact),
    Spacer(1, 10),
    HRFlowable(width="100%", thickness=0.6, color=LIGHT, lineCap="round", spaceBefore=0, spaceAfter=5),
]

story += section("PROFILE")
story += [Paragraph(
    "Full-stack developer with 25+ years of experience building websites and web applications, from the user "
    "interface to the database. Seven of those years were at Philips and Albert Heijn in the Netherlands. Main "
    "stack: Oracle/PL-SQL, PHP/Laravel, React, HTML/CSS/JavaScript. Since 2026 I have been working with "
    "AI-assisted and agentic development using Claude Code and GitHub Copilot.", body), Spacer(1, 5)]

story += section("HIGHLIGHTS")
story += bullets([
    ("Philips and Albert Heijn (2019 – present)",
     "seven years building and maintaining production web and back-end systems for two major Dutch organizations"),
    ("Agentic development pipeline on Claude Code",
     "built agents that turn user stories into working code and review that code before merge; authored custom "
     "Claude skills to reuse development workflows"),
    ("Philips global website rebuild",
     "redesigned and rebuilt the global Marketing & E-Commerce website in 6 months; site traffic increased by 50%"),
    ("GDPR anonymization at Albert Heijn",
     "built an automated customer-data anonymization process in Oracle/PL-SQL that replaced hundreds of manual "
     "requests per month"),
])

story += section("WORK EXPERIENCE")
story += job_block(
    "Full-Stack Developer (Independent Contractor)",
    "AI-Assisted Development | 2026 – Present",
    [
        "Building full websites from the ground up using AI-assisted development, with Claude Code and GitHub "
        "Copilot as primary tools",
        "Developing with PHP, Laravel, React, and SQL, using AI assistance to work across Node/npm, Vite, Composer, "
        "and Livewire/Inertia",
        "Setting up CI/CD through GitHub deployments to VPS and cPanel-hosted environments",
        "Integrating AI tooling into the workflow improved project organization and delivery speed",
    ],
    [
        ("Agentic Development Pipeline",
         "Built on Claude Code: user stories scoped specifically for AI-agent execution, an agent that consumes "
         "those stories to generate working code, and a second agent that reviews the generated code before merge."),
        ("Custom Claude Skills",
         "Authored custom Claude skills that package repeatable development workflows and standards for reuse "
         "across projects."),
    ],
)
story += job_block(
    "Back-End DevOps Engineer & Technical Product Owner",
    "Albert Heijn (Ahold Delhaize) | September 2023 – Present | Technical Product Owner scope since 2025",
    [
        "Developing and maintaining back-end services and PL/SQL applications within Oracle databases supporting "
        "the Order Management System (OMS) for Albert Heijn Online",
        "Delivered multiple stories end to end through the full SDLC: analysis, PL/SQL development, unit tests, and "
        "pull-request review",
        "Built an automated PL/SQL regulatory reporting job (ANAF, Romania) for monthly cash-payment customer data "
        "extraction, encrypted SFTP delivery from the Unix server, and Control-M scheduling, delivered end to end",
        "Designed and built a new Oracle Forms menu for country-specific customer anonymization, working through "
        "role-based access constraints on legacy roles",
        "Root-caused and remediated recurring production incidents in BOFF/PL-SQL, including a merge-sequencing "
        "timing defect and 12 correlated messaging errors traced to specific order IDs",
        "Reviewed PL/SQL code and provided implementation feedback to peers, catching a cursor-placement "
        "compilation defect before release",
        "Deployed a defensive-programming hotfix (targeted exception handling) that eliminated a recurring class of "
        "overnight incidents caused by non-finalized order auto-cancellation",
        "Migrated legacy integration contracts to a new messaging platform, authoring the technical migration hub "
        "and reusable contract-documentation templates",
        "Documented and maintained 35+ BOFF/FOFF/ECDT integration contracts, including event handlers, PL/SQL "
        "packages, entity mappings, and testing risk assessments, creating a searchable catalog of the OMS "
        "integration surface",
        "Extended a data-lake PII-tagged dataset with a new employee identifier field, authoring the user story, "
        "coordinating PII-tag creation, and running verification SQL across five stakeholder teams",
        "Performed final UTF-8 conversion verification testing across multiple production screens and reports "
        "ahead of sign-off",
        "Configured and tested threshold-based security alerting rules for the OMS platform, partnering with the "
        "security engineering team on scope and validation",
        "Investigated and resolved Control-M job scheduling issues: tuned retry logic on one job and restored "
        "another that had been unintentionally held since an unrelated infrastructure migration",
        "Used GitHub Copilot to generate SLI metric recommendations across OMS batch jobs, mapping each job to "
        "success-rate, execution-time, and row-count metrics",
    ],
    [
        ("ANAF Regulatory Reporting (Romania)",
         "Designed, built, and scheduled a fully automated PL/SQL job to meet a legal monthly reporting obligation, "
         "delivered end to end from analysis to production."),
        ("GDPR Data Anonymization",
         "Built a self-sustainable anonymization process for a back-end order-tracking database, verifying "
         "customers via a single data element and eliminating hundreds of manual requests per month."),
        ("SLI/SLO Framework",
         "Defined service-level indicators for critical batch jobs, using AI tooling to help scope the initial "
         "metric set."),
    ],
)
story += job_block(
    "Technical Lead: Hybrid Full-Stack Developer & Senior Business Analyst",
    "Philips (Koninklijke Philips N.V.) | February 2019 – August 2023 | 4.5 years",
    [
        "Built and maintained the internal Philips Global Marketing & E-Commerce website",
        "Maintained 10+ additional custom website builds and SharePoint sites",
        "Designed functional user interfaces and website elements from brand guidelines",
        "Developed user experience flows based on stakeholder requirements",
        "Created websites using HTML, CSS, and JavaScript arrays for data management",
        "Proposed technical implementation strategies for the right business technologies",
        "Performed data analysis using SQL and Excel to support data-driven decisions",
        "Completed testing and release planning between environments",
    ],
    [
        ("Global Website Revamp",
         "Inherited a disorganized, outdated global marketing site. Engaged stakeholders to define requirements "
         "and a full redesign plan, relaunching within 6 months to a 50% increase in site traffic."),
        ("Custom Web App",
         "Built a fully interactive web application covering all marketing and e-commerce business processes, "
         "with complex data structures for ongoing flexibility, rolled out within 30 days."),
    ],
)
story += job_block(
    "Technical Lead, Senior Business Analyst & Web Application Developer",
    "Hewlett-Packard (acquired EDS in 2006) | November 2002 – September 2018 | 16 years",
    [
        "Built 20+ web applications, including a communication log and issue tracker",
        "Built hundreds of specialized, interactive data reports using SQL, PHP, and HTML",
        "Designed streamlined user interfaces with Photoshop",
        "Completed testing and release planning for web applications",
        "Maintained document repository and back-end data-entry web applications",
        "Produced documentation requests for database asset creation in Oracle",
    ],
    [
        ("Wisconsin Medicaid Time-Tracking System",
         "Built a complete time-tracking and invoicing system from the ground up using PL/SQL, ASP, Active "
         "Directory, and Ajax, with reporting accurate down to $0.01."),
        ("Document Repository Overhaul",
         "Rolled out an extensive update covering hundreds of reports for the State of Wisconsin Medicaid program, "
         "improving efficiency and data access."),
    ],
)

core = [
    "Full-Stack Web Development (Front-End to Database)", "AI-Assisted & Agentic Development Workflows",
    "Root-Cause Analysis & Problem-Solving", "Database Design, Integration & Query Optimization",
    "API Integration & System-to-System Messaging", "Requirements Translation (Business Need to Technical Spec)",
    "Unit Testing, Code Review & Pull-Request Review", "Testing, Release Planning & Environment Promotion",
    "Documentation & Technical Knowledge Capture", "Team Collaboration & Cross-Functional Communication",
]
story += [KeepTogether(section("SKILLS") + [Paragraph("Core Skills", sub),
                        Paragraph(" · ".join(esc(s) for s in core), ParagraphStyle("core", parent=body, spaceAfter=3))])]
groups = [
    ("Languages & Front-End", "HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, Laravel, React, ASP, JSP, Java, Ajax, REST APIs"),
    ("Database & Back-End", "Oracle, PL/SQL, MySQL, MSSQL, Oracle Forms, SQL Developer"),
    ("AI-Assisted Development", "Claude Code, GitHub Copilot, agentic workflows (story-to-code agents and automated "
     "code review), custom Claude skills, user stories designed for AI-agent execution, Node/npm, Vite, Composer, "
     "Livewire/Inertia"),
    ("DevOps, Hosting & Release", "Git, GitHub (pull requests, code review), CI/CD via GitHub deployments, VPS and "
     "cPanel hosting, Unix/Linux, WinSCP, PuTTY, SFTP, file encryption for secure data delivery, Control-M, "
     "Opsgenie, PagerDuty, ServiceNow, Power Automate, Active Directory, VS Code"),
    ("Platforms & Design Tools", "Shopify, Magento, WordPress, Webflow, Dreamweaver, Photoshop, Confluence, Jira, draw.io"),
    ("Microsoft Tools", "Excel, Access, Outlook, PowerPoint, SharePoint, Visio, Word"),
]
for k, v in groups:
    story.append(Paragraph(f"<b>{esc(k)}:</b> {esc(v)}", skill))
story.append(Spacer(1, 2))

story += section("EDUCATION")
story += [Paragraph(f"<b>{a}</b> – {b}", bul, bulletText="\u25cf") for a, b in [
    ("Computer Information Systems, AS", "Herzing University | 2000 – 2002"),
    ("Teaching &amp; General Sciences", "University of Wisconsin | 1998 – 1999"),
    ("General Sciences, High Honors", "Madison Memorial | 1994 – 1998"),
]] + [Spacer(1, 5)]

story += section("CERTIFICATIONS")
story += bullets([
    "Project Management Professional (PMP) – PMI, currently pursuing",
    "EITCA Web Development Programme – EITCI, May 2023",
    "A+ Certification – CompTIA, January 2001",
])

story += section("LANGUAGES")
story.append(Paragraph("English – Native | Dutch – Intermediate | Spanish – Intermediate", body))

doc = SimpleDocTemplate(
    OUT, pagesize=A4, leftMargin=LM, rightMargin=LM, topMargin=TM, bottomMargin=BM,
    title="Meagan Swenson – Full-Stack Developer – CV", author="Meagan Swenson",
    subject="Curriculum Vitae", keywords="Full-Stack Developer, Oracle, PL/SQL, PHP, Laravel, React, Claude Code",
    lang="en-US",
)
doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print("wrote", OUT)
