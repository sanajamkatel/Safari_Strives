# Safari Strives Website

Website for Safari Strives - Every Person, Every Opportunity. A self-funding social enterprise creating economic independence in Rwanda through microloans, social businesses, and community support.

## Copyright and Design Ownership

**IMPORTANT NOTICE:** All design elements, layouts, visual concepts, and the overall design process of this website are the exclusive property of Safari Strives. The design, including but not limited to color schemes, typography, component structures, animations, and user interface patterns, may not be copied, reproduced, or used without explicit written permission. This repository is provided for reference purposes only.

## Technologies Stack

- **React 18.2.0** - UI framework
- **React Router DOM 6.8.0** - Client-side routing
- **Framer Motion 10.16.0** - Animation library
- **React Scripts 5.0.1** - Build tooling
- **CSS3** - Styling with custom properties and responsive design
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Reem Kufi)

## Features

- **Modern React Architecture**: Built with React 18, React Router, and Framer Motion for smooth animations
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Interactive Navigation**: Dropdown menu for About section with core initiatives
- **Animated Components**: Smooth page transitions and scroll-triggered animations
- **Contact Forms**: Interactive contact form for inquiries and involvement
- **Team Showcase**: Dedicated team page with member profiles
- **Search Functionality**: Built-in site-wide search
- **Video Integration**: YouTube video modal for launch video

## Core Initiatives

### Development & Humanitarian Work
1. **Zero-Percent Microloans** - Empowering women entrepreneurs without debt burden
2. **Bathrooms & Hygiene Access** - Modern facilities and monthly dignity kits
3. **Medical & Sanitation Support** - Healthcare access and supplies
4. **Weekly Meals Initiative** - Nutritious meals for children and families

### Social Enterprise
1. **Safari Chicken Farm** - Self-funding egg production enterprise
2. **Safari Permaculture Farm** - Sustainable farming and training
3. **Safari TechStyle Hub** - Tailoring and skills training center

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/safari-strive.git
   cd safari-strive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.


## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component with dropdown
│   ├── Navbar.css         # Navigation styles
│   ├── Footer.js          # Footer component
│   ├── Footer.css         # Footer styles
│   ├── HeroSlideshow.js   # Hero slideshow component
│   ├── HeroSlideshow.css  # Hero slideshow styles
│   ├── Search.js          # Search component
│   ├── Search.css         # Search styles
│   ├── LaunchVideoModal.js # Video modal component
│   ├── Logo.js            # Logo component
│   └── Logo.css           # Logo styles
├── pages/
│   ├── Home.js            # Homepage component
│   ├── Home.css           # Homepage styles
│   ├── About.js           # About page
│   ├── About.css          # About page styles
│   ├── Services.js        # Services page
│   ├── Services.css       # Services page styles
│   ├── Microloans.js      # Microloans initiative page
│   ├── Sanitary.js        # Women's Sanitation initiative page
│   ├── WeeklyMeals.js     # Weekly Meals initiative page
│   ├── MedicalSupport.js  # Medical Support page
│   ├── ChickenInitiative.js # Safari Chicken Farm page
│   ├── TechHub.js         # TechStyle Hub page
│   ├── Team.js            # Team page
│   ├── Team.css           # Team page styles
│   ├── Contact.js         # Contact page
│   ├── Contact.css        # Contact page styles
│   └── InitiativePage.css # Shared styles for initiative pages
├── assets/                # Image assets
├── App.js                 # Main app component
├── App.css                # Global styles
├── index.js               # App entry point
└── index.css              # Base styles
```

## Design Features

- **Color Scheme**: Brand greens (#526e58 & #92b24c), dark text (#2c3e50), clean whites and grays
- **Typography**: Reem Kufi font family for clean, modern text
- **Animations**: Page transitions, hover effects, scroll-triggered animations
- **Layout**: Grid-based responsive layouts with mobile-first approach
- **Icons**: Font Awesome icons for consistent visual language

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deployment Options

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use gh-pages package
- **Traditional hosting**: Upload build folder contents

## Customization

### Adding New Pages

1. Create component in `src/pages/`
2. Add route in `App.js`
3. Update navigation in `Navbar.js`
4. Add styles following existing patterns

### Updating Content

- **Team members**: Edit the `teamMembers` array in `Team.js`
- **Contact info**: Update details in `Contact.js` and `Footer.js`
- **Initiative content**: Modify individual initiative page components

### Animation Customization

Animations are powered by Framer Motion. Modify animation properties in component files:

```javascript
// Example animation
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

For questions about the website or Safari Strives:

- **Email**: contact@safaristrives.org
- **US Phone**: +1 (716) 682-2683
- **Rwanda Phone**: (+25) 0785191825
- **Address**: 4922 134th st, Crestwood IL

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Community feedback and testing
- Open source libraries and tools that made this possible

---

**Safari Strives** - Every Person, Every Opportunity. Creating lasting change through sustainable community development and empowerment in Rwanda.
