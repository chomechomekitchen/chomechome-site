# Google Forms build spec (launch)

Use this document when creating the two live forms in the business Google account. Cursor and this repo **cannot** create Google Forms without browser access to that account or Google API credentials. After each form is published, copy its **live response URL** and apply it to the site (see checklist at the end).

---

## Food order form

### Form title

Chome Chome South Sudanese Kitchen Order Form

### Form description (intro)

Thank you for your interest in Chome Chome South Sudanese Kitchen. Please complete this form to place your food order request. After submitting, you will receive follow-up confirmation based on availability. Payment instructions will be provided on the website payment page.

### Structure

- **One section** for launch (no branching). Optional: use bold text labels to group questions mentally (Customer / Order / Menu / Catering / Confirmation).

### Email setting

- **Collect email addresses:** Off  
- Keep **Question 3** (Email address) as a required short-answer field so respondents who are not signed into Google can still submit.

### Questions

**Customer information**

1. **Full name** — Short answer — Required: Yes  
2. **Phone number** — Short answer — Required: Yes  
3. **Email address** — Short answer — Required: Yes  
4. **Preferred contact method** — Multiple choice — Required: Yes  
   - Phone call  
   - Text message  
   - Email  

**Order details**

5. **What type of order is this?** — Multiple choice — Required: Yes  
   - Personal order  
   - Family meal  
   - Catering request  
   - Special event order  

6. **Preferred fulfillment method** — Multiple choice — Required: Yes  
   - Pickup  
   - Delivery  

7. **Preferred order date** — Date — Required: Yes  

8. **Preferred pickup or delivery time window** — Multiple choice — Required: Yes  
   - 10:00 AM – 12:00 PM  
   - 12:00 PM – 2:00 PM  
   - 2:00 PM – 4:00 PM  
   - 4:00 PM – 6:00 PM  
   - Other  

9. **If you selected "Other," please describe your preferred time** — Short answer — Required: No  
   - Helper text suggestion: "Only if you chose Other above."

10. **Delivery address** — Paragraph — Required: Yes  
    - If you do not use branching: add to the question text, "If pickup, write N/A."

**Menu selection**

11. **Which items would you like to order?** — Checkboxes — Required: Yes  
    - Kisra and Mullah  
    - Plantain and Peanut Sauce  
    - Ful Medames  
    - Tamia  
    - Lentil Stew with Dama Salad  
    - Hibiscus Tea  
    - Tamarind Juice  
    - Fresh Ginger Juice  

12. **Please list quantity for each item selected** — Paragraph — Required: Yes  
    - Helper text: Example: Kisra and Mullah x2, Hibiscus Tea x3  

13. **Are there any dietary restrictions, allergies, or ingredient concerns?** — Paragraph — Required: No  

14. **Special instructions for your order** — Paragraph — Required: No  
    - Examples: Less spice, extra napkins, call on arrival  

**Catering and large orders**

15. **If this is a catering or event order, how many people are you ordering for?** — Short answer — Required: No  

16. **If this is a catering or event order, please describe the event** — Paragraph — Required: No  
    - Examples: Birthday, office lunch, community event, family gathering  

**Confirmation**

17. **Have you reviewed your order for accuracy?** — Multiple choice — Required: Yes  
    - Yes  
    - No  

18. **I understand that my order is a request and will be confirmed based on availability.**  
    - Use a format Google Forms supports well: either **Checkboxes** with one required option ("I understand") or **Multiple choice** Yes/No with required Yes.  

19. **I understand that payment instructions are provided separately and that submitting this form does not guarantee confirmation until I receive follow-up.**  
    - Same as 18: checkbox agreement or Yes/No, required.  

20. **Anything else you would like us to know?** — Paragraph — Required: No  

### Recommended settings (food)

| Setting | Value |
|--------|--------|
| Collect email addresses | Off |
| Limit to 1 response | Off |
| Edit after submit | Off |
| Send respondents a copy | Optional |
| See summary charts / text responses (for respondents) | Off |

### Confirmation message (food)

Thank you for submitting your Chome Chome order request. We will review your request and follow up using your preferred contact method. Please complete payment only after following the instructions provided on our website.

---

## Cleaning service request form

### Form title

Healing Hands Cleaning Service Request Form

### Form description (intro)

Thank you for your interest in Healing Hands Cleaning. Please complete this form to request cleaning services. After submitting, we will review your request and follow up to confirm availability, pricing, and scheduling.

### Structure

