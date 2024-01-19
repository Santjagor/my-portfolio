import styles from './Projects.module.css'

export default function Overlay() {
    const projects = [
        {
            name: "SuperMarket",
            image: "SuperMarket.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet porttitor. Facilisis sed odio morbi quis commodo odio aenean. Purus semper eget duis at tellus. In tellus integer feugiat scelerisque varius morbi enim. Tristique sollicitudin nibh sit amet commodo nulla. Tellus rutrum tellus pellentesque eu tincidunt tortor. Et tortor consequat id porta nibh venenatis. Nunc lobortis mattis aliquam faucibus purus in. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Tristique senectus et netus et malesuada fames ac turpis egestas. Consectetur libero id faucibus nisl tincidunt eget. At auctor urna nunc id cursus metus aliquam eleifend mi. Proin libero nunc consequat interdum. Amet venenatis urna cursus eget nunc scelerisque. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Et tortor consequat id porta nibh venenatis cras sed felis. Massa sapien faucibus et molestie ac feugiat sed lectus. Eget nunc scelerisque viverra mauris. Egestas pretium aenean pharetra magna ac placerat. Ornare aenean euismod elementum nisi quis. Nibh sed pulvinar proin gravida hendrerit. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Elit at imperdiet dui accumsan sit. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Leo in vitae turpis massa sed elementum. Mauris ultrices eros in cursus turpis massa tincidunt dui. Gravida in fermentum et sollicitudin ac orci phasellus. A arcu cursus vitae congue mauris rhoncus. Sed vulputate mi sit amet mauris. Maecenas sed enim ut sem viverra aliquet eget. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Cursus sit amet dictum sit amet justo donec enim diam. Mi bibendum neque egestas congue quisque. Nec ullamcorper sit amet risus nullam eget. Bibendum est ultricies integer quis auctor elit sed vulputate. Id neque aliquam vestibulum morbi blandit cursus. Vitae congue mauris rhoncus aenean vel elit. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Sociis natoque penatibus et magnis dis. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Mauris ultrices eros in cursus turpis massa tincidunt. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Risus at ultrices mi tempus. Ornare lectus sit amet est placerat in egestas erat imperdiet. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque. Sed sed risus pretium quam vulputate dignissim. Malesuada fames ac turpis egestas maecenas pharetra. Dignissim cras tincidunt lobortis feugiat vivamus at. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Luctus accumsan tortor posuere ac ut. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Risus at ultrices mi tempus imperdiet nulla malesuada. In iaculis nunc sed augue lacus viverra. Diam donec adipiscing tristique risus nec. Est ullamcorper eget nulla facilisi etiam. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nibh sit amet commodo nulla facilisi nullam. Quisque non tellus orci ac auctor augue mauris augue. Sed risus pretium quam vulputate dignissim suspendisse in. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Diam volutpat commodo sed egestas egestas fringilla phasellus. Vitae ultricies leo integer malesuada. Magna sit amet purus gravida quis blandit turpis cursus in. Sed arcu non odio euismod lacinia at quis. Tempor nec feugiat nisl pretium fusce id velit. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Nisl vel pretium lectus quam id leo. Nunc lobortis mattis aliquam faucibus. A scelerisque purus semper eget duis at tellus at. Nisl nisi scelerisque eu ultrices vitae. Nunc vel risus commodo viverra maecenas accumsan lacus. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Viverra vitae congue eu consequat ac felis donec et odio. Tortor aliquam nulla facilisi cras fermentum odio eu. Placerat orci nulla pellentesque dignissim enim sit. Eu turpis egestas pretium aenean.",
            technologies: [{ name: "React", image: "React.png" }],
        },
    ]
    return (
        <div className={styles.section}>
            {projects.map(prct => {
                return (
                    <div className={styles.project}>
                        <img className={styles.projectImage} src={prct.image} alt={prct.name} />
                        <div className={styles.info}>
                            <p className={styles.text}>{prct.description}</p>
                            {prct.technologies.map(tech => {
                                return (<div className={styles.technologies}>
                                    <img className={styles.technologieImage} src={tech.image} alt={tech.name} />
                                </div>)
                            })}
                        </div>
                    </div>)
            })}
        </div>
    )
}