

let effects = ['fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInUp'];
var waypoint = new Waypoint({
    element: document.getElementById('imageGallery'),
    handler: function() {
        let firstEffect = effects[1];
        let secondEffect = effects[2];
        $('.fil').addClass(firstEffect);
        $('.fir').addClass(secondEffect);
        setTimeout(()=>{
            $('.fil').removeClass(firstEffect);
            $('.fir').removeClass(secondEffect);
        },2000);
    }
});


var waypoint = new Waypoint({

    element:document.getElementById('aboutID'),
    handler: function(direction) {
        var className = "";
        console.log(direction);
        if(direction.toString() === 'down'){
            $('.aboutL').addClass('fadeInLeft');
            className = 'fadeInLeft';
        }

        else if(direction.toString() === 'up'){
            $('.aboutL').addClass('fadeInRight');
            className = 'fadeInRight';
        }

        console.log(className);
        setTimeout(()=> {
            $('.aboutL').removeClass(className);
        },2000);
    }
});



var waypoint = new Waypoint({
    element:document.getElementById('LecturesID'),
    handler: function(direction) {
        var classNameL = "";
        var classNameR = "";
        console.log(direction);
        if(direction.toString() === 'down'){
            $('.LecturesCL').addClass('fadeInLeft');
            $('.LecturesCR').addClass('fadeInRight');
            classNameL = 'fadeInLeft';
            classNameR = 'fadeInRight';
        }


        else if(direction.toString() === 'up'){
            $('.LecturesCL').addClass('fadeInRight');
            $('.LecturesCR').addClass('fadeInLeft');
            classNameL = 'fadeInRight';
            classNameR = 'fadeInLeft';
        }

        console.log(className);
        setTimeout(()=> {
            $('.LecturesCL').removeClass(classNameL);
            $('.LecturesCR').removeClass(classNameR);
        },2000);
    }
});



var waypoint = new Waypoint({
    element:document.getElementById('eventID'),
    handler: function(direction) {
        var className = "";
        console.log(direction);
        if(direction.toString() === 'down'){
            $('.eventC').addClass('fadeInLeft');
            className = 'fadeInLeft';
        }

        else if(direction.toString() === 'up'){
            $('.eventC').addClass('fadeInRight');
            className = 'fadeInRight';
        }

        console.log(className);
        setTimeout(()=> {
            console.log()
            $('.eventC').removeClass(className);
        },2000);
    },
    offset: function() {
        return Waypoint.viewportHeight() - this.element.clientHeight
    }
});



/*
var continuousElements = document.getElementsByClassName('row');
for (var i = 0; i < continuousElements.length; i++) {
    console.log(continuousElements[i]);
    new Waypoint({
        element: continuousElements[i],
        handler: function() {
            notify(this.element.innerHTML + ' hit')
        }
    })
}
*/
