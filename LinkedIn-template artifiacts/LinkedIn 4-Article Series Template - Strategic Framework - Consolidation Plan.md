# Plan for Consolidating LinkedIn Template Documents

This document outlines the detailed plan for consolidating existing LinkedIn template documents into a single comprehensive file named `LinkedIn 4-Article Series Template - Strategic Framework.md`. This new file will serve as the single source of truth, enabling the deletion of other original artifacts once the consolidation is complete.

## Phase 1: Information Gathering & Analysis (Completed)

*   Read and analyzed the following documents:
    *   `LinkedIn-template artifiacts/LinkedIn Blog Article Template.md`
    *   `LinkedIn-template artifiacts/LinkedIn Blog Article Template2.md`
    *   `LinkedIn-template artifiacts/linkedin-4article-series-template-May2025.md`
    *   `LinkedIn-template artifiacts/End-to-End Prompt Structure Guide for Content Creation.md`
    *   `LinkedIn-template artifiacts/Series-specific templates/General LinkedIn Article Series Template.md`
    *   `LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf`
    *   `LinkedIn BlogPost Schedule.pdf`
*   Identified key sections, unique content, and overlapping information across all documents.

## Phase 2: Consolidation & Integration into `LinkedIn 4-Article Series Template - Strategic Framework.md`

This phase involves extracting relevant information from the source documents and synthesizing it into the new, comprehensive strategic framework. The process will prioritize maintaining the detailed structure found in `linkedin-4article-series-template-May2025.md` and enriching it with content from other sources.

1.  **Initial Content Base:** The primary content for the new `LinkedIn 4-Article Series Template - Strategic Framework.md` will be derived from `linkedin-4article-series-template-May2025.md` as it is the most comprehensive series template.

2.  **Harmonize General Article Structure Details:**
    *   Review `LinkedIn Blog Article Template.md` and `LinkedIn Blog Article Template2.md`.
    *   Compare their "Vertical Liftoff," "Core Analysis Sections," "Key Takeaways," "Strategic Recommendations," "Conclusion & Call-to-Action," "Style & Tone Guidelines," and "Template Compliance Checklist" with the corresponding (and more detailed) sections in `linkedin-4article-series-template-May2025.md`.
    *   Integrate any unique, granular details, specific examples, or explicit instructions (e.g., humor references, specific narrative style emphasis) that *enhance* the existing framework, ensuring no valuable information is lost.
    *   **Source:** `LinkedIn Blog Article Template.md`, `LinkedIn Blog Article Template2.md`
    *   **Target Section:** `## #LV Style Requirements`, `## Individual Article Template`, `## Style Consistency Requirements`.

3.  **Integrate Content Creation Workflow (Prompting Guide):**
    *   Extract the 7-stage content creation process, variables, and prompt examples from `End-to-End Prompt Structure Guide for Content Creation.md`.
    *   Create a new, dedicated top-level section in the new strategic framework (e.g., "Content Creation & Prompting Framework") to house this detailed workflow. This will serve as a guide for *how* to generate the content for the series.
    *   **Source:** `End-to-End Prompt Structure Guide for Content Creation.md`
    *   **Target Section:** New section: `## Content Creation & Prompting Framework`.

4.  **Enhance General Series & Publishing Elements:**
    *   Review `Series-specific templates/General LinkedIn Article Series Template.md`.
    *   Ensure its "Objective," "Audience," "Tone & Style," "Structure," and "Visual Strategy" align with and, if necessary, augment the existing "Series Architecture Overview" and "#LV Style Requirements" in the new strategic framework.
    *   Crucially, integrate the "Publishing Workflow Integration" steps (e.g., Strategic Planning, Research, Outline Creation, Visual Creation, QA, Publishing & Engagement Strategy, Performance Review) into the "Content Calendar Structure" and "Series Development Checklist" sections of the new strategic framework, providing a more complete end-to-end publishing process.
    *   **Source:** `Series-specific templates/General LinkedIn Article Series Template.md`
    *   **Target Section:** `## Series Architecture Overview`, `## #LV Style Requirements`, `## Content Calendar Structure`, `## Series Development Checklist`.

5.  **Incorporate Strategic Pillars & Content Calendar Details:**
    *   Extract the seven "Content Pillars and Subtopics" and their "Posting Timeline" from `LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf`.
    *   Integrate these into the "Series Examples by Content Pillar" to ensure consistency and completeness of the content strategy.
    *   Use the detailed `LinkedIn BlogPost Schedule.pdf` to further populate or serve as a concrete example within the "Content Calendar Structure" section, providing specific dates and topics.
    *   **Source:** `LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf`, `LinkedIn BlogPost Schedule.pdf`
    *   **Target Section:** `## Series Examples by Content Pillar`, `## Content Calendar Structure`.

