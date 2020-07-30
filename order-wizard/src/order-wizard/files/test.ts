<%# This will no apper in the generated output %>
// This will appear in the generated output

const unescaped = '<%= "<" %>';
const escaped = '<%- "<" %>';

// const conditionalTest = true;
<% if(true) { %>const conditionalTest = true; <%} %>
<% if(false) { %>const conditionalTest = false; <%} %>
