/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Registers all known ad network factories and then executes
 * one of them.
 *
 * This files gets minified and published to
 * https://3p.ampproject.net/$version/f.js
 */

// src/polyfills.js must be the first import.
import './polyfills';

import {draw3p, init} from './integration-lib';
import {getMode} from '../src/mode';
import {register} from './3p';

// 3P - please keep in alphabetic order
import {beopinion} from './beopinion';
import {bodymovinanimation} from './bodymovinanimation';
import {embedly} from './embedly';
import {facebook} from './facebook';
import {github} from './github';
import {gltfViewer} from './3d-gltf/index';
import {mathml} from './mathml';
import {reddit} from './reddit';
import {twitter} from './twitter';
import {viqeoplayer} from './viqeoplayer';
import {yotpo} from './yotpo';

import {_ping_} from '#ads/vendors/_ping_';

// 3P Ad Networks - please keep in alphabetic order
import {_1wo} from '#ads/vendors/1wo';
import {_24smi} from '#ads/vendors/24smi';
import {a8} from '#ads/vendors/a8';
import {a9} from '#ads/vendors/a9';
import {accesstrade} from '#ads/vendors/accesstrade';
import {adagio} from '#ads/vendors/adagio';
import {adblade, industrybrains} from '#ads/vendors/adblade';
import {adbutler} from '#ads/vendors/adbutler';
import {adform} from '#ads/vendors/adform';
import {adfox} from '#ads/vendors/adfox';
import {adgeneration} from '#ads/vendors/adgeneration';
import {adglare} from '#ads/vendors/adglare';
import {adhese} from '#ads/vendors/adhese';
import {adincube} from '#ads/vendors/adincube';
import {adition} from '#ads/vendors/adition';
import {adman} from '#ads/vendors/adman';
import {admanmedia} from '#ads/vendors/admanmedia';
import {admixer} from '#ads/vendors/admixer';
import {adnuntius} from '#ads/vendors/adnuntius';
import {adocean} from '#ads/vendors/adocean';
import {adop} from '#ads/vendors/adop';
import {adpicker} from '#ads/vendors/adpicker';
import {adplugg} from '#ads/vendors/adplugg';
import {adpon} from '#ads/vendors/adpon';
import {adpushup} from '#ads/vendors/adpushup';
import {adreactor} from '#ads/vendors/adreactor';
import {adsensor} from '#ads/vendors/adsensor';
import {adservsolutions} from '#ads/vendors/adservsolutions';
import {adsloom} from '#ads/vendors/adsloom';
import {ads2bid} from '#/ads/vendors/ads2bid';
import {adsnative} from '#ads/vendors/adsnative';
import {adspeed} from '#ads/vendors/adspeed';
import {adspirit} from '#ads/vendors/adspirit';
import {adstir} from '#ads/vendors/adstir';
import {adstyle} from '#ads/vendors/adstyle';
import {adtech} from '#ads/vendors/adtech';
import {adtelligent} from '#ads/vendors/adtelligent';
import {adthrive} from '#ads/vendors/adthrive';
import {adunity} from '#ads/vendors/adunity';
import {aduptech} from '#ads/vendors/aduptech';
import {adventive} from '#ads/vendors/adventive';
import {adverline} from '#ads/vendors/adverline';
import {adverticum} from '#ads/vendors/adverticum';
import {advertserve} from '#ads/vendors/advertserve';
import {adyoulike} from '#ads/vendors/adyoulike';
import {affiliateb} from '#ads/vendors/affiliateb';
import {aja} from '#ads/vendors/aja';
import {amoad} from '#ads/vendors/amoad';
import {aniview} from '#ads/vendors/aniview';
import {anyclip} from '#ads/vendors/anyclip';
import {appnexus} from '#ads/vendors/appnexus';
import {appvador} from '#ads/vendors/appvador';
import {atomx} from '#ads/vendors/atomx';
import {baidu} from '#ads/vendors/baidu';
import {beaverads} from '#ads/vendors/beaverads';
import {bidtellect} from '#ads/vendors/bidtellect';
import {blade} from '#ads/vendors/blade';
import {brainy} from '#ads/vendors/brainy';
import {bringhub} from '#ads/vendors/bringhub';
import {broadstreetads} from '#ads/vendors/broadstreetads';
import {byplay} from '#ads/vendors/byplay';
import {caajainfeed} from '#ads/vendors/caajainfeed';
import {capirs} from '#ads/vendors/capirs';
import {caprofitx} from '#ads/vendors/caprofitx';
import {cedato} from '#ads/vendors/cedato';
import {chargeads, nws} from '#ads/vendors/nws';
import {colombia} from '#ads/vendors/colombia';
import {conative} from '#ads/vendors/conative';
import {connatix} from '#ads/vendors/connatix';
import {contentad} from '#ads/vendors/contentad';
import {criteo} from '#ads/vendors/criteo';
import {csa} from '#ads/vendors/csa';
import {dable} from '#ads/vendors/dable';
import {digiteka} from '#ads/vendors/digiteka';
import {directadvert} from '#ads/vendors/directadvert';
import {distroscale} from '#ads/vendors/distroscale';
import {dotandads} from '#ads/vendors/dotandads';
import {dynad} from '#ads/vendors/dynad';
import {eadv} from '#ads/vendors/eadv';
import {empower} from '#ads/vendors/empower';
import {engageya} from '#ads/vendors/engageya';
import {epeex} from '#ads/vendors/epeex';
import {eplanning} from '#ads/vendors/eplanning';
import {ezoic} from '#ads/vendors/ezoic';
import {f1e} from '#ads/vendors/f1e';
import {f1h} from '#ads/vendors/f1h';
import {fakeDelayed} from '#ads/vendors/_fakedelayed_';
import {feedad} from '#ads/vendors/feedad';
import {felmat} from '#ads/vendors/felmat';
import {finative} from '#ads/vendors/finative';
import {firstimpression} from '#ads/vendors/firstimpression';
import {flite} from '#ads/vendors/flite';
import {fluct} from '#ads/vendors/fluct';
import {forkmedia} from '#ads/vendors/forkmedia';
import {freewheel} from '#ads/vendors/freewheel';
import {fusion} from '#ads/vendors/fusion';
import {gecko} from '#ads/vendors/gecko';
import {genieessp} from '#ads/vendors/genieessp';
import {giraff} from '#ads/vendors/giraff';
import {glomex} from '#ads/vendors/glomex';
import {gmossp} from '#ads/vendors/gmossp';
import {gumgum} from '#ads/vendors/gumgum';
import {holder} from '#ads/vendors/holder';
import {ibillboard} from '#ads/vendors/ibillboard';
import {idealmedia} from '#ads/vendors/idealmedia';
import {imaVideo} from '#ads/google/ima/ima-video';
import {imedia} from '#ads/vendors/imedia';
import {imobile} from '#ads/vendors/imobile';
import {imonomy} from '#ads/vendors/imonomy';
import {improvedigital} from '#ads/vendors/improvedigital';
import {inmobi} from '#ads/vendors/inmobi';
import {innity} from '#ads/vendors/innity';
import {insticator} from '#ads/vendors/insticator';
import {invibes} from '#ads/vendors/invibes';
import {iprom} from '#ads/vendors/iprom';
import {ix} from '#ads/vendors/ix';
import {jubna} from '#ads/vendors/jubna';
import {kargo} from '#ads/vendors/kargo';
import {ketshwa} from '#ads/vendors/ketshwa';
import {kiosked} from '#ads/vendors/kiosked';
import {kixer} from '#ads/vendors/kixer';
import {kuadio} from '#ads/vendors/kuadio';
import {lentainform} from '#ads/vendors/lentainform';
import {ligatus} from '#ads/vendors/ligatus';
import {lockerdome} from '#ads/vendors/lockerdome';
import {logly} from '#ads/vendors/logly';
import {loka} from '#ads/vendors/loka';
import {luckyads} from '#ads/vendors/luckyads';
import {macaw} from '#ads/vendors/macaw';
import {mads} from '#ads/vendors/mads';
import {mantisDisplay, mantisRecommend} from '#ads/vendors/mantis';
import {marfeel} from '#ads/vendors/marfeel';
import {mediaad} from '#ads/vendors/mediaad';
import {medianet} from '#ads/vendors/medianet';
import {mediavine} from '#ads/vendors/mediavine';
import {medyanet} from '#ads/vendors/medyanet';
import {meg} from '#ads/vendors/meg';
import {mgid} from '#ads/vendors/mgid';
import {microad} from '#ads/vendors/microad';
import {miximedia} from '#ads/vendors/miximedia';
import {mixpo} from '#ads/vendors/mixpo';
import {monetizer101} from '#ads/vendors/monetizer101';
import {mox} from '#ads/vendors/mox';
import {my6sense} from '#ads/vendors/my6sense';
import {myfinance} from '#ads/vendors/myfinance';
import {myoffrz} from '#ads/vendors/myoffrz';
import {mytarget} from '#ads/vendors/mytarget';
import {mywidget} from '#ads/vendors/mywidget';
import {nativeroll} from '#ads/vendors/nativeroll';
import {nativery} from '#ads/vendors/nativery';
import {nativo} from '#ads/vendors/nativo';
import {navegg} from '#ads/vendors/navegg';
import {nend} from '#ads/vendors/nend';
import {netletix} from '#ads/vendors/netletix';
import {noddus} from '#ads/vendors/noddus';
import {nokta} from '#ads/vendors/nokta';
import {oblivki} from '#ads/vendors/oblivki';
import {onead} from '#ads/vendors/onead';
import {onnetwork} from '#ads/vendors/onnetwork';
import {openadstream} from '#ads/vendors/openadstream';
import {openx} from '#ads/vendors/openx';
import {opinary} from '#ads/vendors/opinary';
import {outbrain} from '#ads/vendors/outbrain';
import {pixels} from '#ads/vendors/pixels';
import {playstream} from '#ads/vendors/playstream';
import {plista} from '#ads/vendors/plista';
import {polymorphicads} from '#ads/vendors/polymorphicads';
import {popin} from '#ads/vendors/popin';
import {postquare} from '#ads/vendors/postquare';
import {ppstudio} from '#ads/vendors/ppstudio';
import {pressboard} from '#ads/vendors/pressboard';
import {promoteiq} from '#ads/vendors/promoteiq';
import {pubexchange} from '#ads/vendors/pubexchange';
import {pubguru} from '#ads/vendors/pubguru';
import {pubmatic} from '#ads/vendors/pubmatic';
import {pubmine} from '#ads/vendors/pubmine';
import {puffnetwork} from '#ads/vendors/puffnetwork';
import {pulse} from '#ads/vendors/pulse';
import {pulsepoint} from '#ads/vendors/pulsepoint';
import {purch} from '#ads/vendors/purch';
import {quoraad} from '#ads/vendors/quoraad';
import {rakutenunifiedads} from '#ads/vendors/rakutenunifiedads';
import {rbinfox} from '#ads/vendors/rbinfox';
import {rcmwidget} from '#ads/vendors/rcmwidget';
import {readmo} from '#ads/vendors/readmo';
import {realclick} from '#ads/vendors/realclick';
import {recomad} from '#ads/vendors/recomad';
import {recreativ} from '#ads/vendors/recreativ';
import {relap} from '#ads/vendors/relap';
import {relappro} from '#ads/vendors/relappro';
import {remixd} from '#ads/vendors/remixd';
import {revcontent} from '#ads/vendors/revcontent';
import {revjet} from '#ads/vendors/revjet';
import {rfp} from '#ads/vendors/rfp';
import {rnetplus} from '#ads/vendors/rnetplus';
import {rubicon} from '#ads/vendors/rubicon';
import {runative} from '#ads/vendors/runative';
import {sas} from '#ads/vendors/sas';
import {seedingalliance} from '#ads/vendors/seedingalliance';
import {sekindo} from '#ads/vendors/sekindo';
import {sharethrough} from '#ads/vendors/sharethrough';
import {shemedia} from '#ads/vendors/shemedia';
import {sklik} from '#ads/vendors/sklik';
import {slimcutmedia} from '#ads/vendors/slimcutmedia';
import {smartadserver} from '#ads/vendors/smartadserver';
import {smartclip} from '#ads/vendors/smartclip';
import {smi2} from '#ads/vendors/smi2';
import {smilewanted} from '#ads/vendors/smilewanted';
import {sogouad} from '#ads/vendors/sogouad';
import {sona} from '#ads/vendors/sona';
import {sortable} from '#ads/vendors/sortable';
import {sovrn} from '#ads/vendors/sovrn';
import {speakol} from '#ads/vendors/speakol';
import {spotx} from '#ads/vendors/spotx';
import {springAds} from '#ads/vendors/springAds';
import {ssp} from '#ads/vendors/ssp';
import {strossle} from '#ads/vendors/strossle';
import {sulvo} from '#ads/vendors/sulvo';
import {sunmedia} from '#ads/vendors/sunmedia';
import {svknative} from '#ads/vendors/svknative';
import {swoop} from '#ads/vendors/swoop';
import {taboola} from '#ads/vendors/taboola';
import {tail} from '#ads/vendors/tail';
import {tcsemotion} from '#ads/vendors/tcsemotion';
import {teads} from '#ads/vendors/teads';
import {temedya} from '#ads/vendors/temedya';
import {torimochi} from '#ads/vendors/torimochi';
import {tracdelight} from '#ads/vendors/tracdelight';
import {triplelift} from '#ads/vendors/triplelift';
import {trugaze} from '#ads/vendors/trugaze';
import {uas} from '#ads/vendors/uas';
import {ucfunnel} from '#ads/vendors/ucfunnel';
import {unruly} from '#ads/vendors/unruly';
import {uzou} from '#ads/vendors/uzou';
import {valuecommerce} from '#ads/vendors/valuecommerce';
import {vdoai} from '#ads/vendors/vdoai';
import {verizonmedia} from '#ads/vendors/verizonmedia';
import {videointelligence} from '#ads/vendors/videointelligence';
import {videonow} from '#ads/vendors/videonow';
import {viralize} from '#ads/vendors/viralize';
import {vlyby} from '#ads/vendors/vlyby';
import {vmfive} from '#ads/vendors/vmfive';
import {webediads} from '#ads/vendors/webediads';
import {weboramaDisplay} from '#ads/vendors/weborama';
import {whopainfeed} from '#ads/vendors/whopainfeed';
import {widespace} from '#ads/vendors/widespace';
import {wisteria} from '#ads/vendors/wisteria';
import {wpmedia} from '#ads/vendors/wpmedia';
import {xlift} from '#ads/vendors/xlift';
import {yahoo} from '#ads/vendors/yahoo';
import {yahoofedads} from '#ads/vendors/yahoofedads';
import {yahoojp} from '#ads/vendors/yahoojp';
import {yahoonativeads} from '#ads/vendors/yahoonativeads';
import {yandex} from '#ads/vendors/yandex';
import {yektanet} from '#ads/vendors/yektanet';
import {yengo} from '#ads/vendors/yengo';
import {yieldbot} from '#ads/vendors/yieldbot';
import {yieldmo} from '#ads/vendors/yieldmo';
import {yieldone} from '#ads/vendors/yieldone';
import {yieldpro} from '#ads/vendors/yieldpro';
import {zedo} from '#ads/vendors/zedo';
import {zen} from '#ads/vendors/zen';
import {zergnet} from '#ads/vendors/zergnet';
import {zucks} from '#ads/vendors/zucks';

