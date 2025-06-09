# End-to-End Prompt Structure Guide for Content Creation

This guide provides a structured breakdown and variables necessary to efficiently generate comprehensive and finalized content, from initial idea through to final delivery (including artifacts and images), now incorporating detailed alignment with the provided LinkedIn Blog Article Template.

## Stage 1: Idea Generation & Confirmation

### Variables Required:

* `topic_idea`: General topic proposed by the user
* `target_audience`: Audience definition
* `purpose`: Purpose of content (e.g., Informative, Strategic, Promotional, Educational)
* `desired_outcome`: Business or strategic outcome desired

### Prompts:

* "Provide a concise summary of the topic: `{topic_idea}`"
* "Suggest 3 variations of the topic tailored to `{target_audience}` achieving `{desired_outcome}`"
* "Confirm if the topic aligns strategically with the intended `{purpose}` and `{desired_outcome}`"

## Stage 2: Structured Outline Creation

### Variables Required:

* `confirmed_topic`: The final approved topic
* `number_of_articles`: Typically 3 for a structured series

### Prompts:

* "Create a structured outline for `{number_of_articles}` posts on `{confirmed_topic}` with clear progression and interconnections"
* "Break down each outline clearly into sections and key messages to deliver, aligned with LinkedIn Blog Article Template sections"

### User Confirmation Gates:

* User must confirm or adjust each individual outline:

  * Outline structure
  * Section headers
  * Key messages per section

## Stage 3: Draft Generation (Aligned with LinkedIn Template)

### Variables Required:

* `post_title`: Confirmed title of each article/post
* `section_outline`: Confirmed section outline and key messages
* `tone_and_style`: Preferred tone (Executive, Informative, Conversational, Professional yet approachable)

### LinkedIn Template Sections:

1. **Vertical Liftoff (Introduction)**

   * Hook
   * Contextual Quote
   * Urgency Statement

2. **Core Analysis Sections**

   * Regulatory/Business Landscape
   * Strategic Challenges & AI Integration
   * Emerging Trends

3. **Key Takeaways**

4. **Strategic Recommendations**

5. **Conclusion & Call-to-Action**

### Prompts:

* "Draft an engaging and coherent introduction following the LinkedIn Template Vertical Liftoff approach"
* "Write detailed content for each Core Analysis Section based on `{section_outline}` in `{tone_and_style}` tone"
* "Clearly present Key Takeaways and actionable Strategic Recommendations"

### User Confirmation Gates:

* Section-by-section content approval
* Strategic alignment checks

## Stage 4: Review & Revision

### Variables Required:

* `draft_content`: Initial content draft
* `feedback_areas`: Areas flagged for improvement or adjustment

### Prompts:

* "Review `{draft_content}` for clarity, strategic alignment, readability, and compliance with LinkedIn Blog Article Template"
* "Apply requested revisions based on `{feedback_areas}` ensuring alignment with `{desired_outcome}`"

### User Confirmation Gates:

* Final content sign-off pre-publication

## Stage 5: Artifact & Image Creation

### Variables Required:

* `core_concepts`: Key themes or metaphors to illustrate visually
* `visual_style`: Preferred style (Corporate, Illustrative, Infographic, Minimalist)

### Prompts:

* "Suggest visual metaphor/artifact ideas to clearly represent `{core_concepts}`"
* "Describe detailed specifications for each visual based on `{visual_style}` and LinkedIn audience preferences"

### User Confirmation Gates:

* Approval of visual ideas
* Approval of final visual descriptions/specifications

## Stage 6: SEO & Metadata Optimization

### Variables Required:

* `keywords`: Relevant SEO keywords or key phrases
* `summary_description`: Short, engaging summary for metadata

### Prompts:

* "Optimize content to effectively include `{keywords}` naturally throughout"
* "Write an engaging, concise meta-description based on `{summary_description}`"

### User Confirmation Gates:

* Approval of keyword integration
* Approval of final meta-description

## Stage 7: Final Packaging & Delivery

### Variables Required:

* `final_content`: Fully reviewed and approved text
* `final_images`: Fully reviewed and approved visuals/artifacts

### Prompts:

* "Combine `{final_content}` and `{final_images}` into a cohesive, professionally formatted deliverable aligned with LinkedIn article standards"
* "Provide final checks for quality, readability, strategic alignment, and LinkedIn Template compliance"

### User Confirmation Gates:

* Final delivery approval

---

This Markdown template can be leveraged directly into your Notion library, repository, or vector store, making it reusable and adaptable for various industries, topics, and content types, ensuring consistent alignment with LinkedIn publishing standards.
