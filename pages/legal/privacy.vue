<script setup>
useSeoMeta({
  title: 'Privacy - TangledWires',
  ogTitle: 'Privacy - TangledWires',
  twitterTitle: 'Privacy - TangledWires',
});
</script>

<template>
  <div>
    <p style="font-size: 35px">Privacy Policy</p>
    <br>
    <p>This website uses Plausible Analytics to collect data about its users. No personal information is collected, and no cookies are set. All data collected is completely anonymised, and is not used to track you across sites.</p>
    <br>
    <p class="text-xl">Data collected by Plausible Analytics:</p>
    <br>
    <table>
      <thead>
        <tr>
          <th scope="col">Data Point</th>
          <th scope="col">Example</th>
          <th scope="col">Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Page URL</td>
          <td>https://tangledwires.xyz/projects/meteor</td>
          <td>The hostname and path are collected. Query parameters are discarded, except for these special query parameters: <code>ref=</code>, <code>source=</code>, <code>utm_source=</code>, <code>utm_medium=</code>, <code>utm_campaign=</code>, <code>utm_content=</code> and <code>utm_term=</code>.</td>
        </tr>
        <tr>
          <td>HTTP Referer</td>
          <td>https://google.com</td>
          <td>We use this to see how you got to the site.</td>
        </tr>
        <tr>
          <td>Browser</td>
          <td>Chrome 86.0</td>
          <td>The brand and version of your browser are collected. This is derived from the User-Agent HTTP header. The full User-Agent is discarded.</td>
        </tr>
        <tr>
          <td>Operating system</td>
          <td>macOS 10.15</td>
          <td>The brand and version of your operating system are collected. This is derived from the User-Agent HTTP header. The full User-Agent is discarded.</td>
        </tr>
        <tr>
          <td>Device type</td>
          <td>Desktop</td>
          <td>This will either be "Desktop", "Mobile", or "Tablet"</td>
        </tr>
        <tr>
          <td>Country, region, city</td>
          <td>United Kingdom, England, London</td>
          <td>We look up the visitor’s location using their IP address. We do not track anything more granular than the city level.</td>
        </tr>
      </tbody>
    </table>
    <br>
    <p>All data collected is publicly available at <a href="https://analytics.tangledwires.xyz/tangledwires.xyz">https://analytics.tangledwires.xyz/tangledwires.xyz</a></p>
  </div>
</template>