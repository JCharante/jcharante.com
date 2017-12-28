<template>
    <q-layout ref="layout" view="lHh LpR lfr" :left-class="{'bg-grey-2': true}" :right-breakpoint="200">
        <q-toolbar slot="header">
            <q-btn flat @click="$router.go(-1)">
                <q-icon name="arrow_back"/>
            </q-btn>

            <q-toolbar-title>
                Installing YOLO on Ubuntu 17.10
                <div slot="subtitle">After Action Reports</div>
            </q-toolbar-title>

            <q-btn flat @click="$refs.layout.toggleRight()">
                <q-icon name="list"/>
            </q-btn>
        </q-toolbar>

        <drawer slot="left"/>

        <div class="layout-padding row" style="max-width: 100%; width: 850px;">
            <div class="col">
                <div>
                    <h4>Installing YOLO on Ubuntu 17.10</h4>
                    <p>
                        <small>Published Wed Dec 27 '17</small>
                    </p>
                </div>
                <div class="container" v-scroll-spy="scrollPos">
                    <div>
                        <h3>What is YOLO?</h3>
                        <p>
                            I saw
                            <a href="https://pjreddie.com/darknet/yolo/">YOLO (You Only Look Once)</a>
                            on the front page of Hacker News a few months
                            ago, but I never tried to run it for myself until today. I've seen it implemented on a few
                            projects which I unfortunately can't remember at the moment.
                        </p>
                        <img class="responsive"
                             src="https://static.jcharante.com/aar/yolo/Screenshot+from+2017-12-27+23-05-58.png"/>
                        <p class="caption text-center">(Queried in Incognito) I didn't expect it to be #2</p>
                        <p>
                            Below is the demo that they feature on its page. It's pretty good coming from someone who
                            has no previous experience or background knowledge to assess its performance on!
                        </p>
                        <q-video
                            src="https://www.youtube.com/embed/VOC3huqHrss?rel=0"
                            style="max-width: 100%; width: 850px; height: 480px"
                        />
                    </div>
                    <div>
                        <h3>Installing</h3>
                        <p>
                            The reason why I'm writing this is because installing YOLO wasn't 100% smooth sailing.
                            Luckily the problems only set in when we're trying to get it to work with CUDA.
                        </p>
                        <p>
                            First we clone and build darknet
                        </p>
                        <pre>
                            <code>{{ code[0] }}</code>
                        </pre>
                        <p>
                            Then we download the pre-trained weight file from
                            <a href="https://pjreddie.com/media/files/yolo.weights">here (258 MB)</a>
                        </p>
                        <pre>
                            <code>{{ code[1] }}</code>
                        </pre>
                        <p>
                            YOLO contains some test files to get started with, so let's run the detector.
                        </p>
                        <pre>
                            <code>{{ code[2] }}</code>
                        </pre>
                        <p>
                            Which will yield something similar to this:
                        </p>
                        <pre>
                            <code>{{ code[3] }}</code>
                        </pre>
                        <p>
                            Since darknet was compiled without OpenCV, a window with the predictions won't popup.
                            However, a file named <span class="token">predictions.png</span> should appear. If so, then
                            you can always run <span class="token">eog predictions.png</span> to see the picture.
                        </p>
                        <img class="responsive"
                             src="https://static.jcharante.com/aar/yolo/Screenshot+from+2017-12-27+23-35-49.png"
                        />
                        <p>
                            Now we can be pretty sure YOLO is working properly, but if we want to run this on videos we
                            should compile darknet with CUDA and OpenCV (for the preview & format support).
                        </p>
                    </div>
                    <div>
                        <h3>CUDA</h3>
                        <p>
                            YOLO's installation guide skips over installing CUDA, which is fair since it might not be
                            the same for every distro. NVIDIA doesn't have a release for Ubuntu 17.10 (Artful Aardvark)
                            (sorry gotta fit some keywords somewhere), but I found their
                            <a href="https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1704&target_type=deblocal">
                                17.04 release (1.2 GB)
                            </a>to work with a small caveat. After following the installer instructions I've found that
                            I needed to reboot or else <span class="token">nvidia-smi</span> gives me grief. You might
                            also need to add the following to your <span class="token">.bashrc</span> file.
                        </p>
                        <pre>
                            <code>{{ code[4] }}</code>
                        </pre>
                        <p>
                            To install OpenCV we just need to run the following:
                        </p>
                        <pre>
                            <code>{{ code[5] }}</code>
                        </pre>
                        <p>
                            Before we recompile darknet with CUDA and OpenCV, we need to create a symlink. Ubuntu 17.10
                            ships with gcc 7 as the default, but the CUDA release we got which targets Ubuntu 17.04
                            doesn't support any gcc version later than 6. Because of this we have to create a symlink in
                            CUDA's bin folder so that it doesn't use gcc 7.
                        </p>
                        <pre>
                            <code>{{ code[6] }}</code>
                        </pre>
                        <p>
                            Now we can finally modify the <span class="token">Makefile</span> to compile darknet with CUDA
                            and OpenCV. Modify the first few lines from
                        </p>
                        <pre>
                            <code>{{ code[7] }}</code>
                        </pre>
                        <p>
                            into
                        </p>
                        <pre>
                            <code>{{ code[8] }}</code>
                        </pre>
                        <p>
                            and recompile darknet
                        </p>
                        <pre>
                            <code>{{ code[9] }}</code>
                        </pre>
                        <p>
                            Hopefully there's no error. If you run the dog image test again it should run faster, and
                            a preview should open up. Hopefully this helps someone other than me (for when I forget how
                            to install yolo)
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-auto gt-lg section-selector">
                <q-list link no-border>
                    <q-list-header>Sections</q-list-header>
                    <q-item @click="$scrollTo(0)" :class="{'router-link-active': scrollPos === 0}">
                        <q-item-main>What is YOLO?</q-item-main>
                    </q-item>
                    <q-item @click="$scrollTo(1)" :class="{'router-link-active': scrollPos === 1}">
                        <q-item-main>Installing</q-item-main>
                    </q-item>
                    <q-item @click="$scrollTo(2)" :class="{'router-link-active': scrollPos === 2}">
                        <q-item-main>CUDA</q-item-main>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-layout>
