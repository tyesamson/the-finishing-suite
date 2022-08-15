import $$ from '@utilities/selectors';

const MobileNav = function MobileNav() {
  $$.navToggle?.addEventListener('click', () => {
    $$.nav.classList.toggle('in');
  });

  $$.navItems.forEach(item => {
    item.addEventListener('click', () => {
      $$.nav.classList.remove('in');
    });
  });
}();

export default MobileNav;
