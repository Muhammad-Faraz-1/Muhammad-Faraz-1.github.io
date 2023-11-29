'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "03b27579fda0546e5d5b5164eeaf1399",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "81a3e99fbf53cf68597ec833afb90f47",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bf48c06e48c6031dfa91f67735150896",
".git/logs/refs/heads/main": "b09e7cfb91eaee020690a961a223ac58",
".git/logs/refs/remotes/origin/main": "f09dbd8a2bab331c91e94212e27c4550",
".git/objects/00/71b7bbfad342085ee00a47bb944646043ff10f": "53e36a65f36a5ea9448835bfca4074e7",
".git/objects/02/f8af9c97efb2767e0078549530f14eef641a37": "db8f91da2227b553aa51d8333adc06aa",
".git/objects/04/d2736c114c317bc2d265476b6ae8a3268ccf64": "98fedb5bb7b8abab366e70ed5ba01689",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/466cf9544344e059e04165e2bb91cc070e0a6a": "ffba2762e246bed17f90c6d563910236",
".git/objects/05/8e10363988f89894362857bbce7e19a6169b89": "73aa87bf32157c24a5369b27a158ab8a",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/d4013ead057e7477ccaf91190416c76ed08c10": "86c2dcb69fdacfab936954a49fbbb3c0",
".git/objects/10/0b27f74f6498ce9cd949c8d9b826294178d3cf": "b83c66af0b841286f56b837a570437f2",
".git/objects/10/825ccbd5ba4325eafd9fbaaca130fa910f7629": "788185fcb478f6040970ec33c4e4558e",
".git/objects/11/070022b542db40f49550ae72c26da571b894c1": "a169505f9f2898af4560a0d5cd079606",
".git/objects/15/6ee04c22a63dd4b7200fda26984dfa58b998c2": "25f17f9b52e803023ba0798868f7020b",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1d/8dce36454800174cdc403061a25fe02669fcb6": "98e6657cc609ffececbec8ce92d286cd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/a403a0589e4b4c55b133fcad40428d740a7b7f": "0bae6ab21e6bcbe3c1de8bed90a793dc",
".git/objects/27/98ce6956eef436e083da88d940909222e4a7fe": "1e9ecd668728b6f6d759e6d8bb100f6b",
".git/objects/28/60f7c6f69d513a4c820de93978b205bc64b435": "3bb08646e433d421673e69ef85307b05",
".git/objects/2e/61777160995c88df413252be6ab25765e5c52c": "9ec4181283195a6a38b7a343cf07af3d",
".git/objects/2e/d21dae1fc8451ddf7b5cdf33604786d8c0d0c4": "f7e7ef5f3ddcc382197d1e8245a4e32c",
".git/objects/38/557a7fd2484d9f405f4b3db3c8ff624cfa0930": "7872f2781312b14a215e4a7106bd3528",
".git/objects/38/b0a361701a4e5860c5f971fdf3273870c2707d": "15d371bfc9100fa75b4309908e94c0c0",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/f83bea6faa2fcdfb5aefffbe6b4467b2fc1f77": "00626ea6697980f0dc943aa81b497878",
".git/objects/3b/a95db2ba847954004b54954e01ec760ede145a": "9507378b8a68b555b2a4960e3d1388be",
".git/objects/3b/dcecaf1f1b6b7eff1b8d537c683b906a313da6": "0ea5e38d4bee0ee09c4ba8ffb7dd0a31",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/3f/ed7b8e8e2ddef1d19d477b93ad0efabcd8de35": "75873bc33b060688854ed7458dd76a7f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/8e9b5fd321db9254bb81362f5a2b6e4c0a40fb": "893a6d50e460cf76aac9c21e4f66d4e7",
".git/objects/4c/6c753535bfb241240c35912f9cef96fb7061ce": "1bf85faafd994255e799a55d48321a2c",
".git/objects/4f/3f9a34181d2ea80c9d8699600bd723a5a83ca5": "232bdc55529ab45b1fb1488613353a96",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/9092ad15a76f51e7b0ed81106aeb330b77cd46": "d239c0b717b14e9231ca28f3bbfa5301",
".git/objects/54/c31be7059741e0fe0c8b0d8210044d159d62ae": "d716cb15ad0d4e7182c5c8c07f9d174d",
".git/objects/54/ccd69578868df19d91887be4bc6becd488a66a": "1268261d0f9e84bece0981cc3736f2f1",
".git/objects/57/0c2568b88ab4ef32018fbf84b6a0add7643e4b": "14ddfdc7a3faf7ae22be5b9c9fb8e26e",
".git/objects/5b/7c0224cd80318693bf0e60f5bb835c7b29bd7c": "be8a3dcf15acd5353d50ff5875f8275b",
".git/objects/5f/1321f5dfb508152a90486fc0723b01ca982740": "fda50be0408621eac2547d97d982a5ff",
".git/objects/5f/4dc4839fedf8ef4fefbd7248c3b595980b78a5": "2ded286d3a8a927b8087fa30f62f2768",
".git/objects/65/1bf8101ecd0408ca029a0d23a65e5b9dfeaba4": "95ea45532b96c9eafc70a5ea0dd4b2ff",
".git/objects/66/62e2ad0134c4556533aa425027c282a07615df": "5a804ff6810e062362ed21505310a6a4",
".git/objects/6a/1ac909e405669de2fbf680d434166870da4825": "4ff8dd7e4dc9e2f3528a9f4c9d8c9950",
".git/objects/6a/3c73b8807d2526638e64910f45ed3da479ccd1": "31f8be6b9fdbfd60e36f3c8741316b85",
".git/objects/79/950b14b057a17ea57816b7db4117bb4edb3468": "12fb03f47c6de671ae33e88070303f50",
".git/objects/7a/167dbbe3eb96d220da1b472c0fd1e369034776": "d624b60e4235db9f8a309b847f780ad1",
".git/objects/7a/c1ad69cddd3bb877edb0cf693d6240325211cb": "3c01597ff315dfde817fd9b9a7f25767",
".git/objects/7b/b798dfe33e7f0b16d2ae1ed836dbe71fa27c2b": "be633c56b4f7b0ea33e29f820e67eb4f",
".git/objects/81/a984175c3cb6a53876dd8e9a50e983bdf97c6d": "1fb23ec65eb899b61952fd81580caa31",
".git/objects/87/708e74b9a0f9b181944d7d3e6dfa9d9470a6ce": "72283db1dd4500bc25617cd1166f9912",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/e33d4e88ea106aff7269db23e6bf73c7b52f69": "ed1972ad5ed9533202461ad42d583e9a",
".git/objects/97/a86c459ea94b60b97793608ae4b987bec5a6f1": "7bf134e28ca08b7cc0566872d4ceeeb0",
".git/objects/99/3c2af43588474843b6a8fdeefd6cc7a3b5aa03": "b0f57b8824f2e817c77dd5057246bcd5",
".git/objects/99/6dd76638d2949ca20daccebcb09df52eca2881": "257a3183b28472ea688da68f0d9b99fb",
".git/objects/9b/e1ea5ce776cb2942678b49b57b51ca3341ac92": "2d162ea68b6bbba95cd6a252a57632d2",
".git/objects/9d/76d08ee4254cf5d7e0cb0167a905265ed7a4fd": "ba058c0a9309117b49caad386d2a8a71",
".git/objects/a3/8c366a22e626a9799f285ec858b2400b89eae2": "7242c04f3224fdd2179445c2884db690",
".git/objects/a9/34ecfe99d6eebbb821a46772187bee9bff2be9": "16906ffeb6dad1d2421ef0bc2ce0b4b8",
".git/objects/ab/57dac50ca8dfc74428ad362772c8a63b57f6e3": "56d85a07a2d704500e0c794f7dd92e6a",
".git/objects/ac/11c981dcb3bec283d9b056facc837e466dc25f": "88ae83c1d92c8dcf913f10556b78e0b7",
".git/objects/ae/92f45a153421d3450b7383b8f5223a338d501f": "68329c6e271c95fa242fc7680551ecf2",
".git/objects/b2/176c385a0731bcc7c90641334f27b0af35221a": "ccbda71e8b53085fdb02fe589d2ba9c0",
".git/objects/b2/a3a5def221836be19426ec00fb2a6e8d3609fd": "829ec9dedb0748f0301c0820b0c6ebb8",
".git/objects/b3/4229a70d27b4706e0f58b0c93e9a2ad03a9a5b": "437cd7f0ee31c0652e68f63ecbe3db9b",
".git/objects/b3/e1ff7ff49b05efb2457392757bf8937ca8d002": "79747a894b17de3d35e89f8f97c2181b",
".git/objects/b4/b685544f2f7fc3f10f074cb6e7aaa3ae375e70": "d428db235a6d363d4ee2bc22156b0f77",
".git/objects/b7/1197f5921cb4094f42a2a788e9de3a9c7c4114": "c2dd8b00dc973b3124dcc3bb1dedf734",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/e41bb0a48c5e3ea65a57683d42829312658afc": "0991df57c49c7151baea98339afb4a47",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/ff186cfa5a466b33add8bdc37184bbd2dc28e1": "b196590f69ca8a26561b33ce8400ac98",
".git/objects/c2/08aa7942f630af0eb724d55b52e818bcf41342": "94407f1342af366a9fccc6182a72aa6a",
".git/objects/c3/c8c1b5d3362792b08b207219e0f98a992a3584": "862a0a70fb0e9bbe4bf849c9d942dc28",
".git/objects/c5/1a71db6f7609238731c8dbe932527da418fd9f": "930290d5a22ad9898ef7322c2398814c",
".git/objects/c5/1c50c9ab6ca6bd0b38882f737f9c27fe21e791": "54a0f803f17b47491135f4a0ba1c6fb1",
".git/objects/c5/3185addb0d085c0d4cef3b32180f2d46ea31f8": "b80d5bff5e1a41c41728a78e5f61dc55",
".git/objects/cc/e55deb10fb9cb8867499fe03e6f43f2c5f90dd": "6e3f7dc26409ce9011063f0959956e1d",
".git/objects/d2/65d939ca70d34ed1669f5310a6f6dc63ed5f89": "ae2ed6704aaffd6e207a568ca19ebdd9",
".git/objects/d4/00bb5649ae6e48651120de43baa1b52713e778": "b8db846f43978e2eb1964fb0a487f904",
".git/objects/d4/fc4edac5b090a679e109479859a8f449efca7c": "84442102aaa2d7e1282d5868d0091fe4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/25ec58ccf77a92f54cac17b399be0094e2d26f": "942698adc98d4cb1553befe95d7fc612",
".git/objects/d8/d0139fc01ce24a6ab07657c29006b6c7f43e9d": "7b5172d68353fcce5d3eecf2ef9572e7",
".git/objects/da/224f4a0db66fb128d67c9ea41564dcddb72352": "cdc0d3b125ac15cc06694057a5d65f8d",
".git/objects/db/a0128eb9e8b7a3fdec3735f319ec2feecf9dd4": "8c3d03b9bcbd5804589a6e3741763234",
".git/objects/db/c9d54b1a9f40552c780b219031bb6ab6b50ab1": "7a26ed20bf1c89e81106adb457a200b8",
".git/objects/dc/deb1f5854f32ac283c9c54ee1de2fa4284f3b3": "579015dd36df5cdd14ea5aeeed33fcd1",
".git/objects/de/fdeb6b74114d5bc7db86100b15903f49a845d0": "8b5a7092987018efaea4779dfbcf9de3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/76e76ab7901f837f08b48d73aaabbc6888de4c": "236202af42c7be9496c5d110bff42151",
".git/objects/e4/ab274c74c91b52d943a17a648e5a0f6ef6fab1": "f523a210566fabd9cad52265bd68c8d8",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/23999b3bc2fad56db659f37cd7e9601c38922f": "ce3abd3276b947a651e37a3acbcd1e21",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e09c05fd13b87c98a796bb769507fa7f61c9ae": "35ab91597b1e4791545cdf9479213c64",
".git/objects/f2/b1fe3373523b065581b8d572817f4a529cf8f8": "e410bcf146b069e393b30b7544c0e97f",
".git/objects/f3/1d36481db223f21291173a8f3eef0c9a83fc89": "91ddee79bf4e64811f7229115ee34af7",
".git/objects/f7/71ecf448716ad6c91508149d83799955b46e77": "f03e5bd3db4d77e6e5d34a2877f02dd0",
".git/objects/f8/2104776895a3a177f65fd36ab212f7433038d3": "f78d7eae724d1528bdf93e30f791f17a",
".git/objects/fa/a69c9c717babf7cba90407a1de316c75b39fd0": "13a793b5ba7cae6f31a134e58dd18096",
".git/objects/fd/73a42e751db8aa964fb29c0147bafd10fb6afe": "2cf36397b02d17dea274bb8be4aae41b",
".git/objects/fe/8722cdcbd3f14ee170d115735b524bee851ade": "c12dbed6d5044bfc9913641bdbf5dfed",
".git/objects/fe/b98376c80861b80af4d215e40709107b5961fb": "2f4a6e74b6895ff7a9a38f2574212124",
".git/refs/heads/main": "a71f353be6a0972f1df35eae7900247e",
".git/refs/remotes/origin/main": "a71f353be6a0972f1df35eae7900247e",
"assets/AssetManifest.bin": "a712b626a4d9ad9395ea9d6992b64382",
"assets/AssetManifest.bin.json": "543c73a0312647e5e279416da9490404",
"assets/AssetManifest.json": "d836652496db2f22dc9f7f2d5f2513df",
"assets/assets/4-stars.png": "8f92adb354cc51f1293c1d83324ba7fa",
"assets/assets/activeuser.png": "4d0a6aada59a063d58a280590f0b7512",
"assets/assets/age.png": "87d4684ed2916b92a249ef5ad466783a",
"assets/assets/alert.png": "2a36201931c4e069144c38a03bd49add",
"assets/assets/application.png": "c1cda9ac213188bf26d81a2349559e33",
"assets/assets/approved.png": "f5c517c82fc80a7dd11fc85db3abda11",
"assets/assets/bell.png": "f837cb25f527e93a43d98bbb4f6dbb1c",
"assets/assets/bin.png": "6d1114ec0a8515b07d49805a3ec33a67",
"assets/assets/blackburn.jpg": "fbf9e29cd14f7f4b1288700c945eb95d",
"assets/assets/button.png": "d6aaae6741aaae0078adec0df2b76b2b",
"assets/assets/camera.png": "f3ad3f1c8acaa4fbb56c0d9e6dc161f0",
"assets/assets/cardiff.jpg": "1b86440702f96fe2a7813b3c2d29a7ba",
"assets/assets/check.png": "c87ba8c858cdcf41583800e00f1a62bc",
"assets/assets/chrome.png": "518b7ed152bbfbc735191831a44fe3ee",
"assets/assets/city.jpg": "3376df99a2e54911c5428f31cf06bb62",
"assets/assets/city.png": "d07405d52d7e049676deb16c940a9c2c",
"assets/assets/city2.jpg": "20496488b7786c3fd6265c61895785d8",
"assets/assets/cubes.png": "d6f6085f5ce23a10d8cef4e0ed43322c",
"assets/assets/customer.png": "c41dc6d0d9cb98c8ccd09d7a601db3a7",
"assets/assets/dashboard.png": "61c3c34ccbf94c208e48b03af7ae9ce8",
"assets/assets/delete.png": "ab8041b827364668b442078cce450a58",
"assets/assets/delete2.png": "962f1b423c435db79265edb5c4b8aea9",
"assets/assets/dollar-symbol.png": "6291a8c258332c5b015b5e5475f88438",
"assets/assets/download.png": "33ca9d3e897ad0f99cd2731d4d71db55",
"assets/assets/email.png": "8f7b0113c1644278e9296ec7a7608bd7",
"assets/assets/feedback.png": "f723056f5b675c76394014589ff711f8",
"assets/assets/file.png": "fdf6a730583879af0ceec907733c5134",
"assets/assets/firefox.png": "32135551af0beed18cad112e519244ad",
"assets/assets/food1.jpg": "b59fefecbf77db9c1c8b57d779378132",
"assets/assets/group.png": "e7f58b2a47dbb0387251c90c25781ff0",
"assets/assets/help.png": "d9b85f80ff4a1fd6001a66b79e9f3d04",
"assets/assets/increase.png": "27af3c886cc614ce6a17a837bebe22d2",
"assets/assets/insurance.png": "1afa74fed60b635e1d2d882ca594e87e",
"assets/assets/interview.png": "219840fd513cc196e3f61eee118ca99c",
"assets/assets/lahore.jpg": "86b6e74114bbfcea54966abc4f1ae229",
"assets/assets/layout.png": "ae7b3910debc2bd6c0dfa2f22ed3a098",
"assets/assets/loader.png": "d417909355580d39b912d26cdcd10e78",
"assets/assets/location.png": "1827e9bed66ab92c7c0e79b6cb2de01c",
"assets/assets/logo1.png": "e2b12de7d491e0095705f76d3fb8592c",
"assets/assets/logo2.png": "5061ad11fa38dd0a7d1b58b4352991db",
"assets/assets/logo3.png": "67c63d569e28f00ad2c6656fc1dff430",
"assets/assets/logout.png": "9b3063a8887d802d74766c605ff321e9",
"assets/assets/london.jpg": "a8282f49eade5c799ef95be16080d0c8",
"assets/assets/manchester.jpg": "21eb67d467c87f68e20ecd131278daa9",
"assets/assets/medal.png": "3368d67d71484faca214a7736be5f2f5",
"assets/assets/microsoft.png": "129d7c4b2c2f946bf32cfeb33eab3520",
"assets/assets/more.png": "b4008243777476a4324153fcc19fae4e",
"assets/assets/opera.png": "fb5da8be7988b71d1a9da737ba277143",
"assets/assets/pen.png": "eaded72a93647640cf76963eab360a20",
"assets/assets/pencil.png": "f8bfdeb0ddc29268be8877cad2c272e4",
"assets/assets/person1.jpg": "dd05e74f6236df9d47773ea8d9c10d04",
"assets/assets/person2.jpg": "8277ab7c4b8052e176a049a0be243371",
"assets/assets/person3.jpg": "e335559beb3f0d8254f2ad36f2492655",
"assets/assets/person4.jpg": "124cce5d299fdefaea48b3a44e92375b",
"assets/assets/phone.png": "ebffea69c92e30836e3ca14999546f7c",
"assets/assets/queue.png": "43bf74afc166ce1333e0b4b1741c9e44",
"assets/assets/record.png": "9df6ed656016870ca5cb863f8ff40944",
"assets/assets/report.png": "4aec07d43000040cb0db9d817a80fb6e",
"assets/assets/request.png": "7050f4fe0100dcbe45774f5c35ad5559",
"assets/assets/request2.png": "4cedf56f28a6ec5f50edd658cbca4366",
"assets/assets/rise.png": "e9d30f9acc88629f1cdb221aeddb9039",
"assets/assets/safari.png": "5d526392f112ec7f8e9e7ff4d6bb3f19",
"assets/assets/search.png": "2aaa6f1be965eb98de80e55286525ff6",
"assets/assets/service.png": "1d4877a6efa8f0d0c9773bf4cd0302fd",
"assets/assets/settings.png": "92c25f37d91bbc70ba1a197b38c0b57c",
"assets/assets/share.png": "711c458a7c1810b97d84fcf42e94c9c3",
"assets/assets/skyline.png": "61052d61445f1f33f2f469a9313d52f9",
"assets/assets/smartphone.png": "eae966a1946005313ecb17233dd69d2e",
"assets/assets/support.png": "7f888d2ca2474c447d0bb8b667c3a66a",
"assets/assets/support2.png": "d9b85f80ff4a1fd6001a66b79e9f3d04",
"assets/assets/terms.png": "ff29a57700ab3a4f7f0df0b028d2b035",
"assets/assets/user.png": "8feff93941a2425f1d7b98118625a17d",
"assets/assets/user22.png": "45000b334be5509e1a9d4ffef88b5b68",
"assets/assets/warning.png": "b1e5c9ef2ea556ec3260a2a727725006",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "362254863878eef9336c9a4d9d9c5693",
"assets/NOTICES": "d701b28fef2ac1860e52524c63e46d58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e2b12de7d491e0095705f76d3fb8592c",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad0ffe0b991fef3ce6e3c0e6e65f1edf",
"/": "ad0ffe0b991fef3ce6e3c0e6e65f1edf",
"main.dart.js": "29d220289e6c5907157f310cfc9b74d0",
"manifest.json": "c22d1c62bcc13d4fe62449e1db3d158b",
"version.json": "01fa06f7d4a7d394982f6769385e3d05"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
