/**
 * sticky-nav.js
 *
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *
 */

jQuery(document).ready(function ($) {
    var $siteNavigation =$("#site-navigation");
    var $filter = $('.main-navigation');
    var $filterSpacer = $('<div />', {
        "class": "filter-drop-spacer",
        "height": $filter.outerHeight()
    });


    if ($filter.size() && !$siteNavigation.hasClass("toggled")) {
        $(window).scroll(function () {
            if (!$filter.hasClass('fix') && $(window).scrollTop() > $filter.offset().top) {
                $filter.before($filterSpacer);
                $filter.addClass("fix");
            }
            else if ($filter.hasClass('fix') && $(window).scrollTop() < $filterSpacer.offset().top) {
                $filter.removeClass("fix");
                $filterSpacer.remove();
            }
        });
    }

});