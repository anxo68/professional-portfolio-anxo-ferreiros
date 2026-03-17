import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';

// Opcional: registrar una fuente profesional si fuese necesario. Usaremos las estándar del sistema (Helvetica) por compatibilidad.

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#0f172a',
    paddingBottom: 15,
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'column',
    width: '70%',
    paddingRight: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  role: {
    fontSize: 12,
    color: '#334155',
    marginTop: 4,
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '30%',
  },
  contactText: {
    fontSize: 9,
    color: '#475569',
    marginBottom: 2,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#334155',
    marginBottom: 20,
  },
  kpiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  kpiBox: {
    width: '23%',
    backgroundColor: '#f8fafc',
    padding: 10,
    borderRadius: 4,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  kpiValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#059669',
  },
  kpiLabel: {
    fontSize: 8,
    color: '#64748b',
    marginTop: 4,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0f172a',
    backgroundColor: '#f1f5f9',
    padding: 6,
    marginBottom: 10,
  },
  projectRow: {
    marginBottom: 10,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  projectName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  projectMeta: {
    fontSize: 9,
    color: '#059669',
    fontWeight: 'bold',
  },
  projectDesc: {
    fontSize: 9,
    color: '#475569',
    lineHeight: 1.4,
  },
  expRow: {
    marginBottom: 8,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  expDate: {
    fontSize: 9,
    color: '#64748b',
  },
  expDesc: {
    fontSize: 9,
    color: '#475569',
    marginTop: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 8,
    color: '#94a3b8',
  }
});

interface ExecutiveSummaryPDFProps {
  dict: any;
}

export const ExecutiveSummaryPDF = ({ dict }: ExecutiveSummaryPDFProps) => {
  return (
    <Document title={`Executive_Summary_Anxo_Ferreiros.pdf`} author="Anxo Ferreirós">
      <Page size="A4" style={styles.page}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{dict.Hero.pretitle}</Text>
            <Text style={styles.role}>{dict.Hero.title}</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.contactText}>anxo.x.ferreiros@gmail.com</Text>
            <Link src="https://linkedin.com/in/anxoferreiros"><Text style={[styles.contactText, styles.link]}>linkedin.com/in/anxoferreiros</Text></Link>
          </View>
        </View>

        {/* SUMMARY */}
        <Text style={styles.summary}>
          {dict.Hero.subtitle}
        </Text>

        {/* KPIs */}
        <View style={styles.kpiContainer}>
          <View style={styles.kpiBox}>
            <Text style={styles.kpiValue}>{dict.Impact.exp}</Text>
            <Text style={styles.kpiLabel}>{dict.Impact.expLabel}</Text>
          </View>
          <View style={styles.kpiBox}>
            <Text style={styles.kpiValue}>{dict.Impact.power}</Text>
            <Text style={styles.kpiLabel}>{dict.Impact.powerLabel}</Text>
          </View>
          <View style={styles.kpiBox}>
            <Text style={styles.kpiValue}>{dict.Impact.budget}</Text>
            <Text style={styles.kpiLabel}>{dict.Impact.budgetLabel}</Text>
          </View>
          <View style={styles.kpiBox}>
            <Text style={styles.kpiValue}>{dict.Impact.team}</Text>
            <Text style={styles.kpiLabel}>{dict.Impact.teamLabel}</Text>
          </View>
        </View>

        {/* TOP PROJECTS */}
        <Text style={styles.sectionTitle}>{dict.Portfolio.title}</Text>
        
        <View style={styles.projectRow}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>1. {dict.Portfolio.project1.name} ({dict.Portfolio.project1.client})</Text>
            <Text style={styles.projectMeta}>{dict.Portfolio.project1.magnitude} | {dict.Portfolio.project1.budget}</Text>
          </View>
          <Text style={styles.projectDesc}>{dict.Portfolio.project1.description}</Text>
        </View>
        
        <View style={styles.projectRow}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>2. {dict.Portfolio.project2.name} ({dict.Portfolio.project2.client})</Text>
            <Text style={styles.projectMeta}>{dict.Portfolio.project2.magnitude} | {dict.Portfolio.project2.budget}</Text>
          </View>
          <Text style={styles.projectDesc}>{dict.Portfolio.project2.description}</Text>
        </View>

        <View style={styles.projectRow}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>3. {dict.Portfolio.project3.name} ({dict.Portfolio.project3.client})</Text>
            <Text style={styles.projectMeta}>{dict.Portfolio.project3.magnitude} | {dict.Portfolio.project3.budget}</Text>
          </View>
          <Text style={styles.projectDesc}>{dict.Portfolio.project3.description}</Text>
        </View>
        
        <View style={styles.projectRow}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectName}>4. {dict.Portfolio.project6.name} ({dict.Portfolio.project6.client})</Text>
            <Text style={styles.projectMeta}>{dict.Portfolio.project6.magnitude} | {dict.Portfolio.project6.budget}</Text>
          </View>
          <Text style={styles.projectDesc}>{dict.Portfolio.project6.description}</Text>
        </View>

        {/* EXPERIENCE */}
        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>{dict.Experience.title}</Text>
        
        <View style={styles.expRow}>
          <View style={styles.expHeader}>
            <Text style={styles.expTitle}>{dict.Experience.exp1.role}</Text>
            <Text style={styles.expDate}>{dict.Experience.exp1.date}</Text>
          </View>
          <Text style={styles.expDesc}>{dict.Experience.exp1.description}</Text>
        </View>
        
        <View style={styles.expRow}>
          <View style={styles.expHeader}>
            <Text style={styles.expTitle}>{dict.Experience.exp2.role}</Text>
            <Text style={styles.expDate}>{dict.Experience.exp2.date}</Text>
          </View>
          <Text style={styles.expDesc}>{dict.Experience.exp2.description}</Text>
        </View>
        
        <View style={styles.expRow}>
          <View style={styles.expHeader}>
            <Text style={styles.expTitle}>{dict.Experience.exp3.role}</Text>
            <Text style={styles.expDate}>{dict.Experience.exp3.date}</Text>
          </View>
          <Text style={styles.expDesc}>{dict.Experience.exp3.description}</Text>
        </View>

        {/* EDUCATION & ACADEMIC KNOWLEDGE */}
        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>{dict.Education.title}</Text>

        <View style={styles.expRow}>
          <View style={styles.expHeader}>
            <Text style={styles.expTitle}>{dict.Education.eng.title}</Text>
          </View>
          <Text style={styles.expDesc}>{dict.Education.eng.desc}</Text>
        </View>

        <View style={styles.expRow}>
          <View style={styles.expHeader}>
            <Text style={styles.expTitle}>{dict.Education.management.title}</Text>
          </View>
          <Text style={styles.expDesc}>{dict.Education.management.desc}</Text>
        </View>

        <View style={styles.expRow}>
          <View style={styles.expHeader}>
            <Text style={styles.expTitle}>{dict.Education.energy.title}</Text>
          </View>
          <Text style={styles.expDesc}>{dict.Education.energy.desc}</Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Anxo Xosé Ferreirós Otero | Executive Summary | Generated from Portfolio Website</Text>
        </View>

      </Page>
    </Document>
  );
};

export default ExecutiveSummaryPDF;
