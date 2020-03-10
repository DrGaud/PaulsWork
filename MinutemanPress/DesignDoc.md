# Minute Man design document

This is where I wil set out the build and design workflow for this site.

## Background
Been given 4 static html sites with associated images. The pages are stacked in the following:

1) index.html

2) Printers-kilmarnock.html

3) formmail.html

### 1) index.html - Home Page and About Page

The 'Home'/logo navigation link is really a banner. This information can be broken out of the image container and set to be a header in its own right.
The link is also synonymous with the 'About Page'. Content wise. there is a banner that is an image. A two-column body, where the text is displayed on the left and a image container on the right. 

Main body:
	
Printers Kilmarnock, Ayrshire
 
"At  Minuteman Press we offer a full range of products for the Kilmarnock, Irvine and Largs areas. We can print anything from a business card to a banner.

There is a talented in house designer so all your ideas can be translated into something that you would be proud to own and send to friends or business associates.

Our most popular products are business cards, letterheads, invitations for weddings and birthdays, orders of service for weddings and funerals, leaflets, menus, etc.

We can print posters from A4 size up to A0 on a variety of paper types. We can print architect's drawings up to A1 same day.

Banner Content:
• Notepads
• Graphic Design
• Booklets
• Forms
• Binding
• Lamination
• Invitations	• Brochures
• Flyers
• Tickets
• Posters & Banners
• Digital Printing
• Postcards
• Labels & Stickers	• Price Lists
• Greeting Cards
• Newsletters
• Promotional Items
• Menus & Tent Cards
• Invoices
• Presentation	• Rubber Stamps
• Stationery
• Business Cards
• Letterheads
• Door Hangers
• Calenders & Diaries
• Catalogues & Reports
+ Much More More


Contact -Find Us at
2-4 Old Mill Road, Kilmarnock, Ayrshire, KA1 3AN.
Google Maps embedded link-currently displayed as an iframe.

### 2) printers-kilmarnock.html - services


**Existing Text**

Printing Services & Products
 		
 Minuteman Press of Kilmarnock is an owner-owned and operated Business-to-Business full-service print, marketing and design company, located at 2 - 4 Old Mill Road in Kilmarnock.

With our state of the art digital printing equipment, professional graphic design, complete Bindery, Poster and Banner equipment, we can offer you the quality and Service that can only come from our years of experience. Our products include brochures, business cards, envelopes, business forms, flyers, invitations, labels, letterheads, newsletters, postcards and presentation folders. We also offer posters and banners custom made to fit our customer’s needs.

We can even help you plan your new marketing strategy with our Every Door Direct Mail program or the perfect complementary promotional products from our fantastic new range, as we now offer a full range of pens, calendars, mouse mats, mugs & magnets.		
The companies, schools, municipalities, churches, organisations and individuals we service are located throughout East Ayrshire including Kilmarnock, Irvine, Cumnock, New Cumnock, Aukinleck, Darvel, Galston, Stewarton, Dunlop, Kilmaurs, Largs, Ardrossan, Saltcoats and Dalry among others.

 Minuteman Press of Kilmarnock is actively involved in our local community. We support local schools, churches, non-profits and sports teams and are active members of the local Business Referral Network.

**Rewritten**

We use state of the art digital printing equipment, professional graphic design, complete Bindery, Poster and Banner equipment. Offering you true quailty and service that can only come from our years of experience.

Our products include brochures, business cards, envelopes, business forms, flyers, invitations, labels, letterheads, newsletters, postcards and presentation folders. We also offer posters and banners custom made to fit our customer’s needs.

We can even help you plan your new marketing strategy with our Every Door Direct Mail program or the perfect complementary promotional products from our fantastic new range, as we now offer a full range of pens, calendars, mouse mats, mugs & magnets.		

We work with everone from companies, schools, municipalities, churches, organisations to individuals.
 
Located in Kilmarnock, we service everone throughout Ayrshire. Including Irvine, Cumnock, New Cumnock, Aukinleck, Darvel, Galston, Stewarton, Dunlop, Kilmaurs, Largs, Ardrossan, Saltcoats and Dalry among others. 

 Minuteman Press of Kilmarnock is actively involved in our local community. We support local schools, churches, non-profits and sports teams and are active members of the local Business Referral Network.



Banner Text: GUARANTEED FAST 48 – 72 HOUR DELIVERY

Banner Content : (from index.html)

### 3) formmail.html - 

(This page is a contact form)

sector : household, business (these are checkboxes)
Area Of Interest : 

-General Enquiry 

-Business Cards 

-Stationery 

-Flyers 

-Folded Leaflets 

-Brochures &amp; Booklets 

-Presentation Folders &amp; Inserts 

-Calenders &amp; Diaries 

-Postcards &amp; Mailing Services 

-Promotional Products 

-Labels &amp; Stickers 

-Catalogues &amp; Reports 

-Cards &amp; Invitations 

-Menus &amp; Tent Cards 

-Posters &amp; Banners 

-Plaques &amp; Awards 

-Binders &amp; Tabs 

-Raffle Tickets 

-Custom Stamps 

-Door Hangers 

-Business Forms 

-Other (Please State Below) 

Text Inputs: 
Full Name - required
Email - required
Telephone - required
Address 
Town
County
Post Code

Message: Textarea
TextArea 
submit button
-End of Form-

Banner ( from index.html)

find us section-


---

# Revised Design Proposal


After looking through the html files I have been given, and taken the content from the pages. i can condense this all down to a single webpage.

- Header -on canvas

- Nav -on canvas

- About-off canvas

- Products -off canvas

- Contact -on canvas


The Header would be broken into its own `div` container. This way i can set actions on the telephone and mail. 

Nav Bar would be set out using the proper structuring. I will replicate the buttons as was on the site on a large desktop, on mobiles I am thinking of a small hamburger menu, where the secondary links would be. 

All the page links would be internal, so the content would be either offcanvas for the mobiles and scaled to fit as the viewport expands outwards. 

I am going to use the banners (there are three of them) as backgrounds, they contain nothing of textual value. I will look to incorporate this into the three sections of the page. 


I wil make each its own section.

I will replicate using HTML and CSS the CTA's and Banners, this would drastically increase the Assecibility and readability of the files.

The design would be kept seperate on a stylesheet. I will use the BEM methdology for the stylesheet. I dont see any complicated issues in the design. 

At this point I would go with using Flexbox for the whole thing. By flexing into containers I can then set the elements to work with the canvas.

The design would be lead -mobile First. This way the larger viewports can then accomodate the off-canvas elements as it expands. 

