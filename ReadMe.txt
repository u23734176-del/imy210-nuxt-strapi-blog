Testing 
users :

Username : Milkey 
password : Testing
email address : mike@chigeza.com 


 I Needed  an .env file , in order for the Nuxt to be able to find the APi at deployment 
.env file =  plain text configuration file used to define environment-specific variables, 
such as API keys, 
database credentials, and application settings, in key-value pairs.
# Don't upload the .env to Github at all. 

Always check: 

1. Is Strapi running?
   http://localhost:1337

2. Does the API work in the browser?
   http://localhost:1337/api/blogs?populate=*

3. Did you enable Public permissions?
   Settings → Users & Permissions Plugin → Roles → Public
   Blog: find, findOne
   Author: find, findOne
   Category: find, findOne

4. Did you publish your blog posts?

5. Are you using the correct field names?
   post.Title
   post.Abstract
   post.Content
   post.author.Name
   post.category.Name




Nuxt Front end Structure :

/App 
	/App.vue	
		/components = reusable interface compononets 
		/Composables = a reusable function that uses Vue's Composition API to encapsulate and share stateful logic across your application
		/Pages
			/Blog
		/Plugins
/Server
	/

	

