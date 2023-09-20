import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'panels-cmp',
    templateUrl: 'panels.component.html'
})

export class PanelsComponent implements OnInit {
    ngOnInit() {
        $('[data-toggle="collapse-hover"]').each(function () {
            var thisdiv = $(this).attr("data-target");
            $(thisdiv).addClass("collapsed");
            $(thisdiv).ariaExpanded = false;
            $(this).addClass("collapsed")
            $(this).ariaExpanded = false;
            $(thisdiv).css({
                'transition': 'all 0.3s linear 0s'
            });
        });

        $('[data-toggle="collapse-hover"]').hover(function () {
            var thisdiv = $(this).attr("data-target");
            if (!$(this).hasClass('state-open') && $(this).hasClass('collapsed')) {
                $(this).ariaExpanded = true
                $(thisdiv).addClass('in');
                $(thisdiv).ariaExpanded = true;
                $(this).removeClass('collapsed');
                $(thisdiv).css({
                    'height': '30px',
                    'overflow': 'hidden',
                    'transition': 'all 0.3s linear 0s'
                });
            }

        },
            function () {
                var thisdiv = $(this).attr("data-target");
                if (!$(this).hasClass('state-open') && !$(this).hasClass('collapsed')) {
                    $(thisdiv).removeClass('in');
                    $(thisdiv).ariaExpanded = false;

                    $(this).addClass('collapsed');
                    $(this).ariaExpanded = false;
                    $(thisdiv).css({
                        'height': '0px',
                        'transition': 'all 0.3s linear 0s'
                    });
                }
            }).click(function (event) {
                event.preventDefault();
                var thisdiv = $(this).attr("data-target");
                var height = $(thisdiv).children('.panel-body').height();

                if ($(this).hasClass('state-open') && !$(this).hasClass('collapsed')) {
                    $(this).addClass('collapsed');
                    $(this).removeClass('state-open');
                    $(thisdiv).css({
                        'height': '0px',
                        'transition': 'all 0.3s linear 0s'
                    });
                } else {
                    $(thisdiv).ariaExpanded = true;
                    $(thisdiv).addClass('in');
                    $(this).ariaExpanded = true;
                    $(this).removeClass('collapsed');
                    $(this).addClass('state-open');
                    $(thisdiv).css({
                        'height': height + 30,
                        'transition': 'all 0.3s linear 0s'
                    });
                }
            });
    }
}
