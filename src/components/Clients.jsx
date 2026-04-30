import React from 'react';
import './Clients.css';

const clientLogos = [
  {"href":"https://www.wasl.ae/","src":"https://static.wixstatic.com/media/65d4b2_858048a0dd374d0a86c4c03e97c4e55a~mv2.jpg/v1/crop/x_60,y_16,w_829,h_673/fill/w_104,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WASL.jpg"},
  {"href":"https://azizidevelopments.com/","src":"https://static.wixstatic.com/media/65d4b2_db0e9c63bcf443af93512f2b0b260da7~mv2.jpg/v1/crop/x_0,y_158,w_900,h_424/fill/w_166,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AZIZI%202.jpg"},
  {"href":"https://www.damacproperties.com/en","src":"https://static.wixstatic.com/media/65d4b2_d6b3241af2194a4cb9b9b0261d508e67~mv2.jpg/v1/crop/x_0,y_121,w_620,h_128/fill/w_181,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/17040.jpg"},
  {"href":"https://www.meraas.com/","src":"https://static.wixstatic.com/media/65d4b2_dab9fa20681540d38a6068c9273c3a47~mv2.jpg/v1/crop/x_0,y_24,w_400,h_212/fill/w_200,h_100,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Meraas.jpg"},
  {"href":"https://www.jumeirahgolfestates.com/","src":"https://static.wixstatic.com/media/65d4b2_9c8db6335b324252bc5f2307672bcd2d~mv2.png/v1/fill/w_129,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/jumeira%20gulf%20states.png"},
  {"href":"http://www.alghurair.com/","src":"https://static.wixstatic.com/media/65d4b2_272273b35e174cf485b67bd1ebb7455b~mv2.png/v1/crop/x_0,y_56,w_200,h_83/fill/w_179,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ghurair.png"},
  {"href":"https://ellingtongroup.com/en/","src":"https://static.wixstatic.com/media/65d4b2_01d23b11aef84612a062a60ffb5f7dd4~mv2.png/v1/fill/w_160,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-new.png"},
  {"href":"https://www.epg.gov.ae/","src":"https://static.wixstatic.com/media/65d4b2_47ddfacd1aba47cb9a8707d502bc6490~mv2.jpg/v1/crop/x_0,y_789,w_2374,h_673/fill/w_211,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Artboard-1-copy-17%406x-100.jpg"},
  {"href":"https://www.aldanube.com/","src":"https://static.wixstatic.com/media/65d4b2_4434a7b582bd48728e2efed33ef17c13~mv2.png/v1/crop/x_5,y_0,w_420,h_73/fill/w_264,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DANOUB.png"},
  {"href":"http://www.majidalfuttaim.com/","src":"https://static.wixstatic.com/media/65d4b2_4d92b7c933a24057a01927ad44d38377~mv2.png/v1/crop/x_2,y_2,w_408,h_80/fill/w_209,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MAJID%20AL%20FUTTAIM.png"},
  {"href":"http://mag.ae/","src":"https://static.wixstatic.com/media/65d4b2_33a137e3f16c4b2f9a962a23827d3512~mv2.jpg/v1/fill/w_204,h_100,al_c,lg_1,q_80,enc_avif,quality_auto/r14.jpg"},
  {"href":"https://www.sdtps.gov.ae/webcenter/portal/dtps/Home","src":"https://static.wixstatic.com/media/65d4b2_558aeb14ff3145e78114ddf75cfa673f~mv2.jpeg/v1/crop/x_182,y_75,w_878,h_1068/fill/w_106,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202020-09-17%20at%208_56_14%20AM_.jpeg"},
  {"href":"https://ld.ae/","src":"https://static.wixstatic.com/media/21eb4e_feb976b353a9452392f8d748e943dc66~mv2.jpeg/v1/fill/w_115,h_110,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/images.jpeg"},
  {"href":"https://ahs-properties.com/","src":"https://static.wixstatic.com/media/21eb4e_bb54740f512d42c195c1b6658dcd3f67~mv2.png/v1/crop/x_31,y_50,w_237,h_65/fill/w_237,h_65,al_c,q_85,enc_avif,quality_auto/images.png"},
  {"href":"https://north25.ae/","src":"https://static.wixstatic.com/media/65d4b2_85172be6a4184ef6ad759c178e2df71e~mv2.jpg/v1/fill/w_189,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/North25.jpg"},
  {"href":"https://www.rta.ae/wps/portal/rta/ae/home?lang=ar","src":"https://static.wixstatic.com/media/65d4b2_622f94a1b26d451180b19c8f37178153~mv2.png/v1/fill/w_179,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RTA-Logo.png"},
  {"href":"http://www.adcigroup.com/","src":"https://static.wixstatic.com/media/65d4b2_968e0fc1bac649809bdfcf918dbd23cd~mv2.png/v1/crop/x_213,y_68,w_172,h_181/fill/w_140,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AL-DHAHERI-CAPITAL-INVESTMENT-LLC-United.png"},
  {"href":"https://magusta.com/","src":"https://static.wixstatic.com/media/65d4b2_1a2c7324d57745c59af24540c9e0dc94~mv2.jpg/v1/fill/w_99,h_100,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/MAGUSTA%20Development%20One%20Limited.jpg"},
  {"href":"https://palmaholding.com/","src":"https://static.wixstatic.com/media/65d4b2_ecd8a1bc199447c7a004c9d0528b080c~mv2.jpeg/v1/crop/x_107,y_0,w_660,h_248/fill/w_197,h_70,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202020-09-17%20at%208_56_16%20AM_.jpeg"},
  {"href":"http://www.diadevelopments.ae/","src":"https://static.wixstatic.com/media/21eb4e_cbf1496a9a6141af8df64f0a628a728b~mv2.jpeg/v1/fill/w_99,h_100,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DIA.jpeg"},
  {"href":"https://www.lineproperty.com/","src":"https://static.wixstatic.com/media/65d4b2_3e5616b708d24493bfaf604ad905d953~mv2.png/v1/fill/w_183,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/line%20inves.png"},
  {"href":"https://unboxinc.com/","src":"https://static.wixstatic.com/media/21eb4e_9e149043ed3e47ac96672b612fdcba1f~mv2.png/v1/crop/x_57,y_70,w_157,h_53/fill/w_157,h_53,al_c,q_85,enc_avif,quality_auto/images%20(1).png"},
  {"href":"https://www.dubaiairports.ae/","src":"https://static.wixstatic.com/media/65d4b2_ad93a8f8fe624ab982d2c23d7b3cd81d~mv2.jpg/v1/fill/w_126,h_105,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dubai_Airports_2007.jpg"},
  {"href":"https://www.igo.ae/","src":"https://static.wixstatic.com/media/65d4b2_b0397ee7e6714c98a9c2cb137f5b8760~mv2.jpg/v1/fill/w_110,h_110,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IGO_edited.jpg"},
  {"href":"https://darglobal.co.uk/","src":"https://static.wixstatic.com/media/21eb4e_d80fa3cb56cd40dca62b420ab1d161ff~mv2.jpg/v1/crop/x_6,y_0,w_165,h_87/fill/w_140,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DAR_edited.jpg"},
  {"href":"https://famproperties.com/","src":"https://static.wixstatic.com/media/21eb4e_a4ae2e246ba04c78974a132eeef53144~mv2.jpg/v1/fill/w_93,h_89,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FAM.jpg"},
  {"href":"https://dubuild.com/","src":"https://static.wixstatic.com/media/65d4b2_078e023364b840c182719f1ba752d5ef~mv2.png/v1/crop/x_0,y_5,w_181,h_193/fill/w_93,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DUBUILD.png"},
  {"href":"https://alqandeelllc.net/","src":"https://static.wixstatic.com/media/65d4b2_2e0c74c8660147b18cee99da65f9482f~mv2.png/v1/fill/w_150,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aqc-logo.png"},
  {"href":"http://www.raqcontracting.com/","src":"https://static.wixstatic.com/media/65d4b2_4b852301400f4b8895b30ccd3855c334~mv2.png/v1/fill/w_230,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/raq-logo.png"},
  {"href":"http://www.dutco.com/home.aspx","src":"https://static.wixstatic.com/media/65d4b2_ecfe8c480bc242549eab5112f6746923~mv2.jpg/v1/crop/x_28,y_31,w_494,h_236/fill/w_192,h_89,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DUTCO.jpg"},
  {"href":"http://alhamadint.com/","src":"https://static.wixstatic.com/media/65d4b2_dc4a8b9f3e87471388de6ed6b40f2b0a~mv2.png/v1/fill/w_228,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png"},
  {"href":"https://cc8edb.com/","src":"https://static.wixstatic.com/media/65d4b2_0955a3d2be4f4b9383726299b2173078~mv2.png/v1/fill/w_297,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CHINA.png"},
  {"href":"https://www.parkwayic.com/","src":"https://static.wixstatic.com/media/65d4b2_72600568f00348df8561b972ed8859f5~mv2.png/v1/fill/w_164,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/parkway-international-contracting.png"},
  {"href":"https://unec.co/","src":"https://static.wixstatic.com/media/65d4b2_c7beaf7e80364bedb7357274905566e2~mv2.jpg/v1/crop/x_0,y_56,w_480,h_171/fill/w_231,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/480x270-00001.jpg"},
  {"href":"http://www.rccuae.com/","src":"https://static.wixstatic.com/media/65d4b2_25e1f133f9504724b97fde2cc372f963~mv2.png/v1/fill/w_189,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/REEM.png"},
  {"href":"http://www.akigroup.com/akigroup/","src":"https://static.wixstatic.com/media/65d4b2_18c89a14e36d4b8181da047513f0ac43~mv2.jpg/v1/fill/w_220,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/AKI.jpg"},
  {"href":"http://www.zeinsteel.com/","src":"https://static.wixstatic.com/media/65d4b2_63f2a31d41ab490d9e6e345a83e8c1e3~mv2.png/v1/fill/w_223,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/zain%20steel.png"},
  {"href":"http://www.fasco-llc.com/","src":"https://static.wixstatic.com/media/65d4b2_0233182be76e40a3875d4921d15b11da~mv2.png/v1/crop/x_0,y_0,w_200,h_197/fill/w_114,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/22.png"},
  {"href":"https://ramada.ae/","src":"https://static.wixstatic.com/media/65d4b2_be5677970794495a92fffcf7c4eb94be~mv2.png/v1/fill/w_210,h_57,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ramada%20Contracting.png"},
  {"href":"https://www.gardinia.ae/","src":"https://static.wixstatic.com/media/65d4b2_83fac70633414f43ac626fc3e4c51d34~mv2.jpg/v1/crop/x_0,y_42,w_253,h_89/fill/w_196,h_69,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gardinia%20Contracting.jpg"},
  {"href":"https://naresco.ae/","src":"https://static.wixstatic.com/media/21eb4e_f3973d9928394cb78910b6ed4d11f103~mv2.png/v1/fill/w_164,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NARESCO.png"},
  {"href":"https://www.cccme.cn/","src":"https://static.wixstatic.com/media/21eb4e_d4bf24dc8e7242369224a574f1707b15~mv2.jpeg/v1/fill/w_104,h_105,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CC7.jpeg"},
  {"href":"http://en.sxaz.com/","src":"https://static.wixstatic.com/media/21eb4e_84ebcfb4a5954a5aac9137af26f616a1~mv2.png/v1/fill/w_297,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MARBELLA.png"},
  {"href":"https://tec-uae.com/","src":"https://static.wixstatic.com/media/21eb4e_00d8a4bcfd1946eaa6c14a8c4ed4c69f~mv2.jpeg/v1/fill/w_125,h_125,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/download.jpeg"},
  {"href":"https://comresdubai.net/","src":"https://static.wixstatic.com/media/21eb4e_e2df3567dfd44033aa877d9d37f85336~mv2.png/v1/fill/w_210,h_41,al_c,lg_1,q_85,enc_avif,quality_auto/logo-small.png"},
  {"href":"https://bin-odeh.com/","src":"https://static.wixstatic.com/media/21eb4e_f0767e1db61d4dc0a461836e582e5bd0~mv2.png/v1/fill/w_231,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/binodeh-logo.png"},
  {"href":"https://dorra-contracting.com/","src":"https://static.wixstatic.com/media/21eb4e_96d09859917a471b98c16bba5b066826~mv2.jpeg/v1/fill/w_97,h_97,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DORRA%20-%20CRC.jpeg"},
  {"href":"https://altamayozuae.com/","src":"https://static.wixstatic.com/media/21eb4e_bad587d624c3400eb0627a8a7d82adba~mv2.png/v1/fill/w_164,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Al%20Tamayoz%20Contracting%20Co_edited.png"},
  {"href":"https://compass-pc.com/","src":"https://static.wixstatic.com/media/21eb4e_7dda7d68aeb84a3b90fa3b01b89e23f1~mv2.png/v1/crop/x_0,y_63,w_225,h_96/fill/w_225,h_96,al_c,q_85,enc_avif,quality_auto/compass.png"},
  {"href":"https://www.parsons.com/","src":"https://static.wixstatic.com/media/65d4b2_16414ee687d8472c9b3bf7ed629fd1d7~mv2.png/v1/fill/w_190,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/22022016011356380_blobpng.png"},
  {"href":"https://www.ianbanham.me/","src":"https://static.wixstatic.com/media/65d4b2_142e4cef86e04a75a7f84b80370c5dc4~mv2.jpg/v1/fill/w_169,h_97,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IBA.jpg"},
  {"href":"http://www.khatibalami.com/","src":"https://static.wixstatic.com/media/65d4b2_a9779344aeb14767baebecc6ec3b8817~mv2.jpg/v1/crop/x_0,y_100,w_640,h_238/fill/w_239,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Khatib%20And%20Alami.jpg"},
  {"href":"http://federalengineeringconsultants.com/","src":"https://static.wixstatic.com/media/65d4b2_b3baffbaaa1b4bfd8a5746e72529039a~mv2.jpg/v1/crop/x_24,y_77,w_787,h_187/fill/w_210,h_48,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fedral.jpg"},
  {"href":"https://www.cvtec.ae/","src":"https://static.wixstatic.com/media/65d4b2_d946fa6a00c343bdb1f9211b479cfd23~mv2.jpg/v1/crop/x_100,y_123,w_970,h_407/fill/w_204,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cvtec.jpg"},
  {"href":"http://www.archcorp.biz/","src":"https://static.wixstatic.com/media/65d4b2_1dea552ec6154e7ebfcf04361aee2abe~mv2.png/v1/crop/x_3,y_0,w_603,h_111/fill/w_199,h_37,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/arch-corphm.png"},
  {"href":"http://www.lacasa.ae/","src":"https://static.wixstatic.com/media/65d4b2_8d6b5592e3cb40c4b9d0c3b13ae84db1~mv2.jpg/v1/crop/x_0,y_25,w_1016,h_406/fill/w_197,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/lacasa11-1.jpg"},
  {"href":"http://bluehausgroup.com/","src":"https://static.wixstatic.com/media/65d4b2_052459bf748e4be2a194f55d765fb929~mv2.jpg/v1/crop/x_183,y_138,w_429,h_165/fill/w_246,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/BLUEHAUS%20Engineering.jpg"},
  {"href":"https://www.edmacconsulting.com/","src":"https://static.wixstatic.com/media/65d4b2_82b98576e8174a2bb8833b0f9d2e6fa1~mv2.jpg/v1/fill/w_177,h_60,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/509893EDMACengineeringandconsultant.jpg"},
  {"href":"http://alabdouligroup.com/","src":"https://static.wixstatic.com/media/65d4b2_beccd181356e40a08480fc0231bf7190~mv2.png/v1/fill/w_118,h_111,al_c,lg_1,q_85,enc_avif,quality_auto/Al%20Abdouli%20Consultancy.png"},
  {"href":"http://www.thedadesign.com/","src":"https://static.wixstatic.com/media/65d4b2_4b5a5bde860d455baab559353829f9f9~mv2.png/v1/crop/x_18,y_50,w_165,h_150/fill/w_124,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mazaya.png"},
  {"href":"http://yaghmourarchitects.com/","src":"https://static.wixstatic.com/media/65d4b2_20800a250d8a420eac1dffa5de8779ec~mv2.png/v1/fill/w_264,h_60,al_c,lg_1,q_85,enc_avif,quality_auto/Yaghmour-Logo-SMALLER-e1476703401150.png"},
  {"href":"https://www.studioi.ae/","src":"https://static.wixstatic.com/media/65d4b2_52baecd70c4344c998204e5d92e0dc70~mv2.jpg/v1/fill/w_112,h_100,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0.jpg"},
  {"href":"https://mimararchitecture.com/","src":"https://static.wixstatic.com/media/21eb4e_d54551628d2641449ea8b67dce7c57d2~mv2.png/v1/fill/w_102,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mimar.png"},
  {"href":"https://www.bh-ns.com/","src":"https://static.wixstatic.com/media/21eb4e_7ced6c73963640f3a452f7b3116e9aae~mv2.png/v1/fill/w_246,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BHNS.png"},
  {"href":"https://ecinternational.com/","src":"https://static.wixstatic.com/media/21eb4e_ebf622a65a234128ba4910369c009f2c~mv2.jpg/v1/fill/w_156,h_122,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/engineers-consortium-company-for-engineering-construction-97601.jpg"},
  {"href":"https://erga.com/","src":"https://static.wixstatic.com/media/21eb4e_66eb42988c1747acad11e05bbe956a56~mv2.png/v1/crop/x_32,y_102,w_236,h_94/fill/w_177,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/21eb4e_66eb42988c1747acad11e05bbe956a56~mv2.png"},
  {"href":"https://artecint.com/","src":"https://static.wixstatic.com/media/21eb4e_1cff7892b8fa4f0fb5f97e6037b922a1~mv2.jpeg/v1/crop/x_0,y_53,w_200,h_78/fill/w_200,h_78,al_c,q_80,enc_avif,quality_auto/1665413393243.jpeg"},
  {"href":"https://www.tjeg.com/","src":"https://static.wixstatic.com/media/21eb4e_eea5c42f168243958181655eacb4bc97~mv2.png/v1/crop/x_0,y_88,w_245,h_58/fill/w_245,h_58,al_c,q_85,enc_avif,quality_auto/download.png"},
  {"href":"https://www.teneightinteriors.com/","src":"https://static.wixstatic.com/media/21eb4e_19b7507264cc49dd8502baa7c3b8415c~mv2.png/v1/fill/w_124,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/images%20(2).png"},
  {"href":"https://www.artoak.com/","src":"https://static.wixstatic.com/media/21eb4e_2a7003c07f774985a1ba9f4f3aedb7cf~mv2.jpeg/v1/fill/w_118,h_111,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Arif%20%26%20Bintoak%20Consulting%20Architects%20%26%20Engineers.jpeg"},
  {"href":"https://bds-me.ae/","src":"https://static.wixstatic.com/media/65d4b2_79736a8f181447c6abae3e9ae08ebf9a~mv2.png/v1/fill/w_264,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BDS_Logo_New.png"},
  {"href":"https://www.caec.ae/","src":"https://static.wixstatic.com/media/65d4b2_2be4d7c87a6342959d83e497df89406f~mv2.png/v1/fill/w_246,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/creative.png"},
  {"href":"https://consistentconsultants.com/","src":"https://static.wixstatic.com/media/21eb4e_c6d8fecc708145089b74c1dd68b581d4~mv2.png/v1/fill/w_184,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Consistent%20Engineering%20Consultants.png"},
  {"href":"https://greencec.ae/","src":"https://static.wixstatic.com/media/21eb4e_c94554b4f2b84418ab065cb991ee9f87~mv2.png/v1/fill/w_177,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GREEN%20CONCEPT%20ENGINEERING%20CONSULTANT%20(GCE).png"}
];

const half = Math.ceil(clientLogos.length / 2);
const row1 = clientLogos.slice(0, half);
const row2 = clientLogos.slice(half);

const Clients = () => {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <h2 className="section-title">Our <span>Clients</span></h2>
      </div>
      
      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-content">
            {row1.concat(row1).map((client, idx) => (
              <a key={idx} href={client.href} target="_blank" rel="noopener noreferrer" className="marquee-item glass">
                <img src={client.src} alt="Client Logo" className="marquee-img" />
              </a>
            ))}
          </div>
        </div>

        <div className="marquee marquee-reverse">
          <div className="marquee-content">
            {row2.concat(row2).map((client, idx) => (
              <a key={idx} href={client.href} target="_blank" rel="noopener noreferrer" className="marquee-item glass">
                <img src={client.src} alt="Client Logo" className="marquee-img" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