6.  **Consolidate KPIs & Measurement Framework:**
    *   Merge and refine the "Critical KPIs for LinkedIn Presence" and "Critical KPIs for Blog Posts" from `LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf`.
    *   Ensure all relevant metrics, tools for tracking (LinkedIn Analytics, Google Analytics, Social Media Management Tools, CRM Tools), and "Steps to Implement Tracking" are fully integrated into the "Measurement Framework" section of the new strategic framework.
    *   Address any "Missing Sections & Topics" (e.g., Audience Persona Profiles, Personal Branding Optimization, Case Studies, Networking Strategy, Visual Content Strategy, Expanded Timeline, Call-to-Action Frameworks) from the PDF that are not yet adequately covered, by adding new sub-sections or augmenting existing ones.
    *   **Source:** `LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf`
    *   **Target Section:** `## Measurement Framework`, potentially new sections for "Missing Sections & Topics."

7.  **Add High-Level Value Proposition/Introduction:**
    *   Create a concise introductory section at the beginning of the new `LinkedIn 4-Article Series Template - Strategic Framework.md` that summarizes the overall value proposition and context, drawing from the "Executive Summary" and "Value Proposition" sections of `LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf`. This will provide immediate context for the entire document.
    *   **Source:** `LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf`
    *   **Target Section:** New section: `## Executive Summary / Value Proposition`.

## Phase 3: Generate Process Framework (using Context7)

This phase involves leveraging the Context7 MCP server to extract a generalized content publishing process framework. This framework will then be integrated into the consolidated document to provide a robust, industry-aligned procedural guide.

1.  **Identify Relevant Library:** Use the `resolve-library-id` tool from the `github.com/upstash/context7-mcp` server to search for a library related to "content publishing workflow," "digital marketing process," or "technical content lifecycle."
2.  **Fetch Documentation:** Once a suitable library ID is identified, use the `get-library-docs` tool to retrieve relevant documentation on the publishing process.
3.  **Integrate & Refine:** Review the Context7-generated framework. Integrate applicable best practices or structural elements into the "Content Creation & Prompting Framework" and "Content Calendar Structure" sections of the new `LinkedIn 4-Article Series Template - Strategic Framework.md`, refining it to align with the specific LinkedIn publishing process outlined by the existing documents.

## Phase 4: Document Changes

A markdown table will be created within the final `LinkedIn 4-Article Series Template - Strategic Framework.md` document (or separately if preferred by the user) detailing all changes made.

The table will include the following columns for each significant change:

*   **Type of Change:** (Added, Updated, Augmented)
*   **Target File Section (in new consolidated file):** (e.g., `## #LV Style Requirements`, `### Article 1: Awareness & Discovery Template`)
*   **Source Document:** (e.g., `LinkedIn Blog Article Template.md`, `LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf`)
*   **Source Section/Page:** (Specific section heading, page number, or line range if applicable)
*   **Description of Change:** (Brief summary of what was incorporated or modified)

## Phase 5: User Review & Implementation

1.  Present this detailed plan to the user.
2.  Ask for their approval to proceed.
3.  If approved, ask if they would like this plan written to a markdown file for their records.
4.  Once confirmed, request to switch to `💻 Code` mode to implement the changes and create the new consolidated file.

---

### Mermaid Diagram for the Consolidation Process (Updated for New Target File)

```mermaid
graph TD
    A[Start Task: Consolidate LinkedIn Templates] --> B(Read All Relevant Documents)

    B --> B1(LinkedIn Blog Article Template.md)
    B --> B2(LinkedIn Blog Article Template2.md)
    B --> B3(linkedin-4article-series-template-May2025.md - Source Content)
    B --> B4(End-to-End Prompt Structure Guide for Content Creation.md)
    B --> B5(General LinkedIn Article Series Template.md)
    B --> B6(LinkedIn Blog Post Strategy & Content Pillars_v1-Dec24.pdf)
    B --> B7(LinkedIn BlogPost Schedule.pdf)

    B --> C(New Target File: LinkedIn 4-Article Series Template - Strategic Framework.md)

    C --> D(Consolidation & Integration Phases)
    D --> D1[Initialize C with content from B3]
    D --> D2[Harmonize Article Structure Details from B1, B2 into D1]
    D --> D3[Integrate Content Creation Workflow from B4 into new section in D1]
    D --> D4[Enhance Series-Specific Elements from B5 into D1]
    D --> D5[Incorporate Strategic & Calendar Details from B6, B7 into D1]
    D --> D6[Consolidate KPIs & Measurement from B6 into D1]
    D --> D7[Add High-Level Value Proposition from B6 into D1]

    D --> F(Generate Process Framework using Context7)
    F --> F1[Resolve Library ID: "content publishing workflow"]
    F --> F2[Get Library Docs]
    F --> F3[Integrate Context7 Framework into Consolidated Doc D1]

    F --> G(Document All Changes in a Table within D1)

    G --> H(Present Detailed Plan to User)
    H --> I{User Approval?}
    I -- Yes --> J(Ask to Write Plan to Markdown)
    J -- Yes --> K(Write Plan to Markdown)
    J -- No --> L(Proceed to Implementation)

    I -- No --> M(Receive Feedback & Revise Plan)
    M --> H

    L --> N(Switch to 💻 Code Mode)
    N --> O[Implement Changes in Code Mode]