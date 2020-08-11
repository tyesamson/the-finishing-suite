import $$ from '@utilities/selectors';

const MobileNav = function MobileNav() {
  $$.navToggle.addEventListener('click', () => {
    $$.nav.classList.toggle('hidden');
  });

  $$.navItems.forEach(item => {
    item.addEventListener('click', () => {
      $$.nav.classList.add('hidden');
    });
  });
}();

export default MobileNav;
