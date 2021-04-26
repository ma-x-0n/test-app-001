import React from "react";
import { Shell, Tag } from "@carbon/ibm-security";

const ShellComponent = () => (
  <Shell
    header={{
      labels: {
        brand: {
          company: "IBM",
          domain: "Security",
          product: 'Test App',
        },
        notifications: {
          button: "",
          clear: "",
          clear_all: "",
          link: "",
          success: "",
          title: "",
          today: "",
          via: "",
        },
        profile: {
          account: "",
          button: "",
          edit_profile: "",
          link: "",
          registration: "",
          sign_in: "",
          sign_out: "",
        },
      },
      links: {
        edit_profile: "",
        notifications_preferences: "",
        notifications_view_all: "",
        product: "#/navigation",
        profile: "",
        registration: "",
        sign_in: "",
        sign_out: "",
      },
      totalNotifications: 0,
    }}
    profile={{
      description: null,
      image_url: null,
      name: {
        first_name: "",
        surname: "",
      },
    }}
    // HIDDEN BLOCK --ENDS

    renderAddons={[]}
    returnToBanner={null}
    skipToContent={null}
    toolbar={{
      labels: {
        mainNavigation: {
          ariaLabel: "Main navigation",
        },
        menu: {
          button: "Menu button",
          tooltip: "Menu tooltip",
        },
        settings: {
          button: "",
          tooltip: "",
        },
        support: {
          button: "Settings button",
          tooltip: "Settings tooltip",
        },
      },
      menu: [
        {
          id: "#15",
          navigation: [
            {
              children: [
                {
                  children: undefined,
                  href: "ibm-security.carbondesignsystem.com#2",
                  id: "17",
                  title: "Applications",
                },
                {
                  children: undefined,
                  href: "ibm-security.carbondesignsystem.com#27",
                  id: "24",
                  title: "Plugins",
                },
                {
                  children: undefined,
                  href: "ibm-security.carbondesignsystem.com#18",
                  id: "5",
                  title: (
                    <div>
                      Applications<Tag>Beta</Tag>
                    </div>
                  ),
                },
              ],
              href: "ibm-security.carbondesignsystem.com#11",
              id: "28",
              title: "Section 1",
            },
            {
              children: undefined,
              href: "ibm-security.carbondesignsystem.com#17",
              icon:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
              id: "29",
              onClick: function noRefCheck() {},
              title: "Section 2",
            },
            {
              children: undefined,
              href: "ibm-security.carbondesignsystem.com#23",
              icon:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
              id: "12",
              title: "Section 3",
            },
          ],
          title: "My applications",
        },
        {
          id: "#10",
          navigation: [
            {
              children: undefined,
              href: "ibm-security.carbondesignsystem.com#29",
              id: "11",
              title: "Section 4",
            },
            {
              children: undefined,
              href: "ibm-security.carbondesignsystem.com#5",
              icon:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+ICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYgMThINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJ6TTYgNnYxMGgxMFY2em0yMCA2djRoLTR2LTRoNG0wLTJoLTRhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoNGEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMTJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnptLTEwIDJ2NGgtNHYtNGg0bTAtMmgtNGEyIDIgMCAwIDAtMiAydjRhMiAyIDAgMCAwIDIgMmg0YTIgMiAwIDAgMCAyLTJ2LTRhMiAyIDAgMCAwLTItMnoiLz48L3N2Zz4=",
              id: "3",
              title: "Section 5",
            },
            {
              children: undefined,
              href: "ibm-security.carbondesignsystem.com#0",
              id: "22",
              title: "Section 6",
            },
          ],
          title: "",
        },
      ],
      settings: [
        {
          id: "#13",
          navigation: [
            {
              href: "ibm-security.carbondesignsystem.com#14",
              id: "6",
              title: "Account",
            },
            {
              href: "ibm-security.carbondesignsystem.com#1",
              id: "15",
              title: "Permissions",
            },
            {
              href: "ibm-security.carbondesignsystem.com#22",
              id: "10",
              title: "Teams",
            },
          ],
          title: "General settings",
        },
        {
          id: "#7",
          navigation: [
            {
              href: "ibm-security.carbondesignsystem.com#24",
              id: "12",
              title: "Application 1",
            },
          ],
          title: "Application settings",
        },
        {
          id: "#0",
          navigation: [
            {
              href: "https://www.ibm.com",
              id: "19",
              title: "Privacy",
            },
            {
              href: "ibm-security.carbondesignsystem.com#25",
              id: "26",
              title: "Terms",
            },
          ],
          title: "Legal",
        },
      ],
      support: [
        {
          id: "#24",
          navigation: [
            {
              href: "ibm-security.carbondesignsystem.com#22",
              id: "26",
              title: "Documentation",
            },
            {
              content:
                "\n<main>\n  <article>\n    <h1>Example info</h1>\n    <p>You can display information in the panel with HTML.</p>\n    <p>HTML tags you can use:</p>\n    <ul>\n      <li>\n        Ordered and unordered lists\n      </li>\n      <li>\n        Headings\n      </li>\n      <li>\n        Paragraphs\n      </li>\n      <li>\n        Anchors\n      </li>\n    </ul>\n  </article>\n</main>\n",
              href: "ibm-security.carbondesignsystem.com#29",
              id: "14",
              title: "Learn about...",
            },
          ],
          title: "Support",
        },
      ],
    }}
  />
);

export default ShellComponent;