init(window);

if (getMode().test || getMode().localDev) {
  register('_ping_', _ping_);
  register('fake-delayed', fakeDelayed);
}

// Keep the list in alphabetic order
register('1wo', _1wo);
register('24smi', _24smi);
register('3d-gltf', gltfViewer);
register('a8', a8);
register('a9', a9);
register('accesstrade', accesstrade);
register('adagio', adagio);
register('adblade', adblade);
register('adbutler', adbutler);
register('adform', adform);
register('adfox', adfox);
register('adgeneration', adgeneration);
register('adglare', adglare);
register('adhese', adhese);
register('adincube', adincube);
register('adition', adition);
register('adman', adman);
register('admanmedia', admanmedia);
register('admixer', admixer);
register('adnuntius', adnuntius);
register('adocean', adocean);
register('adop', adop);
register('adpicker', adpicker);
register('adplugg', adplugg);
register('adpon', adpon);
register('adpushup', adpushup);
register('adreactor', adreactor);
register('adsensor', adsensor);
register('ads2bid', ads2bid);
register('adservsolutions', adservsolutions);
register('adsloom', adsloom);
register('adsnative', adsnative);
register('adspeed', adspeed);
register('adspirit', adspirit);
register('adstir', adstir);
register('adstyle', adstyle);
register('adtech', adtech);
register('adtelligent', adtelligent);
register('adthrive', adthrive);
register('adunity', adunity);
register('aduptech', aduptech);
register('adventive', adventive);
register('adverline', adverline);
register('adverticum', adverticum);
register('advertserve', advertserve);
register('adyoulike', adyoulike);
register('affiliateb', affiliateb);
register('aja', aja);
register('amoad', amoad);
register('aniview', aniview);
register('anyclip', anyclip);
register('appnexus', appnexus);
register('appvador', appvador);
register('atomx', atomx);
register('baidu', baidu);
register('beaverads', beaverads);
register('beopinion', beopinion);
register('bidtellect', bidtellect);
register('blade', blade);
register('bodymovinanimation', bodymovinanimation);
register('brainy', brainy);
register('bringhub', bringhub);
register('broadstreetads', broadstreetads);
register('byplay', byplay);
register('caajainfeed', caajainfeed);
register('capirs', capirs);
register('caprofitx', caprofitx);
register('cedato', cedato);
register('chargeads', chargeads);
register('colombia', colombia);
register('conative', conative);
register('connatix', connatix);
register('contentad', contentad);
register('criteo', criteo);
register('csa', csa);
register('dable', dable);
register('digiteka', digiteka);
register('directadvert', directadvert);
register('distroscale', distroscale);
register('dotandads', dotandads);
register('dynad', dynad);
register('eadv', eadv);
register('embedly', embedly);
register('empower', empower);
register('engageya', engageya);
register('epeex', epeex);
register('eplanning', eplanning);
register('ezoic', ezoic);
register('f1e', f1e);
register('f1h', f1h);
register('facebook', facebook);
register('feedad', feedad);
register('felmat', felmat);
register('finative', finative);
register('firstimpression', firstimpression);
register('flite', flite);
register('fluct', fluct);
register('forkmedia', forkmedia);
register('freewheel', freewheel);
register('fusion', fusion);
register('gecko', gecko);
register('genieessp', genieessp);
register('giraff', giraff);
register('github', github);
register('glomex', glomex);
register('gmossp', gmossp);
register('gumgum', gumgum);
register('holder', holder);
register('ibillboard', ibillboard);
register('idealmedia', idealmedia);
register('ima-video', imaVideo);
register('imedia', imedia);
register('imobile', imobile);
register('imonomy', imonomy);
register('improvedigital', improvedigital);
register('industrybrains', industrybrains);
register('inmobi', inmobi);
register('innity', innity);
register('insticator', insticator);
register('invibes', invibes);
register('iprom', iprom);
register('ix', ix);
register('jubna', jubna);
register('kargo', kargo);
register('ketshwa', ketshwa);
register('kiosked', kiosked);
register('kixer', kixer);
register('kuadio', kuadio);
register('lentainform', lentainform);
register('ligatus', ligatus);
register('lockerdome', lockerdome);
register('logly', logly);
register('loka', loka);
register('luckyads', luckyads);
register('macaw', macaw);
register('mads', mads);
register('mantis-display', mantisDisplay);
register('mantis-recommend', mantisRecommend);
register('marfeel', marfeel);
register('mathml', mathml);
register('mediaad', mediaad);
register('medianet', medianet);
register('mediavine', mediavine);
register('medyanet', medyanet);
register('meg', meg);
register('mgid', mgid);
register('microad', microad);
register('miximedia', miximedia);
register('mixpo', mixpo);
register('monetizer101', monetizer101);
register('mox', mox);
register('my6sense', my6sense);
register('myfinance', myfinance);
register('myoffrz', myoffrz);
register('mytarget', mytarget);
register('mywidget', mywidget);
register('nativeroll', nativeroll);
register('nativery', nativery);
register('nativo', nativo);
register('navegg', navegg);
register('nend', nend);
register('netletix', netletix);
register('noddus', noddus);
register('nokta', nokta);
register('nws', nws);
register('oblivki', oblivki);
register('onead', onead);
register('onnetwork', onnetwork);
register('openadstream', openadstream);
register('openx', openx);
register('opinary', opinary);
register('outbrain', outbrain);
register('pixels', pixels);
register('playstream', playstream);
register('plista', plista);
register('polymorphicads', polymorphicads);
register('popin', popin);
register('postquare', postquare);
register('ppstudio', ppstudio);
register('pressboard', pressboard);
register('promoteiq', promoteiq);
register('pubexchange', pubexchange);
register('pubguru', pubguru);
register('pubmatic', pubmatic);
register('pubmine', pubmine);
register('puffnetwork', puffnetwork);
register('pulse', pulse);
register('pulsepoint', pulsepoint);
register('purch', purch);
register('quoraad', quoraad);
register('rakutenunifiedads', rakutenunifiedads);
register('rbinfox', rbinfox);
register('rcmwidget', rcmwidget);
register('readmo', readmo);
register('realclick', realclick);
register('reddit', reddit);
register('recomad', recomad);
register('recreativ', recreativ);
register('relap', relap);
register('relappro', relappro);
register('remixd', remixd);
register('revcontent', revcontent);
register('revjet', revjet);
register('rfp', rfp);
register('rnetplus', rnetplus);
register('rubicon', rubicon);
register('runative', runative);
register('sas', sas);
register('seedingalliance', seedingalliance);
register('sekindo', sekindo);
register('sharethrough', sharethrough);
register('shemedia', shemedia);
register('sklik', sklik);
register('ssp', ssp);
register('slimcutmedia', slimcutmedia);
register('smartadserver', smartadserver);
register('smartclip', smartclip);
register('smi2', smi2);
register('smilewanted', smilewanted);
register('sogouad', sogouad);
register('sona', sona);
register('sortable', sortable);
register('sovrn', sovrn);
register('speakol', speakol);
register('spotx', spotx);
register('springAds', springAds);
register('strossle', strossle);
register('sulvo', sulvo);
register('sunmedia', sunmedia);
register('svknative', svknative);
register('swoop', swoop);
register('taboola', taboola);
register('tail', tail);
register('tcsemotion', tcsemotion);
register('teads', teads);
register('temedya', temedya);
register('torimochi', torimochi);
register('tracdelight', tracdelight);
register('triplelift', triplelift);
register('trugaze', trugaze);
register('twitter', twitter);
register('uas', uas);
register('ucfunnel', ucfunnel);
register('unruly', unruly);
register('uzou', uzou);
register('valuecommerce', valuecommerce);
register('vdoai', vdoai);
register('verizonmedia', verizonmedia);
register('videointelligence', videointelligence);
register('videonow', videonow);
register('viqeoplayer', viqeoplayer);
register('viralize', viralize);
register('vlyby', vlyby);
register('vmfive', vmfive);
register('webediads', webediads);
register('weborama-display', weboramaDisplay);
register('whopainfeed', whopainfeed);
register('widespace', widespace);
register('wisteria', wisteria);
register('wpmedia', wpmedia);
register('xlift', xlift);
register('yahoo', yahoo);
register('yahoofedads', yahoofedads);
register('yahoojp', yahoojp);
register('yahoonativeads', yahoonativeads);
register('yandex', yandex);
register('yektanet', yektanet);
register('yengo', yengo);
register('yieldbot', yieldbot);
register('yieldmo', yieldmo);
register('yieldone', yieldone);
register('yieldpro', yieldpro);
register('yotpo', yotpo);
register('zedo', zedo);
register('zen', zen);
register('zergnet', zergnet);
register('zucks', zucks);

window.draw3p = draw3p;