- **One section** for launch (no branching).

### Email setting

- **Collect email addresses:** Off  
- Keep **Question 3** (Email address) required as specified.

### Questions

**Customer information**

1. **Full name** — Short answer — Required: Yes  
2. **Phone number** — Short answer — Required: Yes  
3. **Email address** — Short answer — Required: Yes  
4. **Preferred contact method** — Multiple choice — Required: Yes  
   - Phone call  
   - Text message  
   - Email  

**Service details**

5. **What type of service are you requesting?** — Checkboxes — Required: Yes  
   - Residential cleaning  
   - Deep cleaning  
   - Move-in cleaning  
   - Move-out cleaning  
   - Office or commercial cleaning  
   - Event cleaning  
   - Organization support  
   - Other  

6. **If you selected "Other," please describe the service needed** — Paragraph — Required: No  
   - Helper text: "Only if you selected Other above."

7. **What type of property or space needs service?** — Multiple choice — Required: Yes  
   - Apartment  
   - House  
   - Office  
   - Commercial space  
   - Event venue  
   - Other  

8. **Service address** — Paragraph — Required: Yes  

9. **Preferred service date** — Date — Required: Yes  

10. **Preferred time window** — Multiple choice — Required: Yes  
    - 8:00 AM – 10:00 AM  
    - 10:00 AM – 12:00 PM  
    - 12:00 PM – 2:00 PM  
    - 2:00 PM – 4:00 PM  
    - 4:00 PM – 6:00 PM  
    - Other  

11. **If you selected "Other," please describe your preferred time** — Short answer — Required: No  
    - Helper text: "Only if you selected Other above."

**Scope of work**

12. **How often do you need cleaning services?** — Multiple choice — Required: Yes  
    - One-time service  
    - Weekly  
    - Biweekly  
    - Monthly  
    - Not sure yet  

13. **How many bedrooms?** — Short answer — Required: No  

14. **How many bathrooms?** — Short answer — Required: No  

15. **Approximate size of the space** — Short answer — Required: No  
    - Helper text: You can enter square footage or a short description.

16. **Please describe what areas or tasks you want included** — Paragraph — Required: Yes  
    - Examples: Kitchen, bathrooms, floors, dusting, organizing closet, post-event cleanup  

17. **Are there any special conditions we should know about?** — Paragraph — Required: No  
    - Examples: Pets, stairs, fragrance sensitivity, delicate surfaces, access instructions  

**Confirmation**

18. **Have you reviewed your request for accuracy?** — Multiple choice — Required: Yes  
    - Yes  
    - No  

19. **I understand that this is a service request and that my booking is not confirmed until I receive follow-up confirmation.** — Checkbox — Required: Yes  
    - Single option: I understand and agree  

20. **Anything else you would like us to know?** — Paragraph — Required: No  

### Recommended settings (cleaning)

| Setting | Value |
|--------|--------|
| Collect email addresses | Off |
| Limit to 1 response | Off |
| Edit after submit | Off |
| Send respondents a copy | Optional |

### Confirmation message (cleaning)

Thank you for submitting your Healing Hands Cleaning service request. We will review your request and follow up using your preferred contact method to confirm availability, pricing, and scheduling.

---

## After creating each form, copy the live URL and return it for site patching

- [ ] Food form: publish and copy the shareable link (responses URL).  
- [ ] Cleaning form: publish and copy the shareable link.  
- [ ] In the repo, replace placeholders (or ask Cursor to patch):  
  - `food.html`: `https://REPLACE_ORDER_FORM.invalid` and search key `REPLACE_ORDER_FORM`  
  - `cleaning.html`: `https://REPLACE_CLEANING_FORM.invalid` and `REPLACE_CLEANING_FORM`  
- [ ] Add real values to `contact.html` and `pay.html` when ready.  
- [ ] Commit and push site changes.

### Site placeholder strings (current)

| File | Placeholder |
|------|----------------|
| food.html | `https://REPLACE_ORDER_FORM.invalid`, README key `[ORDER_FORM_LINK]` |
| cleaning.html | `https://REPLACE_CLEANING_FORM.invalid`, `[CLEANING_FORM_LINK]` |
| contact.html | `[BUSINESS_PHONE]`, `[BUSINESS_EMAIL]`, `[SERVICE_AREA]`, `[BUSINESS_HOURS]` |
| pay.html | `[CASH_APP_HANDLE]` |

Do not invent URLs or business data. Use only live values supplied by the operator.