</template>

<style scoped lang="stylus">
    @import '~variables'

    .router-link-active
        color: $primary
        font-weight: bold

    h3
        color: $primary

    pre
        overflow-x: auto
        max-width: 100%
        margin-top: -24px

    img
        margin-top: 2em
        margin-bottom: 2em

    .section-selector
        z-index: 10
        position: fixed
        right: 20px
</style>

<script>
    import {
        QLayout,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QListHeader,
        QItem,
        QItemSide,
        QItemMain,
        QSideLink,
        QVideo
    } from 'quasar'

    import Drawer from '../Drawer.vue'

    export default {
        components: {
            QLayout,
            QToolbar,
            QToolbarTitle,
            QBtn,
            QIcon,
            QList,
            QListHeader,
            QItem,
            QItemSide,
            QItemMain,
            QSideLink,
            QVideo,
            Drawer
        },
        mounted () {
            this.$refs.layout.hideLeft()
        },
        data () {
            return {
                scrollPos: 0,
                code: [`
    git clone https://github.com/pjreddie/darknet
    cd darknet
    make # remember to use the -j option to compile faster, so if you have 8 cores run: make -j8`,
                    `
    wget https://pjreddie.com/media/files/yolo.weights`,
                    `
    ./darknet detect cfg/yolo.cfg yolo.weights data/dog.jpg`,
                    `
    jcharante@brad:~/Projects/darknet$ ./darknet detect cfg/yolo.cfg yolo.weights data/dog.jpg
    layer     filters    size              input                output
        0 conv     32  3 x 3 / 1   608 x 608 x   3   ->   608 x 608 x  32
        1 max          2 x 2 / 2   608 x 608 x  32   ->   304 x 304 x  32
        ...
       30 conv    425  1 x 1 / 1    19 x  19 x1024   ->    19 x  19 x 425
       31 detection
    mask_scale: Using default '1.000000'
    Loading weights from yolo.weights...Done!
    data/dog.jpg: Predicted in 0.412696 seconds.
    dog: 82%
    car: 27%
    truck: 64%
    bicycle: 85%`,
                    `
    # Add cuda to path | source: https://groups.google.com/forum/#!topic/darknet/FHkYFLWQn4Y
    export PATH=/usr/local/cuda/bin:$PATH
    export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH`,
                    `
    sudo apt-get install libopencv-dev`,
                    `
    # if you don't have gcc-6 (you should?)
    sudo apt install gcc-6
    # create the symlink
    sudo ln -s /usr/bin/gcc-6 /usr/local/cuda/bin/gcc`,
                    `
    GPU=0
    CUDNN=0
    OPENCV=0`,
                    `
    GPU=1
    CUDNN=0
    OPENCV=1`,
                    `,
    make # remember to use the -j option to compile faster, so if you have 8 cores run: make -j8`
                ]
            }
        }
    }
</script>
