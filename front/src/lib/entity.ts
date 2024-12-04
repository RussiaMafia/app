export interface Root {
  info: Info
}

export interface Info {
  data: Data
  meta: Meta
}

export interface Data {
  id: string
  type: string
  links: Links
  attributes: Attributes
}

export interface Links {
  self: string
  item: string
}

export interface Attributes {
  results: Results
  stats: Stats
  status: string
  date: number
}

export interface Results {
  "Artists Against 419": ArtistsAgainst419
  Acronis: Acronis
  Abusix: Abusix
  ADMINUSLabs: Adminuslabs
  Lionic: Lionic
  "Criminal IP": CriminalIp
  "AILabs (MONITORAPP)": AilabsMonitorapp
  AlienVault: AlienVault
  "alphaMountain.ai": AlphaMountainAi
  AlphaSOC: AlphaSoc
  "Antiy-AVL": AntiyAvl
  "ArcSight Threat Intelligence": ArcSightThreatIntelligence
  AutoShun: AutoShun
  Axur: Axur
  "benkow.cc": BenkowCc
  "Bfore.Ai PreCrime": BforeAiPreCrime
  BitDefender: BitDefender
  Bkav: Bkav
  BlockList: BlockList
  Blueliv: Blueliv
  Certego: Certego
  "Chong Lua Dao": ChongLuaDao
  "CINS Army": CinsArmy
  "Snort IP sample list": SnortIpSampleList
  Cluster25: Cluster25
  "CMC Threat Intelligence": CmcThreatIntelligence
  "Xcitium Verdict Cloud": XcitiumVerdictCloud
  CRDF: Crdf
  "CSIS Security Group": CsisSecurityGroup
  Cyan: Cyan
  Cyble: Cyble
  CyRadar: CyRadar
  "desenmascara.me": DesenmascaraMe
  DNS8: Dns8
  "Dr.Web": DrWeb
  Emsisoft: Emsisoft
  Ermes: Ermes
  ESET: Eset
  ESTsecurity: Estsecurity
  EmergingThreats: EmergingThreats
  "Feodo Tracker": FeodoTracker
  Fortinet: Fortinet
  "G-Data": GData
  "Google Safebrowsing": GoogleSafebrowsing
  "GCP Abuse Intelligence": GcpAbuseIntelligence
  GreenSnow: GreenSnow
  Gridinsoft: Gridinsoft
  "Heimdal Security": HeimdalSecurity
  "Hunt.io Intelligence": HuntIoIntelligence
  IPsum: Ipsum
  "Juniper Networks": JuniperNetworks
  Kaspersky: Kaspersky
  Lumu: Lumu
  Malwared: Malwared
  MalwareURL: MalwareUrl
  MalwarePatrol: MalwarePatrol
  "malwares.com URL checker": MalwaresComUrlChecker
  Netcraft: Netcraft
  OpenPhish: OpenPhish
  "0xSI_f33d": N0xSiF33d
  "Phishing Database": PhishingDatabase
  PhishFort: PhishFort
  PhishLabs: PhishLabs
  Phishtank: Phishtank
  PREBYTES: Prebytes
  PrecisionSec: PrecisionSec
  "Quick Heal": QuickHeal
  Quttera: Quttera
  Rising: Rising
  SafeToOpen: SafeToOpen
  Sangfor: Sangfor
  "Sansec eComscan": SansecEComscan
  Scantitan: Scantitan
  "SCUMWARE.org": ScumwareOrg
  Seclookup: Seclookup
  SOCRadar: Socradar
  Sophos: Sophos
  Spam404: Spam404
  StopForumSpam: StopForumSpam
  "Sucuri SiteCheck": SucuriSiteCheck
  securolytics: Securolytics
  Threatsourcing: Threatsourcing
  ThreatHive: ThreatHive
  Trustwave: Trustwave
  Underworld: Underworld
  URLhaus: Urlhaus
  URLQuery: Urlquery
  "Viettel Threat Intelligence": ViettelThreatIntelligence
  VIPRE: Vipre
  ViriBack: ViriBack
  "VX Vault": VxVault
  Webroot: Webroot
  "Forcepoint ThreatSeeker": ForcepointThreatSeeker
  "Yandex Safebrowsing": YandexSafebrowsing
  ZeroCERT: ZeroCert
  ZeroFox: ZeroFox
}

export interface ArtistsAgainst419 {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Acronis {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Abusix {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Adminuslabs {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Lionic {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface CriminalIp {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface AilabsMonitorapp {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface AlienVault {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface AlphaMountainAi {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface AlphaSoc {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface AntiyAvl {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ArcSightThreatIntelligence {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface AutoShun {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Axur {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface BenkowCc {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface BforeAiPreCrime {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface BitDefender {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Bkav {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface BlockList {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Blueliv {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Certego {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ChongLuaDao {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface CinsArmy {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface SnortIpSampleList {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Cluster25 {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface CmcThreatIntelligence {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface XcitiumVerdictCloud {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Crdf {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface CsisSecurityGroup {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Cyan {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Cyble {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface CyRadar {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface DesenmascaraMe {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Dns8 {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface DrWeb {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Emsisoft {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Ermes {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Eset {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Estsecurity {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface EmergingThreats {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface FeodoTracker {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Fortinet {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface GData {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface GoogleSafebrowsing {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface GcpAbuseIntelligence {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface GreenSnow {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Gridinsoft {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface HeimdalSecurity {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface HuntIoIntelligence {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Ipsum {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface JuniperNetworks {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Kaspersky {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Lumu {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Malwared {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface MalwareUrl {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface MalwarePatrol {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface MalwaresComUrlChecker {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Netcraft {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface OpenPhish {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface N0xSiF33d {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface PhishingDatabase {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface PhishFort {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface PhishLabs {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Phishtank {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Prebytes {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface PrecisionSec {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface QuickHeal {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Quttera {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Rising {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface SafeToOpen {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Sangfor {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface SansecEComscan {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Scantitan {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ScumwareOrg {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Seclookup {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Socradar {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Sophos {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Spam404 {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface StopForumSpam {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface SucuriSiteCheck {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Securolytics {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Threatsourcing {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ThreatHive {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Trustwave {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Underworld {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Urlhaus {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Urlquery {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ViettelThreatIntelligence {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Vipre {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ViriBack {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface VxVault {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Webroot {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ForcepointThreatSeeker {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface YandexSafebrowsing {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ZeroCert {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface ZeroFox {
  method: string
  engine_name: string
  category: string
  result: string
}

export interface Stats {
  malicious: number
  suspicious: number
  undetected: number
  harmless: number
  timeout: number
}

export interface Meta {
  url_info: UrlInfo
  file_info: FileInfo
}

export interface UrlInfo {
  id: string
  url: string
}

export interface FileInfo {
  sha256: string
}
