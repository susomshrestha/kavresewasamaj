Kavre Sewa Samaj
================

This project is a blog-style website for **Kavre Sewa Samaj** built with **React** for the frontend and **Sanity** for the backend. The platform allows the organization to manage content like blog posts, members, introduction, about us, and contact details dynamically through a simple CMS interface provided by Sanity.

Features
--------

-   **Frontend:**
    -   Built with React.
    -   Styled using Tailwind CSS for a modern, responsive design.
-   **Backend:**
    -   Sanity CMS for managing and updating content easily.
    -   Admin/Editor can add/edit blog posts, members, and organizational details (Introduction, About Us, Contact Information).

Technologies Used
-----------------

-   **Frontend:** React, Tailwind CSS
-   **Backend:** Sanity CMS
-   **Others:** Typescript (React), Sanity Studio for content management.

Installation
------------

### Prerequisites

Ensure you have the following installed:

-   Node.js (v16 or higher)
-   npm (or yarn)

### Steps

1.  Clone the repository:

    ```git clone git@github.com:susomshrestha/kavresewasamaj.git```

2.  Install dependencies:

    ```
    cd front-kavresewasamaj
    npm install
    ```
    ```
    cd ../studio-kavresewasamaj or cd studio-kavresewasamaj
    npm install
    ```

3.  Set up environment variables:

    -   Create a `.env` file in the studio-kavresewasamaj.
    -   Add the required Sanity API credentials:

        ```
        SANITY_STUDIO_PROJECT_ID=projectId
        SANITY_STUDIO_DATASET=dataset
        SANITY_STUDIO_STUDIO_HOST=studioHost
        ```

4.  Run the development server:

    `npm run dev`

    The site will be available at `http://localhost:5173`.

Usage
-----

Once the site is live, authorized users can:

-   Log in to the Sanity Studio (typically hosted separately).
-   Manage content, including blog posts, members, introduction, about us, and contact details.
-   All content will be reflected dynamically on the frontend of the site.
