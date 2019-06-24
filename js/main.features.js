const htmlElements = {
  output: document.querySelector('main > .features > .feature-list')
};

const featuresArray = [
  {
    iconSrc: '1.png',
    title: 'Appointment',
    text:
      'Appointment with Datepicker allow you to collect all the information about your audience. Get closer to customers and discover who are they..'
  },
  {
    iconSrc: '2.png',
    title: 'Pricing tables',
    text:
      'Outline your pricing policy with the help of tables. Customers will see the features of each pricing plan and compare them all with ease.'
  },
  {
    iconSrc: '3.png',
    title: 'Parallax',
    text:
      'Feeling of true immersion, an illusion of depth in 2D environments of your site. It will definitely make users experience better and make the them come back.'
  },
  {
    iconSrc: '4.png',
    title: 'Slider',
    text:
      'Great thing in terms of presenting important information. Place the slides with promos, new products, etc. Customization options is a perfect attention grabber.'
  },
  {
    iconSrc: '5.png',
    title: 'Mega menu',
    text:
      'Powerful tool for creating a better look and professional navigation easily without technical knowledge. It allows to organize your categories, subcategories easily with different content showing-off.'
  },
  {
    iconSrc: '6.png',
    title: 'Google map',
    text:
      'Show the whereabouts of your company using this interactive tool. It will help your clients find out the shortest route to your location in no time.'
  },
  {
    iconSrc: '7.png',
    title: 'Google fonts',
    text:
      "Your site won't be boring style on the web. Having a decent library of fonts that are easy to implement Google creates a look for every site."
  },
  {
    iconSrc: '8.png',
    title: 'Theme color switcher',
    text:
      'Change the palette of your site interface with only one click. This customization tool will let you keep your site inline with your corporate identity.'
  },
  {
    iconSrc: '9.png',
    title: 'Advanced search',
    text:
      'A brief and functional search form allows visitors to find any products in just seconds. Our templates include this feature right from the package.'
  },
  {
    iconSrc: '10.png',
    title: 'Contact form',
    text:
      'By means of this built-in web form, customers can easily get in touch with you. inquire more information about your services and give their feedback.'
  },
  {
    iconSrc: '11.png',
    title: 'Newsletter subscription',
    text: 'Easily subscribe your visitors to your newsletter.'
  },
  {
    iconSrc: '12.png',
    title: 'Social login',
    text:
      'Let your customers log-in using their Facebook or Google account details in a neat dropdown.'
  },
  {
    iconSrc: '13.png',
    title: 'UI Elements',
    text:
      'Easily add any type of content to your site with lots of Ul elements from lists, block quotes and accordions to pricing tables, progress bars and counters.'
  },
  {
    iconSrc: '14.png',
    title: 'Valid semantic coding',
    text:
      'Owing to the valid, semantic code your site will have better SEO ratings, impress your visitors with faster page loading speeds and get more flexible.'
  },
  {
    iconSrc: '15.png',
    title: 'Online chat',
    text:
      'Online chat allows you to communicate with customers and visitors and answer them immediately in real time. It is extremely useful for online stores.'
  },
  {
    iconSrc: '16.png',
    title: 'Portfolio',
    text:
      'Showcase your works in the best possible way with the help of Portfolio. Add your photos, projects or products you want to share with the visitors.'
  }
];

function Features() {}

Features.prototype.init = function() {
  featuresArray
    .map(el => {
      const feature = document.createElement('div');
      feature.classList.add('feature');

      const icon = document.createElement('icon');
      icon.classList.add('icon');
      const iconImage = document.createElement('img');
      iconImage.src = `assets/icons/${el.iconSrc}`;
      icon.appendChild(iconImage);

      const title = document.createElement('div');
      title.textContent = el.title;
      title.classList.add('title');

      const text = document.createElement('div');
      text.textContent = el.text;
      text.classList.add('text');

      feature.appendChild(icon);
      feature.appendChild(title);
      feature.appendChild(text);

      return feature;
    })
    .forEach(el => {
      htmlElements.output.appendChild(el);
    });
};

export { Features };
