function ExperienceView(id) {
  this.experience = getExperienceByID(id)
  console.log(this.experience)
  return this.experience
}
