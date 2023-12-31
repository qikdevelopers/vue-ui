
import { reactive } from 'vue'

export default function() {

    var service = reactive({
        mounted:false,
        screen: {
            width: 1024,
            height: 768,
        },
        limits: {
            xs: 600,
            sm: 960,
            md: 1264,
            lg: 1904,
        },
        breakpoint: {
            mobile: false,
            tablet: false,
            desktop: false,
            xs: false,
            sm: false,
            md: false,
            lg: false,
            xl: false,
            xsOnly: false,
            smOnly: false,
            smAndDown: false,
            smAndUp: false,
            mdOnly: false,
            mdAndDown: false,
            mdAndUp: false,
            lgOnly: false,
            lgAndDown: false,
            lgAndUp: false,
            xlOnly: false,
            point: 0,
        },
    });

    ////////////////////////////////

    var mounted;
    let WindowReference;

    ////////////////////////////////

    service.resize = function() {

        var width = Math.max(WindowReference.innerWidth || 0);
        var height = Math.max(WindowReference.innerHeight || 0);

        service.screen = {
            width,
            height,
        }

        ///////////////////////////////////////////

        var breakpoint = {
            mobile: false,
            tablet: false,
            desktop: false,
            xs: false,
            sm: false,
            md: false,
            lg: false,
            xl: false,
            xsOnly: false,
            smOnly: false,
            smAndDown: false,
            smAndUp: false,
            mdOnly: false,
            mdAndDown: false,
            mdAndUp: false,
            lgOnly: false,
            lgAndDown: false,
            lgAndUp: false,
            xlOnly: false,
            point: 0,
        }

        ///////////////////////////////////////////

        var point = 0;

        if (width > service.limits.xs) {
            point++;
        }

        if (width > service.limits.sm) {
            point++;
        }

        if (width > service.limits.md) {
            point++;
        }

        if (width > service.limits.lg) {
            point++;
        }

        ///////////////////////////////////////////

        //XS Mobile
        if (point < 1) {
            breakpoint.mobile = true;
            breakpoint.xs = true;
            breakpoint.xsOnly = true;

            //Down
            breakpoint.smAndDown = true;
            breakpoint.mdAndDown = true;
            breakpoint.lgAndDown = true;

        }

        //SM Tablet
        if (point == 1) {
            breakpoint.tablet = true;
            breakpoint.sm = true;
            breakpoint.smOnly = true;

            //Down
            breakpoint.smAndDown = true;
            breakpoint.mdAndDown = true;
            breakpoint.lgAndDown = true;

            //Up
            breakpoint.smAndUp = true;
        }

        //MD Tablet
        if (point == 2) {
            breakpoint.desktop = true;
            breakpoint.md = true;
            breakpoint.mdOnly = true;
            //Down
            breakpoint.mdAndDown = true;
            breakpoint.lgAndDown = true;

            //Up
            breakpoint.smAndUp = true;
            breakpoint.mdAndUp = true;
        }

        //LG Desktop
        if (point == 3) {
            breakpoint.desktop = true;
            breakpoint.lg = true;
            breakpoint.lgOnly = true;
            //Down
            breakpoint.lgAndDown = true;

            //Up
            breakpoint.smAndUp = true;
            breakpoint.mdAndUp = true;
            breakpoint.lgAndUp = true;
        }

        //XL Desktop
        if (point > 3) {
            breakpoint.desktop = true;
            breakpoint.xl = true;
            breakpoint.xlOnly = true;
            //Up
             breakpoint.smAndUp = true;
            breakpoint.mdAndUp = true;
            breakpoint.lgAndUp = true;
        }


        service.point = point;
        service.breakpoint = breakpoint;

    }


    ////////////////////////////////

    service.mount = function(window) {
        if (mounted) {
            return;
        }

        WindowReference = window;
        service.resize();
        mounted = true;
        service.mounted = true;
        WindowReference.addEventListener('resize', service.resize);
    }


    ////////////////////////////////

    service.unmount = function() {
        WindowReference.removeEventListener('resize', service.resize);
        WindowReference = false;
        mounted = false;
        service.mounted = false;
    }

    ////////////////////////////////

    return service;

}
