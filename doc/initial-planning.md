Kyle and Sally are starting a skincare spa, they want a simple static site that includes a booking feature

Site they want to model: [Comfort Day Spa Brea](https://www.comfortdayspabrea.com/) and [hannok beauty](https://HANOKKBEAUTY.COM)

I think we could improve on the design of this. Here are some other site examples:
- https://hughspa.com/
- https://desuar.com/
- http://awespawellness.com/
## Coding
Id like avoid using a site builder like Wix or Squarespace because of the cost and limitations, these builders are primarily tools for non-coders.

Instead I'd like to build the site starting with some free template that we can customize, this is a great list of resources for that 
[Brad Traversey Design Resources](https://github.com/bradtraversy/design-resources-for-developers#html--css-templates)

## Hosting
Github pages is free and seems like the simplest way to host a static site. It can even be done with a private repo. Once configured in the github repo settings, its extremely easy to make changes to the site. This is a very simple script ive been using to do deploys for my moda labs vue application:
```sh
#!/usr/bin/env sh

set -e

npm run build

cd dist
echo 'labs.modadisplay.art' > CNAME

git init
git add -A
git commit -m "New Deployment"
git push -f git@github.com:jkurtz678/moda-labs.git master:gh-pages
cd -
```

As shown in the script, github pages works with custom domains also. The client should be asked if they have a domain in mind, and if they want to manage the domain or have us do it.

## Booking feature
UPDATE: turns out they dont need this right away, they care more about SEO

Ideally the site will link to some 3rd part service that handles the booking feature. Would be cool to embed it in the site but might not be worth the trouble

Some options I found for booking software (there are sooo many of these out there)
- [Setmore](https://www.setmore.com/)
- [Calendly](https://calendly.com/)
- [Square appointments](https://squareup.com/us/en/appointments)

Will need to research more to make a good choice. Whether or not we want to accept online payments is a factor.

## SEO
- create a sitemap
