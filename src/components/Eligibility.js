<Section id="eligibility" title="Eligibility Criteria">
  <div className="grid md:grid-cols-3 gap-8">
    <motion.div
      className="bg-gray-800 p-6 rounded"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Proven Excellence</h3>
      <p>
        Established studios with a distinguished track record of success and innovation.
      </p>
    </motion.div>
    {/* Add other criteria */}
  </div>
</Section>
